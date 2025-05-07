import { Link } from 'react-router-dom';
import { FaHandsHelping, FaChartLine, FaUsers, FaHeart } from 'react-icons/fa';
import { FGMAwareness, IDPCamp, CleanWater } from '../assets/images';
import ImageComponent from '../components/common/ImageComponent';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-dark text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom py-20 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Empowering Women and Communities in Somalia
            </h1>
            <p className="text-xl mb-8">
              SOWDA is a grassroots organization making a tangible impact across Somalia through 
              community-driven initiatives and sustainable development programs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/support" className="btn-primary">
                Support Our Work
              </Link>
              <a
                href="https://gofund.me/32716c10"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#00b964] hover:bg-[#00a058] text-white flex items-center"
              >
                <FaHeart className="mr-2" /> Donate Now
              </a>
              <Link to="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              To empower women, protect children, and strengthen communities through sustainable 
              development programs that address the unique challenges faced by Somali communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandsHelping className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="text-gray-600">
                Providing humanitarian assistance and resources to vulnerable communities 
                across Somalia, with special focus on women and children.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Development</h3>
              <p className="text-gray-600">
                Creating long-term solutions for communities through education, healthcare, 
                and environmental initiatives that promote self-sufficiency.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advocacy & Awareness</h3>
              <p className="text-gray-600">
                Raising awareness about issues affecting Somali women and children, 
                and advocating for policies that protect their rights and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We focus on key areas that have the greatest impact on communities across Somalia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Program 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-64 w-full overflow-hidden">
                <ImageComponent 
                  src={FGMAwareness} 
                  alt="FGM Awareness Campaign: Women and children participating in educational program to end female genital mutilation in Somalia" 
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">FGM Prevention</h3>
                <p className="text-gray-600 mb-3">
                  Campaigns and education to end female genital mutilation in Somali communities.
                </p>
                <Link to="/programs" className="text-primary font-medium hover:underline inline-block">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-64 w-full overflow-hidden">
                <ImageComponent 
                  src={IDPCamp} 
                  alt="IDP Camp Services: Internally displaced families receiving shelter, food assistance and support services at a camp in Somalia" 
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">IDP Assistance</h3>
                <p className="text-gray-600 mb-3">
                  Support for internally displaced persons with shelter, food, and essential services.
                </p>
                <Link to="/programs" className="text-primary font-medium hover:underline inline-block">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/programs" className="btn-primary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hospital Project */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={hospitalImage} 
                alt="Hospital Project" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hospital Project</h3>
                <p className="text-gray-600 mb-4">
                  Established in 2005, our hospital provides essential healthcare services to women and children in the community.
                </p>
                <Link to="/programs" className="text-primary hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Peace Building Project */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={peaceImage} 
                alt="Peace Building Project" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Peace Building Project</h3>
                <p className="text-gray-600 mb-4">
                  Our peace building initiative brings together community leaders to promote dialogue and reconciliation.
                </p>
                <Link to="/programs" className="text-primary hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your support enables us to continue our vital work in Somali communities. 
            Together, we can create lasting positive change.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/support" className="btn bg-white text-primary hover:bg-gray-100">
              Support Our Work
            </Link>
            <a
              href="https://gofund.me/32716c10"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#00b964] text-white hover:bg-[#00a058] flex items-center justify-center"
            >
              <FaHeart className="mr-2" /> Donate Now
            </a>
            <Link to="/contact" className="btn border border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 