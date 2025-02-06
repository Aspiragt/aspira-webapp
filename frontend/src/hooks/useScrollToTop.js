import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;

export const useScrollToTop = (options = { smooth: true }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      if (options.smooth && isSmoothScrollSupported) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo(0, 0);
      }
    } catch (error) {
      // Fallback si algo falla
      window.scrollTo(0, 0);
    }
  }, [pathname, options.smooth]);
};

export const scrollToTop = () => {
  try {
    if (isSmoothScrollSupported) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  } catch (error) {
    window.scrollTo(0, 0);
  }
};
