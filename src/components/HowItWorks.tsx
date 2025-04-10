
import { CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up and create a detailed profile specifying your care needs or caregiving services."
    },
    {
      number: "02",
      title: "Browse & Connect",
      description: "Search for caregivers in your area or wait for care seekers to find you."
    },
    {
      number: "03",
      title: "Schedule a Meeting",
      description: "Meet in person or virtually to ensure it's a good match before finalizing arrangements."
    },
    {
      number: "04",
      title: "Begin Care Relationship",
      description: "Start receiving or providing care services with peace of mind and ongoing support."
    }
  ];

  return (
    <section className="py-16 bg-care-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How CareConnect Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="text-care-primary text-3xl font-bold mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                  <CheckCircle className="h-8 w-8 text-care-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
