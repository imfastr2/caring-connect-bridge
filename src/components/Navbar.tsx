
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b py-4 bg-white sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-care-primary" />
          <Link to="/" className="text-xl font-bold text-care-primary">
            CareConnect
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-care-primary transition-colors">
            Home
          </Link>
          <Link to="/find-caregivers" className="text-gray-600 hover:text-care-primary transition-colors">
            Find Caregivers
          </Link>
          <Link to="/become-caregiver" className="text-gray-600 hover:text-care-primary transition-colors">
            Become a Caregiver
          </Link>
          <Link to="/how-it-works" className="text-gray-600 hover:text-care-primary transition-colors">
            How It Works
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-care-primary">Login</Button>
          <Button className="bg-care-primary hover:bg-care-secondary">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
