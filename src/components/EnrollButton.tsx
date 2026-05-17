'use client';

import { useApp } from '@/lib/AppContext';

interface EnrollButtonProps {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function EnrollButton({ label = 'Enroll Now', className = 'btn btn-coral', style }: EnrollButtonProps) {
  const { openEnroll } = useApp();
  return (
    <button className={className} onClick={openEnroll} style={style}>
      {label}
    </button>
  );
}
