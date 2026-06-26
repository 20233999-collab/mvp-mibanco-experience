"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TrackingPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Pasos del Tracking (Estilo Rappi Timeline) - Extraídos del manual Mibanco
  const steps = [
    {
      id: 1,
      title: "Recepción Comercial",
      description: "El borrador 'Recordatorio de Pago' fue extraído exitosamente de la bandeja de correo del área de Negocios.",
      time: "10:02 AM",
      status: "completed",
      icon: "mark_email_read"
    },
    {
      id: 2,
      title: "Análisis Multi-Agente IA",
      description: "Los Agentes de Claridad, Tono y UX analizaron la pieza en 2.4s, reduciendo la fricción y aplicando la voz 'El Tigre'.",
      time: "10:02 AM",
      status: "completed",
      icon: "psychology"
    },
    {
      id: 3,
      title: "Esperando Aprobación (CX)",
      description: "La pieza se encuentra en la bandeja del analista de Experiencia del Cliente para su validación final (Human-in-the-loop).",
      time: "10:03 AM",
      status: "current",
      icon: "person_check"
    },
    {
      id: 4,
      title: "Aprobación Legal y Cumplimiento",
      description: "Revisión automatizada de guardrails de Indecopi y normativas financieras.",
      time: "Pendiente",
      status: "upcoming",
      icon: "gavel"
    },
    {
      id: 5,
      title: "Despliegue Predictivo (WhatsApp)",
      description: "La pieza será programada para su envío usando el modelo predictivo de cobranza para optimizar la tasa de apertura.",
      time: "Pendiente",
      status: "upcoming",
      icon: "rocket_launch"
    }
  ];

  return (
    <>
      <nav className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-4 md:px-10 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img alt="Mibanco Logo" className="h-12 md:h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmssiu49Zy8zQu6aJwt2ouVEUwZKT2EENlQ-39re8WEkENKMg4sRlGKw-h56xguvnlrMceDX7d2itsqsT5anlGHr9J6EI2nBCv6S6I5QTQXeMNZoTEle-nGdY7n9qFx1_k8VPiWGxE7twh6dVOC1wGFQJ5AxklaffZAUGbACdy2oXG4lndxwYF4zlzZ21NRfUeUqo6sazMPQZiPDfmDcilN7PlxU_TP-yhiz7Ky4i1yFYISSJ9vl8IyMvrQMnecNgj1dtWMzUn41LY" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-on-surface-variant hover:text-primary transition-colors py-1 text-sm font-bold" href="/panel">Panel</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors py-1 text-sm font-bold" href="/dashboard">Dashboard CX</Link>
          <span className="text-primary font-bold border-b-2 border-primary py-1 text-sm">Rastreador</span>
        </div>
        <div className="flex items-center gap-4 text-primary">
          <span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-all">account_circle</span>
        </div>
      </nav>

      <main className={`flex-grow flex flex-col items-center justify-start relative px-4 md:px-10 py-10 min-h-[80vh] bg-surface transition-all duration-[800ms] ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="w-full max-w-4xl z-10 flex flex-col gap-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-outline-variant pb-6">
            <div>
              <p className="text-sm font-bold text-outline uppercase tracking-wider mb-1">Vista Previa de Trazabilidad</p>
              <h1 className="font-headline-xl text-3xl md:text-4xl text-on-surface font-black flex items-center gap-3">
                Tracking de Pieza 
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full border border-primary/20 font-bold uppercase tracking-wider">En Progreso</span>
              </h1>
            </div>
            <div className="flex gap-3">
              <button className="border border-outline-variant text-on-surface-variant hover:bg-surface-container font-bold text-sm py-2 px-6 rounded-full transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">share</span>
                Compartir Enlace
              </button>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant rounded-3xl p-6 md:p-10 shadow-sm flex flex-col gap-6 relative overflow-hidden">
             
             {/* Info de Cabecera del Tracking */}
             <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-6 border-b border-outline-variant/50">
               <div>
                 <span className="text-[11px] text-outline font-bold uppercase tracking-wider block mb-1">Campaña / Ticket</span>
                 <span className="font-bold text-on-surface text-lg">WSP-COB-041</span>
               </div>
               <div>
                 <span className="text-[11px] text-outline font-bold uppercase tracking-wider block mb-1">Área Solicitante</span>
                 <span className="font-bold text-on-surface text-lg">Negocios (Cobranzas)</span>
               </div>
               <div>
                 <span className="text-[11px] text-outline font-bold uppercase tracking-wider block mb-1">Analista Asignado (CX)</span>
                 <span className="font-bold text-primary text-lg flex items-center gap-2">
                   <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-xs font-black">MA</span>
                   María Álvarez
                 </span>
               </div>
             </div>

             {/* Tracker Vertical (Tipo Rappi) */}
             <div className="relative pl-4 md:pl-8 py-4">
                {/* Línea vertical de progreso */}
                <div className="absolute left-9 md:left-[52px] top-8 bottom-8 w-1 bg-surface-container-high rounded-full"></div>
                <div className="absolute left-9 md:left-[52px] top-8 h-[50%] w-1 bg-primary rounded-full transition-all duration-[2000ms] ease-in-out" style={{ height: isMounted ? '45%' : '0%' }}></div>

                <div className="flex flex-col gap-10">
                  {steps.map((step, idx) => {
                    const isCompleted = step.status === "completed";
                    const isCurrent = step.status === "current";
                    const isUpcoming = step.status === "upcoming";

                    return (
                      <div key={step.id} className={`flex gap-6 relative z-10 transition-all duration-700 delay-[${idx * 150}ms] ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} ${isUpcoming ? 'opacity-50 grayscale' : ''}`}>
                         
                         {/* Icono Redondo Flotante */}
                         <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-surface-container-lowest shrink-0 transition-colors duration-500
                            ${isCompleted ? 'bg-primary text-on-primary' : 
                              isCurrent ? 'bg-primary-container text-primary border-primary/30 animate-pulse shadow-[0_0_20px_rgba(0,161,89,0.4)]' : 
                              'bg-surface-container-high text-outline'}`}>
                            <span className="material-symbols-outlined text-[20px]">{isCompleted ? 'check' : step.icon}</span>
                         </div>

                         {/* Contenido del Paso */}
                         <div className="flex flex-col pt-2 w-full">
                            <div className="flex justify-between items-start w-full">
                              <h3 className={`font-bold text-lg ${isCurrent ? 'text-primary' : 'text-on-surface'}`}>{step.title}</h3>
                              <span className={`text-xs font-bold ${isUpcoming ? 'text-outline' : 'text-on-surface-variant'}`}>{step.time}</span>
                            </div>
                            <p className={`text-sm mt-1 leading-relaxed max-w-2xl ${isUpcoming ? 'text-outline' : 'text-on-surface-variant'}`}>
                              {step.description}
                            </p>
                            
                            {/* Alerta o CTA interactiva si es el paso actual (esperando validación) */}
                            {isCurrent && (
                               <div className="mt-5 p-5 bg-primary/5 border border-primary/20 rounded-2xl max-w-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                                  <div className="flex items-center gap-3">
                                     <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-[16px]">notifications_active</span>
                                     </div>
                                     <div className="flex flex-col">
                                        <span className="text-sm font-black text-primary">Acción Requerida</span>
                                        <span className="text-xs text-on-surface-variant font-medium mt-0.5">La pieza requiere tu aprobación final.</span>
                                     </div>
                                  </div>
                                  <Link href="/dashboard" className="bg-primary hover:opacity-90 text-on-primary font-bold text-xs py-2.5 px-5 rounded-full transition-all shrink-0">
                                    Revisar Pieza
                                  </Link>
                               </div>
                            )}
                         </div>
                      </div>
                    )
                  })}
                </div>
             </div>

          </div>

        </div>
      </main>
    </>
  );
}
