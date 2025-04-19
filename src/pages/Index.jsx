
import { Link } from "react-router-dom";
import { Search, FileText, Calendar, Shield, Award, Download } from "lucide-react";

const HeroSection = () => (
  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-4">Find the Right Testing Laboratory</h1>
      <p className="text-xl mb-8">Search by category or location to find accredited laboratories</p>
      <Link to="/labs" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
        Find Labs Now
      </Link>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, link }) => (
  <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <Icon className="w-8 h-8 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Link>
);

const Index = () => {
  const features = [
    {
      icon: Search,
      title: "Laboratory Search",
      description: "Find testing laboratories by category or location",
      link: "/labs"
    },
    {
      icon: FileText,
      title: "Blog & News",
      description: "Stay updated with industry insights and news",
      link: "/blog"
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "Learn about industry standards and regulations",
      link: "/compliance"
    },
    {
      icon: Award,
      title: "Accreditation",
      description: "Understand accreditation requirements and processes",
      link: "/accreditation"
    },
    {
      icon: Download,
      title: "Sample Forms",
      description: "Download necessary forms and documents",
      link: "/forms"
    },
    {
      icon: Calendar,
      title: "Lab Expo 2025",
      description: "Join us at the Annual Lab Expo this December",
      link: "/events"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Event</h2>
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Annual Lab Expo 2025</h3>
            <p className="text-gray-600 mb-4">December 2025</p>
            <Link to="/events" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
