import {Layout} from '@/components/Layout'
import {Container} from '@/components/Container'
import {AllComponentsList} from "@/components/AllComponentsList";

export default function Page() {
    return (
        <Layout>
            <Container className="mt-0">
                <div className="space-y-10 sm:space-y-12 lg:space-y-16">
                    <AllComponentsList/>
                </div>
            </Container>
        </Layout>
    )
}