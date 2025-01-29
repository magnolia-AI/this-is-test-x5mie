'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
export default function DemoPage() {
  const router = useRouter()
    return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            Welcome to the Demo
          </h1>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                This is a demo page showing how navigation works. You can customize this page further based on your needs.
              </p>
            </CardContent>
          </Card>
          <Button 
            variant="outline" 
            onClick={() => router.push('/')}
            className="px-8"
          >
            Back to Home
          </Button>
        </div>
      </section>
    </main>
  )
}