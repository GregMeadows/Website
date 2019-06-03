import { useEffect, FunctionComponent } from 'react';
import { useLocation } from './Routing';

export const ScrollToTop: FunctionComponent = () => {
  const  { pathname, search } = useLocation();

  useEffect(() => {
    try {
      // Smooth scrolling
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);
  
  return null;
};