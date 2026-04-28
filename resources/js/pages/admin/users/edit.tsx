import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import AppLayout from '@/layouts/app-layout';
import type { PageProps } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';

interface Props extends PageProps {
    user: {
        id: number;
        name: string;
        email: string;
    };
    roles: {
        id: number;
        name: string;
    }[];
    selectedRoleIds: number[];
}

export default function UserEdit({ user, roles, selectedRoleIds }: Props) {
    const { data, setData, put, processing, errors } = useForm<{
        roleIds: number[];
    }>({
        roleIds: selectedRoleIds || [],
    });

    const toggle = (id: number) => {
        setData('roleIds', (current) => (current.includes(id) ? current.filter((r) => r !== id) : [...current, id]));
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('admin.users.update', user.id));
    };

    return (
        <AppLayout>
            <Head title={`Edit ${user.name}`} />

            <div className="mb-6">
                <h1 className="text-2xl font-bold tracking-tight">Edit User: {user.name}</h1>
                <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>

            <form onSubmit={submit} className="space-y-6">
                <Card>
                    <CardContent className="space-y-2 p-4">
                        {roles.map((role) => (
                            <label key={role.id} className="flex cursor-pointer items-center gap-2">
                                <Checkbox checked={data.roleIds.includes(role.id)} onCheckedChange={() => toggle(role.id)} />
                                <span>{role.name}</span>
                            </label>
                        ))}
                    </CardContent>
                </Card>

                <div className="flex gap-4">
                    <Button type="submit" disabled={processing}>
                        Save Changes
                    </Button>
                    <Link href={route('admin.users.index')}>
                        <Button variant="ghost" type="button">
                            Cancel
                        </Button>
                    </Link>
                </div>
            </form>
        </AppLayout>
    );
}
