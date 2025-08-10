// src/components/ScrollArrow.jsx
import React, { useState, useEffect } from 'react';

function ScrollArrow() {
  const [isVisible, setIsVisible] = useState(true);

  // Funkce, která po kliknutí posune stránku dolů o 90 % výšky okna
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight * 0.9, // Posun o 90 % výšky obrazovky
      behavior: 'smooth'
    });
  };

  // Tento efekt sleduje, jak daleko jsme odscrollavali, a schová šipku na konci stránky
  useEffect(() => {
    const toggleVisibility = () => {
      // Pokud je uživatel téměř na konci stránky (posledních 50px), schováme šipku
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Důležitý "úklid" po sobě, aby se předešlo chybám
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  return (
    <>
      {isVisible && (
        <div 
          className="floating-scroll-arrow" 
          onClick={handleScroll}
          aria-label="Scroll down"
        >
          <i className="bi bi-chevron-down"></i>
        </div>
      )}
    </>
  );
}

export default ScrollArrow;