export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-20 h-screen">
            <div className="bg-primary h-full w-full rounded-lg"></div>
            <div className="w-5/6">{children}</div>
        </div>
    )
}