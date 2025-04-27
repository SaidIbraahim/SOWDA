import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  // WhatsApp link
  const whatsappNumber = "252907736523";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

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

      {/* Contact Info */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* Office Address */}
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-primary">
                      <FaMapMarkerAlt size={28} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Our Office</h3>
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
                      <FaPhone size={28} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Phone</h3>
                      <p className="text-gray-700">
                        Main Office: +252 90 7736523<br />
                        Administration: +252 90 xxxxxxx<br />
                        Programs: +252 90 xxxxxx
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-green-500">
                      <FaWhatsapp size={28} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                      <p className="text-gray-700">
                        <a 
                          href={whatsappLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-600 hover:underline flex items-center"
                        >
                          +{whatsappNumber} 
                          <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                            Chat Now
                          </span>
                        </a>
                        <span className="text-sm text-gray-600 block mt-1">Quick response for urgent inquiries</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-primary">
                      <FaEnvelope size={28} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <p className="text-gray-700">
                        Support or General Inquiries: <a href="mailto:info@sowda.org" className="text-primary hover:underline">info@sowda.org</a><br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-start mb-4">
                  <FaClock className="text-primary mt-1 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Office Hours</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <div className="text-gray-700">
                    <p><strong>Time Zone:</strong> East Africa Time (EAT)</p>
                    <p className="mt-2"><strong>Note:</strong> Our staff is available for emergencies outside of regular office hours. Please contact us via WhatsApp for urgent matters.</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-8 text-center">
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex justify-center space-x-6">
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="Facebook">
                    <FaFacebook size={28} />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="Twitter">
                    <FaTwitter size={28} />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="Instagram">
                    <FaInstagram size={28} />
                  </a>
                  <a href={whatsappLink} className="text-green-500 hover:text-green-600 transition-colors" aria-label="WhatsApp">
                    <FaWhatsapp size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-8">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
            <div className="h-80 bg-neutral rounded-lg flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Map of Garowe Office Location</p>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              In a production environment, this would be replaced with an actual map showing the office location.
            </p>
          </div>
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
                You can volunteer by contacting us directly at
                <a href="mailto:info@sowda.org" className="text-primary hover:underline"> info@sowda.org</a>. We welcome volunteers with various skills and backgrounds.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How can organizations partner with SOWDA?</h3>
              <p className="text-gray-700">
                Organizations interested in partnerships can reach out via email at
                <a href="mailto:info@sowda.org" className="text-primary hover:underline"> info@sowda.org</a> with details about potential collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 