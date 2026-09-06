'use client';
import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {

    console.log('reveal effect ran, found:', document.querySelectorAll('.reveal').length);
    const elements = document.querySelectorAll('.reveal');
    if (elements.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}