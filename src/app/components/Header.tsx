import { Car, Phone, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            
            <div>
              <div className="text-lg tracking-tight">M&M Driving Academy</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:02392123456" className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span>023 9212 3456</span>
            </a>
            <Button>Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-foreground/80 hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="tel:02392123456" className="flex items-center gap-2 text-foreground/80">
                <Phone className="w-4 h-4" />
                <span>023 9212 3456</span>
              </a>
              <Button className="w-full">Book Now</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
