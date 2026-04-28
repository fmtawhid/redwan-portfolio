// hooks/useCan.ts
import { usePage } from '@inertiajs/react';

export function useCan(permission: string): boolean {
    const { abilities } = usePage().props as any;
    return abilities?.permissions?.includes(permission);
}
