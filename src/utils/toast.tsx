// src/utils/toast.js

import React from 'react';
import ReactDOM from 'react-dom';
import ToastComponent from '../components/Toast';
import { createRoot } from 'react-dom/client';

const Toast = (message: string, type: string) => {
  const toastRoot = createRoot(document.getElementById('toast-root')!);
  const toastElement = (
    <React.StrictMode>
      <ToastComponent message={message} type={type} />
    </React.StrictMode>
  );

  toastRoot.render(toastElement);

  setTimeout(() => {
    toastRoot.unmount();
  }, 2000);
};

export default Toast;
