"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function AcercaPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-surface-dim font-sans selection:bg-primary/20 overflow-x-hidden">
      
      {/* Navbar Pública */}
      <nav className="bg-surface border-b border-outline-variant flex items-center justify-between w-full px-4 md:px-10 py-4 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
           <img alt="Mibanco Logo" className="h-10 md:h-12 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmssiu49Zy8zQu6aJwt2ouVEUwZKT2EENlQ-39re8WEkENKMg4sRlGKw-h56xguvnlrMceDX7d2itsqsT5anlGHr9J6EI2nBCv6S6I5QTQXeMNZoTEle-nGdY7n9qFx1_k8VPiWGxE7twh6dVOC1wGFQJ5AxklaffZAUGbACdy2oXG4lndxwYF4zlzZ21NRfUeUqo6sazMPQZiPDfmDcilN7PlxU_TP-yhiz7Ky4i1yFYISSJ9vl8IyMvrQMnecNgj1dtWMzUn41LY" />
        </div>
        <div className="flex items-center gap-4">
           <Link href="/" className="text-on-surface-variant hover:text-primary font-bold text-sm flex items-center gap-1 transition-colors">
              <span className="material-symbols-outlined text-[18px]">home</span>
              Volver al Inicio
           </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 md:px-10 flex flex-col items-center text-center bg-surface overflow-hidden border-b border-outline-variant">
        <div className="absolute inset-0 bunting-pattern pointer-events-none opacity-20"></div>
        <div className={`z-10 max-w-4xl transition-all duration-[800ms] transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-primary text-[#FDE047] font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6 shadow-sm">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            IAthon Ulima x Mibanco 2026
          </div>
          <h1 className="font-headline-xl text-4xl md:text-6xl text-on-surface font-black tracking-tight mb-6 leading-tight">
            Gobernanza y Eficiencia Operativa con <span className="text-primary">IA Generativa</span>
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto">
            Mibanco Experience transforma un proceso burocrático de días en una operación ágil de minutos, blindando el riesgo institucional mediante un orquestador centralizado y seguro.
          </p>
        </div>
      </section>

      {/* Employee Journey (Flujo Operativo) */}
      <section className="py-20 px-4 md:px-10 bg-surface-dim relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-on-surface mb-4">El Employee Journey (Flujo de Trabajo)</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Un ciclo automatizado que integra IA y control humano sin fricciones.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Paso 1 */}
            <div className="bg-surface rounded-2xl p-6 shadow-sm border border-outline-variant hover:border-primary hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">move_to_inbox</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">1. Ingesta Automática</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Extrae y ordena automáticamente textos/imágenes de correos. Asigna un ID único a cada pieza, organizando el caos de las solicitudes del área de Negocios.
              </p>
            </div>
            
            {/* Paso 2 */}
            <div className="bg-surface rounded-2xl p-6 shadow-sm border border-outline-variant hover:border-primary hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">timeline</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">2. Rastreo Público</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Visibilidad en tiempo real (Rappi-style) para áreas solicitantes. Elimina la ansiedad operativa y consultas repetitivas mostrando el SLA.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="bg-surface rounded-2xl p-6 shadow-sm border border-outline-variant hover:border-primary hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-10"></div>
              <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">3. Optimización IA</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Procesamiento paralelo por agentes especializados en tono, claridad, UX y leyes, mejorando la redacción en milisegundos.
              </p>
            </div>

            {/* Paso 4 */}
            <div className="bg-surface rounded-2xl p-6 shadow-sm border border-outline-variant hover:border-[#D97706] hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-[#FEF3C7] text-[#D97706] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">how_to_reg</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">4. Aprobación CX</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Validación humana final (Human-in-the-loop). Un panel semaforizado que deja la responsabilidad y control en manos del trabajador de Mibanco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares Tecnológicos */}
      <section className="py-20 px-4 md:px-10 bg-surface">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-10">
             <div>
                <h2 className="text-sm text-primary font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                   <span className="material-symbols-outlined">dns</span>
                   Core Tecnológico
                </h2>
                <h3 className="text-3xl md:text-4xl font-black text-on-surface leading-tight mb-4">
                  Cero Alucinaciones con Arquitectura Segura
                </h3>
                <p className="text-on-surface-variant">La plataforma cuenta con un cerebro tecnológico diseñado estrictamente para entornos financieros, donde un error cuesta millones en multas.</p>
             </div>

             {/* RAG */}
             <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E0F2FE] text-[#0284C7] rounded-full flex items-center justify-center shrink-0 mt-1">
                   <span className="material-symbols-outlined text-[24px]">shield_locked</span>
                </div>
                <div>
                   <h4 className="font-bold text-lg text-on-surface mb-1">Base de Conocimiento RAG</h4>
                   <p className="text-sm text-on-surface-variant">Conexión exclusiva a repositorios oficiales (Manual El Tigre, Tarifarios, Leyes SBS). Prohibición estricta de buscar en internet abierto para garantizar veracidad absoluta.</p>
                </div>
             </div>

             {/* Trazabilidad */}
             <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center shrink-0 mt-1">
                   <span className="material-symbols-outlined text-[24px]">gavel</span>
                </div>
                <div>
                   <h4 className="font-bold text-lg text-on-surface mb-1">Auditoría y Trazabilidad</h4>
                   <p className="text-sm text-on-surface-variant">Bitácora inalterable para Indecopi. Registra cada decisión de la IA, el borrador original, la versión final y quién aprobó la pieza de comunicación.</p>
                </div>
             </div>
          </div>

          {/* Gráfico Agentes IA */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-3xl p-8 shadow-lg relative">
             <h4 className="text-center font-bold uppercase tracking-wider text-outline mb-8 text-xs">Pipeline de Agentes IA (Tubería de Validación)</h4>
             
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-surface p-4 rounded-xl border border-outline-variant">
                   <div className="bg-[#00A159] text-white p-2 rounded-lg"><span className="material-symbols-outlined">format_paint</span></div>
                   <div>
                      <h5 className="font-bold text-sm">Agente de Claridad</h5>
                      <p className="text-[11px] text-on-surface-variant">Filtro sintáctico ISO 24495 (Lenguaje cotidiano)</p>
                   </div>
                </div>
                
                <div className="flex items-center gap-4 bg-surface p-4 rounded-xl border border-outline-variant">
                   <div className="bg-[#F59E0B] text-white p-2 rounded-lg"><span className="material-symbols-outlined">campaign</span></div>
                   <div>
                      <h5 className="font-bold text-sm">Agente de Tono</h5>
                      <p className="text-[11px] text-on-surface-variant">Inyecta personalidad empática (Voz del "Tigre")</p>
                   </div>
                </div>

                <div className="flex items-center gap-4 bg-surface p-4 rounded-xl border border-error">
                   <div className="bg-error text-white p-2 rounded-lg"><span className="material-symbols-outlined">gavel</span></div>
                   <div>
                      <h5 className="font-bold text-sm">Agente Legal (Guardrail)</h5>
                      <p className="text-[11px] text-on-surface-variant">Bloquea amenazas y métodos abusivos de cobranza</p>
                   </div>
                </div>
             </div>
             
             {/* Conector Visual */}
             <div className="absolute left-14 top-16 bottom-16 w-0.5 bg-outline-variant/30 -z-10 border-dashed border-l-2"></div>
          </div>

        </div>
      </section>

      {/* Feature Extra (Grammarly CX) */}
      <section className="py-20 px-4 md:px-10 bg-primary-container relative overflow-hidden">
        <div className="absolute inset-0 bunting-pattern pointer-events-none opacity-30 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
           <span className="material-symbols-outlined text-5xl text-on-primary-container mb-4">extension</span>
           <h2 className="text-3xl font-black text-on-primary-container mb-4">Extensión "Grammarly CX" para Asesores</h2>
           <p className="text-on-primary-container/80 mb-8 max-w-2xl">
             Para el trabajo del día a día, la plataforma incluye un asistente web inteligente que evalúa en tiempo real los mensajes redactados por WhatsApp Web. Sugiere mejoras de tono y alerta riesgos legales antes de que el asesor presione enviar.
           </p>
           <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2">
             <span className="material-symbols-outlined">download</span>
             Ver Documentación Técnica
           </button>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="bg-surface border-t border-outline-variant">
        <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-on-surface-variant">© 2024 Mibanco Experience</span>
          </div>
          <p className="text-xs text-outline font-bold">Proyecto IAthon Ulima x Mibanco - Grupo 16</p>
        </div>
      </footer>
    </div>
  );
}
