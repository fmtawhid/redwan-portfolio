import { Head, useForm } from '@inertiajs/react';
import type { PageProps } from '@/types';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Role } from '@/types/models';

type Props = PageProps<{ role: Role }>;

export default function RoleEdit({ role }: Props) {
  const { data, setData, put, processing, errors } = useForm({
    name: role.name || '',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    put(route('admin.roles.update', role.id));
  }

  return (
    <AppLayout>
      <Head title="Edit Role" />
      <h1 className="mb-4 text-2xl font-bold">Edit Role</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={data.name}
            onChange={e => setData('name', e.target.value)}
          />
          {errors.name && <div className="text-sm text-red-500">{errors.name}</div>}
        </div>

        <Button type="submit" disabled={processing}>
          Update
        </Button>
      </form>
    </AppLayout>
  );
}
