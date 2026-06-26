import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-surface border-b-4 border-primary h-20 flex items-center justify-between px-6 md:px-12 shadow-sm z-50 sticky top-0">
      <div className="flex gap-6 md:gap-10 text-foreground font-bold">
        <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
        <Link href="/ingesta" className="hover:text-primary transition-colors">Fábrica CX</Link>
        <Link href="/tracking" className="hover:text-primary transition-colors">Rastreador</Link>
        <Link href="/trazabilidad" className="hover:text-primary transition-colors">Auditoría</Link>
      </div>
      <div className="flex items-center bg-white rounded-lg p-2">
        <Image 
          src="/Mibanco-1.png" 
          alt="Mibanco Logo" 
          width={160} 
          height={50} 
          className="object-contain" 
          priority
        />
      </div>
    </header>
  );
}
