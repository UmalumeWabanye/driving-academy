import { Button } from './ui/button';
import { CheckCircle2, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-accent rounded-full">
              <span className="text-sm">🏆 M&M Driving Academy</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Master the Road with Confidence
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Expert driving instruction in Cape Town and surrounding areas. 
                High pass rates, flexible scheduling, and patient instructors.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>DVSA Approved Instructors</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>95% First-Time Pass Rate</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Flexible Lesson Times</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl">500+</div>
                <div className="text-sm text-muted-foreground">Students Passed</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630406144797-821be1f35d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2aW5nJTIwaW5zdHJ1Y3RvciUyMGNhcnxlbnwxfHx8fDE3NjAxMzAxNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Driving instructor teaching student"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl">95%</div>
                  <div className="text-sm text-muted-foreground">Pass Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
