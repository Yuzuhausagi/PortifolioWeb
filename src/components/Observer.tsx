"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface ObserverProps {
  children: React.ReactNode;
  threshold?: number;
}

const Observer: React.FC<ObserverProps> = ({ children, threshold }) => {
  const { ref, inView } = useInView({
    threshold: threshold || 0.5, // trigger when 50% of the element is in view
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`transition duration-1000 ease-in-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default Observer;
