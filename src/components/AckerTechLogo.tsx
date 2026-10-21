"use client";

import React from "react";

interface AckerTechLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function AckerTechLogo({ size = 120, className = "", showText = true }: AckerTechLogoProps) {
  const scaleFactor = size / 120;
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo container with blue background and rounded corners */}
      <div 
        className="relative bg-blue-600 rounded-lg flex items-center justify-center"
        style={{ 
          width: `${size * 0.8}px`, 
          height: `${size * 0.8}px`,
          minWidth: `${size * 0.8}px`
        }}
      >
        {/* Dark grey circle with AT */}
        <div 
          className="absolute bg-gray-800 rounded-full flex items-center justify-center"
          style={{ 
            width: `${size * 0.5}px`, 
            height: `${size * 0.5}px`
          }}
        >
          <span 
            className="text-white font-bold"
            style={{ fontSize: `${size * 0.2}px` }}
          >
            AT
          </span>
        </div>
      </div>
      
      {/* Text beside logo */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span 
            className="font-bold text-gray-900 dark:text-white"
            style={{ fontSize: `${size * 0.18}px` }}
          >
            Acker Tech DS
          </span>
          <span 
            className="text-gray-600 dark:text-gray-400"
            style={{ fontSize: `${size * 0.12}px` }}
          >
            Digital Solutions
          </span>
        </div>
      )}
    </div>
  );
}
