"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const mockCampaigns = [
  {
    id: "CMP-NV-092",
    name: "Campaña Navidad 2026",
    desc: "Pieza principal (SMS y Email) para créditos estacionales.",
    date: "26 Jun 2026",
    progress: 100,
    status: "Aprobado",
    risk: "Bajo",
  },
  {
    id: "CMP-CT-045",
    name: "Capital de Trabajo MYPE",
    desc: "Mailing dirigido a clientes recurrentes con pre-aprobado.",
    date: "24 Jun 2026",
    progress: 60,
    status: "En Revisión",
    risk: "Medio",
  },
  {
    id: "CMP-CR-012",
    name: "Guion Prevención Mora",
    desc: "Actualización de guion para Contact Center.",
    date: "20 Jun 2026",
    progress: 100,
    status: "Aprobado",
    risk: "Bajo",
  },
  {
    id: "CMP-LD-088",
    name: "Landing Page DPF",
    desc: "Depósitos a Plazo Fijo - Campaña Digital. Rechazado por tasa no visible.",
    date: "15 Jun 2026",
    progress: 30,
    status: "Rechazado",
    risk: "Alto",
  },
  {
    id: "CMP-SE-102",
    name: "Seguro Protección Total",
    desc: "Folleto informativo para agencias físicas.",
    date: "10 Jun 2026",
    progress: 100,
    status: "Aprobado",
    risk: "Bajo",
  },
  {
    id: "CMP-AG-004",
    name: "Campaña Agropecuario",
    desc: "Difusión por radio local y afiches en ferias agrarias.",
    date: "05 Jun 2026",
    progress: 85,
    status: "En Revisión",
    risk: "Medio",
  },
  {
    id: "CMP-CC-021",
    name: "Renovación Tarjeta de Crédito",
    desc: "Aviso de actualización de tasas y comisiones.",
    date: "01 Jun 2026",
    progress: 10,
    status: "Rechazado",
    risk: "Alto",
  },
  {
    id: "CMP-DM-055",
    name: "Día de la Madre - Crédito",
    desc: "Postales y banners para redes sociales (Facebook/Instagram).",
    date: "20 May 2026",
    progress: 100,
    status: "Aprobado",
    risk: "Bajo",
  },
  {
    id: "CMP-VE-077",
    name: "Campaña Vehicular Taxi",
    desc: "Financiamiento GNV/GLP para sector transporte.",
    date: "12 May 2026",
    progress: 100,
    status: "Aprobado",
    risk: "Bajo",
  },
  {
    id: "CMP-ES-033",
    name: "Campaña Escolar",
    desc: "Crédito para útiles escolares y pensiones.",
    date: "15 Feb 2026",
    progress: 100,
    status: "Aprobado",
    risk: "Bajo",
  }
];

export default function PanelPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
            <a href="#" className="flex items-center gap-3 px-6 py-3 border-l-2 border-secondary text-primary font-bold bg-surface-container/30 transition-all text-xs">
              <span className="material-symbols-outlined text-[18px]">dashboard</span>
              Panel de Control
            </a>
            <Link href="/historial" className="flex items-center gap-3 px-6 py-3 border-l-2 border-transparent text-on-surface-variant hover:text-primary transition-all text-xs">
              <span className="material-symbols-outlined text-[18px] opacity-70">history</span>
              Historial / Trazabilidad
            </Link>
            <a href="#" className="flex items-center gap-3 px-6 py-3 border-l-2 border-transparent text-on-surface-variant hover:text-primary transition-all text-xs">
              <span className="material-symbols-outlined text-[18px] opacity-70">description</span>
              Plantillas Aprobadas
            </a>
            
            <p className="text-[10px] text-outline mb-2 px-6 mt-6 font-bold tracking-widest uppercase">CONFIGURACIÓN</p>
            <a href="#" className="flex items-center gap-3 px-6 py-3 border-l-2 border-transparent text-on-surface-variant hover:text-primary transition-all text-xs">
              <span className="material-symbols-outlined text-[18px] opacity-70">settings</span>
              Ajustes de Agentes
            </a>
            <a href="#" className="flex items-center gap-3 px-6 py-3 border-l-2 border-transparent text-on-surface-variant hover:text-primary transition-all text-xs">
              <span className="material-symbols-outlined text-[18px] opacity-70">shield_person</span>
              Reglas Indecopi
            </a>
          </div>

          <div className="p-4 border-t border-outline-variant">
            <div className="flex items-center gap-3 px-2">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xs">
                CX
              </div>
              <div className="flex-1">
                <p className="font-bold text-xs text-on-surface">Equipo CX</p>
                <Link href="/" className="text-[10px] text-outline hover:text-error transition-colors cursor-pointer">Cerrar Sesión</Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Contenido Principal */}
        <main className="flex-1 flex flex-col relative overflow-y-auto bg-surface">
          <div className="absolute inset-0 bunting-pattern pointer-events-none opacity-20 z-0"></div>
          
          {/* Header Superior del Main */}
          <header className="bg-surface/90 backdrop-blur-md border-b border-outline-variant p-4 px-8 flex justify-between items-center z-30 sticky top-0">
            <div>
              <h1 className="font-headline-md text-xl font-black text-on-surface">Bienvenido, Equipo CX</h1>
              <p className="text-xs text-on-surface-variant">Gestiona y analiza tus piezas comunicacionales con IA.</p>
            </div>
            
            {/* BOTÓN NUEVA PIEZA (Amarillo Mibanco y texto Verde Mibanco) */}
            <Link href="/ingesta" className="bg-secondary-container hover:opacity-90 text-primary font-bold text-xs py-2 px-5 rounded-full transition-all flex items-center gap-2 shadow-sm active:scale-95">
              <span className="material-symbols-outlined text-[16px]">add_circle</span>
              Nueva Pieza
            </Link>
          </header>

          {/* Listado de Campañas */}
          <div className="p-6 md:px-10 z-10 max-w-5xl w-full mx-auto flex flex-col gap-4">
            
            <div className="flex justify-between items-end mb-2">
              <h2 className="font-headline-md text-lg font-bold text-on-surface">Proyectos Recientes</h2>
              <div className="relative w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[16px]">search</span>
                <input 
                  type="text" 
                  placeholder="Buscar campaña..." 
                  className="w-full pl-9 pr-4 py-1.5 rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-xs outline-none transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {mockCampaigns.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
                <div key={index} className="bg-surface-container-lowest rounded-lg p-3 border border-outline-variant hover:shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3 hover:border-primary transition-all group">
                  
                  {/* Info Básica */}
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`p-2 rounded-md ${
                      item.status === 'Aprobado' ? 'bg-success/10 text-success' :
                      item.status === 'En Revisión' ? 'bg-warning/10 text-warning' :
                      'bg-error/10 text-error'
                    }`}>
                      <span className="material-symbols-outlined text-[18px]">
                        {item.status === 'Aprobado' ? 'task_alt' : item.status === 'En Revisión' ? 'pending_actions' : 'error'}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex gap-3 mt-0.5 items-center">
                        <span className="font-mono text-[10px] font-bold text-outline bg-surface-container px-1.5 py-0.5 rounded">
                          {item.id}
                        </span>
                        <span className="text-[10px] text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">calendar_today</span>
                          {item.date}
                        </span>
                        <p className="text-[11px] text-on-surface-variant line-clamp-1 max-w-[200px] border-l border-outline-variant pl-3 ml-1 hidden md:block">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progreso y Acciones */}
                  <div className="flex items-center gap-6 w-full md:w-auto">
                    <div className="w-24 hidden md:block">
                      <div className="w-full bg-surface-container-high rounded-full h-1 overflow-hidden mt-1">
                        <div 
                          className={`h-1 rounded-full ${item.progress === 100 ? 'bg-success' : 'bg-primary'}`}
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <Link href={item.id === "CMP-NV-092" ? "/tracking" : "#"} className="text-primary font-bold text-xs flex items-center gap-1 hover:underline whitespace-nowrap">
                      Detalles
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </main>

      </div>
    </div>
  );
}
