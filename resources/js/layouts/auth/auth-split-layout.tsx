import AppLogoIcon from '@/components/app-logo-icon';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    title?: string;
    description?: string;
}

export default function AuthSplitLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    const { name, quote } = usePage<SharedData>().props;

    return (
        <div className="relative grid min-h-screen lg:grid-cols-2">
            {/* Left Panel - Background Visual */}
            <div className="relative hidden flex-col text-white lg:flex">
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                    <img src="/images/jolshiri-vision.jpg" alt="Jolshiri Background" className="w-full h-full object-cover mix-blend-overlay opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent" />
                </div>

                <div className="relative z-10 flex h-full flex-col p-10">
                    {/* Logo and Name */}
                    <Link href={route('home')} className="flex items-center text-2xl font-semibold text-white">
                        <AppLogoIcon className="mr-2 size-8 fill-current text-primary" />
                        {name}
                    </Link>

                    {/* Inspirational Quote */}
                    {quote && (
                        <div className="mt-auto">
                            <div className="rounded-xl bg-white/10 p-6 shadow-lg backdrop-blur">
                                <blockquote className="text-lg text-neutral-100 italic">
                                    &ldquo;{quote.message}&rdquo;
                                    <footer className="mt-2 text-sm text-neutral-300">— {quote.author}</footer>
                                </blockquote>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Panel - Auth Form */}
            <div className="flex w-full items-center justify-center bg-muted px-6 py-10 sm:px-10 lg:p-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-xl"
                >
                    {/* Logo on all screen sizes */}
                    {/* <Link href={route('home')} className="flex justify-center">
                        <AppLogoIcon className="h-10 fill-current text-primary sm:h-12" />
                    </Link> */}

                    {/* Header */}
                    {/* Header */}
                    <div className="space-y-3 text-center">
                        <AppLogoIcon className="mx-auto h-10 fill-current text-primary sm:h-12" />
                        <h1 className="text-2xl font-bold tracking-tight text-">{title}</h1>
                        {description && <p className="text-sm text-gray-500">{description}</p>}
                    </div>

                    {/* Form content */}
                    {children}

                    {/* Footer (optional slogan or branding) */}
                    {/* <p className="text-center text-xs text-gray-400 mt-6">
                        Embrace Sustainable Living — <span className="font-semibold">Jolshiri</span>
                    </p> */}
                </motion.div>
            </div>
        </div>
    );
}
