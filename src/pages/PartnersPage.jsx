import { Link } from 'react-router-dom';

const PartnersPage = () => {
  const partners = [
    {
      id: 1,
      name: 'WAWA Network',
      description: 'Women as Agents of Change (WAWA) network is a collective of organizations working to promote gender equality and women\'s empowerment across Somalia.',
      website: '#'
    },
    {
      id: 2,
      name: 'MoWDAFA',
      description: 'Ministry of Women Development and Family Affairs is a governmental body working to advance the rights and well-being of women and families in Somalia.',
      website: '#'
    },
    {
      id: 3,
      name: 'Stop Mutilation',
      description: 'A global advocacy organization dedicated to ending female genital mutilation through education, community engagement, and policy reform.',
      website: '#'
    },
    {
      id: 4,
      name: 'Somalia Health Coalition',
      description: 'A network of organizations working to improve healthcare access and services for vulnerable populations across Somalia.',
      website: '#'
    },
    {
      id: 5,
      name: 'Environment Somalia',
      description: 'An environmental organization focused on sustainable development and natural resource management in Somalia.',
      website: '#'
    },
    {
      id: 6,
      name: 'Somalia Youth Initiative',
      description: 'A youth-led organization promoting education, skills development, and civic engagement among Somali youth.',
      website: '#'
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="py-12 bg-primary/10">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Our Partners</h1>
          <p className="text-lg text-gray-700">
            We collaborate with a wide range of organizations to maximize our impact.
          </p>
        </div>
      </section>

      {/* Partners Overview */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Collaborating for Change</h2>
            <p className="text-gray-700">
              At SOWDA, we believe that partnerships are essential for creating sustainable change.
              We work with government agencies, non-governmental organizations, community groups,
              and international partners to implement effective programs that make a real difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-32 bg-neutral rounded-lg mb-4 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                </div>
                <div>
                  <p className="text-gray-700 mb-4">{partner.description}</p>
                  <a
                    href={partner.website}
                    className="text-primary font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Types of Partnerships</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Implementation Partners</h3>
                <p className="text-gray-700">
                  We collaborate with local organizations to implement programs on the ground, 
                  leveraging their expertise and community connections to ensure effectiveness and sustainability.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Funding Partners</h3>
                <p className="text-gray-700">
                  Our funding partners provide financial support for our programs, enabling us to 
                  reach more communities and implement more comprehensive initiatives.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Technical Partners</h3>
                <p className="text-gray-700">
                  We work with technical experts and institutions to ensure our programs are 
                  evidence-based and incorporate best practices in various fields.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Advocacy Partners</h3>
                <p className="text-gray-700">
                  Together with advocacy partners, we work to influence policies and raise awareness 
                  about critical issues affecting women and children in Somalia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-gray-700 mb-8">
              We are always looking for new partnerships that align with our mission and values.
              If your organization is interested in collaborating with SOWDA, we would love to hear from you.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage; 