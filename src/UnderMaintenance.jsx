import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './UnderMaintenance.css';

const UnderMaintenance = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
      class: 'is-reveal',
    });
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className="under-maintenance-scroll">
      <div className="under-maintenance-container">
        <div className="maintenance-bg" />
        <div className="maintenance-content" data-scroll data-scroll-speed="2">
          <div className="maintenance-icon-wrapper fade-in">
            {/* Animated SVG Gear Icon */}
            <svg className="maintenance-gear" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <circle cx="32" cy="32" r="14" stroke="#fff" strokeWidth="4" fill="rgba(255,255,255,0.08)" />
                <g className="gear-rotor">
                  <path d="M32 10V2" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M32 62V54" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M54 32H62" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M2 32H10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M48.28 15.72L53.14 10.86" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M10.86 53.14L15.72 48.28" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M48.28 48.28L53.14 53.14" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M10.86 10.86L15.72 15.72" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                </g>
              </g>
            </svg>
          </div>
          <h1 className="fade-in">Website Under Maintenance</h1>
          <p className="fade-in" data-scroll data-scroll-delay="0.1">
            We are currently performing scheduled maintenance.<br />
            Please check back soon. Thank you for your patience!
          </p>
          <a href="mailto:info@agiledge.eu" className="maintenance-btn fade-in" data-scroll data-scroll-delay="0.2">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnderMaintenance; 