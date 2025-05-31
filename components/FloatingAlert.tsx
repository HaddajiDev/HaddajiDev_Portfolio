// FloatingAlert.tsx
"use client"
// FloatingAlert.tsx
import React, { useEffect, useState } from "react";

type AlertType = "success" | "error" | "warning";

const typeStyles: Record<AlertType, string> = {
  success: "bg-green-100 border-green-500 text-green-700",
  error: "bg-red-100 border-red-500 text-red-700",
  warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
};

export default function FloatingAlert({
  title,
  msg,
  type = "success",
}: {
  title: string;
  msg: string;
  type?: AlertType;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 10); // fade in
    setTimeout(() => setVisible(false), 2500); // fade out before remove
  }, []);

  return (
    <div
      className={`transition-all duration-500 transform ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      } border-l-4 p-4 rounded-lg shadow-lg ${typeStyles[type]}`}
    >
      <p className="text-lg font-semibold">{title}</p>
      <p>{msg}</p>
    </div>
  );
}

