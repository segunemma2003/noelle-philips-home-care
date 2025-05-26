
import { CheckCircle, Users, Award, Heart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const qualifications = [
    "In-depth professional reference checks",
    "Nationwide criminal background screening", 
    "Verification of all relevant licenses and certifications",
    "Current CPR certification (for nursing professionals)",
    "Pre-employment physical examination and TB screening",
    "Skills and competency assessments tailored to their role"
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every interaction with empathy and understanding."
    },
    {
      icon: Users,
      title: "Dignity",
      description: "We honor the worth and respect of every individual we serve."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in all aspects of care."
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
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About Our Mission
              </h1>
              <p className="text-xl text-healthcare-neutral leading-relaxed">
                At Noelle & Philips Home Health, we are dedicated to supporting individuals and families 
                with compassionate, personalized care in the comfort of their own homes.
              </p>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1576091160549-9ca4ccb0b7c2?auto=format&fit=crop&w=800&q=80"
                alt="Elderly person with caregiver"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-healthcare-primary transition-colors">
                    <IconComponent className="h-8 w-8 text-healthcare-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-healthcare-neutral">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                alt="Healthcare professional with elderly patient"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-healthcare-primary" />
                <h3 className="text-3xl font-bold text-gray-900">Our Dedicated Team</h3>
              </div>
              
              <p className="text-lg text-healthcare-neutral leading-relaxed">
                At Noelle & Philips Home Health, we take pride in our staff's quality, integrity, 
                and professionalism. Each team member is carefully selected through a comprehensive 
                screening process to ensure they meet our high standards of care and compassion.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  Every team member successfully completes:
                </h4>
                
                {qualifications.map((qualification, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-healthcare-accent mt-0.5 flex-shrink-0" />
                    <span className="text-healthcare-neutral">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-healthcare-primary">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Our Mission
          </h3>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            "Our commitment is to provide individualized, skilled home healthcare that nurtures 
            the body, mind and spirit — while earning the trust of families and strengthening 
            communities across Texas."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

