import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'ghost';
  href?: string;
  to?: string;
  download?: boolean;
}

export default function MagneticButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  href,
  to,
  download,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.35 });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  const base = variant === 'primary' ? 'btn-primary' : 'btn-ghost';

  const motionProps = {
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    animate: { x: pos.x, y: pos.y },
    transition: { type: 'spring' as const, stiffness: 200, damping: 15, mass: 0.3 },
    className: `${base} ${className}`,
  };

  if (to) {
    // Use react-router Link via render prop pattern
    return (
      <motion.a
        ref={ref as never}
        href={to}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  if (href) {
    return (
      <motion.a
        ref={ref as never}
        href={href}
        download={download}
        target={download ? undefined : '_blank'}
        rel={download ? undefined : 'noopener noreferrer'}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as never}
      type="button"
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
