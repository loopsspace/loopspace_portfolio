import React, { useState, useEffect } from 'react';
import { nileOperations } from '../context/nile';

const EnquiryAdmin = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadEnquiries();
  }, []);

  const loadEnquiries = async () => {
    try {
      setLoading(true);
      const result = await nileOperations.getAllEnquiries();
      setEnquiries(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteEnquiry = async (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      try {
        await nileOperations.deleteEnquiry(id);
        await loadEnquiries(); // Reload the list
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const clearAllEnquiries = () => {
    if (window.confirm('Are you sure you want to delete ALL enquiries? This cannot be undone.')) {
      localStorage.removeItem('enquiries');
      setEnquiries([]);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-white text-xl">Loading enquiries...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Enquiry Admin Panel</h1>
          <div className="flex gap-4">
            <button
              onClick={loadEnquiries}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Refresh
            </button>
            <button
              onClick={clearAllEnquiries}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-300">
            Error: {error}
          </div>
        )}

        <div className="text-white mb-4">
          Total Enquiries: <span className="font-bold text-green-400">{enquiries.length}</span>
        </div>

        {enquiries.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-xl">No enquiries found</div>
            <div className="text-gray-500 text-sm mt-2">Submit a form to see enquiries here</div>
          </div>
        ) : (
          <div className="grid gap-6">
            {enquiries.map((enquiry) => (
              <div
                key={enquiry.id}
                className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{enquiry.name}</h3>
                    <p className="text-green-400">{enquiry.email}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                      ID: {enquiry.id}
                    </span>
                    <button
                      onClick={() => deleteEnquiry(enquiry.id)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-300 leading-relaxed">{enquiry.message}</p>
                </div>
                
                <div className="text-sm text-gray-400">
                  Submitted: {new Date(enquiry.created_at).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryAdmin;
