import { Link } from 'react-router-dom';
import { 
  WAWA_Logo,
  MoWDAFA_logo,
  StopMutilationLogo,
  PDRC_logo
} from '../assets/images';

const PartnersPage = () => {
  const partners = [
    {
      id: 1,
      name: 'WAWA Network',
      description: 'Women as Agents of Change (WAWA) network is a collective of organizations working to promote gender equality and women\'s empowerment across Somalia.',
      website: '#',
      logo: WAWA_Logo
    },
    {
      id: 2,
      name: 'MoWDAFA',
      description: 'Ministry of Women Development and Family Affairs is a governmental body working to advance the rights and well-being of women and families in Somalia.',
      website: 'https://www.facebook.com/MOWDAFA/',
      logo: MoWDAFA_logo
    },
    {
      id: 3,
      name: 'Stop Mutilation',
      description: 'A global advocacy organization dedicated to ending female genital mutilation through education, community engagement, and policy reform.',
      website: 'http://beratungsstelle-stop-mutilation-de.org/',
      logo: StopMutilationLogo
    },
    {
      id: 4,
      name: 'PDRC',
      description: 'Puntland Development Research Centre (PDRC) is a Local Non-Governmental Organization dedicated to peacebuilding, promotion of democracy, and respect for human rights in Puntland and Somalia.',
      website: 'https://pdrcsomalia.org/',
      logo: PDRC_logo
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

      {/* Partners Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="h-32 mb-4 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-12 bg-gray-50">
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