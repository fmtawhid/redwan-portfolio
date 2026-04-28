import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { Trash2, Mail, CheckCircle } from 'lucide-react';

interface Email {
    id: number;
    email: string;
    created_at: string;
}

export default function EmailsIndex({ emails }: { emails: Email[] }) {
    const { delete: destroy } = useForm();

    const handleDelete = (emailId: number) => {
        if (confirm('Are you sure you want to delete this email?')) {
            destroy(route('emails.destroy', emailId), {
                onSuccess: () => alert('Email deleted successfully!'),
            });
        }
    };

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <AppLayout>
            <Head title="Emails" />
            <div className="p-8">
                <div className="mx-auto max-w-4xl">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-foreground">Subscribed Emails</h1>
                        <p className="mt-2 text-muted-foreground">
                            Total: {emails.length} subscriber{emails.length !== 1 ? 's' : ''}
                        </p>
                    </div>

                    {/* Emails Table / List */}
                    {emails.length > 0 ? (
                        <div className="overflow-x-auto rounded-lg border border-border">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-border bg-card/50">
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                                            Email
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                                            Subscribed On
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-semibold text-foreground">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {emails.map((email, index) => (
                                        <tr
                                            key={email.id}
                                            className={`border-b border-border transition-colors last:border-b-0 hover:bg-card/50 ${
                                                index % 2 === 0 ? 'bg-background/50' : 'bg-background'
                                            }`}
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <CheckCircle size={18} className="text-primary" />
                                                    <a
                                                        href={`mailto:${email.email}`}
                                                        className="text-foreground hover:text-primary"
                                                    >
                                                        {email.email}
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-muted-foreground">
                                                {formatDate(email.created_at)}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => handleDelete(email.id)}
                                                    className="rounded-lg bg-destructive/10 p-2 text-destructive hover:bg-destructive/20"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="rounded-lg border border-border bg-card p-12 text-center">
                            <Mail size={40} className="mx-auto mb-4 text-muted-foreground" />
                            <p className="text-muted-foreground">No subscribed emails yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
