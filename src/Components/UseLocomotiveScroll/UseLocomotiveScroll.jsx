import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const useLocomotiveScroll = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.scroll-container'),
      smooth: true,
      // You can add more options here if needed
    });

    // Cleanup function to destroy Locomotive Scroll instance
    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);
};

export default useLocomotiveScroll;
