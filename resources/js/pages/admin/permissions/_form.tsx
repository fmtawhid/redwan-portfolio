import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm, usePage } from "@inertiajs/react"
import { toast } from "sonner"
interface Props {
  /* when editing you’ll receive these props */
  current?: { module: string; ability: string }
  /* list of modules comes from controller  */
  modules: string[]
  isEdit: boolean
  permissionId?: number
}

export default function PermissionForm({
  current,
  modules,
  isEdit,
  permissionId,
}: Props) {
  /* ---------------- form state ---------------- */
  const { data, setData, post, put, processing, errors } = useForm<{
    module: string
    ability: string
  }>({
    module: current?.module || modules[0] || "",
    ability: current?.ability || "",
  })

  /* ---------------- submit -------------------- */
  const submit = (e: React.FormEvent) => {
  e.preventDefault()

  const url = isEdit
    ? route("admin.permissions.update", permissionId!)
    : route("admin.permissions.store")

  ;(isEdit ? put : post)(url, {
    onSuccess: () => toast.success("Permission saved 🎉"),
    onError:   () => toast.error("Something went wrong"),
  })
}

  /* ---------------- ui ------------------------ */
  return (
    <form onSubmit={submit} className="space-y-6">
      {/* Module select */}
      <div>
        <label className="mb-1 block text-sm font-medium">Module</label>
        <Select
          value={data.module}
          onValueChange={v => setData("module", v)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose module" />
          </SelectTrigger>
          <SelectContent>
            {modules.map(m => (
              <SelectItem key={m} value={m} className="capitalize">
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.module && (
          <p className="mt-1 text-sm text-red-600">{errors.module}</p>
        )}
      </div>

      {/* Ability input */}
      <div>
        <label className="mb-1 block text-sm font-medium">Ability</label>
        <Input
          value={data.ability}
          onChange={e => setData("ability", e.target.value)}
          placeholder="e.g. view, create, export"
          className={errors.ability ? "border-red-500" : ""}
        />
        {errors.ability && (
          <p className="mt-1 text-sm text-red-600">{errors.ability}</p>
        )}
      </div>

      <Button type="submit" disabled={processing}>
        {isEdit ? "Update" : "Save"}
      </Button>
    </form>
  )
}
