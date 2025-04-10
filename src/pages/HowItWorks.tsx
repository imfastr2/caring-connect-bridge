
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorksComponent from "@/components/HowItWorks";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-care-light to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How CareConnect Works</h1>
            <p className="text-xl text-gray-700 mb-6">
              Our platform makes finding and providing care services simple and secure.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <HowItWorksComponent />

        {/* Additional Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">For Care Recipients</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-care-light rounded-full p-2 mt-1">
                      <span className="text-care-primary font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Create Your Profile</h3>
                      <p className="text-gray-600">Sign up and tell us about your specific care needs, preferences, and schedule.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-care-light rounded-full p-2 mt-1">
                      <span className="text-care-primary font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Browse Qualified Caregivers</h3>
                      <p className="text-gray-600">Search through our network of vetted professionals who match your requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-care-light rounded-full p-2 mt-1">
                      <span className="text-care-primary font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Connect Securely</h3>
                      <p className="text-gray-600">Message potential caregivers, conduct interviews, and find your perfect match.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-care-light rounded-full p-2 mt-1">
                      <span className="text-care-primary font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Receive Quality Care</h3>
                      <p className="text-gray-600">Enjoy peace of mind knowing you're receiving care from someone you've personally selected.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">For Caregivers</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-care-light rounded-full p-2 mt-1">
                      <span className="text-care-primary font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Create Your Profile</h3>
                      <p className="text-gray-600">Showcase your skills, experience, certifications, and availability.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-care-light rounded-full p-2 mt-1">
                      <span className="text-care-primary font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Get Discovered</h3>
                      <p className="text-gray-600">Be visible to care seekers looking for your specific expertise in your area.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-care-light rounded-full p-2 mt-1">
                      <span className="text-care-primary font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Connect With Clients</h3>
                      <p className="text-gray-600">Respond to inquiries, schedule meetings, and choose who you work with.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-care-light rounded-full p-2 mt-1">
                      <span className="text-care-primary font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Grow Your Career</h3>
                      <p className="text-gray-600">Build a reputation through reviews and expand your client base on your own terms.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">How much does CareConnect cost?</h3>
                <p className="text-gray-600">Creating an account is free. Care recipients pay only when they connect with a caregiver. Caregivers keep the majority of their earnings with a small platform fee.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">How are caregivers vetted?</h3>
                <p className="text-gray-600">All caregivers undergo background checks, reference verification, and credential validation before being approved to offer services on our platform.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Can I try a caregiver before committing?</h3>
                <p className="text-gray-600">Yes, we encourage initial meetings to ensure compatibility before finalizing any care arrangements.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">How quickly can I find a caregiver?</h3>
                <p className="text-gray-600">Many users find matches within days, though the exact timing depends on your specific needs and location.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
