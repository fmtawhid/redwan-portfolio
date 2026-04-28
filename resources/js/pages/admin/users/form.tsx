import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { IconLoader2 } from '@tabler/icons-react';
import clsx from 'clsx';
import { type FormEvent, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';

// --- Prop Types ---
interface Props {
    user?: { id?: number; name?: string; email?: string };
    roles: { id: number; name: string }[];
    permissions: { id: number; name: string }[];
    selectedRoleIds: number[];
    selectedPermIds: number[];
    isEdit: boolean;
}

// --- Main Component ---
export default function UserForm({ user, roles, permissions, selectedRoleIds, selectedPermIds, isEdit }: Props) {
    const roleArray = Array.isArray(selectedRoleIds) ? selectedRoleIds : Object.values(selectedRoleIds);
    const permArray = Array.isArray(selectedPermIds) ? selectedPermIds : Object.values(selectedPermIds);

    const { data, setData, post, put, processing, errors } = useForm({
        name: user?.name ?? '',
        email: user?.email ?? '',
        password: '',
        password_confirmation: '',
        roleIds: roleArray,
        permIds: permArray,
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        const url = isEdit ? route('admin.users.update', user!.id) : route('admin.users.store');
        const options = {
            onSuccess: () => toast.success(isEdit ? 'User updated successfully 🎉' : 'User created successfully 🎉'),
            onError: () => toast.error('Please check the form for errors.'),
        };
        isEdit ? put(url, options) : post(url, options);
    };

    return (
        <AppLayout
            header={
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold text-foreground">{isEdit ? 'Edit User' : 'Create User'}</h1>
                    <div className="flex gap-2">
                        <Button variant="outline" asChild>
                            <Link href={route('admin.users.index')}>Cancel</Link>
                        </Button>
                        <Button type="submit" form="user-form" disabled={processing}>
                            {processing && <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {isEdit ? 'Update User' : 'Create User'}
                        </Button>
                    </div>
                </div>
            }
        >
            <Head title={isEdit ? 'Edit User' : 'Create User'} />

            <form id="user-form" onSubmit={submit} className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* --- Left Column: User Details --- */}
                <div className="space-y-6 lg:col-span-2">
                    <UserDetailsCard data={data} setData={setData} errors={errors} processing={processing} isEdit={isEdit} />
                </div>

                {/* --- Right Column: Access Control --- */}
                <div className="space-y-6 lg:col-span-1">
                    <AccessControlCard roles={roles} permissions={permissions} data={data} setData={setData} errors={errors} />
                </div>
            </form>
        </AppLayout>
    );
}

// --- Sub-component: UserDetailsCard ---
function UserDetailsCard({ data, setData, errors, processing, isEdit }: any) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>User Details</CardTitle>
                <CardDescription>Provide the user's name, email, and password.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="e.g., John Doe"
                        className={clsx(errors.name && 'border-red-500')}
                    />
                    {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="e.g., j.doe@example.com"
                        className={clsx(errors.email && 'border-red-500')}
                    />
                    {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                </div>

                {/* Password Section */}
                <Accordion type="single" collapsible className="w-full" defaultValue={isEdit ? undefined : 'password'}>
                    <AccordionItem value="password">
                        <AccordionTrigger className="text-sm font-medium">{isEdit ? 'Change Password' : 'Set Password'}</AccordionTrigger>
                        <AccordionContent className="pt-4">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="password">{isEdit ? 'New Password' : 'Password'}</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        className={clsx(errors.password && 'border-red-500')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password_confirmation">Confirm Password</Label>
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                    />
                                </div>
                            </div>
                            {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
            {/* --- Actions --- */}
            <div className="mt-8 flex justify-end gap-4">
                <Link href={route('admin.users.index')}>
                    <Button variant="ghost" type="button">
                        Cancel
                    </Button>
                </Link>
                <Button type="submit" disabled={processing}>
                    {processing && <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isEdit ? 'Update User' : 'Create User'}
                </Button>
            </div>
        </Card>
    );
}

// --- Sub-component: AccessControlCard ---
function AccessControlCard({ roles, permissions, data, setData, errors }: any) {
    const [roleSearch, setRoleSearch] = useState('');
    const [permSearch, setPermSearch] = useState('');

    const filteredRoles = useMemo(() => roles.filter((r: any) => r.name.toLowerCase().includes(roleSearch.toLowerCase())), [roles, roleSearch]);

    const filteredPermissions = useMemo(
        () => permissions.filter((p: any) => p.name.toLowerCase().includes(permSearch.toLowerCase())),
        [permissions, permSearch],
    );

    const toggleId = (field: 'roleIds' | 'permIds', id: number) => {
        // current selected array
        const selected = data[field] as number[];

        // compute the new array
        const next = selected.includes(id) ? selected.filter((i) => i !== id) : [...selected, id];

        // hand the array, not a function, to setData
        setData(field, next);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Access Control</CardTitle>
                <CardDescription>Assign roles and direct permissions to the user.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="multiple" defaultValue={['roles']}>
                    {/* Roles */}
                    <AccordionItem value="roles">
                        <AccordionTrigger>Roles ({data.roleIds.length} selected)</AccordionTrigger>
                        <AccordionContent className="space-y-4 pt-2">
                            <Input placeholder="Search roles..." value={roleSearch} onChange={(e) => setRoleSearch(e.target.value)} />
                            <div className="max-h-60 space-y-2 overflow-y-auto pr-2">
                                {filteredRoles.length > 0 ? (
                                    filteredRoles.map((role: any) => (
                                        <div key={role.id} className="flex items-center space-x-2 rounded-md p-2 hover:bg-muted">
                                            <Checkbox
                                                id={`role-${role.id}`}
                                                checked={data.roleIds.includes(role.id)}
                                                onCheckedChange={() => toggleId('roleIds', role.id)}
                                            />
                                            <label htmlFor={`role-${role.id}`} className="w-full cursor-pointer text-sm font-medium">
                                                {role.name}
                                            </label>
                                        </div>
                                    ))
                                ) : (
                                    <p className="p-2 text-center text-sm text-muted-foreground">No roles found.</p>
                                )}
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Direct Permissions */}
                    <AccordionItem value="permissions">
                        <AccordionTrigger>Direct Permissions ({data.permIds.length} selected)</AccordionTrigger>
                        <AccordionContent className="space-y-4 pt-2">
                            <Input placeholder="Search permissions..." value={permSearch} onChange={(e) => setPermSearch(e.target.value)} />
                            <div className="max-h-60 space-y-2 overflow-y-auto pr-2">
                                {filteredPermissions.length > 0 ? (
                                    filteredPermissions.map((perm: any) => (
                                        <div key={perm.id} className="flex items-center space-x-2 rounded-md p-2 hover:bg-muted">
                                            <Checkbox
                                                id={`perm-${perm.id}`}
                                                checked={data.permIds.includes(perm.id)}
                                                onCheckedChange={() => toggleId('permIds', perm.id)}
                                            />
                                            <label htmlFor={`perm-${perm.id}`} className="w-full cursor-pointer text-sm font-medium">
                                                {perm.name}
                                            </label>
                                        </div>
                                    ))
                                ) : (
                                    <p className="p-2 text-center text-sm text-muted-foreground">No permissions found.</p>
                                )}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                {errors.roleIds && <p className="mt-2 text-sm text-red-600">{errors.roleIds}</p>}
                {errors.permIds && <p className="mt-2 text-sm text-red-600">{errors.permIds}</p>}
            </CardContent>
        </Card>
    );
}
