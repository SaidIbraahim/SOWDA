import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaClock, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

const ContactPage = () => {
  // WhatsApp link
  const whatsappNumber = "252907736523";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  
  // State for FAQ accordion
  const [openFAQ, setOpenFAQ] = useState(null);
  
  // Toggle FAQ item
  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };
  
  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "What areas of Somalia do you operate in?",
      answer: "SOWDA operates throughout Somalia, with a focus on Puntland, Somaliland, and South Central regions. Our headquarters is in Garowe, Puntland."
    },
    {
      id: 2,
      question: "How can I volunteer with SOWDA?",
      answer: "You can volunteer by contacting us directly at info@sowdawomen.org. We welcome volunteers with various skills and backgrounds, including healthcare professionals, educators, project managers, and communications specialists."
    },
    {
      id: 3,
      question: "How can organizations partner with SOWDA?",
      answer: "Organizations interested in partnerships can reach out via email at info@sowdawomen.org with details about potential collaboration opportunities. We're open to partnerships with NGOs, government agencies, academic institutions, and private sector entities."
    },
    {
      id: 4,
      question: "Do you accept donations?",
      answer: "Yes, we accept donations that support our various programs and initiatives. You can donate via bank transfer, mobile money, or through our partner platforms. For more information, please contact us at info@sowdawomen.org."
    },
    {
      id: 5,
      question: "What types of projects does SOWDA focus on?",
      answer: "SOWDA focuses on healthcare, education, emergency response, environmental conservation, peacebuilding, and women's empowerment projects. Our initiatives are designed to address the most pressing needs of Somali communities."
    },
    {
      id: 6,
      question: "How can I report an issue or provide feedback?",
      answer: "You can report issues or provide feedback by emailing info@sowdawomen.org or calling our main office number. We value transparency and continuous improvement in all our operations."
    },
    {
      id: 7,
      question: "Do you provide internship opportunities?",
      answer: "Yes, we offer internship opportunities for students and recent graduates interested in humanitarian work, development, and nonprofit management. Please send your resume and a cover letter to info@sowdawomen.org."
    }
  ];

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
              <h2 className="text-2xl font-bold mb-8 text-center border-b pb-4">Our Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* Office Address */}
                  <div className="flex items-start transition-all p-4 rounded-lg hover:bg-gray-50">
                    <div className="mt-1 mr-4 text-primary bg-primary/10 p-3 rounded-full">
                      <FaMapMarkerAlt size={24} />
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
                  <div className="flex items-start transition-all p-4 rounded-lg hover:bg-gray-50">
                    <div className="mt-1 mr-4 text-primary bg-primary/10 p-3 rounded-full">
                      <FaPhone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Phone</h3>
                      <p className="text-gray-700">
                        Main Office: <a href="tel:+252907736523" className="hover:underline">+252 90 7736523</a><br />
                        Administration: +252 90 xxxxxxx<br />
                        Programs: +252 90 xxxxxx
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="flex items-start transition-all p-4 rounded-lg hover:bg-gray-50">
                    <div className="mt-1 mr-4 text-green-500 bg-green-100 p-3 rounded-full">
                      <FaWhatsapp size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                      <p className="text-gray-700">
                        <a 
                          href={whatsappLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-600 hover:underline inline-flex items-center"
                        >
                          +{whatsappNumber} 
                          <span className="ml-2 px-3 py-1 text-xs bg-green-500 text-white rounded-full transition-all hover:bg-green-600">
                            Chat Now
                          </span>
                        </a>
                        <span className="text-sm text-gray-600 block mt-1">Quick response for urgent inquiries</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start transition-all p-4 rounded-lg hover:bg-gray-50">
                    <div className="mt-1 mr-4 text-primary bg-primary/10 p-3 rounded-full">
                      <FaEnvelope size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <p className="text-gray-700">
                        General Inquiries: <a href="mailto:info@sowdawomen.org" className="text-primary hover:underline">info@sowdawomen.org</a><br />
                        Staff: <a href="mailto:Hoodo@sowdawomen.org" className="text-primary hover:underline">Hoodo@sowdawomen.org</a>,
                        <a href="mailto:Amal@sowdawomen.org" className="text-primary hover:underline"> Amal@sowdawomen.org</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-start mb-4">
                  <FaClock className="text-primary mt-1 mr-3 bg-primary/10 p-2 rounded-full" size={24} />
                  <h3 className="text-xl font-semibold">Office Hours</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between items-center border-b pb-2">
                      <span>Monday - Thursday:</span>
                      <span className="font-medium">8:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      <span>Saturday - Sunday:</span>
                      <span className="font-medium">8:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Friday:</span>
                      <span className="font-medium text-red-500">Closed</span>
                    </li>
                  </ul>
                  <div className="text-gray-700 flex flex-col justify-center">
                    <p><strong>Time Zone:</strong> East Africa Time (EAT)</p>
                    <p className="mt-2 bg-yellow-50 p-3 rounded-lg border border-yellow-100 text-sm">
                      <strong className="text-yellow-700">Note:</strong> Our staff is available for emergencies outside of regular office hours. Please contact us via WhatsApp for urgent matters.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-8 text-center">
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex justify-center space-x-6">
                  <a href="#" className="text-primary bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                    <FaFacebook size={24} />
                  </a>
                  <a href="#" className="text-primary bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Twitter">
                    <FaTwitter size={24} />
                  </a>
                  <a href="#" className="text-primary bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                    <FaInstagram size={24} />
                  </a>
                  <a href={whatsappLink} className="text-green-500 bg-green-100 p-3 rounded-full hover:bg-green-500 hover:text-white transition-colors" aria-label="WhatsApp">
                    <FaWhatsapp size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button 
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="text-xl font-semibold pr-8">{faq.question}</h3>
                  <span className="text-primary flex-shrink-0">
                    {openFAQ === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6 text-gray-700 border-t border-gray-100 pt-4">
                    <p>{faq.answer}</p>
                    {faq.id === 2 && (
                      <a href="mailto:info@sowdawomen.org" className="text-primary hover:underline inline-block mt-2">
                        Contact us to volunteer
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 