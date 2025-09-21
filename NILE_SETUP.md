# Nile Database Setup for LoopSpace

## 1. Environment Variables

Create a `.env` file in your project root with these variables:

```env
# Nile Database Configuration (Vite environment variables must start with VITE_)
VITE_NILE_API_URL=https://eu-central-1.api.thenile.dev/v2/databases/01996d14-21ce-7d4b-b66d-d3bb4568be4f

# Optional: For reference (not used in frontend)
POSTGRES_URL=postgres://01996d14-2562-7355-b7f7-82870feb88db:57cae0e5-7334-4396-93f3-ed56fc65dd2c@eu-central-1.db.thenile.dev/loopspace_enquiries
NILEDB_URL=postgres://01996d14-2562-7355-b7f7-82870feb88db:57cae0e5-7334-4396-93f3-ed56fc65dd2c@eu-central-1.db.thenile.dev/loopspace_enquiries
NILEDB_USER=01996d14-2562-7355-b7f7-82870feb88db
NILEDB_PASSWORD=57cae0e5-7334-4396-93f3-ed56fc65dd2c
NILEDB_API_URL=https://eu-central-1.api.thenile.dev/v2/databases/01996d14-21ce-7d4b-b66d-d3bb4568be4f
NILEDB_POSTGRES_URL=postgres://eu-central-1.db.thenile.dev/loopspace_enquiries
```

## 2. Database Table Creation

Run this SQL query in your Nile database to create the enquiries table:

```sql
CREATE TABLE enquiries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_enquiries_email ON enquiries(email);
CREATE INDEX idx_enquiries_created_at ON enquiries(created_at);
```

## 3. Nile SDK Integration

The Nile SDK is already integrated in `src/context/nile.js` with the following features:

- **submitEnquiry()** - Submit new enquiry to database
- **getAllEnquiries()** - Get all enquiries (admin function)
- **getEnquiryById()** - Get specific enquiry by ID
- **deleteEnquiry()** - Delete enquiry by ID

## 4. Usage in Components

The Enquiry component is already configured to use the Nile operations:

```javascript
import { nileOperations } from '../context/nile';

// Submit enquiry
const result = await nileOperations.submitEnquiry({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello, I need help with...'
});
```

## 5. Error Handling

The Nile operations include comprehensive error handling:
- Input validation
- Email format validation
- Database connection errors
- Query execution errors

## 6. Testing

1. Start your development server: `npm run dev`
2. Navigate to the enquiry form
3. Fill out and submit the form
4. Check your Nile database to see the submitted enquiry

## 7. Deployment

When deploying to Vercel:
1. Set `VERCEL=1` in your environment variables
2. Add all the database credentials to Vercel's environment variables
3. Deploy your application

The Nile SDK will automatically use the environment variables for database connection.
