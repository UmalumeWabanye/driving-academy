import { Shield, Star, Calendar, UserCheck, Trophy, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'DVSA Approved',
    description: 'All our instructors are fully qualified and DVSA approved with years of experience.'
  },
  {
    icon: Star,
    title: 'High Pass Rate',
    description: '95% of our students pass their test on the first attempt with our proven methods.'
  },
  {
    icon: Calendar,
    title: 'Flexible Booking',
    description: 'Book lessons at times that suit you, including evenings and weekends.'
  },
  {
    icon: UserCheck,
    title: 'Patient Instructors',
    description: 'Our friendly instructors create a comfortable learning environment for all students.'
  },
  {
    icon: Trophy,
    title: 'Modern Vehicles',
    description: 'Learn in well-maintained, modern vehicles equipped with the latest safety features.'
  },
  {
    icon: Heart,
    title: 'Student Focused',
    description: 'Personalized lessons tailored to your learning pace and individual needs.'
  }
];

export function Features() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
            <span className="text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Portsmouth's Trusted Driving School
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to helping you become a safe, confident driver.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
