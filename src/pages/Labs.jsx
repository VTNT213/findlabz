import { useState } from "react";
import { Search, MapPin, Filter, Star, Clock, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const labCategories = [
  "Chemical Testing",
  "Biological Testing",
  "Mechanical Testing", 
  "Environmental Testing",
  "Food Testing",
  "Calibration",
  "Medical Testing",
  "Material Testing"
];

const locations = [
  "Mumbai", "Delhi", "Bangalore", 
  "Chennai", "Hyderabad", "Kolkata", 
  "Pune", "Ahmedabad"
];

const mockLabs = [
  {
    id: 1,
    name: "Advanced Chemical Labs",
    category: "Chemical Testing",
    location: "Mumbai",
    rating: '4/5',
    address: "123 Science Park, Andheri East",
    timing: "9:00 AM - 6:00 PM",
    phone: "+91 9876543210",
    tests: ["pH Testing", "Titration", "Spectroscopy"]
  },
  {
    id: 2,
    name: "BioTech Diagnostics",
    category: "Biological Testing",
    location: "Delhi",
    rating: '4.2/5',
    address: "456 Medical Complex, Nehru Place",
    timing: "8:00 AM - 7:00 PM",
    phone: "+91 8765432109",
    tests: ["DNA Sequencing", "Microbiology", "Pathology"]
  },
  {
    id: 3,
    name: "Precision Calibration Services",
    category: "Calibration",
    location: "Bangalore",
    rating: '4.7/5',
    address: "789 Tech Park, Whitefield",
    timing: "8:30 AM - 5:30 PM",
    phone: "+91 7654321098",
    tests: ["Equipment Calibration", "Instrument Verification"]
  }
];

const LabSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [labs, setLabs] = useState([]);

  const handleSearch = () => {
    const filteredLabs = mockLabs.filter(lab => {
      const matchesCategory = category ? lab.category === category : true;
      const matchesLocation = location ? lab.location === location : true;
      return matchesCategory && matchesLocation;
    });
    
    setLabs(filteredLabs);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Find Testing Laboratories
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* <div className="relative">
              <Input
                placeholder="Search laboratories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div> */}
            
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="py-3">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {labCategories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="py-3">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-4">
            <Button 
              variant="outline" 
              className="text-gray-700 border-gray-300"
            >
              <Filter className="mr-2 h-4 w-4" /> 
              Advanced Filters
            </Button>
            <Button 
              onClick={handleSearch} 
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Search Labs
            </Button>
          </div>
        </div>

        {/* Lab Results Section */}
        {labs.length > 0 ? (
          <div className="mt-8 space-y-6">
            {labs.map((lab) => (
              <div key={lab.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{lab.name}</h2>
                    <div className="flex items-center mt-2 text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{lab.address}, {lab.location}</span>
                    </div>
                    <div className="mt-2 flex items-center">
                      <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-md">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                        <span>{lab.rating}</span>
                      </div>
                      <span className="ml-3 text-gray-600">{lab.category}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button variant="outline" className="mr-3">
                      <Phone className="h-4 w-4 mr-2" />
                      {lab.phone}
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Book Appointment
                    </Button>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center text-gray-600 mb-3">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Timings: {lab.timing}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">Available Tests:</h3>
                    <div className="flex flex-wrap gap-2">
                      {lab.tests.map((test, index) => (
                        <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          {test}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-500">
              {category || location 
                ? "No labs found matching your criteria" 
                : "Enter your search criteria to discover laboratories"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LabSearch;