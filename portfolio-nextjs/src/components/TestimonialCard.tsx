'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-card-surface border border-border rounded-2xl p-8 text-center"
    >
      <Quote className="w-8 h-8 text-primary-600 mx-auto mb-6" />
      <blockquote className="text-lg text-text-primary leading-relaxed mb-6 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="border-t border-border pt-6">
        <div className="font-semibold text-text-primary">{testimonial.author}</div>
        <div className="text-text-secondary text-sm">
          {testimonial.role}, {testimonial.company}
        </div>
      </div>
    </motion.div>
  );
}
