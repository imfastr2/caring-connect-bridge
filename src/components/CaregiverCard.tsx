
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export interface Caregiver {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  hourlyRate: number;
  specialties: string[];
  experience: number;
}

const CaregiverCard = ({ caregiver }: { caregiver: Caregiver }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <img 
          src={caregiver.image} 
          alt={caregiver.name} 
          className="h-56 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl">{caregiver.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="font-medium">{caregiver.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">
          {caregiver.location} • {caregiver.experience} years experience
        </p>
        
        <p className="font-semibold text-lg mb-4">
          ${caregiver.hourlyRate}/hour
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {caregiver.specialties.map((specialty, index) => (
            <Badge key={index} variant="secondary" className="bg-care-light text-care-primary">
              {specialty}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-4">
        <Button className="w-full bg-care-primary hover:bg-care-secondary">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CaregiverCard;
