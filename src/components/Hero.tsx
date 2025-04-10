
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-care-light to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Connecting Hearts, <span className="text-care-primary">Providing Care</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Find trusted caregivers in your area or offer your caregiving services. 
            CareConnect bridges the gap between those who need care and those who provide it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-care-primary hover:bg-care-secondary text-lg" asChild>
              <Link to="/find-caregivers">Find a Caregiver</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-care-primary text-care-primary hover:bg-care-light text-lg" asChild>
              <Link to="/become-caregiver">Become a Caregiver</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
