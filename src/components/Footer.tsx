
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-care-primary" />
              <span className="text-xl font-bold text-white">CareConnect</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting hearts and providing care where it matters most. Find or become a caregiver today.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-care-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/find-caregivers" className="text-gray-400 hover:text-care-primary transition-colors">Find Caregivers</Link>
              </li>
              <li>
                <Link to="/become-caregiver" className="text-gray-400 hover:text-care-primary transition-colors">Become a Caregiver</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-care-primary transition-colors">How It Works</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-care-primary transition-colors">Caregiving Tips</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-care-primary transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-care-primary transition-colors">Support Center</Link>
              </li>
              <li>
                <Link to="/safety" className="text-gray-400 hover:text-care-primary transition-colors">Safety Center</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: contact@careconnect.com</li>
              <li className="text-gray-400">Phone: (555) 123-4567</li>
              <li className="text-gray-400">Hours: Mon-Fri, 9am-5pm EST</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CareConnect. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/terms" className="text-gray-400 hover:text-care-primary text-sm">Terms & Conditions</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-care-primary text-sm">Privacy Policy</Link>
            <Link to="/accessibility" className="text-gray-400 hover:text-care-primary text-sm">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
