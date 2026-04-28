import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { Toaster }   from 'react-hot-toast';
import { Link } from '@inertiajs/react';
import FlashMessage  from '@/components/ui/flash-message';
import type { BreadcrumbItem } from '@/types';
import type { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  backHref?: string
  backLabel?: string
}

export default ({ children, breadcrumbs,backHref,
  backLabel, ...props }: AppLayoutProps) => (
  <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
    <FlashMessage />  
    {backHref && (
        <Link
          href={backHref}
          className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          ← {backLabel ?? 'Back'}
        </Link>
      )}
                              {/* ① show flash → toast */}
    {children}
    <Toaster position="top-right" reverseOrder={false} />  {/* single global toaster */}
  </AppLayoutTemplate>
);
