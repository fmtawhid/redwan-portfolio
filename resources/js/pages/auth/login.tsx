import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthLayout from '@/layouts/auth-layout';

type LoginForm = {
    email: string;
    password: string;
};

export default function Login() {
    const { data, setData, post, processing, reset } = useForm<LoginForm>({
        email: '',
        password: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout title="" description="">
            <Head title="Login" />

            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                
                <form 
                    onSubmit={submit}
                    className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-sm border space-y-4"
                >
                    {/* Title */}
                    <h2 className="text-xl font-semibold text-center text-gray-800">
                        Login
                    </h2>

                    {/* Email */}
                    <Input
                        type="email"
                        placeholder="Email address"
                        required
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className="h-11 text-gray-800 placeholder:text-gray-400"
                    />

                    {/* Password */}
                    <Input
                        type="password"
                        placeholder="Password"
                        required
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className="h-11 text-gray-800 placeholder:text-gray-400"
                    />

                    {/* Button */}
                    <Button 
                        type="submit" 
                        disabled={processing}
                        className="w-full h-11 rounded-xl"
                    >
                        {processing ? 'Please wait...' : 'Login'}
                    </Button>

                </form>
            </div>
        </AuthLayout>
    );
}