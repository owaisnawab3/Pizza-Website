import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket,faBars,faCartShopping, faCross, faTruckArrowRight, faXmark,} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";


function Header() {

  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)

  const isNavigating = useRef(false);
  const targetSection = useRef(null);

  const toogleMenu = () => {
  setIsOpen(!isOpen)
}

// Create Funtion for Click Navbar

  const handleNavClick = (id) => {
      setIsOpen(false);

      isNavigating.current = true;
      targetSection.current = id;

      // URL ko imdidetily change karo
  
      window.history.replaceState(
        null,
        "",
        `#${id}`
      );

      const section = document.getElementById(id);

      if(section){
         section.scrollIntoView({
          behavior: "smooth",
          block: "start"
         });
      }

    };

 useEffect(() => {
    const handleScroll = () => {
      // if(window.screenY > 10){
      //   setIsScrolled(true)
      // } else {
      //   setIsScrolled(false)
      // }
      setIsScrolled(window.scrollY > 10)
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

 }, []);


//  Final Funtion for Active -> URL

useEffect(() => {

  // Refresh par hash remove
  window.history.replaceState(null, "", "/");

  const sections = document.querySelectorAll(".page-section");

  const handleScroll = () => {

    // Shadow
    setIsScrolled(window.scrollY > 10);


    // Top
    if (window.scrollY < 50) {
      window.history.replaceState(null, "", "/");
      return;
    }


    // let currentSection = "";

    // sections.forEach((section) => {

    //   const sectionTop = section.offsetTop - 120;
    //   const sectionBottom =
    //     sectionTop + section.offsetHeight;

    //   if (
    //     window.scrollY >= sectionTop &&
    //     window.scrollY < sectionBottom
    //   ) {
    //     currentSection = section.id;
    //   }

    // });

    let currentSection = "";

const screenMiddle = window.innerHeight / 2;

sections.forEach((section) => {

  const rect = section.getBoundingClientRect();

  if (
    rect.top <= screenMiddle &&
    rect.bottom >= screenMiddle
  ) {
    currentSection = section.id;
  }

});

    if (currentSection) {
      window.history.replaceState(
        null,
        "",
        `#${currentSection}`
      );
    }

  };


  window.addEventListener("scroll", handleScroll);


  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

}, []);



// useEffect(() => {

// const sections = document.querySelectorAll(".page-section")

// // URL Remove ho jae Refresh karnw per

// window.history.replaceState(
//   null,
//   "",
//   window.location.pathname + window.location.search
// )

// let firstLoad = true;

// const observer = new IntersectionObserver(
//   (entries) => {

//     // Agr Navbar se click kar ke navigate kar rahe hain

//     if(isNavigating.current){

//       const target = entries.find(
//         (entry) => 
//           entry.isIntersecting && 
//           entry.target === targetSection.current
//       );
//       if(target){
//         isNavigating.current = false;
//         targetSection.current = null;
//       }
//        return;
//     }
    
//     // Inital page load per URL Change mat karo
//     if(firstLoad){
//       return;
//     }
//     //Jo Section sab se ziyada visible ha usse find karo
//     const visibleSections = entries.filter(
//       (entry) => entry.isIntersecting
//     );

//     if(visibleSections.length > 0){
 
//       const currentSection = visibleSections.reduce(
//         (previous, current) => 
//           current.intersectionRatio >
//           previous.intersectionRatio
//           ? current
//           : previous
//       );
//       window.history.replaceState(
//         null, "",
//         `#${currentSection.target.id}`
//       );  
//     }

//   },
//   {
//     threshold: [0.3, 0.5, 0.7],
//     rootMargin: "-80px 0px 0px 0px", 
//   }
// );

//   sections.forEach((section) => {
//   observer.observe(section);
//   });

//   // Initial Load Complete

//   setTimeout(() => {
//     firstLoad = false;
//   }, 100);

//   //Bilkul Top se URL Remove

//   const handleScroll = () => {

//     if(
//       window.scrollY < 10 &&
//       !isNavigating.current
//     ) {
//       window.history.replaceState(
//         null,
//         "",
//         window.location.pathname + window.location.search
//        );
//     }
//   }

//   window.addEventListener(
//     "scroll", 
//     handleScroll
//   )

//   return () => {
//     sections.forEach((section) => {
//       observer.unobserve(section);
//     });

//     window.removeEventListener(
//       "scroll",
//       handleScroll
//     );
//   }

// }, [])

// useEffect(() => {

//      console.log("InterSectionObserver Effect chala");

//      const section1 = document.querySelectorAll(".page-section");

//      console.log("section", section1)

//      const observer = new IntersectionObserver(
//         (entries) => {
 
//           console.log("observer chala")

//           entries.forEach((entry) => {
//             console.log(
//               "entries",
//               entry.target.id,
//               "Intersectionobserver",
//               entry.isIntersecting
//             )
//           })
        
//         }
//      )

// }, [])

  // Active Section -> URL

  //  useEffect(() => {
    
  //   const sections = document.querySelectorAll(".page-section");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
        
  //       entries.forEach((entry) => {

  //         console.log(
  //           entry.target.id,
  //           entry.isIntersecting
  //         )

  //         console.log(document.querySelectorAll(".page-section"))


  //           if(entry.isIntersecting){
 
  //             window.history.replaceState(
  //               null, "", `#${entry.target.id}`
  //             );       
  //          } 
  //       })
  //     },
  //     {
  //       threshold: 0.5,
  //       rootMargin: "-80px 0px 0px 0px"
  //     }
  //   )
      
  //   sections.forEach((section) => {
  //     observer.observe(section)
  //   })

  //   const handlingScroll = () => {
  //     if(window.scrollY === 0){
  //       window.history.replaceState(
  //         null, "", '/'
  //       )
  //     }
  //   }

  //   window.addEventListener('scroll', handlingScroll)

  //   return () => {
  //     sections.forEach((section) => {
  //      observer.unobserve(section)
  //     })

  //    window.removeEventListener('scroll', handlingScroll)
  //   }
     
  //  }, [])


  return (

    <header className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
      isScrolled ? "shadow-sm" : "shadow-none"
    }`}>
      <nav
        id=""
        className="font-display p-5 flex justify-between items-center px-6 mx-auto lg:px-20 mx-auto md:px-10"
      >
        <div id="Logo-Section">
          <h1 id="Logo" className="text-xl font-semibold text-amber-400 cursor-pointer">
            PizzaWebsite
          </h1>
        </div>
        <div id="Nav-Links">
          <ul
            id="menu-links"
            className={`display-second gap-10 ${isOpen ? "flex" : "hidden"} 
            md:flex
            text-transform: capitalize
            flex-col md:flex-row
            gap-5 md:gap-10
            bg-white md:bg-transparent
            rounded-xl md:rounded-none
            shadow-lg md:shadow-none
            p-5 md:p-0
            w-48 md:w-auto
            items-start md:items-center
            absolute md:static
            top-14 right-0
            `}
          >
            <li>
              <a href="#home"
              onClick={() => setIsOpen(false)}
              className="font-normal hover:text-amber-400">
                home
              </a>
            </li>
            <li>
              <a href="#menu" 
              onClick={() => setIsOpen(false)}
              className="font-normal hover:text-amber-400">
                menu
              </a>
            </li>
            <li>
              <a href="#about"
               onClick={() => setIsOpen(false)}
               className="font-normal hover:text-amber-400">
                about us
              </a>
            </li>
            <li>
              <a href="#service" 
              onClick={() => setIsOpen(false)}
              className="font-normal hover:text-amber-400">
                service
              </a>
            </li>
            <li>
              <a href="#contact" 
              onClick={() => setIsOpen(false)}
              className="font-normal hover:text-amber-400">
                contacts
              </a>
            </li>
          </ul>
        </div>
        <div id="cart_button" className="flex gap-5 items-center">
          <FontAwesomeIcon className="text-lg cursor-pointer" icon={faCartShopping} />
          <button 
          onClick={() => setIsSignInOpen(true)}
          className="hidden md:block md:flex items-center gap-1 px-5 py-2 rounded-xl font-normal bg-amber-400 hover:bg-amber-400/75 text-white cursor-pointer">
            sign in
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </button>
          {isSignInOpen && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-5">
           <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            
            <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Sign In
            </h2>
             <button 
             onClick={() => setIsSignInOpen(false)}
             className="cursor-pointer">
              <FontAwesomeIcon icon={faXmark}/>
            </button>
            </div>

            <form action="">

              <div id="Email" className="mb-4">
                <label className="mb-2 block font-medium">
                  Email
                </label>
                
                <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-lg border p-3 outline-none focus:border-amber-400"
                 />
              </div>

              <div id="Password" className="">
                 <label className="mb-2 block font-medium">
                  Password
                 </label>

                 <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  className="w-full rounded-lg border p-3 outline-none focus:border-amber-400" 
                 />
              </div>

              <button
               type="submit"
               className="w-full rounded-lg bg-amber-400 py-3 font-semibold text-white hover:bg-amber-500 cursor-pointer mt-6"
               >
                Sign In
              </button>
            </form>

           </div>
          </div>
   )}
          <div className="md:hidden cursor-pointer">
          <button 
          className="md:hidden cursor-pointer top-5 right-5 z-50 p-2 bg-amber-400 text-white rounded-lg">
          <FontAwesomeIcon className="" onClick={toogleMenu} icon={faBars} />
          </button>  
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;