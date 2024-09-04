// import { appleImg, bagImg, searchImg } from '../utils';
// import { navLists } from '../constants';

// const Navbar = () => {
//   return (
//     <header>
//       <nav>
//         <img src={appleImg} alt="Apple" width={14} height={18} />

//         <div>
//           {navLists.map((nav) => (
//             <div key={nav}>
//               {nav}
//             </div>
//           ))}
//         </div>

//         <div>
//           <img src={searchImg} alt="search" width={18} height={18} />
//           <img src={bagImg} alt="bag" width={18} height={18} />
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Navbar;
import React from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header
      style={{
        width: '100%',
        padding: '20px 0', // This replaces 'py-5'
        paddingLeft: '20px', // This replaces 'px-5'
        paddingRight: '20px', // This replaces 'px-5'
        paddingLeft: '40px', // This replaces 'sm:px-10' on small screens (you'll need to handle this in CSS or JS for responsive behavior)
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <nav
        style={{
          display: 'flex',       // Equivalent to `flex`
          width: '100%',         // Equivalent to `w-full`
          maxWidth: '1440px',    // This is a placeholder; replace with the actual value for `screen-max-width`
          margin: '0 auto'       // Centering the content horizontally (common for max-width layouts)
        }}
      >
        <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
          <img src={appleImg} alt="Apple" width={20} height={25} />
        </a>

        <div
          style={{
            // display: 'flex',          // Equivalent to `flex`
            flexGrow: 1,              // Equivalent to `flex-1`
            justifyContent: 'center', // Equivalent to `justify-center`
            display: window.innerWidth < 640 ? 'none' : 'flex', // Equivalent to `max-sm:hidden`
          }}
        >
          {navLists.map((nav, index) => (
            <a
              key={index}
              href={
                index === 0 ? 'https://www.apple.com/store' :
                  index === 1 ? 'https://www.apple.com/mac' :
                    index === 2 ? 'https://www.apple.com/shop/buy-iphone' :
                      index === 3 ? 'https://support.apple.com/' :
                        `#${nav.toLowerCase().replace(/\s+/g, '-')}` // Default link if no condition is met
              }
              style={{
                paddingLeft: '20px',    // Equivalent to `px-5`
                paddingRight: '20px',   // Equivalent to `px-5`
                fontSize: '18px',       // Equivalent to `text-sm`
                cursor: 'pointer',      // Equivalent to `cursor-pointer`
                color: '#86868b',       // Equivalent to `text-gray`, using your Tailwind gray color
                textDecoration: 'none', // Removes underline
                transition: 'all 0.3s ease',  // Equivalent to `transition-all`
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} // Change text color to white on hover
              onMouseLeave={(e) => e.currentTarget.style.color = '#86868b'} // Revert to gray when not hovered
            >
              {nav}
            </a>
          ))}
        </div>


        <div
          style={{
            display: 'flex',          // Equivalent to `flex`
            alignItems: 'baseline',   // Equivalent to `items-baseline`
            gap: '28px',              // Equivalent to `gap-7`
            justifyContent: window.innerWidth < 640 ? 'flex-end' : 'flex-start', // Equivalent to `max-sm:justify-end`
            flexGrow: window.innerWidth < 640 ? 1 : 0, // Equivalent to `max-sm:flex-1`
          }}
        >
          <img src={searchImg} alt="search" width={20} height={20} />
          <img src={bagImg} alt="bag" width={20} height={20} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar