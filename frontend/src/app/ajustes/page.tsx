"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function AjustesAgentesPage() {
  const [isMounted, setIsMounted] = useState(false);

  // Estado mock de los agentes en el pipeline
  const [agents, setAgents] = useState([
    {
      id: "ag-01",
      name: "Agente Legal (Guardrail)",
      role: "Filtro Cumplimiento Indecopi / SBS",
      strategy: "Zero-Shot Prompting + RAG Estricto",
      status: true,
      locked: true, // No se puede eliminar por seguridad
      color: "error" // Rojo para riesgo
    },
    {
      id: "ag-02",
      name: "Agente de Claridad",
      role: "Auditor ISO 24495 (Lenguaje Claro)",
      strategy: "Few-Shot Prompting",
      status: true,
      locked: false,
      color: "primary"
    },
    {
      id: "ag-03",
      name: "Agente de Tono (Voz de Marca)",
      role: "Arquetipo 'El Tigre' Mibanco",
      strategy: "Matriz Nielsen Norman (Nudges)",
      status: true,
      locked: false,
      color: "warning" // Amarillo
    },
    {
      id: "ag-04",
      name: "Agente UX/CX",
      role: "Estructura Visual y CTAs",
      strategy: "Patrón F de Escaneo",
      status: true,
      locked: false,
      color: "secondary" // Morado UX
    },
    {
      id: "ag-05",
      name: "Agente Demográfico",
      role: "Localización de Modismos (Costa/Sierra/Selva)",
      strategy: "RAG Glosario Cultural",
      status: false,
      locked: false,
      color: "success"
    }
  ]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleAgent = (id: string) => {
    setAgents(agents.map(ag => ag.id === id ? { ...ag, status: !ag.status } : ag));
  };

  const deleteAgent = (id: string) => {
    setAgents(agents.filter(ag => ag.id !== id));
  };

  return (
    <div className="h-screen w-full bg-surface-dim overflow-hidden">
      <div className={`flex h-full w-full transition-all duration-[800ms] ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        
        {/* Sidebar Izquierdo */}
        <aside className="w-56 bg-surface-container-lowest border-r border-outline-variant flex flex-col z-20">
          <div className="p-4 py-6 border-b border-outline-variant flex items-center justify-center">
            <img alt="Mibanco Logo" className="h-20 w-full object-contain scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmssiu49Zy8zQu6aJwt2ouVEUwZKT2EENlQ-39re8WEkENKMg4sRlGKw-h56xguvnlrMceDX7d2itsqsT5anlGHr9J6EI2nBCv6S6I5QTQXeMNZoTEle-nGdY7n9qFx1_k8VPiWGxE7twh6dVOC1wGFQJ5AxklaffZAUGbACdy2oXG4lndxwYF4zlzZ21NRfUeUqo6sazMPQZiPDfmDcilN7PlxU_TP-yhiz7Ky4i1yFYISSJ9vl8IyMvrQMnecNgj1dtWMzUn41LY" />
          </div>
          
          <div className="p-0 flex-grow flex flex-col mt-4">
            <p className="text-[10px] text-outline mb-2 px-6 font-bold tracking-widest uppercase">MENU PRINCIPAL</p>
            <Link href="/panel" className="flex items-center gap-3 px-6 py-3 border-l-2 border-transparent text-on-surface-variant hover:text-primary transition-all text-xs">
              <span className="material-symbols-outlined text-[18px] opacity-70">dashboard</span>
              Panel de Control
            </Link>
            <Link href="/historial" className="flex items-center gap-3 px-6 py-3 border-l-2 border-transparent text-on-surface-variant hover:text-primary transition-all text-xs">
              <span className="material-symbols-outlined text-[18px] opacity-70">history</span>
              Historial / Trazabilidad
            </Link>
            <a href="#" className="flex items-center gap-3 px-6 py-3 border-l-2 border-transparent text-on-surface-variant hover:text-primary transition-all text-xs">
              <span className="material-symbols-outlined text-[18px] opacity-70">description</span>
              Plantillas Aprobadas
            </a>
            
            <p className="text-[10px] text-outline mb-2 px-6 mt-6 font-bold tracking-widest uppercase">CONFIGURACIÓN</p>
            <a href="#" className="flex items-center gap-3 px-6 py-3 border-l-2 border-secondary text-primary font-bold bg-surface-container/30 transition-all text-xs">
              <span className="material-symbols-outlined text-[18px]">settings</span>
              Ajustes de Agentes
            </a>
            <a href="#" className="flex items-center gap-3 px-6 py-3 border-l-2 border-transparent text-on-surface-variant hover:text-primary transition-all text-xs">
              <span className="material-symbols-outlined text-[18px] opacity-70">shield_person</span>
              Reglas Indecopi
            </a>
          </div>
        </aside>

        {/* Contenido Principal */}
        <main className="flex-1 flex flex-col relative overflow-y-auto bg-surface custom-scrollbar">
          
          {/* Header Superior del Main */}
          <header className="bg-surface/90 backdrop-blur-md border-b border-outline-variant p-4 px-8 flex justify-between items-center z-30 sticky top-0">
            <div>
              <h1 className="font-headline-md text-xl font-black text-on-surface">Orquestador de Agentes IA</h1>
              <p className="text-xs text-on-surface-variant">Personaliza y entrena la tubería de análisis multidisplinario.</p>
            </div>
            
            <button className="bg-primary hover:opacity-90 text-white font-bold text-xs py-2 px-5 rounded-full transition-all flex items-center gap-2 shadow-md active:scale-95">
              <span className="material-symbols-outlined text-[16px]">add_circle</span>
              Crear Nuevo Agente
            </button>
          </header>

          <div className="p-6 md:px-10 z-10 w-full max-w-6xl mx-auto flex flex-col gap-6">
            
            {/* Banner de RAG Corporativo (Requerimiento) */}
            <div className="bg-[#E7F3FF] border border-[#BAE6FD] rounded-xl p-4 flex items-start gap-4 shadow-sm relative overflow-hidden">
               <div className="absolute -right-10 -top-10 opacity-10">
                  <span className="material-symbols-outlined text-[150px] text-[#0284C7]">database</span>
               </div>
               <div className="bg-[#0284C7] text-white p-2 rounded-lg flex items-center justify-center z-10 shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">shield_locked</span>
               </div>
               <div className="z-10 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                     <h2 className="font-bold text-[#0369A1] text-sm uppercase tracking-wider">Conexión Activa: Base de Datos RAG Corporativa</h2>
                     <span className="bg-[#0284C7] text-white text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider animate-pulse">Online</span>
                  </div>
                  <p className="text-xs text-[#075985] font-medium max-w-3xl leading-relaxed">
                     Todos los agentes están anclados a la arquitectura <strong>RAG (Retrieval-Augmented Generation)</strong> de Mibanco. La IA tiene estrictamente prohibido buscar en internet abierto. <strong>Cero Alucinaciones.</strong> Fuentes verificadas: <em>Manual de Marca "El Tigre", Tarifarios SBS, Leyes de Indecopi sobre Cobranza.</em>
                  </p>
               </div>
            </div>

            <div className="flex justify-between items-end mb-2 mt-4">
              <h2 className="font-headline-md text-sm font-bold uppercase tracking-wider text-outline">Pipeline de Agentes Activos</h2>
            </div>

            {/* Grid de Agentes */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {agents.map((ag) => (
                <div key={ag.id} className={`bg-surface-container-lowest border rounded-xl p-5 transition-all duration-300 relative group flex flex-col h-full ${ag.status ? 'border-outline-variant hover:border-primary hover:shadow-md' : 'border-outline-variant/30 opacity-70 grayscale-[30%]'}`}>
                  
                  {/* Etiqueta Superior */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-inner bg-${ag.color} ${ag.color === 'warning' ? 'text-on-warning bg-[#F59E0B]' : ''} ${ag.color === 'error' ? 'bg-[#DC2626]' : ''} ${ag.color === 'primary' ? 'bg-[#00A159]' : ''} ${ag.color === 'secondary' ? 'bg-[#9333EA]' : ''} ${ag.color === 'success' ? 'bg-[#16A34A]' : ''}`}>
                      <span className="material-symbols-outlined text-[20px]">
                        {ag.name.includes("Legal") ? "gavel" : ag.name.includes("Claridad") ? "format_paint" : ag.name.includes("Tono") ? "campaign" : ag.name.includes("UX") ? "touch_app" : "public"}
                      </span>
                    </div>
                    
                    {/* Toggle Activo/Inactivo */}
                    <button 
                       onClick={() => toggleAgent(ag.id)}
                       className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${ag.status ? 'bg-success' : 'bg-outline-variant'}`}
                    >
                      <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${ag.status ? 'translate-x-5' : 'translate-x-1'}`} />
                    </button>
                  </div>

                  {/* Info del Agente */}
                  <div className="flex-1">
                    <h3 className="font-bold text-on-surface text-base mb-1">{ag.name}</h3>
                    <p className="text-xs text-primary font-bold mb-3">{ag.role}</p>
                    
                    <div className="bg-surface p-2.5 rounded border border-outline-variant/50 mb-4">
                       <span className="text-[10px] text-outline font-bold uppercase tracking-wider block mb-1">Estrategia de Prompt</span>
                       <p className="text-xs text-on-surface-variant font-medium flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">psychology</span>
                          {ag.strategy}
                       </p>
                    </div>
                  </div>

                  {/* Acciones Inferiores */}
                  <div className="flex items-center justify-between border-t border-outline-variant pt-4 mt-auto">
                     <button className="text-primary hover:text-primary-container text-xs font-bold flex items-center gap-1 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">tune</span>
                        Entrenar / Ajustar
                     </button>
                     
                     {!ag.locked ? (
                        <button onClick={() => deleteAgent(ag.id)} className="text-outline hover:text-error transition-colors p-1 rounded-full hover:bg-error/10">
                           <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                     ) : (
                        <span className="text-outline text-[10px] uppercase font-bold flex items-center gap-1" title="Agente obligatorio por compliance">
                           <span className="material-symbols-outlined text-[14px]">lock</span> Core
                        </span>
                     )}
                  </div>
                </div>
              ))}
              
              {/* Tarjeta de Añadir Nuevo */}
              <div className="bg-surface-container/30 border-2 border-dashed border-outline-variant hover:border-primary rounded-xl p-5 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container group min-h-[220px]">
                 <div className="w-12 h-12 rounded-full bg-surface border border-outline-variant flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">add</span>
                 </div>
                 <h3 className="font-bold text-on-surface text-sm mb-1">Añadir Nuevo Agente</h3>
                 <p className="text-xs text-on-surface-variant max-w-[200px]">Crea una IA personalizada para evaluar un nuevo punto de vista.</p>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
