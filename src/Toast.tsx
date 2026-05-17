'use client';

import { useApp } from '@/lib/AppContext';

export default function Toast() {
  const { toast } = useApp();
  return (
    <div className={`toast ${toast ? 'show' : ''}`}>
      {toast}
    </div>
  );
}
