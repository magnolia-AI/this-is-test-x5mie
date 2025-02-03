'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Your Vision Starts Here
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            Transform this template into your perfect website using the chat interface.
          </p>
          <div className="mt-12 flex gap-4 justify-center">
            <Button size="lg" className="px-8">Primary Action</Button>
            <Button size="lg" variant="outline" className="px-8">Secondary</Button>
          </div>
        </div>
      </section>
      {/* New Feature Highlight Section */}
      <section className="container mx-auto px-4 py-16 bg-primary/5">
        <div className="max-w-[1200px] mx-auto">
          <Card className="p-6 border-none shadow-lg">
            <CardContent className="flex flex-col md:flex-row items-center gap-8 p-4">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold text-primary">New Feature</h2>
                <p className="text-lg text-muted-foreground">
                  Experience our latest innovation designed to make your life easier. 
                  This new feature brings enhanced capabilities and seamless integration.
                </p>
                <Button className="mt-4">Try It Now</Button>
              </div>
              <div className="flex-1 bg-primary/10 rounded-lg p-8 aspect-square flex items-center justify-center">
                <div className="text-6xl">✨</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Content Section */}
      <section className="container mx-auto px-4 py-24 bg-muted/30">
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Feature One</h3>
              <p className="text-muted-foreground leading-relaxed">
                Describe your first key feature or service here. Make it compelling and clear.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Feature Two</h3>
              <p className="text-muted-foreground leading-relaxed">
                Highlight another important aspect of your business or project here.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Feature Three</h3>
              <p className="text-muted-foreground leading-relaxed">
                Add a third compelling feature or benefit that sets you apart.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Additional Content Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8">
            Use the chat interface to customize this template. Add your content, change colors, or modify the layout.
          </p>
          <Button variant="outline" className="px-8">
            Call to Action
          </Button>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 h-16 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Your Brand. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}