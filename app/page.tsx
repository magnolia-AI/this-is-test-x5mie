"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import confetti from "canvas-confetti"
export default function HomePage() {
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center">Welcome to Our App</h1>
        <p className="text-lg text-center text-muted-foreground">
          Your one-stop solution for amazing experiences
        </p>
        <div className="flex justify-center">
          <Button 
            size="lg"
            onClick={handleConfetti}
            className="bg-primary hover:bg-primary/90"
          >
            Get Started
          </Button>
        </div>
      </Card>
    </div>
  )
}