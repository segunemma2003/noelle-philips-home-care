
import { Activity, Users, Stethoscope, Heart, UserCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Skilled Nursing",
      description: "Licensed registered nurses providing comprehensive medical care including wound care, medication management, IV therapy, and health monitoring in your home.",
      features: ["Wound Care", "Medication Management", "IV Therapy", "Health Monitoring"],
      image: "homecare2.jpg"
    },
    {
      icon: Activity,
      title: "Physical Therapy",
      description: "Licensed physical therapists helping restore mobility, strength, and function through personalized treatment plans and therapeutic exercises.",
      features: ["Mobility Assessment", "Strength Training", "Balance & Fall Prevention", "Pain Management", "Post-Injury Rehabilitation", "Adaptive Equipment Training"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: UserCheck,
      title: "Occupational Therapy",
      description: "Occupational therapists focused on helping patients regain independence in daily activities and improve quality of life.",
      features: ["Activities of Daily Living", "Cognitive Assessment", "Home Safety Evaluation", "Adaptive Equipment", "Energy Conservation", "Fine Motor Skills Training"],
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Heart,
      title: "Home Health Aide",
      description: "Compassionate home health aides providing personal care assistance and support with daily living activities.",
      features: ["Personal Care Assistance", "Bathing & Grooming", "Light Housekeeping", "Meal Preparation", "Companionship", "Transportation Assistance"],
      image: "homecare.jpg"
    },
    {
      icon: Users,
      title: "Social Worker",
      description: "Licensed social workers providing psychosocial support, resource coordination, and advocacy for patients and families.",
      features: ["Psychosocial Assessment", "Resource Coordination", "Family Counseling", "Discharge Planning", "Community Resources", "Crisis Intervention"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
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
            className="inline-flex items-center text-healthcare-primary hover:text-healthcare-secondary mb-8 group transition-colors animate-fade-in"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Comprehensive Services
            </h1>
            <p className="text-xl text-healthcare-neutral max-w-3xl mx-auto">
              We provide a full range of home healthcare services delivered by licensed professionals 
              to support your health and independence in the comfort of your own home.
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
                        <IconComponent className="h-6 w-6 text-healthcare-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-healthcare-neutral mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-healthcare-neutral">
                          <div className="w-2 h-2 bg-healthcare-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Coordinated Care Section */}
          <div className="mt-16 bg-blue-900 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Coordinated Care Approach
            </h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Our interdisciplinary team works together to create a comprehensive care plan 
              tailored to your specific needs, ensuring seamless coordination between all services 
              for optimal health outcomes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
