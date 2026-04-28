import { Head, useForm } from '@inertiajs/react';
import type { PageProps } from '@/types';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X } from 'lucide-react';
import { Plus } from 'lucide-react';


const allPermissions = [
  'users view',
  'users create',
  'users edit',
  'users delete',
  'roles view',
  'roles create',
  'roles edit',
  'roles delete',
];


export default function RoleCreate({}: PageProps) {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    permissions: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('admin.roles.store'));
  };

  return (
    <AppLayout>
      <Head title="Create Role" />
      <h1 className="mb-4 text-2xl font-bold">Create Role</h1>

      <Card className="max-w-4xl">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Role Name Field */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Role Name</Label>
                <Input
                  id="name"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  className="mt-1"
                />
                {errors.name && (
                  <div className="text-sm text-red-500">{errors.name}</div>
                )}
              </div>
            </div>

            {/* Permissions */}
            <div className="grid grid-cols-2 gap-6">

              <div>
                <Label>Available Permissions</Label>                
                <div className="mt-2 space-y-2 max-h-60 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-muted border rounded-md p-2">
                {allPermissions
                  .filter((perm) => !data.permissions.includes(perm))
                  .map((perm) => (
                    <div
                      key={perm}
                      onClick={() =>
                        setData('permissions', [...data.permissions, perm])
                      }
                      className="flex items-center justify-between cursor-pointer rounded bg-muted p-2 hover:bg-primary hover:text-white transition"
                    >
                      <span>{perm}</span>
                      <Plus className="h-4 w-4" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Assigned Permissions */}
              <div>
                <Label>Assigned Permissions</Label>
                <div className="mt-2 space-y-2 max-h-60 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-muted border rounded-md p-2">
                  {data.permissions.length > 0 ? (
                    data.permissions.map((perm) => (
                      
                  <button
                    key={perm}
                    type="button"
                    className="flex items-center gap-2 rounded bg-primary text-white px-3 py-2 hover:bg-destructive"
                    onClick={() =>
                      setData(
                        'permissions',
                        data.permissions.filter((p) => p !== perm)
                      )
                    }
                  >
                    {perm}
                    <X className="h-4 w-4" />
                  </button>

                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No permissions assigned
                    </p>
                  )}
                </div>
              </div>
            </div>
            <Button type="submit" disabled={processing} >Save</Button>
          </form>
        </CardContent>
      </Card>
    </AppLayout>
  );
}