"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const metrics = [
    { label: "Piezas Analizadas", value: "3", icon: "inventory_2" },
    { label: "Score de Calidad", value: "94/100", icon: "speed" },
    { label: "Errores Detectados", value: "12", icon: "bug_report" },
    { label: "Riesgo Indecopi", value: "Medio", icon: "balance" },
    { label: "Nivel Tono Tigre", value: "Óptimo", icon: "local_fire_department" },
  ];

  return (
    <>
      {/* TopNavBar Minimalista */}
      <nav className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-4 md:px-10 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img alt="Mibanco Logo" className="h-12 md:h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmssiu49Zy8zQu6aJwt2ouVEUwZKT2EENlQ-39re8WEkENKMg4sRlGKw-h56xguvnlrMceDX7d2itsqsT5anlGHr9J6EI2nBCv6S6I5QTQXeMNZoTEle-nGdY7n9qFx1_k8VPiWGxE7twh6dVOC1wGFQJ5AxklaffZAUGbACdy2oXG4lndxwYF4zlzZ21NRfUeUqo6sazMPQZiPDfmDcilN7PlxU_TP-yhiz7Ky4i1yFYISSJ9vl8IyMvrQMnecNgj1dtWMzUn41LY" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-on-surface-variant hover:text-primary transition-colors py-1 text-sm font-bold" href="/panel">Panel</Link>
          <span className="text-primary font-bold border-b-2 border-primary py-1 text-sm">Dashboard CX</span>
        </div>
        <div className="flex items-center gap-4 text-primary">
          <span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-all">account_circle</span>
        </div>
      </nav>

      {/* Main Content Layout */}
      <main className={`flex-grow flex flex-col items-center justify-start relative px-4 md:px-10 py-10 min-h-[80vh] bg-surface transition-all duration-[800ms] ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="w-full max-w-6xl z-10 flex flex-col gap-10">
          
          {/* Header Minimalista */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-outline-variant pb-6">
            <div>
              <p className="text-sm font-bold text-outline uppercase tracking-wider mb-1">Campaña CMP-NV-092</p>
              <h1 className="font-headline-xl text-3xl md:text-4xl text-on-surface font-black">
                Resultados del Análisis
              </h1>
            </div>
            <div className="flex gap-3">
              <button className="border border-outline-variant text-on-surface-variant hover:bg-surface-container font-bold text-sm py-2 px-6 rounded-full transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">download</span>
                Reporte PDF
              </button>
              <Link href="/tracking" className="bg-primary hover:opacity-90 text-on-primary font-bold text-sm py-2 px-6 rounded-full transition-all flex items-center gap-2 mibanco-shadow active:scale-95">
                Generar Código Único
                <span className="material-symbols-outlined text-[18px]">qr_code</span>
              </Link>
            </div>
          </div>

          {/* Sección Superior: Gráfico de Pastel y 5 Métricas Clave */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Pie Chart (Minimalista) */}
            <div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 flex flex-col items-center justify-center">
              <h3 className="font-bold text-sm text-on-surface-variant uppercase tracking-wide mb-6 w-full text-center">Estado General</h3>
              
              <div 
                className="w-40 h-40 rounded-full mb-8 relative flex items-center justify-center shadow-inner" 
                style={{ background: "conic-gradient(#00A159 0% 65%, #FFB81C 65% 90%, #E23D28 90% 100%)" }}
              >
                {/* Hueco central para hacer un "Donut Chart" minimalista */}
                <div className="w-24 h-24 bg-surface-container-lowest rounded-full absolute flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-on-surface">65%</span>
                  <span className="text-[9px] text-outline font-bold">ÓPTIMAS</span>
                </div>
              </div>
              
              <div className="w-full flex flex-col gap-3 text-xs font-bold text-on-surface-variant">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00A159' }}></span> Aprobado
                  </div>
                  <span>65%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFB81C' }}></span> Observado
                  </div>
                  <span>25%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E23D28' }}></span> Crítico
                  </div>
                  <span>10%</span>
                </div>
              </div>
            </div>

            {/* 5 Métricas Clave */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {metrics.map((m, idx) => (
                <div key={idx} className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 flex flex-col justify-between hover:border-primary transition-colors group">
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors mb-4">{m.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-on-surface mb-1">{m.value}</span>
                    <span className="text-[11px] text-on-surface-variant font-bold uppercase tracking-wider">{m.label}</span>
                  </div>
                </div>
              ))}
              
              {/* Sexta caja "Dummy" para cuadrar el grid de 3 columnas (opcional, o un resumen rápido) */}
              <div className="bg-primary-container/20 border border-primary/20 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-2">auto_awesome</span>
                <span className="text-sm font-bold text-primary">Análisis Completado en 4.2s</span>
              </div>
            </div>

          </div>

          {/* Sección Inferior: Hallazgos Minimalistas */}
          <div>
            <h2 className="font-headline-md text-xl font-bold text-on-surface mb-6">
              Principales Hallazgos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Feedback 1 */}
              <div className="border border-outline-variant rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-error text-[20px]">balance</span>
                  <h3 className="font-bold text-sm text-on-surface">Agente Legal (Indecopi)</h3>
                  <span className="ml-auto bg-error/10 text-error text-[10px] px-2 py-0.5 rounded uppercase font-bold">Alta Prioridad</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
                  La tasa TCEA no es visible en proporción a la oferta principal según la norma de transparencia.
                </p>
                <div className="bg-surface-container-low p-3 rounded text-sm border border-outline-variant/50">
                  <span className="text-outline text-[10px] font-bold block mb-1">SUGERENCIA:</span>
                  Añadir: <span className="font-bold">"TCEA Máxima 89.90% calculada a 12 meses"</span> en fuente no menor a 10pt.
                </div>
              </div>

              {/* Feedback 2 */}
              <div className="border border-outline-variant rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-[20px]">edit_note</span>
                  <h3 className="font-bold text-sm text-on-surface">Agente de Claridad y Tono</h3>
                  <span className="ml-auto bg-success/10 text-success text-[10px] px-2 py-0.5 rounded uppercase font-bold">Optimizado</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
                  Se reescribió el saludo inicial para conectar mejor con el perfil "Guerrero Emprendedor".
                </p>
                <div className="flex flex-col gap-2">
                  <div className="text-[12px] text-outline line-through">"Estimado cliente, adquiera su crédito..."</div>
                  <div className="text-[13px] font-bold text-primary bg-primary/5 p-2 rounded">"¡Sobrino! Potencia tu negocio hoy..."</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer Minimalista */}
      <footer className="bg-surface-container-low border-t border-outline-variant mt-auto">
        <div className="w-full py-6 px-4 md:px-10 flex flex-col md:flex-row justify-center items-center gap-4">
          <span className="font-label-bold text-xs text-outline font-bold">© 2024 Mibanco | Hecho por Los Tigres de la Ulima</span>
        </div>
      </footer>
    </>
  );
}
