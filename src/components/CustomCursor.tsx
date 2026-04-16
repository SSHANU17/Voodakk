import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CustomCursor() {
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const ringSpringConfig = { damping: 40, stiffness: 150 }; // Laggier config for the ring
  
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className={`fixed top-0 left-0 w-4 h-4 rounded-full bg-voodak-gold z-[9999] pointer-events-none mix-blend-difference ${
          isClicking ? 'cursor-glitch' : ''
        }`}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ scale: { type: 'spring', damping: 15, stiffness: 200 } }}
      />
      
      {/* Outer Ring with Lag */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-voodak-gold/30 rounded-full z-[9998] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 1.5 : 1,
          opacity: isClicking ? 0.5 : 1,
          borderWidth: isClicking ? '2px' : '1px',
        }}
        transition={{ 
          scale: { type: 'spring', damping: 20, stiffness: 150 },
          opacity: { duration: 0.1 }
        }}
      />

      {/* Enhanced Glitch Artifacts (only visible on click) */}
      {isClicking && (
        <>
          {/* Horizontal Glitch Bar */}
          <motion.div
            className="fixed top-0 left-0 w-16 h-[1px] bg-voodak-cyan z-[9999] pointer-events-none"
            initial={{ opacity: 0.8, scaleX: 0 }}
            animate={{ 
              opacity: [0.8, 0, 0.8],
              scaleX: [1, 1.5, 1],
              x: [0, -10, 10, 0],
            }}
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '400%',
            }}
          />
          {/* Vertical Glitch Bar */}
          <motion.div
            className="fixed top-0 left-0 w-[1px] h-16 bg-[#ff00c1] z-[9999] pointer-events-none"
            initial={{ opacity: 0.8, scaleY: 0 }}
            animate={{ 
              opacity: [0.8, 0, 0.8],
              scaleY: [1, 1.5, 1],
              y: [0, 10, -10, 0],
            }}
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '400%',
              translateY: '-50%',
            }}
          />
          {/* Diagonal Glitch Square */}
          <motion.div
            className="fixed top-0 left-0 w-3 h-3 border border-voodak-gold z-[9999] pointer-events-none"
            animate={{ 
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 2, 0.5, 1.5, 1],
              x: [-20, 20, -10, 10],
              y: [20, -20, 10, -10],
            }}
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
          />
        </>
      )}
    </>
  );
}
