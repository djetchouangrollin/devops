// import React, { useState } from 'react';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: 'Accueil', to: 'hero' },
//     { name: 'À propos', to: 'about' },
//     { name: 'Expérience', to: 'experience' },
//     { name: 'Projets', to: 'projects' },
//     { name: 'Compétences', to: 'skills' },
//     { name: 'Formation', to: 'education' },
//     { name: 'Contact', to: 'contact' },
//   ];

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="navbar-content">
//           <div className="logo">
//             <Link to="hero" smooth={true} duration={500}>
//               <span className="logo-text">Portfolio</span>
//             </Link>
//           </div>

//           <div className={`nav-links ${isOpen ? 'active' : ''}`}>
//             {navItems.map((item) => (
//               <Link
//                 key={item.to}
//                 to={item.to}
//                 smooth={true}
//                 duration={500}
//                 className="nav-link"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           <button
//             className={`hamburger ${isOpen ? 'active' : ''}`}
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar; 