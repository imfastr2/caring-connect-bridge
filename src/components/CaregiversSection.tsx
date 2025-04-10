
import CaregiverCard, { Caregiver } from "./CaregiverCard";
import { Button } from "@/components/ui/button";

const CaregiversSection = () => {
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
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Caregivers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our top-rated caregivers and find the perfect match for your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caregivers.map((caregiver) => (
            <CaregiverCard key={caregiver.id} caregiver={caregiver} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-care-primary text-care-primary hover:bg-care-light">
            View All Caregivers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaregiversSection;
