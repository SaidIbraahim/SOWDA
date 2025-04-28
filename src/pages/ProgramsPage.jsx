import { 
  FGMAwareness, 
  IDPCamp, 
  DroughtFloodsEmergency, 
  WomenEmpowermentEducation, 
  PeaceBuilding, 
  GreenInitiative 
} from '../assets/images';
import ImageComponent from '../components/common/ImageComponent';

const ProgramsPage = () => {
  const programs = [
    {
      id: 1,
      title: "FGM Prevention & Awareness",
      description: "SOWDA works to end Female Genital Mutilation through education, community engagement, and advocacy. Our programs include awareness campaigns, training for health workers, and support for survivors.",
      icon: "🎗️",
      image: FGMAwareness,
      altText: "FGM Awareness Campaign: women and children participating in an educational workshop about ending female genital mutilation"
    },
    {
      id: 2,
      title: "HIV/AIDS Support Services",
      description: "We provide comprehensive support for individuals affected by HIV/AIDS including counseling, testing services, prevention education, and community awareness programs to reduce stigma.",
      icon: "🩺",
      image: WomenEmpowermentEducation,
      altText: "Women participating in HIV/AIDS education and support workshop in Somalia"
    },
    {
      id: 3,
      title: "IDP Assistance Programs",
      description: "Our initiatives support internally displaced persons with emergency relief supplies, shelter, food assistance, healthcare services, and psychosocial support for those affected by conflict and natural disasters.",
      icon: "🏠",
      image: IDPCamp,
      altText: "Internally displaced persons receiving shelter and support services at an IDP camp in Somalia"
    },
    {
      id: 4,
      title: "Emergency Response",
      description: "SOWDA responds quickly to humanitarian crises in Somalia, providing immediate assistance with food, water, shelter, and medical aid to those affected by emergencies.",
      icon: "🚑",
      image: DroughtFloodsEmergency,
      altText: "Emergency response workers providing humanitarian aid during drought and flood emergency in Somalia"
    },
    {
      id: 5,
      title: "Environmental Conservation",
      description: "We implement projects focused on sustainable environmental practices, including reforestation, clean water initiatives, and education about climate change adaptation.",
      icon: "🌱",
      image: GreenInitiative,
      altText: "Environmental conservation projects focused on sustainable practices and reforestation efforts in Somalia"
    },
    {
      id: 6,
      title: "Peace Building & Conflict Resolution",
      description: "Our programs focus on community reconciliation, dialogue facilitation, and training local leaders in conflict resolution techniques to build lasting peace.",
      icon: "☮️",
      image: PeaceBuilding,
      altText: "Community members participating in peace building and conflict resolution workshop in Somalia"
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="py-12 bg-primary/10">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
          <p className="text-lg text-gray-700">
            SOWDA implements a range of programs to address critical issues affecting Somali communities.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">How We Make An Impact</h2>
            <p className="text-gray-700">
              Our programs focus on sustainable development, healthcare, education, emergency
              response, and community empowerment. We work closely with local communities to
              ensure our initiatives address their most pressing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div 
                key={program.id} 
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <ImageComponent 
                    src={program.image} 
                    alt={program.altText} 
                    className="w-full h-full object-cover"
                    priority={program.id <= 2}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start mb-3">
                    <span className="text-4xl mr-4 flex-shrink-0">{program.icon}</span>
                    <h3 className="text-2xl font-semibold">{program.title}</h3>
                  </div>
                  <p className="text-gray-700">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Approach</h2>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Assessment</h3>
                  <p className="text-gray-700">
                    We begin by engaging with communities to understand their specific needs, challenges, and priorities.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Collaborative Program Design</h3>
                  <p className="text-gray-700">
                    Programs are developed in collaboration with community members, local leaders, and experts to ensure relevance and effectiveness.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Implementation with Local Partners</h3>
                  <p className="text-gray-700">
                    We work with local organizations and community members to implement programs, building local capacity in the process.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Monitoring and Evaluation</h3>
                  <p className="text-gray-700">
                    We regularly assess our programs' impact, making adjustments as needed to maximize effectiveness and sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Impact</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1 */}
            <div className="p-6 bg-white shadow-sm rounded-lg text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">5,000+</h3>
              <p className="text-gray-700">Women supported through our programs</p>
            </div>
            
            {/* Stat 2 */}
            <div className="p-6 bg-white shadow-sm rounded-lg text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">12,000+</h3>
              <p className="text-gray-700">Children received educational support</p>
            </div>
            
            {/* Stat 3 */}
            <div className="p-6 bg-white shadow-sm rounded-lg text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
              <p className="text-gray-700">Communities reached across Somalia</p>
            </div>
            
            {/* Stat 4 */}
            <div className="p-6 bg-white shadow-sm rounded-lg text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
              <p className="text-gray-700">Years of service to Somali communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Programs</h2>
          <p className="max-w-3xl mx-auto mb-8 text-lg">
            Your support helps us continue these vital programs and expand our reach to more communities in need.
          </p>
          <a
            href="/support"
            className="btn bg-white text-primary hover:bg-gray-100 inline-block"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage; 