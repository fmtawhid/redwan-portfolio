// hooks/useHasRole.ts
import { usePage } from '@inertiajs/react';

export function useHasRole(role: string): boolean {
    const { abilities } = usePage().props as any;
    return abilities?.roles?.includes(role);
}
