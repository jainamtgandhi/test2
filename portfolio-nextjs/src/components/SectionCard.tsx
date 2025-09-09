'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SectionCardProps {
  title: string;
  description: string;
  href: string;
  index: number;
}

export default function SectionCard({ title, description, href, index }: SectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Link href={href}>
        <div className="bg-card-surface border border-border rounded-2xl p-6 h-full transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/10 card-hover">
          <h3 className="text-xl font-heading font-semibold text-text-primary mb-3 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-text-secondary mb-4 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-1 transition-transform">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
