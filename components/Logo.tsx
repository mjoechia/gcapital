import Image from 'next/image';
import Link from 'next/link';
export default function Logo({ compact = false }: { compact?: boolean }) {
  return <Link href="/" className={`brand ${compact ? 'brand-compact' : ''}`} aria-label="G Capital Resource home">
    <Image src="/gcapital-logo.jpg" alt="G Capital Resource logo" width={174} height={142} priority className="brand-mark" />
    <span className="brand-caption">CAPITAL WITH PURPOSE</span>
  </Link>;
}
