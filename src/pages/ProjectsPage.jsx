import { useState, useEffect } from 'react';
import { projectsData, projectCategories, projectStatuses } from '../data/projectsData';
import { FaCalendarAlt, FaCheckCircle, FaSpinner, FaHourglass, FaProjectDiagram, FaHandHoldingHeart } from 'react-icons/fa';
import ImageComponent from '../components/common/ImageComponent';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedProject, setExpandedProject] = useState(null);

  // Filter projects based on selected category and status
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      let filtered = projectsData;
      
      if (selectedCategory !== 'All') {
        filtered = filtered.filter(project => project.category === selectedCategory);
      }
      
      if (selectedStatus !== 'All') {
        filtered = filtered.filter(project => project.status === selectedStatus);
      }
      
      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 300); // Simulate loading delay
  }, [selectedCategory, selectedStatus]);

  const toggleProjectExpand = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  // Helper function to get status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <FaCheckCircle className="text-green-500" />;
      case 'Ongoing':
        return <FaSpinner className="text-blue-500" />;
      case 'Upcoming':
        return <FaHourglass className="text-yellow-500" />;
      default:
        return null;
    }
  };

  // Helper function to get date display
  const getDateDisplay = (project) => {
    if (project.status === 'Completed' && project.completionDate) {
      return `Completed: ${project.completionDate}`;
    } else if (project.status === 'Ongoing' && project.startDate) {
      return `Started: ${project.startDate}`;
    } else if (project.status === 'Upcoming' && project.plannedStart) {
      return `Planned Start: ${project.plannedStart}`;
    }
    return '';
  };
  
  // Helper function to get category background color
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Health':
        return 'bg-red-100 text-red-800';
      case 'Education':
        return 'bg-blue-100 text-blue-800';
      case 'Environment':
        return 'bg-green-100 text-green-800';
      case 'Peacebuilding':
        return 'bg-purple-100 text-purple-800';
      case 'Emergency':
        return 'bg-orange-100 text-orange-800';
      case 'Economic':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      {/* Header Section */}
      <section className="py-12 bg-primary/10">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg text-gray-700">
            Explore our completed, ongoing, and upcoming projects across Somalia.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-gray-700">Filter by Category:</h3>
              <div className="flex flex-wrap gap-2">
                {projectCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-gray-700">Filter by Status:</h3>
              <div className="flex flex-wrap gap-2">
                {projectStatuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedStatus === status
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-12">
        <div className="container-custom">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <ImageComponent 
                      src={project.image} 
                      alt={project.altText || project.title} 
                      className="w-full h-full object-cover"
                      priority={project.id <= 3}
                    />
                    <div className="absolute top-2 right-2 bg-white bg-opacity-80 p-1.5 rounded-full">
                      {getStatusIcon(project.status)}
                    </div>
                    
                    {/* GoFundMe Donate Button for Hospital Project */}
                    {project.goFundMeLink && (
                      <div className="absolute bottom-3 right-3">
                        <a 
                          href={project.goFundMeLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-red-600 transition-colors"
                          onClick={(e) => {
                            // Track click for analytics purposes
                            console.log('Donation button clicked');
                            // Allow the link to proceed
                          }}
                        >
                          <FaHandHoldingHeart />
                          Support the Clinic
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    
                    <div className="mb-3 flex flex-wrap items-center text-sm gap-2">
                      <span className={`rounded-full px-3 py-1 ${getCategoryColor(project.category)}`}>{project.category}</span>
                      <span className="bg-gray-100 rounded-full px-3 py-1 text-gray-700">{project.status}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-3 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600 text-sm">
                        <FaCalendarAlt className="mr-2 flex-shrink-0" />
                        <span className="truncate">{getDateDisplay(project)}</span>
                      </div>
                      
                      <button
                        onClick={() => toggleProjectExpand(project.id)}
                        className="text-primary hover:underline text-sm font-medium ml-2 flex-shrink-0"
                      >
                        {expandedProject === project.id ? 'Show Less' : 'Read More'}
                      </button>
                    </div>
                    
                    {expandedProject === project.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-gray-700">{project.description}</p>
                        
                        {/* GoFundMe Link in Expanded View for Hospital Project */}
                        {project.goFundMeLink && (
                          <a
                            href={project.goFundMeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-red-500 hover:text-red-600"
                          >
                            <FaHandHoldingHeart />
                            Support the Mother-Child-Clinic in Bosaso
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found with the selected filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedStatus('All');
                }}
                className="mt-4 btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
            <p className="text-gray-700 mb-10">
              Through our projects, we're making a tangible difference in the lives of thousands of people across Somalia. 
              Each initiative addresses critical needs and contributes to sustainable development in communities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-4xl font-bold text-primary mb-2">30+</h3>
                <p className="text-gray-700">Projects completed since establishment</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-4xl font-bold text-primary mb-2">15,000+</h3>
                <p className="text-gray-700">People directly benefited</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
                <p className="text-gray-700">Communities reached across Somalia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage; 