'use client';

import { useApp } from '@/lib/AppContext';

interface EnrollButtonProps {
  label: string;
  className?: string;
}

export default function EnrollButton({ label, className }: EnrollButtonProps) {
  const { openEnroll } = useApp();
  return (
    <button className={className} onClick={openEnroll}>{label}</button>
  );
}