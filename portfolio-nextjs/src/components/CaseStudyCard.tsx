'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { CaseStudy } from '@/types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-card-surface border border-border rounded-2xl overflow-hidden card-hover"
    >
      {/* Image placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary-600/20 to-accent/20 flex items-center justify-center">
        <div className="text-text-secondary text-sm">Case Study Image</div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
          {caseStudy.title}
        </h3>
        <p className="text-text-secondary mb-4 leading-relaxed">
          {caseStudy.description}
        </p>

        {/* Outcomes */}
        <div className="space-y-2 mb-6">
          {caseStudy.outcomes.map((outcome, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-sm text-text-secondary">{outcome}</span>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mb-6">
          {caseStudy.metrics.map((metric, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-600/10 text-primary-600 text-xs font-medium rounded-full"
            >
              {metric}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-200 flex items-center justify-center space-x-2 group">
          <span>{caseStudy.cta}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
