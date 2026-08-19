import { Card } from './ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Passed First Time',
    content: 'Amazing instructors! I was so nervous about learning to drive, but my instructor made me feel comfortable and confident. Passed first time with only 2 minors!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjAwNDIxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'James Cooper',
    role: 'Intensive Course',
    content: 'Completed the intensive course and passed in just 10 days! The structured approach and experienced instructor made all the difference. Highly recommend!',
    rating: 5,
    image: null
  },
  {
    name: 'Emily Watson',
    role: 'Automatic Lessons',
    content: 'Best decision choosing Portsmouth Driving School. The automatic lessons were perfect for me, and my instructor was patient and encouraging throughout.',
    rating: 5,
    image: null
  },
  {
    name: 'David Thompson',
    role: 'Refresher Course',
    content: "Hadn't driven in 5 years and was really anxious. The refresher course rebuilt my confidence completely. Now I drive regularly without any worries.",
    rating: 5,
    image: null
  },
  {
    name: 'Lucy Anderson',
    role: 'Pass Plus Graduate',
    content: 'The Pass Plus course was excellent. Learned so much about motorway driving and different road conditions. My insurance went down too!',
    rating: 5,
    image: null
  },
  {
    name: 'Michael Brown',
    role: 'Manual Transmission',
    content: 'Fantastic service from start to finish. The flexible booking system worked perfectly around my work schedule. Passed with flying colours!',
    rating: 5,
    image: null
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
            <span className="text-sm">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from our successful students.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
