
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">Noelle & Philips</h3>
                <p className="text-blue-400">Home Healthcare LLC</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Providing compassionate, personalized home healthcare that nurtures the body, 
              mind and spirit while earning the trust of families across Texas.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>1217 Verheyden Dr, DeSoto, TX 75115</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>(682) 218 9747</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>Fax: (469) 218-9747</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>admin@noellephilips.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
             <li>Skilled Nursing</li>
              <li>Physical Therapy</li>
              <li>Occupational Therapy</li>
              <li>Home Health Aide</li>
              <li>Social Worker</li>
            </ul>
          </div>

          {/* Contact Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div>
                <p className="font-medium">Monday - Friday</p>
                <p>8:00 AM - 5:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Weekend</p>
                <p>On-call services available</p>
              </div>
              <div className="mt-4 p-3 bg-blue-900 rounded-lg">
                <p className="text-sm text-blue-100">
                  Professional care when you need it most
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <blockquote className="text-center italic text-lg text-gray-300 max-w-4xl mx-auto">
            "Our commitment is to provide individualized, skilled home healthcare that nurtures 
            the body, mind and spirit — while earning the trust of families and strengthening 
            communities across Texas."
          </blockquote>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Noelle & Philips Home Healthcare LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
