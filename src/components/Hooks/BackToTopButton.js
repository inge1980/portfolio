import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { animateScroll as scroll } from "react-scroll";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 20);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  };

  return (
    <Button
      onClick={scrollToTop}
      variant="contained"
      color="success"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: visible ? "block" : "none",
      }}
      aria-label="Back to top"
    >
      <ArrowUpwardIcon />
    </Button>
  );
};

export default BackToTop;