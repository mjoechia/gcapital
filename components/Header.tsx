'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './Logo';
import Icon from './Icons';
const links = [{href:'/',label:'Home'},{href:'/about',label:'About Us'},{href:'/services',label:'Our Services'},{href:'/approach',label:'Our Approach'},{href:'/contact',label:'Contact'}];
export default function Header() {
  const path = usePathname(); const [open,setOpen] = useState(false);
  return <header className="site-header"><div className="nav-shell"><Logo compact/><button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open}><Icon name={open?'close':'menu'}/></button><nav className={open?'main-nav nav-open':'main-nav'} aria-label="Main navigation">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className={path===l.href?'active':''}>{l.label}</Link>)}<Link className="nav-cta" href="/contact" onClick={()=>setOpen(false)}>Start a conversation <Icon name="arrow"/></Link></nav></div></header>;
}
