'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-16 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Let&apos;s Collaborate
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
          Ready to accelerate your product marketing and drive measurable growth? 
          Let&apos;s discuss how I can help your team succeed.
        </p>
        <Link
          href="mailto:hi@heyitsjainam.com"
          className="inline-flex items-center space-x-3 bg-white text-primary-600 hover:bg-blue-50 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-200 group shadow-lg hover:shadow-xl"
        >
          <Mail className="w-6 h-6" />
          <span>hi@heyitsjainam.com</span>
        </Link>
      </div>
    </motion.section>
  );
}
