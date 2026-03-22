import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Button } from '../ui/button';
import LOGO from '../../../public/assets/images/LOGO.png'
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations'
import { useEffect } from 'react';
import { useUserContext } from '@/context/AuthContext';
import '../../App.css';

const Topbar = () => {
    const { mutate: signOut, isSuccess } = useSignOutAccount();
    const navigate = useNavigate();
    const { user } = useUserContext();
    console.log(user)

    useEffect(() => {
        if (isSuccess) navigate(0);
    }, [isSuccess])

    const location = useLocation();

    const navLinks = [
        { to: '/', label: 'Astrology' },
        { to: '/calender', label: 'Calender' },
        { to: '/guidence', label: 'Guidence' },
        { to: '/love-percentage-finder', label: 'Love Compatilibilty' },
    ];




    return (
        <>


            <section className="topbar1 fixed left-0 right-0 top-0 z-[1000]">
                <div className="bg-[#0f141b]  flex items-center gap-[135px] py-4 px-10 w-[auto] mt-[0px]">

                    <Link to="/" className="flex gap-3 items-center">
                        <img className='h-[48px] w-[auto] ml-[80px] '
                            src={LOGO}
                            alt="logo"
                            width={160}
                            height={40}
                        />

                    </Link>
                     

                    <div className="link-container flex gap-[40px]">
                        {navLinks.map(link => {
                            const isActive = location.pathname === link.to;
                            return (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`p-[5px] rounded-[9px] no-underline hover:no-underline focus:no-underline   ${isActive ? 'bg-[#0a8edc29]' : 'hover:bg-[#0a8edc29]'
                                        }`}
                                    style={{
                                        color: 'rgb(120 120 163 / var(--tw-text-opacity))',
                                        fontSize: '18px',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="flex gap-4 bg-[#0a8edc29] p-[5px] rounded-[9px] no-underline hover:no-underline" title='LogOut'>
                        <Button variant="ghost" className="shad-button_ghost cursor-pointer" onClick={() => signOut()}>
                            <img src="/assets/icons/logout.svg" alt="logout" />
                        </Button>
                        <Link to={`/profile/${user.id}`} className="flex-center gap-3" title='Profile '>
                            <img
                                src={user.imageUrl || '/assets/icons/profile-placeholder.svg'}
                                alt="profile"
                                className='h-10 w-10 rounded-full' />
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Topbar


// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="App">
//       {/* 3D Background Elements */}
//       <div className="bg-3d-element"></div>
//       <div className="bg-3d-element"></div>
//       <div className="bg-3d-element"></div>
      
//       {/* Navigation Bar */}
//       <nav className="fixed top-0 w-full z-50 glass">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold gradient-text">Codec</h1>
//             </div>
            
//             {/* Navigation Links */}
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#home" className="text-white hover:text-blue-200 transition-colors duration-300">Home</a>
//               <a href="#features" className="text-white hover:text-blue-200 transition-colors duration-300">Features</a>
//               <a href="#about" className="text-white hover:text-blue-200 transition-colors duration-300">About</a>
//               <a href="#contact" className="text-white hover:text-blue-200 transition-colors duration-300">Contact</a>
//             </div>
            
//             {/* Auth Buttons */}
//             <div className="flex items-center space-x-4">
//               <button className="px-4 py-2 text-white border border-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
//                 Login
//               </button>
//               <button className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-blue-50 transition-all duration-300 font-medium">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//         <div className="text-center z-10">
//           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
//               Welcome to{' '}
//               <span className="gradient-text typing-animation">Codec</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
//               Master coding challenges, solve complex problems, and enhance your programming skills 
//               with our interactive platform designed for developers of all levels.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="btn-primary px-8 py-4 text-white rounded-lg text-lg font-semibold">
//                 Start Coding Now
//               </button>
//               <button className="px-8 py-4 text-white border-2 border-white rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Why Choose Codec?
//             </h2>
//             <p className="text-xl text-white/80 max-w-2xl mx-auto">
//               Our platform offers everything you need to excel in programming
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Feature Card 1 */}
//             <div className="glass rounded-xl p-8 card-hover">
//               <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-4">Interactive Challenges</h3>
//               <p className="text-white/80 leading-relaxed">
//                 Solve real-world coding problems with our interactive challenge system. 
//                 Get instant feedback and learn from detailed explanations.
//               </p>
//             </div>

//             {/* Feature Card 2 */}
//             <div className="glass rounded-xl p-8 card-hover">
//               <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-4">Learn & Practice</h3>
//               <p className="text-white/80 leading-relaxed">
//                 Access comprehensive tutorials, practice problems, and track your progress 
//                 with detailed analytics and performance insights.
//               </p>
//             </div>

//             {/* Feature Card 3 */}
//             <div className="glass rounded-xl p-8 card-hover">
//               <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-4">Community</h3>
//               <p className="text-white/80 leading-relaxed">
//                 Join a vibrant community of developers. Share solutions, 
//                 discuss problems, and learn from peers around the world.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 About Codec
//               </h2>
//               <p className="text-xl text-white/80 leading-relaxed mb-6">
//                 Codec is more than just a coding platform. We're building a community 
//                 where developers can grow, learn, and excel together. Our mission is to 
//                 make programming education accessible, interactive, and enjoyable for everyone.
//               </p>
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-white mb-2">10K+</div>
//                   <div className="text-white/60">Active Users</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-white mb-2">500+</div>
//                   <div className="text-white/60">Coding Challenges</div>
//                 </div>
//               </div>
//             </div>
//             <div className="glass rounded-xl p-8">
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-white">Multiple Languages</h3>
//                     <p className="text-white/70">Support for Python, JavaScript, Java, C++, and more</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-white">Real-time Execution</h3>
//                     <p className="text-white/70">Run your code instantly and see results immediately</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-white">Progress Tracking</h3>
//                     <p className="text-white/70">Monitor your learning journey with detailed analytics</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 relative">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Ready to Start Coding?
//           </h2>
//           <p className="text-xl text-white/80 mb-8">
//             Join thousands of developers who are already improving their skills with Codec
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="btn-primary px-8 py-4 text-white rounded-lg text-lg font-semibold">
//               Get Started Free
//             </button>
//             <button className="px-8 py-4 text-white border-2 border-white rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 glass">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <p className="text-white/60">
//               © 2024 Codec. All rights reserved. Built with ❤️ for developers.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App; 