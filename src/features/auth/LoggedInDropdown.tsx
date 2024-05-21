"use client"
import { PropsWithChildren } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuContent
} from "@/components/ui/dropdown-menu"
import { signOutAction } from "./auth.actions";
import { LogOut } from "lucide-react"

export type LoggedInDropdownProps = PropsWithChildren

export const LoggedInDropdown = (props: LoggedInDropdownProps) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {props.children}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem
                    onClick={async () => {
                        await signOutAction();
                    }}
                >
                    <LogOut size={16} className="mr-2" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
