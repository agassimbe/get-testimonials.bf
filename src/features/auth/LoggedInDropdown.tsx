
import { PropsWithChildren } from "react";
import { DropdownMenu, 
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { signOut } from "@/auth/auth";

export type LoggedInDropdownProps = PropsWithChildren

export const LoggedInDropdown = (props: LoggedInDropdownProps ) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {props.children}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <form>
                    <DropdownMenuItem asChild>
                        <button
                            formAction={async () => {
                                "use server";
                                await signOut();
                            } } >
                                Logout
                        </button>
                    </DropdownMenuItem>
                </form>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
