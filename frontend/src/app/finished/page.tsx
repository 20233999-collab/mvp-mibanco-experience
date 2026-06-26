"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function FinishedPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <nav className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-4 md:px-10 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img alt="Mibanco Logo" className="h-12 md:h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmssiu49Zy8zQu6aJwt2ouVEUwZKT2EENlQ-39re8WEkENKMg4sRlGKw-h56xguvnlrMceDX7d2itsqsT5anlGHr9J6EI2nBCv6S6I5QTQXeMNZoTEle-nGdY7n9qFx1_k8VPiWGxE7twh6dVOC1wGFQJ5AxklaffZAUGbACdy2oXG4lndxwYF4zlzZ21NRfUeUqo6sazMPQZiPDfmDcilN7PlxU_TP-yhiz7Ky4i1yFYISSJ9vl8IyMvrQMnecNgj1dtWMzUn41LY" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-on-surface-variant hover:text-primary transition-colors py-1 text-sm font-bold" href="/panel">Panel</Link>
          <span className="text-primary font-bold border-b-2 border-primary py-1 text-sm">Resumen Final</span>
        </div>
        <div className="flex items-center gap-4 text-primary">
          <span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-all">account_circle</span>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center relative px-4 md:px-10 py-20 min-h-[80vh] bg-surface overflow-hidden">
        {/* Confetti Background effect via CSS/images or just subtle pattern */}
        <div className="absolute inset-0 bunting-pattern pointer-events-none opacity-20 z-0"></div>
        
        <div className={`w-full max-w-2xl z-10 flex flex-col items-center text-center gap-6 transition-all duration-[800ms] ease-out transform ${isMounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
          
          <div className="relative">
            <div className="absolute inset-0 bg-success rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="w-28 h-28 bg-success/10 text-success rounded-full flex items-center justify-center mb-4 relative z-10 border-4 border-success shadow-lg">
               <span className="material-symbols-outlined text-[60px]">verified</span>
            </div>
          </div>
          
          <h1 className="font-headline-xl text-3xl md:text-5xl text-on-surface font-black">
            Piezas Analizadas y<br/>Enviadas con Éxito
          </h1>
          
          <p className="text-on-surface-variant max-w-lg mt-2 text-sm md:text-base">
            La campaña seleccionada ya ha sido optimizada por los Agentes IA, validada por el equipo de Experiencia de Cliente y enviada correctamente.
          </p>
          
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 w-full mt-6 flex flex-col gap-4 text-left shadow-sm">
             <div className="flex justify-between items-center border-b border-outline-variant pb-3">
                <span className="text-on-surface-variant text-sm font-bold">Estado Actual:</span>
                <span className="bg-success/10 text-success px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                   <span className="material-symbols-outlined text-[14px]">done_all</span> Finalizado
                </span>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                   <p className="text-outline text-[10px] font-bold uppercase tracking-wider mb-1">Impacto CX</p>
                   <p className="text-success font-black text-lg">+45%</p>
                </div>
                <div>
                   <p className="text-outline text-[10px] font-bold uppercase tracking-wider mb-1">Riesgo Legal</p>
                   <p className="text-success font-black text-lg">0%</p>
                </div>
                <div>
                   <p className="text-outline text-[10px] font-bold uppercase tracking-wider mb-1">Fricción</p>
                   <p className="text-success font-black text-lg">-60%</p>
                </div>
                <div>
                   <p className="text-outline text-[10px] font-bold uppercase tracking-wider mb-1">Tiempo IA</p>
                   <p className="text-on-surface font-black text-lg">2.4s</p>
                </div>
             </div>
          </div>

          <div className="flex gap-4 mt-8 w-full md:w-auto flex-col md:flex-row">
            <Link href="/panel" className="bg-primary hover:opacity-90 text-on-primary font-bold py-4 px-8 rounded-xl transition-all flex justify-center items-center gap-2 shadow-md w-full md:w-auto">
              <span className="material-symbols-outlined">arrow_back</span>
              Volver al Panel
            </Link>
            <button className="bg-surface border border-outline-variant text-on-surface hover:bg-surface-container font-bold py-4 px-8 rounded-xl transition-all flex justify-center items-center gap-2 shadow-sm w-full md:w-auto">
              <span className="material-symbols-outlined">download</span>
              Descargar Reporte
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
