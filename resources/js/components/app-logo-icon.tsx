import { SVGAttributes } from 'react';

export default function AppLogoIcon({ className }: { className?: string }) {
    return (
        <img
            src="/images/favicon.png" // or .svg
            alt="Redwan Logo"
            className={className}
        />
    );
}
