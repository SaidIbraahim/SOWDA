import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div>
      {/* Header Section */}
      <section className="py-12 bg-primary/10">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700">
            Get in touch with our team for inquiries, collaborations, or support.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* Office Address */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-primary">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Office</h3>
                    <p className="text-gray-700">
                      Garowe Office<br />
                      Wadajir District<br />
                      Garowe, Puntland<br />
                      Somalia
                    </p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-primary">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-700">
                      +252 90 7777777<br />
                      Mon - Fri: 8:00 AM - 5:00 PM (EAT)
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-primary">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-700">
                      General Inquiries: info@sowda.org<br />
                      Support: support@sowda.org
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-green-700 text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-green-600">
                    Your message has been received. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                      <p>{error}</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary flex items-center justify-center"
                  >
                    {submitting ? (
                      <>
                        <span className="mr-2">Sending</span>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-8">
        <div className="container-custom">
          <div className="h-80 bg-neutral rounded-lg flex items-center justify-center">
            <p className="text-white text-xl font-semibold">Map of Garowe Office Location</p>
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            In a production environment, this would be replaced with an actual map showing the office location.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What areas of Somalia do you operate in?</h3>
              <p className="text-gray-700">
                SOWDA operates throughout Somalia, with a focus on Puntland, Somaliland, and South Central regions.
                Our headquarters is in Garowe, Puntland.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How can I volunteer with SOWDA?</h3>
              <p className="text-gray-700">
                You can volunteer by filling out the form on our Support page or contacting us directly at
                volunteer@sowda.org. We welcome volunteers with various skills and backgrounds.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How can organizations partner with SOWDA?</h3>
              <p className="text-gray-700">
                Organizations interested in partnerships can reach out through our Contact form or email
                partnerships@sowda.org with details about potential collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 