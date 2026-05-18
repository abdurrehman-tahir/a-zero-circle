'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export const Button = ({children, secondary=false, href='#'}:{children:React.ReactNode;secondary?:boolean;href?:string;}) => (
  <a href={href} className={clsx('inline-flex rounded-full px-7 py-3 text-sm font-medium transition', secondary ? 'border border-forest text-forest hover:bg-mint' : 'bg-forest text-white hover:bg-botanical')}>{children}</a>
);

export const Card = ({title,body,delay=0}:{title:string;body:string;delay?:number}) => (
  <motion.article initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay}} className='rounded-3xl border border-forest/10 bg-white p-6'>
    <div className='mb-4 h-11 w-11 rounded-full bg-pale' aria-hidden />
    <h3 className='font-serif text-2xl'>{title}</h3><p className='mt-3 text-muted'>{body}</p>
  </motion.article>
);

export const SectionHeading = ({id,title,desc}:{id:string;title:string;desc?:string}) => <div id={id} className='mb-10'><h2 className='font-serif text-4xl md:text-5xl'>{title}</h2>{desc&&<p className='mt-4 max-w-3xl text-muted'>{desc}</p>}</div>;
