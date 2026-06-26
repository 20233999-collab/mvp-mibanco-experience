"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ExternalTrackingPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [searchId, setSearchId] = useState("WSP-COB-041");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 800);
  };

  return (
    <div className="min-h-screen bg-surface-dim font-sans selection:bg-primary/20">
      
      {/* Top Navbar Pública (Sin cuenta) */}
      <nav className="bg-surface border-b border-outline-variant flex items-center justify-center md:justify-between w-full px-4 md:px-10 py-4 sticky top-0 z-50">
        <img alt="Mibanco Logo" className="h-10 md:h-12 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmssiu49Zy8zQu6aJwt2ouVEUwZKT2EENlQ-39re8WEkENKMg4sRlGKw-h56xguvnlrMceDX7d2itsqsT5anlGHr9J6EI2nBCv6S6I5QTQXeMNZoTEle-nGdY7n9qFx1_k8VPiWGxE7twh6dVOC1wGFQJ5AxklaffZAUGbACdy2oXG4lndxwYF4zlzZ21NRfUeUqo6sazMPQZiPDfmDcilN7PlxU_TP-yhiz7Ky4i1yFYISSJ9vl8IyMvrQMnecNgj1dtWMzUn41LY" />
        <div className="hidden md:flex items-center gap-2 text-on-surface-variant bg-surface-container px-4 py-2 rounded-full border border-outline-variant text-xs font-bold">
           <span className="material-symbols-outlined text-[16px]">visibility</span>
           Visor Público de Campañas
        </div>
      </nav>

      <main className="flex flex-col items-center justify-start w-full px-4 py-8 md:py-12 relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bunting-pattern pointer-events-none opacity-20 z-0"></div>

        <div className={`w-full max-w-xl z-10 flex flex-col gap-6 transition-all duration-[800ms] ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Buscador Público */}
          <form onSubmit={handleSearch} className="w-full relative shadow-md">
            <input 
              type="text" 
              placeholder="Ingresa el ID de tu campaña (Ej: WSP-COB-041)" 
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="w-full bg-surface border-2 border-primary/20 focus:border-primary text-on-surface font-bold py-4 px-6 pr-14 rounded-2xl outline-none transition-all shadow-sm"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
          </form>

          {isSearching ? (
             <div className="py-20 flex flex-col items-center gap-4 text-primary animate-pulse">
                <span className="material-symbols-outlined text-4xl animate-spin">sync</span>
                <p className="font-bold">Buscando ticket...</p>
             </div>
          ) : (
            <>
              {/* Tarjeta Principal de Seguimiento (Estilo Rappi) */}
              <div className="bg-surface border border-outline-variant rounded-3xl overflow-hidden shadow-lg">
                
                {/* Cabecera del Ticket */}
                <div className="bg-primary/10 p-6 border-b border-primary/20 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 opacity-10">
                     <span className="material-symbols-outlined text-[120px] text-primary">local_shipping</span>
                  </div>
                  <h1 className="text-2xl font-black text-on-surface mb-1">Campaña Recordatorio WSP</h1>
                  <p className="text-sm text-primary font-bold tracking-widest uppercase mb-4">ID: {searchId}</p>
                  
                  <div className="flex items-center gap-4 text-sm font-bold text-on-surface-variant">
                    <span className="flex items-center gap-1 bg-surface py-1 px-3 rounded-lg border border-outline-variant shadow-sm">
                      <span className="material-symbols-outlined text-[16px] text-primary">timer</span>
                      SLA: 2h 15m
                    </span>
                    <span className="flex items-center gap-1 bg-surface py-1 px-3 rounded-lg border border-outline-variant shadow-sm">
                      <span className="material-symbols-outlined text-[16px] text-[#D97706]">person</span>
                      Turno: M. Álvarez (CX)
                    </span>
                  </div>
                </div>

                {/* Mapa de Estado (Delivery Timeline) */}
                <div className="p-8 pb-10">
                  <h2 className="font-bold text-on-surface-variant uppercase tracking-wider text-xs mb-6 text-center">Progreso en Tiempo Real</h2>

                  {/* Estado Principal Animado */}
                  <div className="flex flex-col items-center justify-center mb-10">
                     <div className="relative">
                        <div className="absolute inset-0 bg-[#D97706] rounded-full blur-xl opacity-30 animate-pulse"></div>
                        <div className="w-24 h-24 bg-[#FEF3C7] text-[#D97706] border-4 border-[#F59E0B] rounded-full flex items-center justify-center shadow-lg relative z-10 animate-bounce">
                           <span className="material-symbols-outlined text-[48px]">rate_review</span>
                        </div>
                     </div>
                     <h3 className="font-black text-xl text-on-surface mt-4 text-center">
                        En revisión por un humano
                     </h3>
                     <p className="text-sm text-on-surface-variant mt-1 text-center max-w-xs">
                        La IA ya hizo su magia. Ahora el equipo de CX está dándole el visto bueno final.
                     </p>
                  </div>

                  {/* Línea de Tiempo Vertical */}
                  <div className="flex flex-col gap-6 relative ml-4 md:ml-10">
                    
                    {/* Línea conectora base */}
                    <div className="absolute left-4 top-4 bottom-8 w-1 bg-surface-container-high -z-10 rounded-full"></div>
                    {/* Línea conectora activa */}
                    <div className="absolute left-4 top-4 h-[50%] w-1 bg-primary -z-10 rounded-full"></div>

                    {/* Paso 1: Recepción */}
                    <div className="flex gap-4 items-start relative opacity-60">
                      <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shrink-0 z-10 border-4 border-surface shadow-sm">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </div>
                      <div className="mt-1">
                        <p className="font-bold text-sm text-on-surface line-through">Recepción de Solicitud</p>
                        <p className="text-xs text-on-surface-variant">El documento fue recibido desde Negocios.</p>
                      </div>
                    </div>

                    {/* Paso 2: IA */}
                    <div className="flex gap-4 items-start relative opacity-60">
                      <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shrink-0 z-10 border-4 border-surface shadow-sm">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </div>
                      <div className="mt-1">
                        <p className="font-bold text-sm text-on-surface line-through">Procesamiento IA Mibanco</p>
                        <p className="text-xs text-on-surface-variant">Tono, claridad y fricción optimizados en 2.4s.</p>
                      </div>
                    </div>

                    {/* Paso 3: Actual */}
                    <div className="flex gap-4 items-start relative">
                      <div className="w-9 h-9 rounded-full bg-[#F59E0B] text-white flex items-center justify-center shrink-0 z-10 border-4 border-surface shadow-md">
                        <span className="material-symbols-outlined text-[16px] animate-spin">sync</span>
                      </div>
                      <div className="mt-1 bg-surface-container-lowest border border-[#F59E0B]/30 p-3 rounded-xl shadow-sm">
                        <p className="font-bold text-sm text-[#D97706]">Revisión Especializada (CX)</p>
                        <p className="text-xs text-on-surface-variant font-medium">
                          El especialista está revisando la propuesta de la IA. Te notificaremos si hay algún comentario.
                        </p>
                      </div>
                    </div>

                    {/* Paso 4: Pendiente */}
                    <div className="flex gap-4 items-start relative opacity-40">
                      <div className="w-9 h-9 rounded-full bg-surface-container-high border-2 border-outline flex items-center justify-center shrink-0 z-10">
                        <span className="material-symbols-outlined text-[16px] text-outline">gavel</span>
                      </div>
                      <div className="mt-1">
                        <p className="font-bold text-sm text-on-surface">Auditoría Legal Indecopi</p>
                        <p className="text-xs text-on-surface-variant">Pendiente de verificación de riesgos.</p>
                      </div>
                    </div>

                    {/* Paso 5: Pendiente */}
                    <div className="flex gap-4 items-start relative opacity-40">
                      <div className="w-9 h-9 rounded-full bg-surface-container-high border-2 border-outline flex items-center justify-center shrink-0 z-10">
                        <span className="material-symbols-outlined text-[16px] text-outline">rocket_launch</span>
                      </div>
                      <div className="mt-1">
                        <p className="font-bold text-sm text-on-surface">Pieza Aprobada</p>
                        <p className="text-xs text-on-surface-variant">Lista para envío a clientes.</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Banner Inferior Informativo */}
                <div className="bg-surface-container-low p-4 flex items-center gap-3 text-sm text-on-surface-variant border-t border-outline-variant">
                  <span className="material-symbols-outlined text-outline">info</span>
                  <p className="flex-1">Esta vista se actualiza automáticamente. Recibirás un correo cuando el proceso finalice.</p>
                </div>
              </div>

              {/* Botón Volver Emulado */}
              <div className="w-full text-center mt-4">
                 <Link href="/" className="text-primary font-bold hover:underline text-sm flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">home</span>
                    Regresar al Inicio Público
                 </Link>
              </div>
            </>
          )}

        </div>
      </main>
    </div>
  );
}
