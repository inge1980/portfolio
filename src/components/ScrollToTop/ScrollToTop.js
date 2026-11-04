import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop({ skipOnBack = false }) {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (skipOnBack && navigationType === "POP") return;

    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, skipOnBack, navigationType]);

  return null;
}
