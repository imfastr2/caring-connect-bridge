
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search, Filter, Star, Clock, DollarSign } from "lucide-react";
import CaregiverCard, { Caregiver } from "@/components/CaregiverCard";

const FindCaregivers = () => {
  // Sample data
  const caregivers: Caregiver[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      location: "New York, NY",
      rating: 4.9,
      hourlyRate: 25,
      specialties: ["Elder Care", "Medical", "Disability Support"],
      experience: 8
    },
    {
      id: "2",
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      location: "Boston, MA",
      rating: 4.7,
      hourlyRate: 22,
      specialties: ["Child Care", "Special Needs", "First Aid Certified"],
      experience: 5
    },
    {
      id: "3",
      name: "Amara Wilson",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      location: "Chicago, IL",
      rating: 4.8,
      hourlyRate: 24,
      specialties: ["Elder Care", "Hospice", "Physical Therapy"],
      experience: 10
    },
    {
      id: "4",
      name: "David Martinez",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      location: "Miami, FL",
      rating: 4.6,
      hourlyRate: 20,
      specialties: ["Child Care", "Tutoring", "Recreational Activities"],
      experience: 3
    },
    {
      id: "5",
      name: "Jasmine Brown",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      location: "Seattle, WA",
      rating: 4.9,
      hourlyRate: 26,
      specialties: ["Elder Care", "Meal Preparation", "Companionship"],
      experience: 7
    },
    {
      id: "6",
      name: "Robert Kim",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      location: "Austin, TX",
      rating: 4.8,
      hourlyRate: 23,
      specialties: ["Physical Therapy", "Rehabilitation", "Post-Surgery Care"],
      experience: 6
    }
  ];

  const [filteredCaregivers, setFilteredCaregivers] = useState<Caregiver[]>(caregivers);
  const [locationFilter, setLocationFilter] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [priceRange, setPriceRange] = useState<[number, number]>([15, 30]);
  const [experienceFilter, setExperienceFilter] = useState<number>(0);
  const [sortOption, setSortOption] = useState<string>("rating-high");

  const specialtyOptions = [
    "Elder Care", "Child Care", "Disability Support", "Medical", 
    "Physical Therapy", "Hospice", "Special Needs", "Meal Preparation",
    "Companionship", "Rehabilitation", "Post-Surgery Care", "Tutoring", 
    "First Aid Certified", "Recreational Activities"
  ];

  const handleSpecialtyToggle = (specialty: string) => {
    if (selectedSpecialties.includes(specialty)) {
      setSelectedSpecialties(selectedSpecialties.filter(s => s !== specialty));
    } else {
      setSelectedSpecialties([...selectedSpecialties, specialty]);
    }
  };

  const handleSearch = () => {
    let filtered = [...caregivers];
    
    // Filter by location
    if (locationFilter) {
      filtered = filtered.filter(caregiver => 
        caregiver.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }
    
    // Filter by specialties
    if (selectedSpecialties.length > 0) {
      filtered = filtered.filter(caregiver => 
        caregiver.specialties.some(specialty => 
          selectedSpecialties.includes(specialty)
        )
      );
    }
    
    // Filter by minimum rating
    if (ratingFilter > 0) {
      filtered = filtered.filter(caregiver => caregiver.rating >= ratingFilter);
    }
    
    // Filter by price range
    filtered = filtered.filter(
      caregiver => caregiver.hourlyRate >= priceRange[0] && caregiver.hourlyRate <= priceRange[1]
    );
    
    // Filter by minimum experience
    if (experienceFilter > 0) {
      filtered = filtered.filter(caregiver => caregiver.experience >= experienceFilter);
    }
    
    // Sort the results
    switch (sortOption) {
      case "rating-high":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "experience-high":
        filtered.sort((a, b) => b.experience - a.experience);
        break;
      case "price-low":
        filtered.sort((a, b) => a.hourlyRate - b.hourlyRate);
        break;
      case "price-high":
        filtered.sort((a, b) => b.hourlyRate - a.hourlyRate);
        break;
      default:
        break;
    }
    
    setFilteredCaregivers(filtered);
  };

  // Apply sorting when sortOption changes
  useEffect(() => {
    handleSearch();
  }, [sortOption]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-care-light to-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Caregiver</h1>
            <p className="text-xl text-gray-700 mb-6">Browse our network of qualified professionals who are ready to help.</p>
          </div>
        </div>

        {/* Search and filter section */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="location" className="mb-2">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                  <Input
                    id="location"
                    placeholder="City, State"
                    className="pl-10"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <Label className="mb-2">Minimum Rating</Label>
                <div className="flex items-center space-x-4">
                  <Select 
                    value={ratingFilter.toString()} 
                    onValueChange={(value) => setRatingFilter(Number(value))}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select minimum rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Any Rating</SelectItem>
                      <SelectItem value="3">3+ Stars</SelectItem>
                      <SelectItem value="4">4+ Stars</SelectItem>
                      <SelectItem value="4.5">4.5+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="mb-2">Price Range ($/hour)</Label>
                  <div className="px-3 pt-6 pb-2">
                    <Slider
                      defaultValue={[15, 30]}
                      min={15}
                      max={50}
                      step={1}
                      value={priceRange}
                      onValueChange={(values) => setPriceRange(values as [number, number])}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>${priceRange[0]}/hr</span>
                      <span>${priceRange[1]}/hr</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="mb-2">Minimum Experience</Label>
                  <Select 
                    value={experienceFilter.toString()} 
                    onValueChange={(value) => setExperienceFilter(Number(value))}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select minimum experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Any Experience</SelectItem>
                      <SelectItem value="1">1+ Years</SelectItem>
                      <SelectItem value="3">3+ Years</SelectItem>
                      <SelectItem value="5">5+ Years</SelectItem>
                      <SelectItem value="10">10+ Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Label className="mb-2">Specialties</Label>
              <div className="flex flex-wrap gap-2">
                {specialtyOptions.map((specialty) => (
                  <Toggle
                    key={specialty}
                    pressed={selectedSpecialties.includes(specialty)}
                    onPressedChange={() => handleSpecialtyToggle(specialty)}
                    className="bg-white border border-gray-300 hover:bg-care-light hover:text-care-primary data-[state=on]:bg-care-light data-[state=on]:text-care-primary"
                  >
                    {specialty}
                  </Toggle>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button onClick={handleSearch} className="bg-care-primary hover:bg-care-secondary">
                <Search size={18} className="mr-2" />
                Search Caregivers
              </Button>
            </div>
          </div>

          {/* Results section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredCaregivers.length} Caregivers Available
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating-high">Rating: High to Low</SelectItem>
                    <SelectItem value="experience-high">Experience: High to Low</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredCaregivers.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">No caregivers match your search criteria.</p>
                <p className="text-gray-500 mt-2">Try adjusting your filters to see more results.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCaregivers.map((caregiver) => (
                  <CaregiverCard key={caregiver.id} caregiver={caregiver} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindCaregivers;
