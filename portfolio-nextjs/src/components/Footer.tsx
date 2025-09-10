import Link from 'next/link';
import { Linkedin, Mail, User } from 'lucide-react';
import { socialLinks } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Copyright */}
          <div className="text-text-secondary text-sm md:text-lg">
            © {currentYear} Jainam Gandhi
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 md:space-x-8">
            <Link
              href={socialLinks[0].url}
              className="text-text-secondary hover:text-primary-600 transition-colors flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} className="md:w-6 md:h-6" />
              <span className="text-sm md:text-lg">LinkedIn</span>
            </Link>
            <Link
              href={socialLinks[1].url}
              className="text-text-secondary hover:text-primary-600 transition-colors flex items-center space-x-2"
            >
              <Mail size={18} className="md:w-6 md:h-6" />
              <span className="text-sm md:text-lg">hi@heyitsjainam.com</span>
            </Link>
            <Link
              href={socialLinks[2].url}
              className="text-text-secondary hover:text-primary-600 transition-colors flex items-center space-x-2"
            >
              <User size={18} className="md:w-6 md:h-6" />
              <span className="text-sm md:text-lg">About Me</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
