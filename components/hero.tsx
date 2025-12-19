"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="h-4 w-4" />
              <span>Open 7 Days a Week - Always Fresh!</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Baked with <span className="text-primary">Passion</span>, <span className="text-accent">Served</span> with
              Love
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              From elegant wedding cakes to traditional dikuku scones, we craft every treat with care. Experience the
              finest confectionery, available any time of day or night.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" asChild>
                <a href="#products">
                  Explore Our Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <a href="#contact">Contact Us</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">7 Days</div>
                <div className="text-sm text-muted-foreground">Mon - Sun</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Fresh Daily</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Specialties</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                  <Image src="/elegant-floral-wedding-cake.png" alt="Wedding Cake" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                  <Image src="/colorful-cupcakes-with-frosting.jpg" alt="Cupcakes" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                  <Image src="/chocolate-birthday-cake.jpg" alt="Birthday Cake" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                  <Image src="/assorted-pastries-and-buns.jpg" alt="Pastries" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-6 shadow-2xl animate-bounce">
              <div className="text-center">
                <div className="text-2xl font-bold">🌾</div>
                <div className="text-xs font-medium mt-1">Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
