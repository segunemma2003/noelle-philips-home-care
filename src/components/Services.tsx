
import { Activity, Brain, Droplets, Stethoscope, Thermometer, Users, Shield, Clipboard } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Skilled Nursing",
      description: "Comprehensive wound care, medication management, and IV therapy delivered by licensed professionals.",
      features: ["Wound Care", "Medication Management", "IV Therapy", "Health Monitoring"]
    },
    {
      icon: Activity,
      title: "Rehabilitation Therapy",
      description: "Physical, occupational, and speech therapy to help restore independence and improve quality of life.",
      features: ["Physical Therapy", "Occupational Therapy", "Speech Therapy", "Recovery Planning"]
    },
    {
      icon: Thermometer,
      title: "Chronic Disease Management",
      description: "Specialized care for diabetes, CHF, COPD, and other chronic conditions with ongoing support.",
      features: ["Diabetes Care", "Heart Failure Management", "COPD Support", "Regular Monitoring"]
    },
    {
      icon: Brain,
      title: "Neurological & Orthopedic Care",
      description: "Specialized support for neurological conditions and orthopedic recovery needs.",
      features: ["Stroke Recovery", "Brain Injury Care", "Joint Replacement", "Mobility Support"]
    },
    {
      icon: Shield,
      title: "Post-Surgical Care",
      description: "Comprehensive post-operative care and rehabilitation to ensure safe, effective recovery.",
      features: ["Incision Care", "Pain Management", "Recovery Monitoring", "Rehabilitation"]
    },
    {
      icon: Clipboard,
      title: "Health Education",
      description: "Patient and family education programs to promote understanding and self-care abilities.",
      features: ["Disease Education", "Medication Training", "Lifestyle Coaching", "Family Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer assistance with personal care, household tasks, and the ongoing management 
            of a wide range of health conditions with dignity and compassion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
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
            );
          })}
        </div>

        <div className="mt-16 bg-blue-900 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Additional Specialized Care
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="text-white">
              <Droplets className="h-12 w-12 mx-auto mb-3 text-blue-300" />
              <h4 className="font-semibold mb-2">Pain & Symptom Management</h4>
              <p className="text-blue-100 text-sm">Comprehensive comfort care</p>
            </div>
            <div className="text-white">
              <Shield className="h-12 w-12 mx-auto mb-3 text-blue-300" />
              <h4 className="font-semibold mb-2">Fall Risk Assessment</h4>
              <p className="text-blue-100 text-sm">Prevention and safety planning</p>
            </div>
            <div className="text-white">
              <Users className="h-12 w-12 mx-auto mb-3 text-blue-300" />
              <h4 className="font-semibold mb-2">Respite Care</h4>
              <p className="text-blue-100 text-sm">Support for family caregivers</p>
            </div>
            <div className="text-white">
              <Activity className="h-12 w-12 mx-auto mb-3 text-blue-300" />
              <h4 className="font-semibold mb-2">Companionship</h4>
              <p className="text-blue-100 text-sm">Caring presence and support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
