'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Play } from 'lucide-react'
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Previous sections remain the same */}
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <div className="absolute inset-0 bg-primary/5 blur-3xl" />
        <div className="max-w-[800px] mx-auto text-center relative">
          <h2 className="text-4xl font-bold tracking-tight mb-6 relative group">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient inline-block">
              Let's Create Something Awesome! 
            </span>
            <span className="inline-block ml-2 transition-transform group-hover:scale-125 group-hover:rotate-12 origin-bottom">
              ✨
            </span>
            <div className="absolute -inset-x-20 -inset-y-8 bg-primary/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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