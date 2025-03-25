import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, User, Users, Phone, LayoutDashboard, Menu, X, LogIn, UserPlus, HeartPulse } from 'lucide-react';
import Home from './pages/Home.js';
import Patients from './pages/Patients';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

const NavLink = ({ to, icon, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex items-center px-4 py-2 rounded-md transition-colors ${
        isActive 
          ? 'bg-blue-100 text-blue-700 font-medium' 
          : 'hover:bg-gray-100 hover:text-blue-600'
      }`}
    >
      {icon}
      <span className="ml-2">{children}</span>
    </Link>
  );
};

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <HeartPulse className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">MediCare</span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
                <NavLink to="/" icon={<HomeIcon size={18} />}>Home</NavLink>
                <NavLink to="/dashboard" icon={<LayoutDashboard size={18} />}>Dashboard</NavLink>
                <NavLink to="/patients" icon={<Users size={18} />}>Patients</NavLink>
                <NavLink to="/doctors" icon={<User size={18} />}>Doctors</NavLink>
                <NavLink to="/contact" icon={<Phone size={18} />}>Contact</NavLink>
              </nav>
              
              {/* Authentication Links */}
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/login" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center">
                  <LogIn size={16} className="mr-1" /> Login
                </Link>
                <Link to="/register" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 flex items-center">
                  <UserPlus size={16} className="mr-1" /> Register
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link to="/" className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-blue-600">
                <HomeIcon size={18} className="mr-2" /> Home
              </Link>
              <Link to="/dashboard" className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-blue-600">
                <LayoutDashboard size={18} className="mr-2" /> Dashboard
              </Link>
              <Link to="/patients" className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-blue-600">
                <Users size={18} className="mr-2" /> Patients
              </Link>
              <Link to="/doctors" className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-blue-600">
                <User size={18} className="mr-2" /> Doctors
              </Link>
              <Link to="/contact" className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-blue-600">
                <Phone size={18} className="mr-2" /> Contact
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-2 space-y-1">
                <Link to="/login" className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-blue-600">
                  <LogIn size={18} className="mr-2" /> Login
                </Link>
                <Link to="/register" className="flex items-center px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 mt-2">
                  <UserPlus size={18} className="mr-2" /> Register
                </Link>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex items-center">
                <HeartPulse className="h-6 w-6 text-blue-600" />
                <span className="ml-2 text-gray-900 font-medium">MediCare</span>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-sm text-gray-500">
                  &copy; {new Date().getFullYear()} MediCare Hospital Management. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;