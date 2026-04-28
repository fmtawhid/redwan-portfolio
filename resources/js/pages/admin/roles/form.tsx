import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import { toast } from 'react-hot-toast'; // ✅ toast already wired in AppLayout

interface Props {
    role: { id?: number; name?: string };
    matrix: Record<string, string[]>;
    permissions: { id: number; module: string; ability: string }[];
    selectedIds: number[];
    isEdit: boolean;
}

export default function RoleForm({ role, matrix, permissions, selectedIds, isEdit }: Props) {
    /* ───────────── state ───────────── */
    const initialIds = Array.isArray(selectedIds) ? selectedIds : Object.values(selectedIds);

    const { data, setData, post, put, processing, errors } = useForm<{
        name: string;
        permissionIds: number[];
    }>({
        name: role.name || '',
        permissionIds: initialIds,
    });

    const permIndex = new Map(permissions.map((p) => [`${p.module}.${p.ability}`, p.id] as [string, number]));

    const toggle = (id: number) => {
        const next = data.permissionIds.includes(id) ? data.permissionIds.filter((i) => i !== id) : [...data.permissionIds, id];
        setData('permissionIds', next);
    };

    /* ───────────── submit ───────────── */
    const submit = (e: FormEvent) => {
        e.preventDefault();
        const url = isEdit ? route('admin.roles.update', role.id) : route('admin.roles.store');

        const rq = isEdit ? put : post;
        rq(url, {
            onSuccess: () => toast.success(isEdit ? 'Role updated 🎉' : 'Role created 🎉'),
        });
    };

    /* ───────────── view ───────────── */
    return (
        <AppLayout>
            <Head title={isEdit ? 'Edit Role' : 'Create Role'} />

            <form onSubmit={submit} className="space-y-8" >
                {/* role name */}
                <div>
                    <h2 className="mb-1 text-sm font-semibold text-muted-foreground">Role name</h2>
                    <Input
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="e.g. Manager"
                        className={`w-full border-b-2 focus:ring-0 focus:outline-primary ${errors.name ? 'border-red-500' : 'border-black'}`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                {/* permissions header */}
                <div>
                    <h2 className="text-sm font-semibold text-muted-foreground">Assign permissions to this role</h2>
                </div>

                {/* accordion */}
                <Card>
                    <CardContent className="p-0">
                        <Accordion type="multiple" className="divide-y">
                            {Object.entries(matrix).map(([module, abilities]) => (
                                <AccordionItem value={module} key={module}>
                                    <AccordionTrigger className="px-4 py-3 font-medium capitalize">{module}</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3">
                                            {abilities.map((ab) => {
                                                const id = permIndex.get(`${module}.${ab}`)!;
                                                const checked = data.permissionIds.includes(id);
                                                return (
                                                    <label key={id} className="flex items-center gap-2 text-sm">
                                                        <Checkbox checked={checked} onCheckedChange={() => toggle(id)} />
                                                        <span className="capitalize">{ab}</span>
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>

                {/* actions */}
                <div className="flex gap-4">
                    <Button type="submit" disabled={processing}>
                        {isEdit ? 'Update role' : 'Create role'}
                    </Button>
                    <Link href={route('admin.roles.index')}>
                        <Button variant="ghost" type="button">
                            Cancel
                        </Button>
                    </Link>
                </div>
            </form>
        </AppLayout>
    );
}
