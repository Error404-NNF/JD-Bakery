"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Clock, Heart, Award, Users } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Clock,
    title: "Daily Service",
    description: "Open Monday to Sunday from 06H00 to 18H00 to serve you fresh baked goods.",
  },
  {
    icon: Heart,
    title: "Served with Passion",
    description: "Every item is crafted with love and attention to detail.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest ingredients go into our baked goods.",
  },
  {
    icon: Users,
    title: "Custom Orders",
    description: "We create personalized cakes and treats for your special occasions.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                About Us
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance mb-6">
                Where Tradition Meets <span className="text-primary">Innovation</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground text-pretty">
                <p>
                  At <strong className="text-foreground">JD's Confectioners</strong>, we believe that great baking is an
                  art form. For years, we've been serving our community with the finest cakes, pastries, and traditional
                  baked goods.
                </p>
                <p>
                  Our commitment to quality means we bake fresh throughout the day, ensuring you always get the best.
                  From elaborate wedding cakes to simple comfort foods like our famous dikuku scones, everything is made
                  with passion.
                </p>
                <p>
                  Whether you're celebrating a milestone or just craving something sweet, we're here for you Monday to
                  Sunday from 06H00 to 18H00.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card
                    key={feature.title}
                    className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-left-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 space-y-3">
                      <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold text-lg">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/design-mode/WhatsApp%20Image%202025-10-09%20at%2020.08.49.jpeg"
                alt="JD's Confectioners Bakery Sign"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-card border-2 border-border rounded-2xl p-6 shadow-2xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                  🌾
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Premium</div>
                  <div className="text-sm text-muted-foreground">Quality Ingredients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
