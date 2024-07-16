import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { AllTemplatesList } from '@/components/AllTemplatesList'

export default function Page() {
  return (
    <Layout page='templates'>
      <Container className="mt-0">
        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          <AllTemplatesList />
        </div>
      </Container>
    </Layout>
  )
}
