
import { CheckCircle, Users, Award, Heart } from "lucide-react";

const About = () => {
  const qualifications = [
    "In-depth professional reference checks",
    "Nationwide criminal background screening", 
    "Verification of all relevant licenses and certifications",
    "Current CPR certification (for nursing professionals)",
    "Pre-employment physical examination and TB screening",
    "Skills and competency assessments tailored to their role"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Our Commitment */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our Commitment to Care
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Noelle & Philips Home Health, we are dedicated to supporting individuals and families 
              with compassionate, personalized care in the comfort of their own homes. Whether you need 
              a short break through respite care, occasional support with daily living, or simply a 
              caring companion, our team is here to help.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to deliver care that honors dignity, promotes independence, and enhances 
              quality of life — one home, one family, one person at a time.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Dignity</h3>
                <p className="text-sm text-gray-600">Honoring every person</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Independence</h3>
                <p className="text-sm text-gray-600">Promoting autonomy</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="Healthcare professional caring for patient"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Our Team Standards */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-blue-600" />
                <h3 className="text-3xl font-bold text-gray-900">Our Dedicated Team</h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                At Noelle & Philips Home Health, we take pride in our staff's quality, integrity, 
                and professionalism. Each team member is carefully selected through a comprehensive 
                screening process to ensure they meet our high standards of care and compassion.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence begins with our people — because we believe those who 
                care for others should be held to the highest standard.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Every team member successfully completes:
              </h4>
              
              {qualifications.map((qualification, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{qualification}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement Highlight */}
        <div className="mt-20 text-center">
          <div className="bg-blue-900 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              "Our commitment is to provide individualized, skilled home healthcare that nurtures 
              the body, mind and spirit — while earning the trust of families and strengthening 
              communities across Texas."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
