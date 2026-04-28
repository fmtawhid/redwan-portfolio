import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Users, Mail } from 'lucide-react';

interface DashboardProps {
    totalContacts: number;
    totalEmails: number;
}

export default function Dashboard({ totalContacts = 0, totalEmails = 0 }: DashboardProps) {

    return (
        <AppLayout>
            <Head title="Dashboard" />

            <div className="flex items-center justify-center p-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
                    
                    {/* Total Contacts */}
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-muted-foreground text-sm">Total Contacts</p>
                            <h2 className="text-2xl font-bold text-foreground mt-1">
                                {totalContacts}
                            </h2>
                        </div>
                        <div className="bg-primary/10 p-3 rounded-xl">
                            <Users className="h-6 w-6 text-primary" />
                        </div>
                    </div>

                    {/* Total Emails */}
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-muted-foreground text-sm">Total Emails</p>
                            <h2 className="text-2xl font-bold text-foreground mt-1">
                                {totalEmails}
                            </h2>
                        </div>
                        <div className="bg-accent/10 p-3 rounded-xl">
                            <Mail className="h-6 w-6 text-accent" />
                        </div>
                    </div>

                </div>

            </div>
        </AppLayout>
    );
}
