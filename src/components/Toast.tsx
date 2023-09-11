// src/components/Toast.js

import React, { useState, useEffect } from 'react';

const Toast = ({message, type}:{message: string, type: string}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return visible ? (
    <div className="fixed top-1/4 left-1/2 transform-translate-x-1/2 flex items-center justify-center z-50">
    <div className="bg-gray-800 bg-opacity-75 text-white px-4 py-4 rounded-md" role="alert">
      <p>{message}</p>
    </div>
  </div>
  ) : null;
};

export default Toast;
