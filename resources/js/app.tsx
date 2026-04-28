import '../css/app.css';
import { Toaster } from 'sonner' 
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import 'sweetalert2/dist/sweetalert2.min.css';  
import '@sweetalert2/theme-dark/dark.css'; 

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

       root.render(
      <>
        <App {...props} />
        <Toaster position="top-right" richColors />   {/* provider lives here */}
      </>
    )
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
