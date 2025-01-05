// src/components/ui/card.jsx
import React from 'react';

// Card Component
export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
};

// CardContent Component
export const CardContent = ({ children }) => {
  return (
    <div className="flex flex-col space-y-4">
      {children}
    </div>
  );
};
