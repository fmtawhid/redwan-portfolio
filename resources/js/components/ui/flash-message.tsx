import { useEffect } from 'react';
import { usePage }   from '@inertiajs/react';
import { toast }     from 'react-hot-toast';

export default function FlashMessage() {
  const { flash } = usePage().props as {
    flash?: { success?: string; error?: string };
  };

  useEffect(() => {
    if (flash?.success) toast.success(flash.success);
    if (flash?.error)   toast.error(flash.error);
  }, [flash]);

  return null;   // nothing to render
}
