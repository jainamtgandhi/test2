import Link from 'next/link';
import { Linkedin, Mail, User } from 'lucide-react';
import { socialLinks } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Copyright */}
          <div className="text-text-secondary text-sm">
            © {currentYear} Jainam Gandhi
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <Link
              href={socialLinks[0].url}
              className="text-text-secondary hover:text-primary-600 transition-colors flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </Link>
            <Link
              href={socialLinks[1].url}
              className="text-text-secondary hover:text-primary-600 transition-colors flex items-center space-x-2"
            >
              <Mail size={18} />
              <span className="text-sm">Email</span>
            </Link>
            <Link
              href={socialLinks[2].url}
              className="text-text-secondary hover:text-primary-600 transition-colors flex items-center space-x-2"
            >
              <User size={18} />
              <span className="text-sm">About Me</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
