'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Play } from 'lucide-react'
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Gradient Animation */}
      <section className="container mx-auto px-4 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 animate-pulse" />
        <div className="max-w-[800px] mx-auto text-center relative">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <h1 className="text-6xl font-bold tracking-tight lg:text-7xl bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient">
            Your Vision Starts Here
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            Transform this template into your perfect website using the chat interface.
          </p>
          <div className="mt-12 flex gap-4 justify-center">
            <Button size="lg" className="px-8 hover:scale-105 transition-transform">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="px-8 hover:scale-105 transition-transform">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      {/* New Feature Highlight Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-[1200px] mx-auto">
          <Card className="p-6 border-none shadow-2xl bg-gradient-to-br from-background via-background to-primary/5 hover:shadow-primary/20 transition-all duration-500">
            <CardContent className="flex flex-col md:flex-row items-center gap-8 p-4">
              <div className="flex-1 space-y-4">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Innovative Features
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Experience our latest innovations designed to transform your workflow. 
                  Powerful capabilities meet seamless integration.
                </p>
                <div className="flex gap-4 mt-6">
                  <Button className="hover:scale-105 transition-transform">
                    Try It Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="hover:scale-105 transition-transform group relative overflow-hidden"
                  >
                    <span className="flex items-center gap-2">
                      <Play className="w-4 h-4" /> Preview
                    </span>
                    <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 aspect-square flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                  <div className="relative text-7xl group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute -inset-4 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500" />
                    <div className="relative animate-bounce">
                      🚀
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Rest of the components remain the same */}
      {/* Features Grid Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="bg-gradient-to-br from-background to-primary/5 border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Feature One
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Describe your first key feature or service here. Make it compelling and clear.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-background to-primary/5 border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Speed Boost
              </h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Running around is now faster! 🏃‍♂️💨
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-background to-primary/5 border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Feature Three
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Add a third compelling feature or benefit that sets you apart.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <div className="absolute inset-0 bg-primary/5 blur-3xl" />
        <div className="max-w-[800px] mx-auto text-center relative">
          <h2 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Use the chat interface to customize this template. Add your content, change colors, or modify the layout.
          </p>
          <Button size="lg" className="px-8 hover:scale-105 transition-transform">
            Get Started Now
          </Button>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Your Brand. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}