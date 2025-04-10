
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Clock, DollarSign, Heart, Shield, Star } from "lucide-react";

const BecomeCaregiver = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-care-primary to-care-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Community of Compassionate Caregivers
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Share your skills, set your own schedule, and make a difference in people's lives.
              </p>
              <Button size="lg" className="bg-white text-care-primary hover:bg-gray-100 text-lg">
                Apply Now
              </Button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Become a CareConnect Caregiver?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-care-light rounded-lg">
                <DollarSign size={48} className="text-care-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Competitive Pay</h3>
                <p className="text-gray-600">
                  Set your own rates and receive payment directly. Our caregivers earn 20-30% more than industry average.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-care-light rounded-lg">
                <Clock size={48} className="text-care-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Flexible Schedule</h3>
                <p className="text-gray-600">
                  Work when you want. Set your own hours and availability to fit your lifestyle.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-care-light rounded-lg">
                <Heart size={48} className="text-care-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Meaningful Work</h3>
                <p className="text-gray-600">
                  Make a real difference in people's lives by providing essential care and support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-care-primary text-white flex items-center justify-center text-2xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Apply</h3>
                <p className="text-gray-600">
                  Fill out your profile with your experience, qualifications, and availability.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-care-primary text-white flex items-center justify-center text-2xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Verify</h3>
                <p className="text-gray-600">
                  Complete our verification process including background checks and references.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-care-primary text-white flex items-center justify-center text-2xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Match</h3>
                <p className="text-gray-600">
                  Get matched with clients based on your skills, location, and availability.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-care-primary text-white flex items-center justify-center text-2xl font-bold mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Care</h3>
                <p className="text-gray-600">
                  Provide care services and build your reputation with great reviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Preview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Ready to Join Our Team?</h2>
              <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="mb-2">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="mb-2">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="mb-2">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="mb-2">Phone Number</Label>
                    <Input id="phone" placeholder="(123) 456-7890" />
                  </div>

                  <div>
                    <Label htmlFor="experience" className="mb-2">Years of Experience</Label>
                    <Input id="experience" type="number" placeholder="0" min="0" />
                  </div>

                  <Button className="w-full bg-care-primary hover:bg-care-secondary">
                    Start Application
                  </Button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    By applying, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-care-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Caregivers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-500 fill-yellow-500" />
                  <Star className="text-yellow-500 fill-yellow-500" />
                  <Star className="text-yellow-500 fill-yellow-500" />
                  <Star className="text-yellow-500 fill-yellow-500" />
                  <Star className="text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-gray-600 mb-4">
                  "Joining CareConnect was the best career decision I've made. I'm able to work on my own schedule and connect with clients who truly appreciate my services."
                </p>
                <div className="font-medium">Maria D., Elder Care Specialist</div>
                <div className="text-sm text-gray-500">Member for 2 years</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-500 fill-yellow-500" />
                  <Star className="text-yellow-500 fill-yellow-500" />
                  <Star className="text-yellow-500 fill-yellow-500" />
                  <Star className="text-yellow-500 fill-yellow-500" />
                  <Star className="text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-gray-600 mb-4">
                  "The platform is so easy to use, and I've been able to build a full client roster within just a few months. The support team is always there when I need them."
                </p>
                <div className="font-medium">James T., Physical Therapist</div>
                <div className="text-sm text-gray-500">Member for 1 year</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-500 fill-yellow-500" />
                  <Star className="text-yellow-500 fill-yellow-500" />
                  <Star className="text-yellow-500 fill-yellow-500" />
                  <Star className="text-yellow-500 fill-yellow-500" />
                  <Star className="text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-gray-600 mb-4">
                  "As a part-time caregiver, CareConnect gives me the flexibility to earn extra income while still pursuing my studies. The clients are wonderful and the pay is excellent."
                </p>
                <div className="font-medium">Sophia L., Child Care Provider</div>
                <div className="text-sm text-gray-500">Member for 8 months</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeCaregiver;
