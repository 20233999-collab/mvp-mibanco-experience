"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HistorialPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>("CMP-NV-092");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mockHistory = [
    {
      id: "CMP-NV-092",
      name: "Campaña Navidad 2026",
      date: "26 Jun 2026, 14:30",
      approver: "M. Álvarez (CX)",
      risk: "0% (Mitigado)",
      status: "Desplegado",
      original: "Estimado cliente, se le otorga un préstamo navideño con tasa del 40% sujeto a comisiones ocultas si no paga.",
      final: "¡Hola! Esta Navidad, Mibanco te acompaña. Accede a tu crédito con tasa transparente y cuotas fijas. Revisa las condiciones aquí.",
      ai_log: [
        { agent: "Agente Legal (Indecopi)", action: "Se eliminó la mención a 'comisiones ocultas' por infracción a la Ley de Transparencia (Resolución SBS)." },
        { agent: "Agente Tono", action: "Se cambió 'Estimado cliente' por un saludo más cálido ('¡Hola!') según el manual El Tigre Digital." }
      ]
    },
    {
      id: "WSP-COB-040",
      name: "Recordatorio Día 15 (WSP)",
      date: "20 Jun 2026, 09:15",
      approver: "J. Pérez (CX)",
      risk: "0% (Mitigado)",
      status: "Desplegado",
      original: "Paga tu cuota hoy o te enviaremos a cobranza judicial y perderás tu negocio.",
      final: "Recuerda que hoy es tu fecha de pago. Mantén tu historial impecable para seguir impulsando tu negocio.",
      ai_log: [
        { agent: "Agente Legal (Indecopi)", action: "Alerta Crítica: Se detectó amenaza de 'cobranza judicial'. Se reformuló para evitar multas de hasta 450 UIT por métodos abusivos." },
        { agent: "Agente UX", action: "Se acortó el mensaje para WhatsApp y se sugirió añadir un enlace de pago directo." }
      ]
    },
    {
      id: "CMP-CT-044",
      name: "Capital MYPE (Email)",
      date: "15 Jun 2026, 11:00",
      approver: "A. Gómez (Legal)",
      risk: "0% (Mitigado)",
      status: "Desplegado",
      original: "Aproveche nuestro crédito para comprar mercadería antes del cierre de mes.",
      final: "Impulsa tu negocio esta temporada. Solicita tu Capital de Trabajo hoy mismo y abastece tu local sin preocupaciones.",
      ai_log: [
        { agent: "Agente de Claridad", action: "Se reemplazó 'comprar mercadería' por 'abastece tu local' para mayor impacto comercial." }
      ]
    }
  ];

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
            <a href="#" className="flex items-center gap-3 px-6 py-3 border-l-2 border-secondary text-primary font-bold bg-surface-container/30 transition-all text-xs">
              <span className="material-symbols-outlined text-[18px]">history</span>
              Historial / Trazabilidad
            </a>
            <a href="#" className="flex items-center gap-3 px-6 py-3 border-l-2 border-transparent text-on-surface-variant hover:text-primary transition-all text-xs">
              <span className="material-symbols-outlined text-[18px] opacity-70">description</span>
              Plantillas Aprobadas
            </a>
            
            <p className="text-[10px] text-outline mb-2 px-6 mt-6 font-bold tracking-widest uppercase">CONFIGURACIÓN</p>
            <Link href="/ajustes" className="flex items-center gap-3 px-6 py-3 border-l-2 border-transparent text-on-surface-variant hover:text-primary transition-all text-xs">
              <span className="material-symbols-outlined text-[18px] opacity-70">settings</span>
              Ajustes de Agentes
            </Link>
            <a href="#" className="flex items-center gap-3 px-6 py-3 border-l-2 border-transparent text-on-surface-variant hover:text-primary transition-all text-xs">
              <span className="material-symbols-outlined text-[18px] opacity-70">shield_person</span>
              Reglas Indecopi
            </a>
          </div>
        </aside>

        {/* Contenido Principal */}
        <main className="flex-1 flex flex-col relative overflow-y-auto bg-surface custom-scrollbar">
          
          <header className="bg-surface/90 backdrop-blur-md border-b border-outline-variant p-4 px-8 flex justify-between items-center z-30 sticky top-0">
            <div>
              <h1 className="font-headline-md text-xl font-black text-on-surface">Historial y Auditoría</h1>
              <p className="text-xs text-on-surface-variant">Central de trazabilidad y protección de marca ante Indecopi.</p>
            </div>
            <div className="relative w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[16px]">search</span>
              <input 
                type="text" 
                placeholder="Buscar por ID de pieza..." 
                className="w-full pl-9 pr-4 py-1.5 rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-xs outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </header>

          <div className="p-6 md:px-10 z-10 w-full mx-auto flex flex-col gap-4">
            <div className="flex justify-between items-end mb-2">
              <h2 className="font-headline-md text-sm font-bold uppercase tracking-wider text-outline">Registro de Evaluaciones Finalizadas</h2>
            </div>

            <div className="flex flex-col gap-4">
              {mockHistory.filter(c => c.id.toLowerCase().includes(searchTerm.toLowerCase()) || c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
                <div key={item.id} className={`bg-surface-container-lowest border rounded-xl overflow-hidden transition-all duration-300 ${expandedId === item.id ? 'border-primary shadow-md' : 'border-outline-variant hover:border-primary/50 hover:shadow-sm'}`}>
                  
                  {/* Encabezado de la Tarjeta (Resumen) */}
                  <div 
                    className="p-4 flex items-center justify-between cursor-pointer bg-surface"
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-success/10 text-success p-2 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-[20px]">gavel</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-on-surface text-sm">{item.id} - {item.name}</h3>
                          <span className="bg-success/10 border border-success text-success px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">Auditado</span>
                        </div>
                        <p className="text-xs text-on-surface-variant mt-0.5">Aprobado por: <span className="font-bold">{item.approver}</span> el {item.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden md:block">
                        <p className="text-[10px] text-outline font-bold uppercase tracking-wider">Riesgo Indecopi</p>
                        <p className="text-xs font-bold text-success">{item.risk}</p>
                      </div>
                      <span className={`material-symbols-outlined text-outline transition-transform duration-300 ${expandedId === item.id ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Detalle Expandido (Bitácora) */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedId === item.id ? 'max-h-[800px] opacity-100 border-t border-outline-variant' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 bg-surface-container-lowest flex flex-col gap-6">
                      
                      {/* Grid de Comparación (Borrador vs Final) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <h4 className="font-bold text-xs uppercase tracking-wider text-outline flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">history_edu</span>
                            Borrador Original (Ingesta)
                          </h4>
                          <div className="bg-[#FEF2F2] border border-[#FECACA] p-4 rounded-lg text-sm text-[#991B1B] font-medium leading-relaxed shadow-inner">
                            "{item.original}"
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <h4 className="font-bold text-xs uppercase tracking-wider text-success flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">verified</span>
                            Versión Aprobada y Desplegada
                          </h4>
                          <div className="bg-[#F0FDF4] border border-[#BBF7D0] p-4 rounded-lg text-sm text-[#166534] font-medium leading-relaxed shadow-inner">
                            "{item.final}"
                          </div>
                        </div>
                      </div>

                      {/* Log de Decisiones de IA */}
                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-outline mb-3 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">memory</span>
                          Bitácora de Decisiones de Agentes IA
                        </h4>
                        <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden">
                          {item.ai_log.map((log, i) => (
                            <div key={i} className={`p-3 flex gap-3 text-sm ${i !== item.ai_log.length - 1 ? 'border-b border-outline-variant' : ''}`}>
                              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">
                                {log.agent.includes("Legal") ? "gavel" : log.agent.includes("Tono") ? "campaign" : "format_paint"}
                              </span>
                              <div>
                                <span className="font-bold text-on-surface block mb-0.5">{log.agent}</span>
                                <span className="text-on-surface-variant text-xs leading-snug">{log.action}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Acciones del Certificado */}
                      <div className="flex justify-end pt-2">
                        <button className="bg-surface hover:bg-surface-container-high border border-outline-variant text-on-surface font-bold text-xs py-2.5 px-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm">
                          <span className="material-symbols-outlined text-[16px]">download</span>
                          Descargar Certificado Legal (PDF)
                        </button>
                      </div>

                    </div>
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
