import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-16 items-center justify-center rounded-md  text-sidebar-primary-foreground">
                <AppLogoIcon className="size- fill-current text-white dark:text-black" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold text-primary hover:text-[color:var(--hover-brand)]">
  Redwan CRM
</span>
            </div>
        </>
    );
}
