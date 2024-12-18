import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ContentLabelProps {
  type: 'graphic';
}

export default function ContentLabel({ type }: ContentLabelProps) {
  if (type === 'graphic') {
    return (
      <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-amber-900 bg-amber-100 rounded border border-amber-200">
        <AlertTriangle className="w-3.5 h-3.5" />
        <span>Graphic</span>
      </span>
    );
  }
  
  return null;
}