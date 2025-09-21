// Frontend-only enquiry management system
// No backend required - uses localStorage for persistence

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
  // Submit enquiry to database (simulation mode only)
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
      
      // Use simulation mode (no backend required)
      console.log('Using simulation mode - no backend required');
      return await simulateSubmission(enquiryData);
      
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      throw new Error(error.message || 'Failed to submit enquiry. Please try again.');
    }
  },

  // Get all enquiries (from localStorage)
  async getAllEnquiries() {
    try {
      const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
      
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
