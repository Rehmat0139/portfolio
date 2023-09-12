import { useEffect } from 'react';

function ScrollProgress() {
  useEffect(() => {
    const scrollProgress = document.getElementById("scroll-progress");

    if (scrollProgress) {
      const updateScrollProgress = () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + "%";
      };

      window.addEventListener("scroll", updateScrollProgress);

      return () => {
        window.removeEventListener("scroll", updateScrollProgress);
      };
    }
  }, []);

  return null;
}

export default ScrollProgress;
