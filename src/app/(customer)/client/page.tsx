import { Layout } from "@/components/layout";
import { PageParams } from "@/lib/types/next";

export default async function RoutePage(props: PageParams<{}>) {
     
    return (
        <Layout>
            <p>Hello world</p>
        </Layout>
    )

}