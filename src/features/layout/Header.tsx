
import { LoggedInButton } from "../auth/LoggedInButton"

export const Header = async () => {
    return (
        <div className="flex items-center gap-4">
            <h1 className="font-bold text-lg flex-1">get-testimonials.com</h1>
            <LoggedInButton/>
        </div>
    )

} 