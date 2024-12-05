/**
Name: Tamara Slone
Date: 12/23/24
Description:This is index compoment that connect my web app to the router component.
*/
import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from "./components/Router";

const rootElement = document.getElementById('root');
   if (rootElement) {
   const root = createRoot(rootElement);
   root.render(
     <React.StrictMode>
     <Router />
     </React.StrictMode>
   );
} else {
   console.error("Root element not found");
}