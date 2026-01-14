import { useState, useEffect } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  // show button when page is scrolled to top
  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // make scrolling smooth
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  });

  return <></>;
}

export default App;
