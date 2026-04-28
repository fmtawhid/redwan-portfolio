import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { Trash2, Mail, User, FileText, MessageSquare } from 'lucide-react';
import { useState } from 'react';

interface Contact {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
}

export default function ContactsIndex({ contacts }: { contacts: Contact[] }) {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const { delete: destroy } = useForm();

    const handleDelete = (contactId: number) => {
        if (confirm('Are you sure you want to delete this contact?')) {
            destroy(route('contacts.destroy', contactId), {
                onSuccess: () => alert('Contact deleted successfully!'),
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
            <Head title="Contacts" />
            <div className="p-8">
                <div className="mx-auto max-w-6xl">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-foreground">Contact Messages</h1>
                        <p className="mt-2 text-muted-foreground">
                            Total: {contacts.length} message{contacts.length !== 1 ? 's' : ''}
                        </p>
                    </div>

                    {/* Contacts List */}
                    {contacts.length > 0 ? (
                        <div className="space-y-4">
                            {contacts.map((contact) => (
                                <div
                                    key={contact.id}
                                    className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            {/* Name and Email */}
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                    <User size={20} className="text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-foreground">{contact.name}</h3>
                                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                        <Mail size={14} />
                                                        <a
                                                            href={`mailto:${contact.email}`}
                                                            className="hover:text-primary"
                                                        >
                                                            {contact.email}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Subject */}
                                            <div className="mt-3 flex items-start gap-3">
                                                <FileText size={16} className="mt-1 text-primary" />
                                                <div>
                                                    <p className="text-sm font-medium text-muted-foreground">Subject</p>
                                                    <p className="text-foreground">{contact.subject}</p>
                                                </div>
                                            </div>

                                            {/* Message Preview / Full */}
                                            <div className="mt-3 flex items-start gap-3">
                                                <MessageSquare size={16} className="mt-1 text-primary" />
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium text-muted-foreground">Message</p>
                                                    <p
                                                        className={`mt-1 text-foreground ${
                                                            expandedId === contact.id ? '' : 'line-clamp-2'
                                                        }`}
                                                    >
                                                        {contact.message}
                                                    </p>
                                                    {contact.message.length > 150 && (
                                                        <button
                                                            onClick={() =>
                                                                setExpandedId(
                                                                    expandedId === contact.id ? null : contact.id,
                                                                )
                                                            }
                                                            className="mt-1 text-sm text-primary hover:underline"
                                                        >
                                                            {expandedId === contact.id ? 'Show less' : 'Show more'}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Date */}
                                            <p className="mt-3 text-xs text-muted-foreground">
                                                Received on {formatDate(contact.created_at)}
                                            </p>
                                        </div>

                                        {/* Delete Button */}
                                        <button
                                            onClick={() => handleDelete(contact.id)}
                                            className="ml-4 rounded-lg bg-destructive/10 p-2 text-destructive hover:bg-destructive/20"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-lg border border-border bg-card p-12 text-center">
                            <p className="text-muted-foreground">No contact messages yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
