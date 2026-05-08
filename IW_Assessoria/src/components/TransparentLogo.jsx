import React, { useEffect, useRef, useState } from 'react';

/**
 * TransparentLogo Component
 * Dynamically removes backgrounds from PNG logos using Canvas API.
 * Makes all non-background pixels pure white for a premium uniform look.
 */
const processedCache = {};

const TransparentLogo = ({ src, type = 'light', className = "", removeGreen = false }) => {
  const [processedSrc, setProcessedSrc] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const cacheKey = `${src}_${removeGreen}`;
    if (processedCache[cacheKey]) {
      setProcessedSrc(processedCache[cacheKey]);
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      
      canvas.width = img.width;
      canvas.height = img.height;
      
      ctx.drawImage(img, 0, 0);
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Smart Background Detection
      // We assume the pixel at (0,0) is the background color.
      const bgR = data[0];
      const bgG = data[1];
      const bgB = data[2];
      const bgA = data[3];
      
      const isAlreadyTransparent = bgA === 0;
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        let shouldRemove = false;

        if (isAlreadyTransparent) {
          // If the image is already transparent, we don't need to remove background.
          // Just apply green removal if requested.
          if (removeGreen && g > r + 20 && g > b + 20) {
            shouldRemove = true;
          }
        } else {
          // Calculate color distance to background color
          const colorDistance = Math.sqrt(
            Math.pow(r - bgR, 2) + 
            Math.pow(g - bgG, 2) + 
            Math.pow(b - bgB, 2)
          );
          
          // If the pixel is close to the background color, remove it
          if (colorDistance < 60) {
            shouldRemove = true;
          }
          
          // Also remove green if requested
          if (removeGreen && g > r + 20 && g > b + 20) {
            shouldRemove = true;
          }
        }

        if (shouldRemove || a === 0) {
          data[i + 3] = 0; // Set alpha to 0
        } else {
          // Force remaining pixels to white for uniformity
          data[i] = 255;
          data[i + 1] = 255;
          data[i + 2] = 255;
          data[i + 3] = 255; // Ensure visible pixels are fully opaque
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      const dataUrl = canvas.toDataURL();
      processedCache[cacheKey] = dataUrl;
      setProcessedSrc(dataUrl);
    };
  }, [src, type, removeGreen]);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {processedSrc ? (
        <img 
          src={processedSrc} 
          alt="Partner Logo" 
          className="max-w-full max-h-full object-contain transition-all duration-500"
          style={{ opacity: 0.5 }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "0.5"}
        />
      ) : (
        <div className="animate-pulse bg-white/5 w-20 h-10"></div>
      )}
    </div>
  );
};

export default TransparentLogo;
