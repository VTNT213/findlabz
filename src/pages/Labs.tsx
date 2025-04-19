
import { useState } from "react";
import { Search, MapPin, Filter } from "lucide-react";
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

const LabSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // Placeholder for future search logic
    console.log("Searching with:", { searchQuery, category, location });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-100 dark:border-gray-700 p-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Find Testing Laboratories
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="relative">
              <Input
                placeholder="Search laboratories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300" />
            </div>
            
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="py-3 dark:bg-gray-700 dark:text-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {labCategories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="py-3 dark:bg-gray-700 dark:text-white">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
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
              className="text-gray-700 dark:text-white dark:border-gray-600"
            >
              <Filter className="mr-2 h-4 w-4" /> 
              Advanced Filters
            </Button>
            <Button 
              onClick={handleSearch} 
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Search Labs
            </Button>
          </div>
        </div>

        {/* Placeholder for search results */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
          <p className="text-gray-500 dark:text-gray-300">
            Enter your search criteria to discover laboratories
          </p>
        </div>
      </div>
    </div>
  );
};

export default LabSearch;

