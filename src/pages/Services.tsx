
import { Activity, Brain, Stethoscope, Thermometer, Users, Shield, Clipboard, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Skilled Nursing",
      description: "Comprehensive wound care, medication management, and IV therapy delivered by licensed professionals.",
      features: ["Wound Care", "Medication Management", "IV Therapy", "Health Monitoring"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Activity,
      title: "Rehabilitation Therapy",
      description: "Physical, occupational, and speech therapy to help restore independence and improve quality of life.",
      features: ["Physical Therapy", "Occupational Therapy", "Speech Therapy", "Recovery Planning"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Thermometer,
      title: "Chronic Disease Management",
      description: "Specialized care for diabetes, CHF, COPD, and other chronic conditions with ongoing support.",
      features: ["Diabetes Care", "Heart Failure Management", "COPD Support", "Regular Monitoring"],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Brain,
      title: "Neurological & Orthopedic Care",
      description: "Specialized support for neurological conditions and orthopedic recovery needs.",
      features: ["Stroke Recovery", "Brain Injury Care", "Joint Replacement", "Mobility Support"],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Shield,
      title: "Post-Surgical Care",
      description: "Comprehensive post-operative care and rehabilitation to ensure safe, effective recovery.",
      features: ["Incision Care", "Pain Management", "Recovery Monitoring", "Rehabilitation"],
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Clipboard,
      title: "Health Education",
      description: "Patient and family education programs to promote understanding and self-care abilities.",
      features: ["Disease Education", "Medication Training", "Lifestyle Coaching", "Family Support"],
      image: "https://images.unsplash.com/photo-1559757175-7a4ea0e8ea42?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group transition-colors animate-fade-in"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Comprehensive Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer assistance with personal care, household tasks, and the ongoing management 
              of a wide range of health conditions with dignity and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/90 rounded-full p-3">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
