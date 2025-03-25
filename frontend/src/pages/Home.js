import React from 'react';
import { Bell, Calendar, User, Users, HeartPulse, Search, Menu } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
   

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Your Health Is Our Priority</h1>
              <p className="text-xl mb-6">Advanced healthcare solutions with a personalized approach.</p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100">
                  Book Appointment
                </button>
                <button className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-blue-600">
                  Find a Doctor
                </button>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
                <h3 className="text-gray-800 font-bold text-lg mb-4">Quick Appointment</h3>
                <div className="space-y-4">
                  <div className="flex bg-gray-100 p-2 rounded items-center">
                    <User className="h-5 w-5 text-gray-500 mr-2" />
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="bg-transparent w-full focus:outline-none text-gray-800" 
                    />
                  </div>
                  <div className="flex bg-gray-100 p-2 rounded items-center">
                    <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                    <input 
                      type="text" 
                      placeholder="Select Date" 
                      className="bg-transparent w-full focus:outline-none text-gray-800" 
                    />
                  </div>
                  <div className="flex bg-gray-100 p-2 rounded items-center">
                    <Users className="h-5 w-5 text-gray-500 mr-2" />
                    <select className="bg-transparent w-full focus:outline-none text-gray-800">
                      <option>Select Department</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>Orthopedics</option>
                      <option>Pediatrics</option>
                    </select>
                  </div>
                  <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <User className="h-8 w-8 text-blue-600" />, title: "Find a Doctor", description: "Locate specialists based on your needs from our network of experienced physicians." },
              { icon: <Calendar className="h-8 w-8 text-blue-600" />, title: "Appointment Booking", description: "Schedule visits online with our easy-to-use appointment system." },
              { icon: <HeartPulse className="h-8 w-8 text-blue-600" />, title: "Health Records", description: "Access your medical history and test results securely anytime." }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Specialist Doctors" },
              { number: "100K+", label: "Happy Patients" },
              { number: "15+", label: "Years Experience" },
              { number: "25+", label: "Medical Services" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <HeartPulse className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-lg font-bold">MediCare</span>
              </div>
              <p className="text-gray-400">Providing quality healthcare services for your wellbeing.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Doctors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Departments</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Cardiology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Neurology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Orthopedics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pediatrics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="text-gray-400 not-italic">
                <p>123 Medical Drive</p>
                <p>Healthville, HV 12345</p>
                <p className="mt-2">Email: info@medicare.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MediCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;