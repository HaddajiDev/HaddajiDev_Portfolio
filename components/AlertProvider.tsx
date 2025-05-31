"use client"

import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FloatingAlert from "./FloatingAlert";

type AlertType = "success" | "error" | "warning";

type Alert = {
  id: string;
  title: string;
  message: string;
  type: AlertType;
};

type AlertContextType = {
  showAlert: (title: string, message: string, type?: AlertType) => void;
};

const AlertContext = createContext<AlertContextType | null>(null);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error("useAlert must be used within AlertProvider");
  return context;
};

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const showAlert = (title: string, message: string, type: AlertType = "success") => {
    const newAlert = { id: uuidv4(), title, message, type };
    setAlerts((prev) => [...prev, newAlert]);

    setTimeout(() => {
      setAlerts((prev) => prev.filter((a) => a.id !== newAlert.id));
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {alerts.map((alert) => (
          <FloatingAlert key={alert.id} title={alert.title} msg={alert.message} type={alert.type} />
        ))}
      </div>
    </AlertContext.Provider>
  );
};
