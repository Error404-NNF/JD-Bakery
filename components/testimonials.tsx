"use client"

import { Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Salome Mahamotsa",
    initial: "S",
    rating: 5,
    time: "2 years ago",
    review: "Service is excellent, theme birthday cakes it's great not only the deco even the taste you won't go wrong",
    color: "bg-amber-700",
  },
  {
    name: "VUSUMUZI KOKELA",
    initial: "V",
    rating: 4,
    time: "a year ago",
    review: "Food: 9/10 | Service: 9/10 | Atmosphere: 8/10",
    isLocalGuide: true,
    color: "bg-emerald-700",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Customer Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">What Our Customers Say</h2>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl font-bold text-foreground">4.4</span>
            <div className="flex flex-col items-start">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-6 h-6 fill-yellow-400/50 text-yellow-400" />
              </div>
              <span className="text-muted-foreground text-sm">Based on 5 reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div
                    className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-lg shrink-0`}
                  >
                    {review.initial}
                  </div>

                  <div className="flex-1">
                    {/* Name and Badge */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      {review.isLocalGuide && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Local Guide</span>
                      )}
                    </div>

                    {/* Rating and Time */}
                    <div className="flex items-center gap-2 mt-1 mb-3">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-muted-foreground text-sm">{review.time}</span>
                    </div>

                    {/* Review Text */}
                    <p className="text-muted-foreground leading-relaxed">{review.review}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a
              href="https://www.google.com/maps/place/JD+BAKERY/@-25.4707462,28.1194901,21z/data=!4m8!3m7!1s0x1ebfc70b87913b89:0x3ddb8eb8df63eca0!8m2!3d-25.4707177!4d28.1194738!9m1!1b1!16s%2Fg%2F11q2x_t5l_?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              See More Reviews on Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <p className="text-muted-foreground text-sm mt-3">Leave us a review and let us know about your experience!</p>
        </div>
      </div>
    </section>
  )
}
