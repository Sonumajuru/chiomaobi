'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  enrollOpen: boolean;
  openEnroll: () => void;
  closeEnroll: () => void;
  toast: string;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [toast, setToast] = useState('');

  const openEnroll = () => setEnrollOpen(true);
  const closeEnroll = () => setEnrollOpen(false);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 4000);
  };

  return (
    <AppContext.Provider value={{ enrollOpen, openEnroll, closeEnroll, toast, showToast }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
