// import { useEffect, useState } from 'react';
// import {
//   UilEstate,
//   UilUser,
//   UilFileAlt,
//   UilScenery,
//   UilMessage,
//   UilTimes,
//   UilApps,
//   UilMoon,
//   UilSun,
// } from '@iconscout/react-unicons';
// import Slide from '@mui/material/Slide';
// import '../../App.css';
// import useWindowResize from '../../hooks/useWindowResize';

// function Navbar() {
//   const { windowWidth } = useWindowResize();

//   //------------------------------------START -> MENU SHOW & HIDE-------------------------
//   const [navBarState, setNavBarState] = useState(false);

//   /*===== MENU SATE CONTROL ======*/
//   const handleClickNav = () => {
//     setNavBarState(!navBarState);
//   };

//   /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
//   useEffect(() => {
//     const sections = document.querySelectorAll('section[id]');

//     function scrollActive() {
//       const scrollY = window.pageYOffset;

//       sections.forEach((current) => {
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 50;
//         const sectionId = current.getAttribute('id');

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//           document
//             .querySelector('.nav__menu a[href*=' + sectionId + ']')
//             .classList.add('active-link');
//         } else {
//           document
//             .querySelector('.nav__menu a[href*=' + sectionId + ']')
//             .classList.remove('active-link');
//         }
//       });
//     }
//     window.addEventListener('scroll', scrollActive);
//   });

//   /*==================== DARK LIGHT THEME ====================*/
//   const darkTheme = 'dark-theme';
//   const currentTheme =
//     window.matchMedia &&
//     window.matchMedia('(prefers-color-scheme: light)').matches;
//   const [theme, setTheme] = useState(!currentTheme);

//   const handleTheme = () => {
//     setTheme(!theme);
//   };

//   if (theme) {
//     document.body.classList.remove(darkTheme);
//   } else {
//     document.body.classList.add(darkTheme);
//   }

//   return (
//     <header className='header' id='header'>
//       <Slide
//         direction={windowWidth >= 768 ? 'down' : 'up'}
//         in={windowWidth >= 768 ? true : navBarState}
//       >
//         <nav className='nav container'>
//           <a href='#home' className='nav__logo'>
//             Jatin
//           </a>

//           {/*==================== Menu ====================*/}
//           <div className='nav__menu' id='nav-menu'>
//             <ul className='nav__list grid'>
//               <li className='nav__item'>
//                 <a
//                   href='#home'
//                   className='nav__link active-link'
//                   onClick={handleClickNav}
//                 >
//                   <UilEstate className='nav__icon' /> Home
//                 </a>
//               </li>
//               <li className='nav__item'>
//                 <a href='#about' className='nav__link' onClick={handleClickNav}>
//                   <UilUser className='nav__icon' /> About
//                 </a>
//               </li>
//               <li className='nav__item'>
//                 <a
//                   href='#skills'
//                   className='nav__link'
//                   onClick={handleClickNav}
//                 >
//                   <UilFileAlt className='nav__icon' /> Skills
//                 </a>
//               </li>
//               <li className='nav__item'>
//                 <a
//                   href='#portfolio'
//                   className='nav__link'
//                   onClick={handleClickNav}
//                 >
//                   <UilScenery className='nav__icon' /> Portfolio
//                 </a>
//               </li>
//               <li className='nav__item'>
//                 <a
//                   href='#contact'
//                   className='nav__link'
//                   onClick={handleClickNav}
//                 >
//                   <UilMessage className='nav__icon' /> Contact Me
//                 </a>
//               </li>
//             </ul>
//             <div className='nav__close' id='nav-close' onClick={handleClickNav}>
//               <UilTimes />
//             </div>
//           </div>

//           <div className='nav__btns'>
//             {/* Theme change button */}
//             <span onClick={handleTheme}>
//               {theme ? (
//                 <UilMoon className='change-theme' id='theme-button' />
//               ) : (
//                 <UilSun className='change-theme' id='theme-button' />
//               )}
//             </span>

//             <div
//               className='nav__toggle'
//               id='nav-toggle'
//               onClick={handleClickNav}
//             >
//               <UilApps />
//             </div>
//           </div>
//         </nav>
//       </Slide>
//     </header>
//   );
// }

// export default Navbar;





import { useEffect, useState } from 'react';
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
  UilMoon,
  UilSun,
} from '@iconscout/react-unicons';
import Slide from '@mui/material/Slide';

import '../../App.css';
import useWindowResize from '../../hooks/useWindowResize';
import { AppBar, Box, IconButton, Menu, MenuItem, MenuList, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const { windowWidth } = useWindowResize();
  const [anchorNav, setAnchorNav] = useState(null);
  const openMenu = (event) => {
    setAnchorNav(event.currentTarget)
  }

  const closeMenu = (event) => {
    setAnchorNav(null)
  }
  //------------------------------------START -> MENU SHOW & HIDE-------------------------
  const [navBarState, setNavBarState] = useState(false);

  /*===== MENU SATE CONTROL ======*/
  const handleClickNav = () => {
    setNavBarState(!navBarState);
    closeMenu()

  };

  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.add('active-link');
        } else {
          document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.remove('active-link');
        }
      });
    }
    window.addEventListener('scroll', scrollActive);
  });

  /*==================== DARK LIGHT THEME ====================*/
  const darkTheme = 'dark-theme';
  const currentTheme =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches;
  const [theme, setTheme] = useState(!currentTheme);

  const handleTheme = () => {
    setTheme(!theme);
  };

  if (theme) {
    document.body.classList.remove(darkTheme);
  } else {
    document.body.classList.add(darkTheme);
  }

 
  return (
    <AppBar position='static'>
      <Toolbar >

        <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ display: { xs: 'none', md: 'flex' } }}>
          {/* icon */}
        </IconButton>
        {/* // <header className='header' id='header'> */}
        {/* <Slide
        direction={windowWidth >= 768 ? 'down' : 'up'}
        in={windowWidth >= 768 ? true : navBarState}
      > */}
        {/* <nav className='nav container'> */}


        {/*==================== Menu ====================*/}
        <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} > <a href='#home' className='nav__logo'>
          Jatin
        </a></Typography>
        <Box display={'flex'} gap={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <a
            href='#home'
            className='nav__link'
            onClick={handleClickNav}
          >
            <UilEstate className='nav__icon' /> Home
          </a>

          <a href='#about' className='nav__link' onClick={handleClickNav}>
            <UilUser className='nav__icon' /> About
          </a>

          <a
            href='#skills'
            className='nav__link'
            onClick={handleClickNav}
          >
            <UilFileAlt className='nav__icon' /> Skills
          </a>

          <a
            href='#portfolio'
            className='nav__link'
            onClick={handleClickNav}
          >
            <UilScenery className='nav__icon' /> Portfolio
          </a>

          <a
            href='#contact'
            className='nav__link'
            onClick={handleClickNav}
          >
            <UilMessage className='nav__icon' /> Contact Me
          </a>

          <div className='nav__close' id='nav-close' onClick={handleClickNav}>
            <UilTimes />
          </div>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton onClick={openMenu} size='large' edge='start' color='inherit'>
            <MenuIcon  className='nav__logo'/>
          </IconButton>
          <Menu offsetTop={10} open={Boolean(anchorNav)} sx={{ display: { xs: 'flex', md: 'none' } }}>
            <MenuList>
              <MenuItem>
                <a
                  href='#home'
                  className='nav__link'
                  onClick={handleClickNav}
                >
                  <UilEstate className='nav__icon' /> 
                </a>
              </MenuItem>
              <MenuItem>   <a href='#about' className='nav__link' onClick={handleClickNav}>
                <UilUser className='nav__icon' /> 
              </a>
              </MenuItem>
              <MenuItem>    <a
                href='#skills'
                className='nav__link'
                onClick={handleClickNav}
              >
                <UilFileAlt className='nav__icon' /> 
              </a></MenuItem>
              <MenuItem>
                <a
                  href='#portfolio'
                  className='nav__link'
                  onClick={handleClickNav}
                >
                  <UilScenery className='nav__icon' /> 
                </a>

              </MenuItem>
              <MenuItem>
                <a
                  href='#contact'
                  className='nav__link'
                  onClick={handleClickNav}
                >
                  <UilMessage className='nav__icon' /> 
                </a></MenuItem>

            </MenuList>
          </Menu>
        </Box>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ display: { xs: 'flex', md: 'none' } }}>
          {/* icon */}
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} > <a href='#home' className='nav__logo'>
          Jatin
        </a></Typography>

        <div className='nav__btns'>
          {/* Theme change button */}
          <span onClick={handleTheme}>
            {theme ? (
              <UilMoon className='change-theme' id='theme-button' />
            ) : (
              <UilSun className='change-theme' id='theme-button' />
            )}
          </span>

          {/* <div
            className='nav__toggle'
            id='nav-toggle'
            onClick={handleClickNav}
          >
            <UilApps />
          </div> */}
        </div>
      </Toolbar>



      {/* </nav> */}
      {/* </Slide> */}
      {/* // </header> */}
    </AppBar>

  );
}

export default Navbar;
