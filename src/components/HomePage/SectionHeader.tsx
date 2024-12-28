import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
}

export default function SectionHeader({ title, viewAllLink }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      {viewAllLink && (
        <Link
          href={viewAllLink}
          className="flex items-center text-[#FF0000] hover:text-red-700 transition-colors text-sm font-medium"
        >
          View All
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      )}
    </div>
  );
}