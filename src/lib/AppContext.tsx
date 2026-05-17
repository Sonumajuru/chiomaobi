'use client';

import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  enrollOpen: boolean;
  openEnroll: () => void;
  closeEnroll: () => void;
  toast: { show: boolean; msg: string };
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, msg: '' });

  const openEnroll = () => setEnrollOpen(true);
  const closeEnroll = () => setEnrollOpen(false);

  const showToast = (msg: string) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: '' }), 4000);
  };

  return (
    <AppContext.Provider value={{ enrollOpen, openEnroll, closeEnroll, toast, showToast }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}