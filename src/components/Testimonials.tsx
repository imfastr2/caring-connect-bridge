
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "CareConnect helped me find the perfect caregiver for my mother. The matching process was quick and the quality of care has been exceptional.",
      name: "Elena Rodriguez",
      role: "Daughter of Care Recipient"
    },
    {
      quote: "As a caregiver, this platform has allowed me to find consistent work with families that value my experience and expertise. The flexible scheduling is a game-changer.",
      name: "Thomas Wright",
      role: "Professional Caregiver"
    },
    {
      quote: "The peace of mind that comes with knowing my father is in good hands is priceless. CareConnect's verification process ensures we only work with trusted professionals.",
      name: "James Chen",
      role: "Son of Care Recipient"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from caregivers and care recipients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md h-full">
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-care-primary mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
