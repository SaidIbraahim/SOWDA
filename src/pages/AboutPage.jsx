import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { OurStory } from '../assets/images';
import LazyImage from '../components/common/LazyImage';
import SEO from '../components/common/SEO';

const AboutPage = () => {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Somali Women Development Agency (SOWDA)",
      "description": "Learn about SOWDA's mission to foster women's leadership, eliminate harmful practices like FGM, and promote peace and development across Puntland, Somalia.",
      "foundingDate": "2005",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Garowe",
          "addressRegion": "Puntland",
          "addressCountry": "Somalia"
        }
      },
      "areaServed": "Somalia",
      "keywords": "women development, NGO in Garowe, women empowerment, Somali NGO, FGM prevention"
    }
  };

  return (
    <div>
      <SEO 
        title="About SOWDA | Women's Rights NGO in Puntland | SOWDA Somalia"
        description="Learn about SOWDA's mission to foster women's leadership, eliminate harmful practices like FGM, and promote peace and development across Puntland, Somalia."
        structuredData={aboutPageSchema}
      />
      {/* Header Section */}
      <section className="py-12 bg-primary/10">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">About SOWDA</h1>
          <p className="text-lg text-gray-700">
            Learn about our organization, mission, and impact across Somalia.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Somali Women Development Agency (SOWDA) was founded in 1999 by a dedicated group of
                Somali women who recognized the unique challenges faced by women and children in their
                communities.
              </p>
              <p className="text-gray-700 mb-4">
                Born out of the need to provide targeted support to vulnerable populations in Somalia,
                SOWDA has grown from a small local initiative to a respected organization working
                across multiple regions in Somalia.
              </p>
              <p className="text-gray-700">
                Today, we continue to expand our reach and impact, building partnerships with local and
                international organizations to create sustainable change in Somali communities.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-96">
              <LazyImage 
                src={OurStory} 
                alt="SOWDA team members working with local communities in Somalia" 
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                A Somalia where women and children are empowered, protected, and able to fully
                participate in all aspects of society, with access to education, healthcare, and economic
                opportunities.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                To empower women, protect children, and strengthen communities through sustainable
                development programs that address the unique challenges faced by Somali communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-700">
                We operate with honesty, transparency and accountability in all our activities.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Empowerment</h3>
              <p className="text-gray-700">
                We believe in building capacity and enabling individuals and communities to advocate for themselves.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-700">
                We partner with communities, organizations, and stakeholders to maximize our impact.
              </p>
            </div>

            {/* Value 4 */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Respect</h3>
              <p className="text-gray-700">
                We honor the dignity, culture, and rights of the individuals and communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Strategic Goals</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Promote Gender Equality:</strong> Advocate for and implement programs that advance women's rights and opportunities.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Improve Health Outcomes:</strong> Work to reduce the prevalence of preventable diseases and improve access to healthcare services.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Enhance Education:</strong> Increase access to quality education for children and women in underserved communities.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Strengthen Livelihoods:</strong> Develop sustainable economic opportunities that help families achieve financial stability.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Build Community Resilience:</strong> Enhance the capacity of communities to respond to environmental and humanitarian challenges.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 