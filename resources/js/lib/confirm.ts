import { router } from '@inertiajs/react';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

interface ConfirmOptions {
    url: string;
    method?: 'delete' | 'post' | 'put';
    title?: string;
    text?: string;
    successMsg?: string;
}

export function confirmDelete({
    url,
    method = 'delete',
    title = 'Delete this record?',
    text = 'This action cannot be undone.',
    successMsg = 'Deleted successfully',
}: ConfirmOptions) {
    return Swal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#6b7280',
    }).then((result) => {
        if (!result.isConfirmed) return false;

        router[method](url, {
            onSuccess: () => toast.success(successMsg),
            onError: () => toast.error('Operation failed'),
        });
        return true;
    });
}
