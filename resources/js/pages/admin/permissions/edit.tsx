import { Head } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PermissionForm from "./_form"

export default function PermissionEdit({ permission, current, modules }) {
  return (
    <AppLayout>
      <Head title="Edit Permission" />

      <Card>
        <CardHeader>
          <CardTitle>Edit Permission</CardTitle>
        </CardHeader>
        <CardContent>
          <PermissionForm
            current={current}
            modules={modules}
            isEdit={true}
            permissionId={permission.id}
          />
        </CardContent>
      </Card>
    </AppLayout>
  )
}
