import React from 'react';

import sagar from './assets/sagar.jpg';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className={`navbar`}>
      <img
        className='navbar__logo'
        src='https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=21'
        alt='Netflix Logo'
      />
      <a
        href='https://github.com/sagarkb'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className='navbar__avatar' src={sagar} alt='Sagar' />
      </a>
    </div>
  );
};

export default NavBar;

// import React, { Component } from 'react';

// import sagar from './assets/sagar.jpg';
// import './NavBar.css';

// class NavBar extends Component {
//   state = { show: false };
//   componentDidMount() {
//     window.addEventListener('scroll', () => {
//       if (window.scrollY > 100) {
//         this.setState({ show: true });
//         console.log('jhdsja');
//       } else {
//         this.setState({ show: false });
//       }
//     });
//   }
//   componentWillUnmount() {
//     window.removeEventListener('scroll');
//   }

//   render() {
//     return (
//       <div className={`navbar${this.state.show && 'navbar__black'}`}>
//         <img
//           className='navbar__logo'
//           src='https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=21'
//           alt='Netflix Logo'
//         />
//         <a href='https://github.com/sagarkb' target='_blank'>
//           <img className='navbar__avatar' src={sagar} alt='Sagar' />
//         </a>
//       </div>
//     );
//   }
// }

// export default NavBar;
