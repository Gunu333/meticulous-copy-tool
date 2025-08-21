import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-text-secondary text-lg mb-6">
          Have a question or want to get involved..?
        </p>
        
        <div className="flex justify-center mb-4">
          <div className="bg-navy-light rounded-lg p-2 mb-4">
            <span className="text-2xl">💜💜💜</span>
          </div>
        </div>
        
        <Button variant="discord" size="lg">
          Join our Discord
        </Button>
      </div>
    </section>
  );
};

export default CommunitySection;