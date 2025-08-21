import { Button } from "@/components/ui/button";
import { ExternalLink, Zap } from "lucide-react";
import CodeGlass from "./CodeGlass";

const HeroSection = () => {
  return (
    <section className="flex-1 flex items-center justify-center px-6 py-12 lg:px-12">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
            Docs You'll
            <br />
            <span className="text-text-primary">Actually Read</span>
          </h1>
          
          <p className="text-xl text-text-secondary mb-8 max-w-lg">
            Next-gen docs that builds reading habits into your workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="lg" className="gap-2">
              <Zap className="w-5 h-5" />
              Start Learning
            </Button>
            <Button variant="outline-hero" size="lg" className="gap-2">
              Watch Tutorials
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center lg:justify-end">
          <CodeGlass />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;