"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Cake, Cookie, Croissant, Heart, Star } from "lucide-react"

const products = [
  {
    name: "Wedding Cakes",
    description: "Elegant multi-tier cakes designed to make your special day unforgettable",
    icon: Heart,
    image: "/elegant-white-wedding-cake-with-roses.jpg",
    popular: true,
    category: "Cakes",
  },
  {
    name: "Birthday Cakes",
    description: "Custom birthday cakes in any flavor, design, and size you desire",
    icon: Cake,
    image: "/images/birthday-cake.png",
    popular: true,
    category: "Cakes",
  },
  {
    name: "Rock Buns",
    description: "Traditional rock buns with a perfect crispy exterior and soft center",
    icon: Cookie,
    image: "/golden-rock-buns-on-plate.jpg",
    popular: false,
    category: "Buns",
  },
  {
    name: "Chelsea Buns",
    description: "Sweet, sticky spiral buns filled with cinnamon and dried fruit",
    icon: Croissant,
    image: "/chelsea-buns-with-icing.jpg",
    popular: true,
    category: "Buns",
  },
  {
    name: "Biscuits",
    description: "Crispy, buttery biscuits perfect for tea time or any occasion",
    icon: Cookie,
    image: "/assorted-butter-biscuits.jpg",
    popular: false,
    category: "Biscuits",
  },
  {
    name: "Red Cake",
    description:
      "Soft sponge cakes sandwiched with jam, dipped in syrup, and coated in coconut for a sweet, fluffy treat.",
    icon: Cake,
    image: "/images/red-cake.jpg",
    popular: true,
    category: "Cakes",
  },
  {
    name: "Muffins",
    description: "Freshly baked muffins in various flavors - blueberry, chocolate chip, and more",
    icon: Cake,
    image: "/assorted-muffins.jpg",
    popular: false,
    category: "Muffins",
  },
  {
    name: "Dikuku Scones",
    description: "Traditional African scones, light and fluffy with a hint of sweetness",
    icon: Croissant,
    image: "/golden-scones.jpg",
    popular: true,
    category: "Scones",
  },
]

export function Products() {
  const getWhatsAppLink = (productName: string) => {
    const message = `Hi JD's Confectioners! I'd like to order ${productName}. Can you provide more details?`
    return `https://wa.me/27767606750?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Our Specialties</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
            Discover Our <span className="text-primary">Delicious</span> Selection
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            From celebration cakes to everyday treats, every item is baked fresh with premium ingredients
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card
                key={product.name}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 hover:border-primary/50 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Star className="h-3 w-3 fill-current" />
                      Popular
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-balance group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty">{product.description}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors bg-transparent"
                    asChild
                  >
                    <a href={getWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer">
                      Order on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Looking for something special?</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a
              href="https://wa.me/27767606750?text=Hi%20JD's%20Confectioners!%20I'd%20like%20to%20request%20a%20custom%20order."
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Custom Order on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
