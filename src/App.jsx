// src/App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection'; // featured courses on home

// Pages (exact casing!)
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignIn from './pages/SignIn'; // registration page

// Firebase
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

export default function App() {
  const [user, setUser] = useState(null);

  // Track Firebase authentication state
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar always visible */}
      <Navbar user={user} />

      <main className="pt-16">
        <Routes>
          {/* Home page: Hero + optional Courses section */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <CoursesSection /> {/* featured courses on home */}
              </>
            }
          />

          {/* Full Courses page */}
          <Route path="/courses" element={<Courses />} />

          {/* About page */}
          <Route path="/about" element={<About />} />

          {/* Contact page */}
          <Route path="/contact" element={<Contact />} />

          {/* Authentication pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
    </div>
  );
}
