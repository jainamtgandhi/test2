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
      className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
        Let&apos;s Collaborate
      </h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Ready to accelerate your product marketing and drive measurable growth? 
        Let&apos;s discuss how I can help your team succeed.
      </p>
      <Link
        href="mailto:hi@heyitsjainam.com"
        className="inline-flex items-center space-x-2 bg-white text-primary-600 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 group"
      >
        <Mail className="w-5 h-5" />
        <span>Get In Touch</span>
      </Link>
    </motion.section>
  );
}
