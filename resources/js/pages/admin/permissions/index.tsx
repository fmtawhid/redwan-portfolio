import AppLayout from '@/layouts/app-layout';
import type { PageProps } from '@/types';
import type { Paginated, Permission } from '@/types/models';
import { Head, Link } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DataTable } from '@/components/ui/DataTable';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Pagination } from '@/components/ui/pagination';
import { ScrollArea } from '@/components/ui/scroll-area';
import { confirmDelete } from '@/lib/confirm';
import { ColumnDef } from '@tanstack/react-table';
import { MoreVertical, Plus, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

type Props = PageProps<{ permissions: Paginated<Permission> }>;

export default function PermissionIndex({ permissions }: Props) {
    /* ───────────────────── State ───────────────────── */
    const [query, setQuery] = useState('');

    /* ───────────────────── Data ────────────────────── */
    const filtered = useMemo(() => {
        if (!query.trim()) return permissions.data;
        const q = query.toLowerCase();
        return permissions.data.filter((p) => p.name.toLowerCase().includes(q) || p.guard_name.toLowerCase().includes(q));
    }, [query, permissions.data]);

    /* ───────────────────── Columns ─────────────────── */
    const columns: ColumnDef<Permission>[] = [
        {
            accessorKey: 'index',
            header: '#',
            cell: ({ row }) => row.index + 1 + (permissions.current_page - 1) * permissions.per_page,
        },
        { accessorKey: 'name', header: 'Name' },
        { accessorKey: 'guard_name', header: 'Guard' },
        {
            id: 'actions',
            header: ' ',
            enableSorting: false,
            cell: ({ row }) => {
                const perm = row.original;
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                                <Link href={route('admin.permissions.edit', perm.id)}>Edit</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                variant="destructive" // gives red text via your component
                                onClick={() =>
                                    confirmDelete({
                                        url: route('admin.permissions.destroy', perm.id),
                                        title: `Delete "${perm.name}"?`,
                                        successMsg: 'Permission deleted',
                                    })
                                }
                            >
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    /* ───────────────────── View ────────────────────── */
    return (
        <AppLayout>
            <Head title="Permissions" />

            {/* Page header */}
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row">
                <h1 className="text-2xl font-bold tracking-tight">Permissions</h1>

                <Link href={route('admin.permissions.create')}>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Create Permission
                    </Button>
                </Link>
            </div>

            {/* Search bar */}
            <div className="mb-4 flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search permissions…" className="max-w-sm" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>

            {/* Table card */}
            <Card className="rounded-lg border shadow-sm">
                <CardContent className="p-0">
                    <ScrollArea className="w-full">
                        <DataTable columns={columns} data={filtered} />
                    </ScrollArea>
                </CardContent>
            </Card>

            {/* Laravel / Inertia pagination */}
            <div className="mt-6">
                <Pagination links={permissions.links} />
            </div>
        </AppLayout>
    );
}
