"use client"
import { Button } from "@/components/ui/button"
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
    <div className="min-h-screen flex items-center justify-center">
      <Button 
        size="lg"
        onClick={handleConfetti}
        className="bg-primary hover:bg-primary/90"
      >
        Get Started
      </Button>
    </div>
  )
}