import dynamic from 'next/dynamic';
import { ShieldCheck, Leaf, Droplets, BadgeDollarSign, Search, Handshake, FlaskConical } from 'lucide-react';
import { Button, IconCircle, Reveal, SectionHeading } from '@/components/ui';

const ThreeHeroScene = dynamic(() => import('@/components/ThreeHeroScene'), { ssr: false });

const pillars = [
  { t: 'Authentic Korean Products', d: 'We focus on trusted Korean skincare brands and verified sourcing so customers can choose with confidence.', i: ShieldCheck },
  { t: 'Ingredient-Screened Selection', d: 'We review ingredients for acne risk, irritation triggers, fragrance sensitivity, and skin-type fit.', i: FlaskConical },
  { t: 'Halal-Aware Curation', d: 'We communicate halal-conscious, vegan, cruelty-free, and animal-derived ingredient data where available.', i: Leaf },
  { t: 'Selected for Pakistani Skin Needs', d: 'Curation aligned to sun exposure, humidity, heat, sensitive skin, and sunscreen comfort.', i: Droplets },
  { t: 'Fair and Competitive Pricing', d: 'Safe skincare should be accessible through practical and fair pricing.', i: BadgeDollarSign }
];

export default function Home() {
  return (
    <main>
      <header className='sticky top-0 z-50 border-b border-forest/10 bg-cream/85 backdrop-blur'>
        <nav className='container-x section flex h-20 items-center justify-between'>
          <span className='font-serif text-2xl'>A Zero Circle</span>
          <div className='hidden gap-8 text-sm md:flex'>{['Home', 'About', 'Ingredient Index', 'Partners', 'Contact'].map((x) => <a key={x} href={`#${x.toLowerCase().replace(/ /g, '-')}`}>{x}</a>)}</div>
          <Button href='#partners'>Partner With Us</Button>
        </nav>
      </header>

      <section id='home' className='section overflow-hidden bg-mint py-16 md:py-24'>
        <div className='container-x grid items-center gap-12 lg:grid-cols-2'>
          <Reveal>
            <p className='mb-4 text-xs uppercase tracking-[0.25em] text-forest/80'>Women-led Korean skincare platform in Pakistan</p>
            <h1 className='font-serif text-5xl leading-tight md:text-7xl'>Safe Korean Skincare, Selected for Pakistan</h1>
            <p className='mt-6 max-w-xl text-lg text-muted'>Authentic Korean skincare products from trusted and established brands, carefully screened for ingredients, halal-conscious concerns, skin suitability, and everyday Pakistani skincare needs.</p>
            <p className='mt-5 text-sm text-forest'>Authentic sourcing • Ingredient-screened • Halal-aware • Women-led</p>
            <div className='mt-8 flex flex-wrap gap-3'><Button href='#curation'>Explore Our Curation</Button><Button href='#partners' secondary>Partner With Us</Button></div>
          </Reveal>
          <Reveal delay={0.1}><ThreeHeroScene /></Reveal>
        </div>
      </section>

      <section className='section py-20'><div className='container-x'><SectionHeading id='about' title='K-beauty is loved in Pakistan. But buying it safely is still confusing.' desc='Many customers worry about fake products, unclear ingredients, high prices, sensitive skin reactions, animal-derived ingredients, and whether a product actually suits Pakistani skin, weather, and lifestyle.' /><SectionHeading title='We make Korean skincare easier to trust.' desc='Before recommending a product, we look at authenticity, ingredient lists, acne and irritation risks, halal-conscious concerns, skin-type suitability, and value for money.' /></div></section>

      <section className='section bg-white py-20'><div className='container-x'><SectionHeading title='Why A Zero Circle?' /><div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>{pillars.map((p, i) => <Reveal key={p.t} delay={i * 0.06}><article className='rounded-3xl border border-forest/10 bg-gradient-to-b from-white to-mint/20 p-6'><IconCircle><p.i size={20} /></IconCircle><h3 className='font-serif text-2xl'>{p.t}</h3><p className='mt-3 text-muted'>{p.d}</p></article></Reveal>)}</div></div></section>

      <section id='curation' className='section bg-cream py-20'><div className='container-x'><SectionHeading title='Korean skincare for real Pakistani routines' /><div className='grid gap-6 lg:grid-cols-3'><div className='rounded-3xl bg-pale p-8 lg:col-span-2'><p className='text-xs uppercase tracking-[0.2em] text-forest'>Curation Preview</p><h3 className='mt-3 font-serif text-3xl'>Sunscreens, Barrier Repair, Hydration & Glow</h3><p className='mt-3 text-muted'>Placeholder image area for <code>/public/images/korean-skincare-products.jpg</code>.</p></div><div className='space-y-3'>{['Sunscreens', 'Acne & Pore Care', 'Brightening & Pigmentation', 'Barrier Repair', 'Hydration & Glow'].map((x) => <div key={x} className='rounded-2xl border border-forest/10 bg-white px-5 py-4'>{x}</div>)}</div></div></div></section>

      <section className='section bg-forest py-20 text-center text-white'><div className='container-x'><p className='mx-auto max-w-4xl font-serif text-3xl md:text-5xl'>“Our mission is to make Korean skincare in Pakistan easier to trust, easier to understand, and easier to choose.”</p><p className='mt-4 text-mint'>Founder, A Zero Circle</p></div></section>

      <section className='section py-20'><div className='container-x grid gap-10 lg:grid-cols-2'><div><SectionHeading title='Built by a mom. Built for more women to rise.' desc='A Zero Circle is a women-led skincare business started by a stay-at-home mom with a clear purpose: safer Korean skincare choices and more opportunities for women.' /><p className='text-muted'>We believe business should create confidence, income, and independence in Pakistan’s growing beauty economy.</p></div><div className='rounded-3xl border border-forest/10 bg-pale p-8'>Placeholder for <code>/public/images/women-led-founder.jpg</code></div></div></section>

      <section className='section bg-mint py-20'><div className='container-x'><SectionHeading title='Backed by T&M Co.' desc='A Zero Circle is part of T&M Co., with nearly a decade of experience supporting businesses across retail, imports, technology, and 360-degree product services.' /></div></section>

      <section id='partners' className='section py-20'><div className='container-x rounded-3xl border border-forest/10 bg-white p-10'><SectionHeading title='A trusted Pakistan launch partner for Korean skincare brands' desc='We help partner brands enter Pakistan with authentic sourcing, inclusive messaging, ingredient transparency, halal-conscious communication, and customer education.' /><div className='flex items-center gap-3 text-forest'><Handshake size={18} /><span>Partner ready for brands, vendors, and collaborators.</span></div><div className='mt-6'><Button>Partner With A Zero Circle</Button></div></div></section>

      <section id='ingredient-index' className='section py-20'><div className='container-x rounded-[2rem] bg-gradient-to-br from-forest to-botanical p-10 text-white'><div className='flex items-start gap-3'><Search className='mt-1' /><div><h2 className='font-serif text-4xl'>Coming Soon: A Zero Circle Ingredient Index</h2><p className='mt-4 max-w-3xl text-mint'>Search products, understand ingredients, check acne/irritation flags, compare concerns, and review halal-conscious notes with less confusion and more transparency.</p></div></div></div></section>

      <section className='section py-20 text-center'><div className='container-x'><h2 className='font-serif text-4xl md:text-5xl'>Korean skincare should feel safe, clear, and trustworthy.</h2><p className='mx-auto mt-4 max-w-3xl text-muted'>A better way to discover Korean skincare in Pakistan — authentic sourcing, ingredient transparency, halal-aware curation, and a women-led purpose.</p><div className='mt-8 flex justify-center gap-3'><Button>Explore Our Curation</Button><Button secondary href='#contact'>Stay Connected</Button></div></div></section>

      <footer id='contact' className='section bg-forest py-14 text-mint'><div className='container-x'><p className='font-serif text-2xl text-white'>A Zero Circle</p><p className='mt-3 max-w-3xl text-sm'>A Zero Circle is a women-led Korean skincare platform in Pakistan, focused on authentic products, ingredient-screened curation, halal-conscious product awareness, and safer skincare education.</p><div className='mt-6 flex flex-wrap gap-4 text-sm'>{['Privacy Policy', 'Terms', 'About', 'Ingredient Index', 'Partner With Us', 'Contact', 'Instagram', 'WhatsApp'].map((x) => <a key={x} href='#'>{x}</a>)}</div><p className='mt-6 text-xs'>A Zero Circle is part of T&M Co. © A Zero Circle. All rights reserved.</p></div></footer>
    </main>
  );
}
