
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, HeartHandshake, Shield } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      title: "Personalized Matching",
      description: "Our smart algorithm matches caregivers with care recipients based on needs, location, and preferences.",
      icon: HeartHandshake,
    },
    {
      title: "Verified Professionals",
      description: "All caregivers undergo thorough background checks and verification processes for your peace of mind.",
      icon: Shield,
    },
    {
      title: "Flexible Scheduling",
      description: "Whether you need care for a few hours, overnight, or full-time, find caregivers that match your schedule.",
      icon: Calendar,
    },
    {
      title: "Immediate Assistance",
      description: "Need urgent care? Connect with available caregivers in your area right away.",
      icon: Clock,
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive care solutions tailored to your unique needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-care-light rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-care-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
