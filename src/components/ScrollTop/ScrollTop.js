import { useEffect, useState } from "react";
import { Button } from "./ScrollTopStyles";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    window.scrollTo({ top: 0 });
  };

  const checkScrollTop = () => {
    if (!visible && window.pageYOffset > 2510) {
      setVisible(true);
    } else if (visible && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    console.log("document.documentElement.scrollTop", scrolled);
    if (scrolled > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <Button
      style={{
        opacity: visible ? 0.7 : 0,
      }}
      onClick={onClick}
    >
      &#8679;
    </Button>
  );
};

export default ScrollTop;
