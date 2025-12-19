"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const categories = ["All", "Cakes", "Buns", "Pastries", "Custom"]

const galleryItems = [
  {
    image: "/three-tier-white-wedding-cake-with-pink-roses.jpg",
    title: "Elegant Wedding Cake",
    category: "Cakes",
  },
  {
    image: "/colorful-birthday-cake-with-candles-and-sprinkles-.jpg",
    title: "Birthday Celebration",
    category: "Cakes",
  },
  {
    image: "/golden-rock-buns-on-wooden-board.jpg",
    title: "Fresh Rock Buns",
    category: "Buns",
  },
  {
    image: "/chelsea-buns-with-glaze.jpg",
    title: "Chelsea Buns",
    category: "Buns",
  },
  {
    image: "/assorted-colorful-cupcakes.jpg",
    title: "Cupcake Selection",
    category: "Pastries",
  },
  {
    image: "/images/red-cake.jpg",
    title: "Red Cake",
    category: "Cakes",
  },
  {
    image: "/blueberry-muffins.png",
    title: "Fresh Muffins",
    category: "Pastries",
  },
  {
    image: "/golden-scones-with-cream.jpg",
    title: "Dikuku Scones",
    category: "Buns",
  },
  {
    image: "/custom-fondant-cake-with-intricate-decorations-and.jpg",
    title: "Custom Design",
    category: "Custom",
  },
  {
    image: "/butter-biscuits.jpg",
    title: "Butter Biscuits",
    category: "Pastries",
  },
  {
    image: "/chocolate-drip-cake-with-ganache-dripping-down-sid.jpg",
    title: "Chocolate Drip Cake",
    category: "Cakes",
  },
  {
    image: "/colorful-kids-character-birthday-cake-with-cartoon.jpg",
    title: "Character Cake",
    category: "Custom",
  },
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Gallery</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
            Our <span className="text-primary">Delicious</span> Creations
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Take a look at some of our recent work and get inspired for your next order
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-primary hover:bg-primary/90"
                  : "hover:bg-primary/10 hover:text-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in zoom-in-95"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                    {item.category}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
