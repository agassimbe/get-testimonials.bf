import type { LayoutParams } from "@/lib/types/next";
import {Header} from "@/features/layout/Header"

export default async function RootLayout(props: LayoutParams<{}>) {

  return (
    <div className="h-full">
      <Header />
      {props.children}
    </div>
  )
  
} 

  