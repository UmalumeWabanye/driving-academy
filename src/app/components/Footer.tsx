import { Car, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <div className="text-lg">Portsmouth Driving School</div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Portsmouth's premier driving school. Helping students become confident, safe drivers since 2009.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Manual Lessons</li>
              <li className="text-primary-foreground/80">Automatic Lessons</li>
              <li className="text-primary-foreground/80">Intensive Courses</li>
              <li className="text-primary-foreground/80">Pass Plus</li>
              <li className="text-primary-foreground/80">Refresher Courses</li>
              <li className="text-primary-foreground/80">Test Preparation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:02392123456" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  023 9212 3456
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@portsmouthdriving.co.uk" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@portsmouthdriving.co.uk
                </a>
              </li>
              <li className="text-primary-foreground/80">
                Serving Portsmouth & surrounding areas
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>© 2025 Portsmouth Driving School. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
