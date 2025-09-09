'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
        {title}
      </h1>
      <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
