import { useState } from 'react';
import { FaHandHoldingHeart, FaHandsHelping, FaUsers } from 'react-icons/fa';
import SEO from '../components/common/SEO';

const SupportPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    supportType: '',
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
        organization: '',
        supportType: '',
        message: '',
      });
    }, 1500);
  };

  const supportPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Support SOWDA",
    "description": "Help us empower Somali women and marginalized communities. Support SOWDA through donations, partnerships, and volunteering opportunities.",
    "mainEntity": {
      "@type": "DonateAction",
      "name": "Donate to SOWDA",
      "description": "Your support enables us to continue our vital work in Somali communities.",
      "recipient": {
        "@type": "Organization",
        "name": "Somali Women Development Agency (SOWDA)",
        "url": "https://sowdawomen.org"
      }
    }
  };

  return (
    <div>
      <SEO 
        title="Support SOWDA | Donate, Volunteer, and Empower Women in Somalia"
        description="Help us empower Somali women and marginalized communities. Support SOWDA through donations, partnerships, and volunteering opportunities."
        structuredData={supportPageSchema}
      />
      {/* Header Section */}
      <section className="py-12 bg-primary/10">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Support Our Work</h1>
          <p className="text-lg text-gray-700">
            Join us in making a difference in Somali communities.
          </p>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">How You Can Help</h2>
            <p className="text-gray-700">
              There are many ways to support our work and make a meaningful impact on 
              the lives of women, children, and communities in Somalia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Donate */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandHoldingHeart className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Donate</h3>
              <p className="text-gray-600 mb-4">
                Your financial support allows us to continue our vital programs and reach more communities in need.
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-800 font-medium mb-3">
                  Support our work through GoFundMe:
                </p>
                <a 
                  href="https://gofund.me/32716c10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#00b964] text-white font-semibold rounded-md hover:bg-[#00a058] transition-colors"
                >
                  Donate via GoFundMe
                </a>
                <p className="text-sm text-gray-600 mt-3">
                  For other donation inquiries, please contact us at: info@sowdawomen.org
                </p>
              </div>
            </div>

            {/* Volunteer */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandsHelping className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Share your skills and time to help us implement our programs and make a direct impact in communities.
              </p>
              <p className="text-sm text-gray-700">
                We welcome volunteers with backgrounds in health, education, community development, and more.
              </p>
            </div>

            {/* Partnerships */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Partner With Us</h3>
              <p className="text-gray-600 mb-4">
                Organizations can partner with us on joint initiatives to maximize impact and reach more communities.
              </p>
              <p className="text-sm text-gray-700">
                We collaborate with NGOs, government bodies, and private sector organizations aligned with our mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Your Support Makes a Difference</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            Every contribution, whether time, expertise, or resources, helps us create lasting positive change in Somali communities.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg bg-primary/5">
              <h3 className="text-4xl font-bold text-primary">$25</h3>
              <p className="text-gray-700 mt-2">
                Provides educational materials for 5 children
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-primary/5">
              <h3 className="text-4xl font-bold text-primary">$50</h3>
              <p className="text-gray-700 mt-2">
                Supplies clean water for a family for one month
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-primary/5">
              <h3 className="text-4xl font-bold text-primary">$100</h3>
              <p className="text-gray-700 mt-2">
                Funds one health workshop for a community
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage; 