'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import SectionCard from '@/components/SectionCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import { pageData, caseStudy, testimonial } from '@/lib/config';

const sectionCards = [
  {
    title: 'Customer Research',
    description: 'Understand ICPs with interviews, surveys, and jobs-to-be-done mapping. Turn insights into personas and messaging levers.',
    href: '/customer-research',
  },
  {
    title: 'Market Research',
    description: 'Size markets, segment demand, and spot growth vectors. Translate TAM/SAM/SOM into pragmatic GTM choices.',
    href: '/market-research',
  },
  {
    title: 'Competitive Intelligence',
    description: 'Track players, pricing, and positioning. Build battlecards that sharpen sales conversations and win-loss learning loops.',
    href: '/competitive-intelligence',
  },
  {
    title: 'Positioning',
    description: 'Define where we play and why we win. Craft category narratives, moat proof points, and crisp value hierarchies.',
    href: '/positioning',
  },
  {
    title: 'Messaging',
    description: 'Persona-specific value props, headline/subhead systems, and objection-handling proof. Consistent across web, ads, and sales.',
    href: '/messaging',
  },
  {
    title: 'GTM Strategy',
    description: 'Launch planning, channel mix, offers, and sequencing. Align product, sales, and CS on one executable playbook.',
    href: '/gtm-strategy',
  },
  {
    title: 'Sales Enablement',
    description: 'One-pagers, talk tracks, and demo storylines. Help reps handle objections, shorten cycles, and lift win rates.',
    href: '/sales-enablement',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Work Section */}
      <section id="work-section" className="py-24 bg-card-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-text-primary mb-6">
              How I Help Companies Grow
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            I specialize in strategic product marketing that transforms insights into revenue. 
            Here&apos;s how I can help your team succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectionCards.map((card, index) => (
              <SectionCard
                key={card.href}
                title={card.title}
                description={card.description}
                href={card.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-text-primary mb-6">
              Featured Case Study
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See how I&apos;ve helped companies achieve measurable growth through strategic product marketing.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <CaseStudyCard caseStudy={caseStudy} />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-card-surface/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialCard testimonial={testimonial} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection />
        </div>
      </section>
    </>
  );
}
