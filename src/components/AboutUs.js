import React from "react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & Clinical Director",
      bio: "Board-certified psychiatrist with over 15 years of experience in mental health treatment and advocacy. Dr. Johnson founded MindfulMe with a vision to make mental healthcare accessible to everyone.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxEci4lMkJTYXJhaCUyQkpvaG5zb24lMkJoZWFkc2hvdHxlbnwwfHx8fDE3NDc3NDMxODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Michael Chen",
      role: "Chief Wellness Officer",
      bio: "Licensed therapist specializing in cognitive behavioral therapy and mindfulness. Michael leads our therapeutic approach and ensures all services meet the highest clinical standards.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxNaWNoYWVsJTJCQ2hlbiUyQmhlYWRzaG90fGVufDB8fHx8MTc0Nzc0MzE5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Priya Patel",
      role: "Head of Community Support",
      bio: "With a background in social work and group therapy, Priya develops our community programs and support groups to create safe, nurturing environments for healing.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxQcml5YSUyQlBhdGVsJTJCaGVhZHNob3R8ZW58MHx8fHwxNzQ3NzQzMTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "James Wilson",
      role: "Digital Experience Director",
      bio: "Combining expertise in UX design and psychology, James ensures our digital platforms are intuitive, accessible, and therapeutically effective for all users.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxKYW1lcyUyQldpbHNvbiUyQmhlYWRzaG90fGVufDB8fHx8MTc0Nzc0MzE5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    }
  ];

  const values = [
    {
      title: "Accessibility",
      description: "Mental healthcare should be available to everyone, regardless of location or circumstances.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><line x1="24" y1="224" x2="232" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="120" cy="128" r="16"/><line x1="160" y1="32" x2="160" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
    },
    {
      title: "Evidence-Based",
      description: "Our approaches are grounded in scientific research and clinical best practices.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><path d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M88,72V64a40,40,0,0,1,80,0v8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
    },
    {
      title: "Empathy",
      description: "We lead with compassion and understanding in all our interactions and services.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><path d="M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128,80c6.84-16.71,21.81-27.67,40-31.08" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M208,57.09A54,54,0,0,1,231.67,96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M223.3,136c-5.8,11.65-14.05,22.63-23.3,32.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,197.49A328.1,328.1,0,0,1,128,224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
    },
    {
      title: "Community",
      description: "Healing happens in connection with others who understand and support your journey.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><circle cx="80" cy="172" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="80" cy="60" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="176" cy="172" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="176" cy="60" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,224a60,60,0,0,1,96,0,60,60,0,0,1,96,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,112a60,60,0,0,1,96,0h0a60,60,0,0,1,96,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full mb-4">
            Our Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Making Mental Health Support <br className="hidden sm:block" />
            <span className="text-purple-600">Accessible For Everyone</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At MindfulMe, we believe that mental wellbeing is a fundamental right. Our mission is to break down barriers to mental healthcare by providing accessible, personalized, and effective support through a combination of professional therapy, community connection, and self-guided resources.
          </p>
        </div>

        {/* Vision and Story Section */}
        <div className="md:flex items-center mb-20">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision & Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2018 by Dr. Sarah Johnson, MindfulMe emerged from a simple observation: too many people were struggling alone with their mental health challenges due to barriers like cost, stigma, and lack of accessible resources.
            </p>
            <p className="text-gray-600 mb-6">
              What began as a small virtual therapy practice has evolved into a comprehensive platform that combines professional care with community support and educational resources. Our approach is both high-tech and high-touch, using technology to connect people with the human support they need.
            </p>
            <p className="text-gray-600">
              Today, we've helped over 50,000 individuals on their mental health journeys, but our vision extends further. We aim to create a world where seeking mental health support is as normal and accessible as any other form of healthcare.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxUZWFtJTJCd29ya2luZyUyQnRvZ2V0aGVyJTJCaW4lMkJvZmZpY2UlMkJlbnZpcm9ubWVudHxlbnwwfHx8fDE3NDc3NDMyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Team working together in office environment"
                className="w-full h-auto max-h-80 object-cover object-center" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-medium">Our team meeting, discussing ways to improve user experience and support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from designing our platform to interacting with our community members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of mental health professionals, community builders, and digital experts work together to create a comprehensive support system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-w-1 aspect-h-1 bg-purple-100 max-h-48">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-48 object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900">{member.name}</h4>
                  <p className="text-purple-600 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                  
                  <div className="flex mt-4 space-x-3">
                    <a href="#" className="text-gray-400 hover:text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18"><rect width="256" height="256" fill="none"/><rect x="32" y="32" width="192" height="192" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="124" y1="120" x2="124" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="84" y1="120" x2="84" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M124,148a28,28,0,0,1,56,0v28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="84" cy="80" r="16"/></svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18"><rect width="256" height="256" fill="none"/><path d="M88,176S32.85,144,40.78,56c0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24H240l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12S72,200,88,176Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#contact" className="inline-flex items-center text-purple-600 font-medium">
              Want to join our team?
              <span className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="96 112 96 160 144 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </span>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-purple-600 rounded-2xl text-white overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
              <p className="mb-8">
                Since our founding, we've been dedicated to making a meaningful difference in people's lives through accessible mental health support.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-bold">50,000+</p>
                  <p className="text-purple-200">People Supported</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">95%</p>
                  <p className="text-purple-200">Satisfaction Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-purple-200">Support Available</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">40+</p>
                  <p className="text-purple-200">Qualified Therapists</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-purple-700 p-8 md:p-12">
              <blockquote className="mb-6">
                <p className="text-xl italic mb-4">
                  "Our goal isn't just to help people through crises, but to give them the tools and support to thrive in their everyday lives."
                </p>
                <footer className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxEci4lMkJTYXJhaCUyQkpvaG5zb24lMkJzbWFsbCUyQmhlYWRzaG90fGVufDB8fHx8MTc0Nzc0MzI0N3ww&ixlib=rb-4.1.0&q=80&w=1080" 
                      alt="Dr Sarah Johnson small headshot"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Dr. Sarah Johnson</p>
                    <p className="text-sm text-purple-300">Founder & Clinical Director</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;