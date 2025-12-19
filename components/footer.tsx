import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif text-2xl font-bold">
                JD
              </div>
              <div>
                <div className="font-serif text-xl font-bold">JD's Confectioners</div>
                <div className="text-xs italic opacity-80">Served with Passion</div>
              </div>
            </div>
            <p className="text-sm opacity-80 text-pretty">
              Crafting delicious memories since day one. Open Monday to Sunday, 06H00 to 18H00 for all your bakery
              needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#products" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#about" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Specialties</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Wedding Cakes</li>
              <li>Birthday Cakes</li>
              <li>Rock Buns</li>
              <li>Chelsea Buns</li>
              <li>Dikuku Scones</li>
              <li>Muffins & More</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="opacity-80">
                  <div>Kondelelani Rd</div>
                  <div>Soshanguve - R, Soshanguve</div>
                  <div>0164, South Africa</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:0767606750" className="opacity-80 hover:opacity-100 transition-opacity">
                  0767606750
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:0781821690" className="opacity-80 hover:opacity-100 transition-opacity">
                  0781821690
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="opacity-80">Mon-Sun: 06H00-18H00</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} JD's Confectioners. All rights reserved.</p>
          <p className="mt-2">Baked with ❤️ and served with passion</p>
        </div>
      </div>
    </footer>
  )
}
