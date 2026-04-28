import AppLayout from '@/layouts/app-layout';
import type { PageProps } from '@/types';
import type { Paginated, Role } from '@/types/models';
import { Head, Link } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Pagination } from '@/components/ui/pagination';
import { Skeleton } from '@/components/ui/skeleton';
import { confirmDelete } from '@/lib/confirm';
import { MoreVertical, Plus, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

type Props = PageProps & { roles: Paginated<Role> };

export default function RoleIndex({ roles }: Props) {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const filtered = useMemo(() => {
        const q = query.toLowerCase();
        return q ? roles.data.filter((r) => r.name.toLowerCase().includes(q)) : roles.data;
    }, [query, roles.data]);

    // Simulate loading state for smoother transitions
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        setQuery(e.target.value);
        setTimeout(() => setIsLoading(false), 300);
    };

    return (
        <AppLayout>
            <Head title="Roles" />

            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Roles</h1>
                    <p className="mt-1 text-muted-foreground">Manage user permissions and access levels</p>
                </div>

                <Link href={route('admin.roles.create')}>
                    <Button>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/30 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        <Plus className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
                        <span className="relative">Create Role</span>
                    </Button>
                </Link>
            </div>

            <Card className="overflow-hidden rounded-xl border bg-card shadow-sm">
                <CardHeader className="border-b bg-muted/20 p-4 sm:p-6">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row">
                        <CardTitle className="text-lg font-semibold">Role List</CardTitle>
                        <div className="relative w-full max-w-xs">
                            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input type="text" placeholder="Search roles..." value={query} onChange={handleSearch} className="bg-background pl-10" />
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead className="sticky top-0 z-10 bg-muted/40 text-muted-foreground backdrop-blur-sm">
                                <tr>
                                    <th className="px-6 py-4 text-left font-medium">#</th>
                                    <th className="px-6 py-4 text-left font-medium">Name</th>
                                    <th className="px-6 py-4 text-left font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {isLoading ? (
                                    Array.from({ length: 3 }).map((_, i) => (
                                        <tr key={i} className="animate-pulse">
                                            <td className="px-6 py-5">
                                                <Skeleton className="h-4 w-4" />
                                            </td>
                                            <td className="px-6 py-5">
                                                <Skeleton className="h-4 w-32" />
                                            </td>
                                            <td className="px-6 py-5">
                                                <Skeleton className="h-8 w-8 rounded-full" />
                                            </td>
                                        </tr>
                                    ))
                                ) : filtered.length > 0 ? (
                                    filtered.map((role, i) => (
                                        <tr key={role.id} className="transition-all duration-200 hover:bg-muted/30">
                                            <td className="px-6 py-5 font-medium whitespace-nowrap">
                                                {i + 1 + (roles.current_page - 1) * roles.per_page}
                                            </td>
                                            <td className="px-6 py-5 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="rounded-lg bg-primary/10 px-3 py-1 font-medium text-primary">{role.name}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/80">
                                                            <MoreVertical className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="rounded-lg border shadow-lg">
                                                        <DropdownMenuItem asChild>
                                                            <Link
                                                                href={route('admin.roles.edit', role.id)}
                                                                className="cursor-pointer rounded px-4 py-2 hover:bg-muted"
                                                            >
                                                                Edit
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            variant="destructive"
                                                            onClick={() =>
                                                                confirmDelete({
                                                                    url: route('admin.roles.destroy', role.id), // ← role.id
                                                                    title: `Delete "${role.name}"?`, // ← nicer title
                                                                    successMsg: 'Role deleted', // toast on success
                                                                })
                                                            }
                                                        >
                                                            Delete
                                                        </DropdownMenuItem>

                                                        {/* <DropdownMenuItem
                                                            className="cursor-pointer rounded px-4 py-2 hover:bg-destructive/5 hover:text-destructive focus:bg-destructive/5 focus:text-destructive"
                                                            onClick={() =>
                                                                confirm(`Delete "${role.name}"?`) &&
                                                                route().delete(route('admin.roles.destroy', role.id))
                                                            }
                                                        >
                                                            Delete
                                                        </DropdownMenuItem> */}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="h-24 px-4 text-center text-muted-foreground">
                                            <div className="flex flex-col items-center justify-center py-12">
                                                <Search className="mb-4 h-12 w-12 text-muted-foreground/30" />
                                                <p className="text-lg">No roles found</p>
                                                <p className="mt-1 text-muted-foreground">Try adjusting your search query</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            <div className="mt-6 rounded-lg border bg-background p-4">
                <Pagination links={roles.links} />
            </div>
        </AppLayout>
    );
}
