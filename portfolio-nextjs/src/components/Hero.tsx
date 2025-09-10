'use client';

import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToWork = () => {
    const workSection = document.getElementById('work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main headline */}
          <h1 className="text-hero font-heading font-bold text-text-primary leading-tight">
            Strategic Marketing That{' '}
            <span className="text-gradient">Drives Growth</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            I help B2B companies accelerate growth through customer research, 
            market intelligence, and go-to-market strategies that convert insights into revenue.
          </p>

          {/* CTAs */}
          <div className="flex justify-center items-center">
            <button
              onClick={scrollToWork}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-200 flex items-center space-x-2 group"
            >
              <span>View My Work</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Credibility strip */}
          <div className="pt-8">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>50+ Successful Campaigns</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>300% Average Revenue Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-secondary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
