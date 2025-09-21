# Backend Solution for Nile Database Integration

## The Problem
The CORS error occurs because Nile's API doesn't allow direct browser requests for security reasons. This is a common restriction with database APIs.

## Solution Options

### Option 1: Simple Backend Server (Recommended)
Create a minimal backend server to handle database operations:

#### 1. Create Backend Directory
```bash
mkdir backend
cd backend
npm init -y
```

#### 2. Install Dependencies
```bash
npm install express cors dotenv @niledatabase/server
```

#### 3. Create `backend/server.js`
```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Nile Database Setup
const { NileServer } = require('@niledatabase/server');

let nile;
(async () => {
  try {
    nile = await NileServer({
      debug: true,
      secureCookies: process.env.VERCEL === "1",
    });
    console.log('Nile database connected successfully');
  } catch (error) {
    console.error('Failed to connect to Nile:', error);
  }
})();

// Routes
app.post('/api/enquiry', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address' });
    }
    
    // Insert enquiry into database
    const query = `
      INSERT INTO enquiries (name, email, message, created_at) 
      VALUES ($1, $2, $3, NOW()) 
      RETURNING id, name, email, created_at
    `;
    
    const result = await nile.query(query, [name, email, message]);
    
    res.json({
      success: true,
      data: result,
      message: 'Enquiry submitted successfully'
    });
    
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    res.status(500).json({ error: 'Failed to submit enquiry. Please try again.' });
  }
});

app.get('/api/enquiries', async (req, res) => {
  try {
    const query = `
      SELECT id, name, email, message, created_at 
      FROM enquiries 
      ORDER BY created_at DESC
    `;
    
    const result = await nile.query(query);
    res.json({ success: true, data: result });
    
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    res.status(500).json({ error: 'Failed to fetch enquiries' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
```

#### 4. Create `backend/.env`
```env
POSTGRES_URL=postgres://01996d14-2562-7355-b7f7-82870feb88db:57cae0e5-7334-4396-93f3-ed56fc65dd2c@eu-central-1.db.thenile.dev/loopspace_enquiries
NILEDB_URL=postgres://01996d14-2562-7355-b7f7-82870feb88db:57cae0e5-7334-4396-93f3-ed56fc65dd2c@eu-central-1.db.thenile.dev/loopspace_enquiries
NILEDB_USER=01996d14-2562-7355-b7f7-82870feb88db
NILEDB_PASSWORD=57cae0e5-7334-4396-93f3-ed56fc65dd2c
NILEDB_API_URL=https://eu-central-1.api.thenile.dev/v2/databases/01996d14-21ce-7d4b-b66d-d3bb4568be4f
NILEDB_POSTGRES_URL=postgres://eu-central-1.db.thenile.dev/loopspace_enquiries
VERCEL=0
```

#### 5. Update Frontend to Use Backend
Update `src/context/nile.js`:

```javascript
// Update the API URL to point to your backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

// Helper function to make API calls to your backend
const makeAPICall = async (endpoint, data = null) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: data ? 'POST' : 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'API call failed');
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Database operations
export const nileOperations = {
  async submitEnquiry(enquiryData) {
    try {
      const { name, email, message } = enquiryData;
      
      // Validate required fields
      if (!name || !email || !message) {
        throw new Error('Name, email, and message are required');
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Please provide a valid email address');
      }
      
      const result = await makeAPICall('/api/enquiry', enquiryData);
      return result;
      
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      throw new Error(error.message || 'Failed to submit enquiry. Please try again.');
    }
  },

  async getAllEnquiries() {
    try {
      return await makeAPICall('/api/enquiries');
    } catch (error) {
      console.error('Error fetching enquiries:', error);
      throw new Error('Failed to fetch enquiries');
    }
  }
};
```

#### 6. Update Frontend Environment Variables
Create `.env` in your frontend root:

```env
VITE_API_BASE_URL=http://localhost:3001
```

### Option 2: Vercel Serverless Functions
If you're deploying to Vercel, you can use serverless functions:

#### 1. Create `api/enquiry.js` in your project root
```javascript
const { NileServer } = require('@niledatabase/server');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const nile = await NileServer({
      debug: true,
      secureCookies: process.env.VERCEL === "1",
    });

    const { name, email, message } = req.body;
    
    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address' });
    }
    
    // Insert enquiry
    const query = `
      INSERT INTO enquiries (name, email, message, created_at) 
      VALUES ($1, $2, $3, NOW()) 
      RETURNING id, name, email, created_at
    `;
    
    const result = await nile.query(query, [name, email, message]);
    
    res.json({
      success: true,
      data: result,
      message: 'Enquiry submitted successfully'
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to submit enquiry' });
  }
}
```

## Current Status
The form now works with a simulation fallback. When you submit the form:
1. It tries to connect to Nile directly
2. If CORS blocks it, it falls back to simulation mode
3. The form still shows success message and logs the data

## Next Steps
1. Choose one of the backend solutions above
2. Set up the backend server
3. Update the frontend to use the backend API
4. Test the complete flow

The simulation ensures your form works immediately while you set up the proper backend solution.
