'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Download } from 'lucide-react';
import { PageData } from '@/types';

interface PageTemplateProps {
  pageData: PageData;
}

export default function PageTemplate({ pageData }: PageTemplateProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* What I Do Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-heading font-semibold text-text-primary mb-6">
          What I Do
        </h2>
        <div className="grid gap-4">
          {pageData.content.whatIDo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-3"
            >
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <span className="text-text-secondary">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How I Work Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-heading font-semibold text-text-primary mb-6">
          How I Work
        </h2>
        <div className="space-y-6">
          {pageData.content.howIWork.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-text-secondary pt-1">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Deliverables Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-heading font-semibold text-text-primary mb-6">
          Deliverables
        </h2>
        <div className="grid gap-3">
          {pageData.content.deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-text-secondary">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tools Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-heading font-semibold text-text-primary mb-6">
          Tools I Use
        </h2>
        <div className="flex flex-wrap gap-3">
          {pageData.content.tools.map((tool, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="px-4 py-2 bg-card-surface border border-border text-text-primary rounded-full text-sm font-medium hover:border-primary-600 transition-colors"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Featured Example Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-heading font-semibold text-text-primary mb-6">
          Featured Example
        </h2>
        <div className="bg-card-surface border border-border rounded-2xl p-8">
          <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
            {pageData.content.featuredExample.title}
          </h3>
          <p className="text-text-secondary mb-6 leading-relaxed">
            {pageData.content.featuredExample.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {pageData.content.featuredExample.metrics.map((metric, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary-600/10 text-primary-600 rounded-full text-sm font-medium"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Download Section */}
      {pageData.content.downloadLink && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <a
            href={pageData.content.downloadLink}
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-200 group"
          >
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </a>
        </motion.section>
      )}
    </div>
  );
}
