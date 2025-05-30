import { Activity, Users, Stethoscope, Heart, UserCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Skilled Nursing",
      description: "Licensed registered nurses providing comprehensive medical care including wound care, medication management, IV therapy, and health monitoring in your home.",
      features: ["Wound Care Management", "Medication Administration", "IV Therapy & Infusions", "Health Assessment & Monitoring", "Chronic Disease Management", "Post-Surgical Care"]
    },
    {
      icon: Activity,
      title: "Physical Therapy",
      description: "Licensed physical therapists helping restore mobility, strength, and function through personalized treatment plans and therapeutic exercises.",
      features: ["Mobility Assessment", "Strength Training", "Balance & Fall Prevention", "Pain Management", "Post-Injury Rehabilitation", "Adaptive Equipment Training"]
    },
    {
      icon: UserCheck,
      title: "Occupational Therapy",
      description: "Occupational therapists focused on helping patients regain independence in daily activities and improve quality of life.",
      features: ["Activities of Daily Living", "Cognitive Assessment", "Home Safety Evaluation", "Adaptive Equipment", "Energy Conservation", "Fine Motor Skills Training"]
    },
    {
      icon: Heart,
      title: "Home Health Aide",
      description: "Compassionate home health aides providing personal care assistance and support with daily living activities.",
      features: ["Personal Care Assistance", "Bathing & Grooming", "Light Housekeeping", "Meal Preparation", "Companionship", "Transportation Assistance"]
    },
    {
      icon: Users,
      title: "Social Worker",
      description: "Licensed social workers providing psychosocial support, resource coordination, and advocacy for patients and families.",
      features: ["Psychosocial Assessment", "Resource Coordination", "Family Counseling", "Discharge Planning", "Community Resources", "Crisis Intervention"]
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
            We provide a full range of home healthcare services delivered by licensed professionals 
            to support your health and independence in the comfort of your own home.
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
  );
};

export default Services;