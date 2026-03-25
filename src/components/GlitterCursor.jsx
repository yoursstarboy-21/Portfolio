import { useEffect, useRef } from 'react';

export default function GlitterCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const mouse = { x: -100, y: -100 };
    let lastMouse = { x: -100, y: -100 };

    const handleMouseMove = (e) => {
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const dist = Math.hypot(mouse.x - lastMouse.x, mouse.y - lastMouse.y);
      if (dist > 3) {
        for (let i = 0; i < 2; i++) {
          particles.push({
            x: mouse.x + (Math.random() - 0.5) * 15,
            y: mouse.y + (Math.random() - 0.5) * 15,
            vx: (Math.random() - 0.5) * 0.5,
            vy: -(Math.random() * 2 + 1), // Always float upwards like bubbles
            size: Math.random() * 5 + 2,   // Larger "bubbles"
            life: 1,
            decay: Math.random() * 0.02 + 0.01,
            color: Math.random() > 0.3 ? 'rgba(0, 255, 255, ' : 'rgba(57, 255, 20, ' // Aqua and Lime
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
          continue;
        }

        // Draw glowing hollow bubbles
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.strokeStyle = p.color + p.life + ')';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        // Inner core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = p.color + (p.life * 0.5) + ')';
        ctx.fill();
        
        // Shadow/Glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color + '1)';
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
