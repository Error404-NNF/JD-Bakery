"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, MessageCircle, MapPin, CreditCard, Car, ShoppingBag, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    })
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Get in Touch</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
            Let's Create Something <span className="text-primary">Special</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Have a question or ready to place an order? We're here to help Monday to Sunday, 06H00 to 18H00
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center">
            <CardHeader className="pb-2">
              <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Service Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>Takeaway</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center">
            <CardHeader className="pb-2">
              <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                <CreditCard className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Payments Accepted</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>Credit Cards</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>Debit Cards</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>NFC Mobile Payments</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center">
            <CardHeader className="pb-2">
              <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Car className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Parking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>Free Parking Lot</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle>Visit Our Bakery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-lg font-medium">Kondelelani Rd</p>
                <p className="text-muted-foreground">Soshanguve - R, Soshanguve</p>
                <p className="text-muted-foreground">0164, South Africa</p>
                <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent" asChild>
                  <a href="https://maps.app.goo.gl/ExKddyTNvTKEjSZB9" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <CardTitle>Call or WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://wa.me/27767606750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-medium hover:text-primary transition-colors"
                >
                  0767606750
                </a>
                <a
                  href="https://wa.me/27781821690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-medium hover:text-primary transition-colors"
                >
                  0781821690
                </a>
                <p className="text-sm text-muted-foreground">Mon-Sun: 06H00 - 18H00</p>
                <Button size="sm" className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white" asChild>
                  <a
                    href="https://wa.me/27767606750?text=Hi%20JD's%20Confectioners!%20I'd%20like%20to%20place%20an%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Order on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-[#25D366]/5">
              <CardHeader>
                <div className="bg-[#25D366]/10 text-[#25D366] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <CardTitle>WhatsApp Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground mb-3">
                  Get instant responses and place orders directly through WhatsApp
                </p>
                <Button className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white" asChild>
                  <a
                    href="https://wa.me/27767606750?text=Hi%20JD's%20Confectioners!%20I'd%20like%20to%20place%20an%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat - 0767606750
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 bg-transparent"
                  asChild
                >
                  <a
                    href="https://wa.me/27781821690?text=Hi%20JD's%20Confectioners!%20I'd%20like%20to%20place%20an%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat - 0781821690
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle>Opening Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-primary mb-2">06H00 - 18H00</p>
                <p className="text-sm text-muted-foreground">Monday to Sunday</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0767606750"
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="border-2 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your order or inquiry..."
                    rows={6}
                    required
                    className="border-2 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
