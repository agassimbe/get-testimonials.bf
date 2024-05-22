
import Image from "next/image"
import { LoggedInButton } from "../auth/LoggedInButton"
import { Layout } from "@/components/layout"

export const Header = async () => {
    return (
        <header className="w-full boder-b border-border py-1">
            <Layout className="flex items-center gap-4">
                <div className="flex-1">
                    <Image width={32} height={32} src="/logo-bcb.png" alt="icon page"
                    />
                </div>
                <div>
                    <LoggedInButton />
                </div>

            </Layout>

        </header>
    )

} 