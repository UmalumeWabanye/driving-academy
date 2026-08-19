import { Card } from './ui/card';
import { Car, Users, Gauge, Award, Clock, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: Car,
    title: 'Manual Lessons',
    description: 'Learn to drive with a manual transmission for complete control and flexibility.',
    price: 'From R30/hour',
    features: ['Experienced instructors', 'Modern vehicles', 'Flexible scheduling']
  },
  {
    icon: Gauge,
    title: 'Automatic Lessons',
    description: 'Easier learning experience with automatic transmission vehicles.',
    price: 'From R35/hour',
    features: ['Latest auto cars', 'Quick learning', 'Ideal for beginners']
  },
  {
    icon: Users,
    title: 'Intensive Courses',
    description: 'Fast-track your learning with our intensive driving courses.',
    price: 'From R600/week',
    features: ['Pass in 1-2 weeks', 'Test included', 'Guaranteed progress']
  },
  {
    icon: Award,
    title: 'Pass Plus',
    description: 'Advanced skills training for newly qualified drivers.',
    price: 'From R250',
    features: ['Insurance discounts', 'Motorway training', 'Night driving']
  },
  {
    icon: Clock,
    title: 'Refresher Courses',
    description: 'Get back on the road with confidence after a break from driving.',
    price: 'From R35/hour',
    features: ['Confidence building', 'No pressure', 'Custom pace']
  },
  {
    icon: MapPin,
    title: 'Test Preparation',
    description: 'Focused preparation for your practical driving test.',
    price: 'From R40/hour',
    features: ['Mock tests', 'Test routes', 'Examiner tips']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
            <span className="text-sm">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-muted-foreground">
            From complete beginners to experienced drivers, we have the perfect course for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {service.description}
                    </p>
                    <div className="text-primary mb-4">{service.price}</div>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
