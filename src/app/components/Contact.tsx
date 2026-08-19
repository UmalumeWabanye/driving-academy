import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
            <span className="text-sm">Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground">
            Contact us today to book your first lesson or ask any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2">Phone</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Call us anytime
                  </p>
                  <a href="tel:02392123456" className="text-primary hover:underline">
                    023 9212 3456
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Send us a message
                  </p>
                  <a href="mailto:info@portsmouthdriving.co.uk" className="text-primary hover:underline">
                    info@portsmouthdriving.co.uk
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2">Location</h3>
                  <p className="text-muted-foreground text-sm">
                    Serving Cape Town and surrounding areas
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Monday - Sunday<br />
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone">Phone</label>
                    <Input id="phone" type="tel" placeholder="Your phone number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service">Service</label>
                    <select 
                      id="service" 
                      className="w-full h-10 px-3 rounded-md border border-input bg-input-background"
                    >
                      <option>Manual Lessons</option>
                      <option>Automatic Lessons</option>
                      <option>Intensive Course</option>
                      <option>Pass Plus</option>
                      <option>Refresher Course</option>
                      <option>Test Preparation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements..." 
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
