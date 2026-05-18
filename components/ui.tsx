'use client';
import clsx from 'clsx';
import { motion, useReducedMotion } from 'framer-motion';

export function Button({ children, href = '#', secondary = false }: { children: React.ReactNode; href?: string; secondary?: boolean }) {
  return (
    <a
      href={href}
      className={clsx(
        'inline-flex items-center rounded-full px-7 py-3 text-sm tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/50',
        secondary ? 'border border-forest/40 text-forest hover:bg-pale' : 'bg-forest text-white hover:-translate-y-0.5 hover:bg-botanical'
      )}
    >
      {children}
    </a>
  );
}

export function SectionHeading({ title, desc, id }: { title: string; desc?: string; id?: string }) {
  return (
    <div className='mb-10' id={id}>
      <h2 className='font-serif text-3xl leading-tight md:text-5xl'>{title}</h2>
      {desc ? <p className='mt-4 max-w-3xl text-muted'>{desc}</p> : null}
    </div>
  );
}

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function IconCircle({ children }: { children: React.ReactNode }) {
  return <div className='mb-4 grid h-12 w-12 place-items-center rounded-full bg-pale text-forest'>{children}</div>;
}
