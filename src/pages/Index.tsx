
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Heart, Users, Award, Activity, Stethoscope, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const quickServices = [
    {
      icon: Stethoscope,
      title: "Skilled Nursing",
      description: "Professional wound care, medication management, and IV therapy."
    },
    {
      icon: Activity,
      title: "Rehabilitation",
      description: "Physical, occupational, and speech therapy services."
    },
    {
      icon: Brain,
      title: "Specialized Care",
      description: "Neurological and chronic disease management."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Quick Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive home healthcare solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {quickServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Link 
              to="/services"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team is carefully screened and trained to provide the highest quality care 
                in the comfort of your own home.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Compassionate Care</h4>
                    <p className="text-gray-600">Every interaction is guided by empathy and respect</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Qualified Professionals</h4>
                    <p className="text-gray-600">Licensed and certified healthcare professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                    <p className="text-gray-600">Round-the-clock availability for emergencies</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/about"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Learn More About Us →
                </Link>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80"
                alt="Healthcare professional with elderly patient"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your care needs and create a personalized plan 
            that works for you and your family.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
