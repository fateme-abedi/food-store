const SubmitDelivey: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Handle form submission logic
    };
  
    return (
      <div className="py-8 px-6">
        <main>
          <section className="contact-form-section">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label className="mr-4">Name:</label>
                <input type="text" className="bg-gray-900 px-4 py-2 border border-spacing-2 border-white rounded-md"/>
              </div>
              <div className="form-group mb-3">
                <label className="mr-4">Email:</label>
                <input type="email" className="bg-gray-900 px-4 py-2 border border-spacing-2 border-white rounded-md"/>
              </div>
              <div className="form-group mb-3">
                <label className="mr-4">Message:</label>
                <textarea className="bg-gray-900 px-4 py-2 border border-spacing-2 border-white rounded-md"/>
              </div>
              
            </form>
          </section>
          
        </main>
        {/* <Footer /> */}
      </div>
    );
  };
  
  export default SubmitDelivey;
  