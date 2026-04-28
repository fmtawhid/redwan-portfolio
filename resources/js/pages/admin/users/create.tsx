import { Head, Link } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import type { PageProps } from "@/types"
import type { User, Paginated } from "@/types/models"
import { Card, CardContent } from "@/components/ui/card"
import { Pagination } from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"

type Props = PageProps & { users: Paginated<User> }

export default function UserIndex({ users }: Props) {
  return (
    <AppLayout>
      <Head title="Users" />

      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Users</h1>
      </div>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="px-4 py-3 text-left font-medium">ID</th>
                <th className="px-4 py-3 text-left font-medium">Name</th>
                <th className="px-4 py-3 text-left font-medium">Email</th>
                <th className="px-4 py-3 text-left font-medium">Roles</th>
                <th className="px-4 py-3 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.data.map(user => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-accent/40"
                >
                  <td className="px-4 py-3">{user.id}</td>
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3 space-x-1">
                    {user.roles.map(role => (
                      <span
                        key={role.id}
                        className="inline-block rounded bg-primary/20 px-2 py-0.5 text-xs text-primary"
                      >
                        {role.name}
                      </span>
                    ))}
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <Link href={route("admin.users.edit", user.id)}>
                      <Button size="sm" variant="outline">Edit</Button>
                    </Link>
                    <Link
                      as="button"
                      method="delete"
                      href={route("admin.users.destroy", user.id)}
                      onBefore={() =>
                        confirm(`Are you sure to delete ${user.name}?`)
                      }
                    >
                      <Button size="sm" variant="destructive">Delete</Button>
                    </Link>
                  </td>
                </tr>
              ))}
              {users.data.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="h-24 text-center text-muted-foreground"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Pagination links={users.links} />
      </div>
    </AppLayout>
  )
}
