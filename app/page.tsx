'use client';
import dynamic from 'next/dynamic';
import { BadgeCheck, Leaf, FlaskConical, Sparkles, Sun, Search, Handshake, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button, IconCircle, Reveal, SectionHeading } from '@/components/ui';

const ThreeHeroScene = dynamic(() => import('@/components/ThreeHeroScene'), { ssr: false });

const pillars = [
  { t: 'Authentic Korean Products', d: 'Verified sourcing from trusted Korean skincare brands.', i: ShieldCheck },
  { t: 'Ingredient-Screened Selection', d: 'Screening for acne risk, irritation triggers, fragrance and fit.', i: FlaskConical },
  { t: 'Halal-Aware Curation', d: 'Halal-conscious and animal-derived ingredient notes where data exists.', i: Leaf },
  { t: 'Selected for Pakistani Skin Needs', d: 'Focused on humidity, sun exposure, barrier stress, and comfort.', i: Sun },
  { t: 'Fair and Competitive Pricing', d: 'Practical pricing for safer skincare choices.', i: BadgeCheck }
];

export default function Home() {
  return (
    <main>
      <header className='sticky top-0 z-50 border-b border-plum/10 bg-mist/80 backdrop-blur'>
        <nav className='container-x section flex h-20 items-center justify-between'>
          <span className='font-serif text-2xl text-plum'>A Zero Circle</span>
          <div className='hidden gap-8 text-sm text-plum/90 md:flex'>{['Home', 'About', 'Ingredient Index', 'Partners', 'Contact'].map((x) => <a key={x} href={`#${x.toLowerCase().replace(/ /g, '-')}`}>{x}</a>)}</div>
          <Button href='#partners'>Partner With Us</Button>
        </nav>
      </header>

      <section id='home' className='section hero-wash py-16 md:py-24'>
        <div className='container-x grid items-center gap-10 lg:grid-cols-2'>
          <Reveal>
            <p className='mb-4 text-xs uppercase tracking-[0.22em] text-violet'>women-led korean skincare platform</p>
            <h1 className='font-serif text-5xl leading-[1.02] text-plum md:text-7xl'>Safe Korean Skincare, Selected for Pakistan</h1>
            <p className='mt-6 max-w-xl text-lg text-ink/75'>Authentic Korean skincare products from trusted brands, carefully screened for ingredients, halal-conscious concerns, skin suitability, and everyday Pakistani skincare needs.</p>
            <p className='mt-4 text-sm text-plum/85'>Authentic sourcing • Ingredient-screened • Halal-aware • Women-led</p>
            <div className='mt-8 flex gap-3'><Button href='#curation'>Explore Our Curation</Button><Button secondary href='#partners'>Partner With Us</Button></div>
          </Reveal>
          <ThreeHeroScene />
        </div>
      </section>

      <section className='section py-20'><div className='container-x'><SectionHeading id='about' title='K-beauty is loved in Pakistan. But buying it safely is still confusing.' desc='Customers worry about fake products, unclear ingredients, high prices, sensitive skin reactions, animal-derived ingredients, and routine suitability.' /><SectionHeading title='We make Korean skincare easier to trust.' desc='We review authenticity, ingredient lists, acne and irritation risks, halal-conscious concerns, skin-type suitability, and value for money.' /></div></section>

      <section className='section bg-[#f4edff] py-20'><div className='container-x'><SectionHeading title='Why A Zero Circle?' /><div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>{pillars.map((p, i) => <Reveal key={p.t} delay={i * 0.05}><article className='lilac-card rounded-3xl border border-violet/20 p-6 shadow-soft'><IconCircle><p.i size={20} /></IconCircle><h3 className='font-serif text-2xl text-plum'>{p.t}</h3><p className='mt-3 text-ink/75'>{p.d}</p></article></Reveal>)}</div></div></section>

      <section id='curation' className='section bg-mist py-20'><div className='container-x grid gap-8 lg:grid-cols-2'><div><SectionHeading title='Korean skincare for real Pakistani routines' /><div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>{['Sunscreens','Acne & Pore Care','Brightening & Pigmentation','Barrier Repair','Hydration & Glow'].map((x)=><div key={x} className='rounded-2xl border border-plum/10 bg-white px-5 py-4 text-plum'>{x}</div>)}</div></div>
      <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className='rounded-[2rem] border border-white bg-gradient-to-br from-[#ffffff] via-[#f2e9ff] to-[#ddc7f8] p-7 shadow-soft'>
        <p className='text-xs uppercase tracking-[0.2em] text-violet'>Skin Transformation Story</p>
        <h3 className='mt-3 font-serif text-3xl text-plum'>From confusion to clarity</h3>
        <div className='mt-6 grid grid-cols-2 gap-4'>
          <div className='rounded-2xl bg-[#e8d9fa] p-4'><p className='text-xs text-plum/70'>Before</p><p className='mt-2 text-sm text-plum'>Guesswork, unclear ingredients, poor sunscreen comfort.</p></div>
          <div className='rounded-2xl bg-[#d7f1e1] p-4'><p className='text-xs text-forest/70'>After</p><p className='mt-2 text-sm text-forest'>Ingredient-aware choices, calmer barrier, consistent glow routine.</p></div>
        </div>
      </motion.div></div></section>

      <section className='section bg-plum py-20 text-center text-white'><div className='container-x'><p className='mx-auto max-w-4xl font-serif text-3xl md:text-5xl'>“Our mission is to make Korean skincare in Pakistan easier to trust, easier to understand, and easier to choose.”</p><p className='mt-4 text-lilac'>Founder, A Zero Circle</p></div></section>

      <section className='section py-20'><div className='container-x grid gap-8 lg:grid-cols-2'><div><SectionHeading title='Built by a mom. Built for more women to rise.' desc='A women-led skincare business started by a stay-at-home mom to create safer skincare choices and opportunity pathways for women.' /></div><div className='rounded-3xl border border-violet/20 bg-[#f5edff] p-8 text-ink/70'>Placeholder for <code>/public/images/women-led-founder.jpg</code></div></div></section>

      <section className='section bg-[#efe6fd] py-20'><div className='container-x'><SectionHeading title='Backed by T&M Co.' desc='Nearly a decade of experience across retail, imports, technology, and 360-degree product services.' /></div></section>

      <section id='partners' className='section py-20'><div className='container-x rounded-3xl border border-violet/20 bg-white p-10'><SectionHeading title='A trusted Pakistan launch partner for Korean skincare brands' desc='Local trust-building through authentic sourcing, ingredient transparency, halal-conscious communication, and customer education.' /><div className='flex items-center gap-3 text-plum'><Handshake size={18}/><span>Partner-ready for Korean brands and Pakistani vendors.</span></div><div className='mt-6'><Button>Partner With A Zero Circle</Button></div></div></section>

      <section id='ingredient-index' className='section py-20'><div className='container-x rounded-[2rem] bg-gradient-to-br from-plum to-violet p-10 text-white'><div className='flex items-start gap-3'><Search className='mt-1'/><div><h2 className='font-serif text-4xl'>Coming Soon: A Zero Circle Ingredient Index</h2><p className='mt-4 max-w-3xl text-lilac'>Search products, review ingredients, check acne and irritation flags, compare concerns, and see halal-conscious notes.</p></div></div></div></section>

      <section className='section py-20 text-center'><div className='container-x'><h2 className='font-serif text-4xl text-plum md:text-5xl'>Korean skincare should feel safe, clear, and trustworthy.</h2><p className='mx-auto mt-4 max-w-3xl text-ink/70'>A better way to discover Korean skincare in Pakistan — authentic sourcing, ingredient transparency, halal-aware curation, and a women-led purpose.</p><div className='mt-8 flex justify-center gap-3'><Button>Explore Our Curation</Button><Button secondary href='#contact'>Stay Connected</Button></div><div className='mt-8 inline-flex items-center gap-2 rounded-full bg-[#efe6fd] px-4 py-2 text-sm text-plum'><Sparkles size={16}/> glow with clarity, backed by transparency</div></div></section>

      <footer id='contact' className='section bg-plum py-14 text-lilac'><div className='container-x'><p className='font-serif text-2xl text-white'>A Zero Circle</p><p className='mt-3 max-w-3xl text-sm'>A women-led Korean skincare platform in Pakistan focused on authentic products, ingredient-screened curation, halal-conscious awareness, and safer skincare education.</p><div className='mt-6 flex flex-wrap gap-4 text-sm'>{['Privacy Policy','Terms','About','Ingredient Index','Partner With Us','Contact','Instagram','WhatsApp'].map((x)=><a key={x} href='#'>{x}</a>)}</div><p className='mt-6 text-xs'>A Zero Circle is part of T&M Co. © A Zero Circle. All rights reserved.</p></div></footer>
    </main>
  );
}
