
import { ArrowRight, Heart, Home, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Compassionate Care
                <span className="text-blue-600 block">In Your Home</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our commitment is to provide individualized, skilled home healthcare that nurtures the body, mind and spirit — while earning the trust of families and strengthening communities across Texas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group hover:shadow-lg hover:-translate-y-1"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center animate-scale-in" style={{ animationDelay: "200ms" }}>
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3 hover:bg-blue-200 transition-colors">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Compassionate</h3>
                <p className="text-sm text-gray-600">Caring with heart</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: "300ms" }}>
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3 hover:bg-blue-200 transition-colors">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">In-Home</h3>
                <p className="text-sm text-gray-600">Comfort of home</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: "400ms" }}>
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3 hover:bg-blue-200 transition-colors">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Professional</h3>
                <p className="text-sm text-gray-600">Expert care team</p>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1576091160549-9ca4ccb0b7c2?auto=format&fit=crop&w=800&q=80"
                alt="Elderly person receiving compassionate home healthcare"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs animate-fade-in hover:shadow-2xl transition-shadow duration-300" style={{ animationDelay: "500ms" }}>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 rounded-full p-3">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                  <p className="text-sm text-gray-600">Always here when you need us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
