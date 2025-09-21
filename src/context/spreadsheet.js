// Frontend-only enquiry management system
// Supports Google Sheets integration with localStorage fallback

// Google Sheets submission function
const submitToGoogleSheets = async (enquiryData) => {
  try {
    // Replace this URL with your Google Apps Script web app URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwZEG_DI6iYzZFOtVvvbCzY0WoCPtP01PuiOpINs1s6s4oC6IdMhn3R-Sc3wEAT8tNg/exec';
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Important for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...enquiryData,
        timestamp: new Date().toISOString()
      })
    });
    
    console.log('📊 Submitted to Google Sheets');
    return {
      success: true,
      data: enquiryData,
      message: 'Enquiry submitted to spreadsheet successfully!'
    };
  } catch (error) {
    console.error('Google Sheets submission failed:', error);
    throw new Error('Failed to submit to spreadsheet');
  }
};

// Simulation function - handles enquiry submission without backend
const simulateSubmission = async (enquiryData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Log the enquiry data to console (you can check browser console to see submissions)
  console.log('📧 New Enquiry Received:', {
    id: Date.now(),
    timestamp: new Date().toLocaleString(),
    ...enquiryData
  });
  
  // In a real scenario, you could:
  // 1. Send email notification to your team
  // 2. Store in localStorage for temporary persistence
  // 3. Send to a webhook service
  // 4. Use a service like Formspree, Netlify Forms, or EmailJS
  
  // Store in localStorage for demo purposes
  try {
    const existingEnquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
    const newEnquiry = {
      id: Date.now(),
      ...enquiryData,
      created_at: new Date().toISOString()
    };
    existingEnquiries.unshift(newEnquiry);
    localStorage.setItem('enquiries', JSON.stringify(existingEnquiries));
    console.log('💾 Enquiry saved to localStorage');
  } catch (error) {
    console.warn('Could not save to localStorage:', error);
  }
  
  return {
    success: true,
    data: {
      id: Date.now(),
      ...enquiryData,
      created_at: new Date().toISOString()
    },
    message: 'Enquiry submitted successfully! We\'ll get back to you soon.'
  };
};

// Database operations
export const nileOperations = {
  // Submit enquiry to database (Google Sheets + localStorage)
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
      
      // Try Google Sheets first, then fallback to localStorage
      try {
        console.log('📊 Attempting Google Sheets submission...');
        const sheetsResult = await submitToGoogleSheets(enquiryData);
        
        // Also save to localStorage as backup
        await simulateSubmission(enquiryData);
        
        return sheetsResult;
      } catch (sheetsError) {
        console.warn('Google Sheets failed, using localStorage fallback:', sheetsError.message);
        return await simulateSubmission(enquiryData);
      }
      
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      throw new Error(error.message || 'Failed to submit enquiry. Please try again.');
    }
  },

  // Get all enquiries (from localStorage)
  async getAllEnquiries() {
    try {
      const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
      console.log('📊 Retrieved enquiries from localStorage:', enquiries);
      console.log('📊 Total enquiries found:', enquiries.length);
      
      return {
        success: true,
        data: enquiries
      };
      
    } catch (error) {
      console.error('Error fetching enquiries:', error);
      throw new Error('Failed to fetch enquiries');
    }
  },

  // Get enquiry by ID (from localStorage)
  async getEnquiryById(id) {
    try {
      const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
      const enquiry = enquiries.find(e => e.id === parseInt(id));
      
      if (!enquiry) {
        throw new Error('Enquiry not found');
      }
      
      return {
        success: true,
        data: enquiry
      };
      
    } catch (error) {
      console.error('Error fetching enquiry:', error);
      throw new Error('Failed to fetch enquiry');
    }
  },

  // Delete enquiry by ID (from localStorage)
  async deleteEnquiry(id) {
    try {
      const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
      const filteredEnquiries = enquiries.filter(e => e.id !== parseInt(id));
      
      if (enquiries.length === filteredEnquiries.length) {
        throw new Error('Enquiry not found');
      }
      
      localStorage.setItem('enquiries', JSON.stringify(filteredEnquiries));
      
      return {
        success: true,
        message: 'Enquiry deleted successfully'
      };
      
    } catch (error) {
      console.error('Error deleting enquiry:', error);
      throw new Error('Failed to delete enquiry');
    }
  }
};

export default nileOperations;
