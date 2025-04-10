
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-care-primary to-care-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Find the Perfect Care Solution?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of families and caregivers who have found their perfect match through CareConnect.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-care-primary hover:bg-gray-100">
            Find a Caregiver
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Become a Caregiver
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
