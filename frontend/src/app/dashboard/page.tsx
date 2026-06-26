"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Métricas con puntajes "bajos/críticos" evaluando el borrador original
  const metrics = [
    { label: "Índice de Claridad", value: 45, color: "#E23D28", icon: "format_paint", suffix: "%" }, // Red Mibanco
    { label: "Alineación Tono Tigre", value: 30, color: "#E23D28", icon: "campaign", suffix: "%" }, // Red Mibanco
    { label: "Fricción UX / CX", value: 75, color: "#FFB81C", icon: "touch_app", suffix: "%" }, // Amarillo Mibanco (Alto es malo)
    { label: "Probabilidad Apertura", value: 40, color: "#FFB81C", icon: "visibility", suffix: "%" }, // Amarillo Mibanco
    { label: "Riesgo Indecopi", value: 85, color: "#E23D28", icon: "gavel", suffix: "%" }, // Red Mibanco (Alto es malo)
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
          <Link className="text-on-surface-variant hover:text-primary transition-colors py-1 text-sm font-bold" href="/tracking">Rastreador</Link>
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
              <p className="text-sm font-bold text-error uppercase tracking-wider mb-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">warning</span> Borrador Crítico Detectado
              </p>
              <h1 className="font-headline-xl text-3xl md:text-4xl text-on-surface font-black">
                Diagnóstico Pre-Optimización
              </h1>
            </div>
            <div className="flex gap-3">
              <button className="border border-outline-variant text-on-surface-variant hover:bg-surface-container font-bold text-sm py-2 px-6 rounded-full transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">download</span>
                Exportar Reporte
              </button>
            </div>
          </div>

          {/* Barra de Metadatos del Análisis */}
          <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm -mt-4">
             <div className="flex flex-col">
                <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-1">Código de Pieza</span>
                <span className="font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded text-sm w-max">WSP-COB-041</span>
             </div>
             <div className="w-px h-8 bg-outline-variant hidden md:block"></div>
             
             <div className="flex flex-col">
                <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-1">Campaña</span>
                <span className="font-bold text-on-surface text-sm flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-outline">campaign</span> Recordatorio de Pago</span>
             </div>
             <div className="w-px h-8 bg-outline-variant hidden md:block"></div>
             
             <div className="flex flex-col">
                <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-1">Piezas Analizadas</span>
                <span className="font-bold text-on-surface text-sm flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-outline">file_copy</span> 1 Archivo</span>
             </div>
             <div className="w-px h-8 bg-outline-variant hidden md:block"></div>

             <div className="flex flex-col">
                <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-1">Tiempo de SLA IA</span>
                <span className="font-bold text-success text-sm flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">timer</span> 2.4 Segundos</span>
             </div>
             <div className="w-px h-8 bg-outline-variant hidden md:block"></div>

             <div className="flex flex-col">
                <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-1">Fecha de Validación</span>
                <span className="font-bold text-on-surface text-sm flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-outline">calendar_today</span> 26/06/2026</span>
             </div>
          </div>

          {/* Sección Superior: 5 Gráficos Circulares + Resumen */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {metrics.map((m, idx) => {
              const radius = 36;
              const circumference = 2 * Math.PI * radius;
              // Animación de llenado condicional al estado isMounted
              const strokeDashoffset = isMounted ? circumference - (m.value / 100) * circumference : circumference;

              return (
                <div key={idx} className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-between shadow-sm relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 opacity-80" style={{ backgroundColor: m.color }}></div>
                  
                  <div className="relative flex items-center justify-center my-3">
                    <svg className="transform -rotate-90 w-24 h-24">
                      {/* Fondo del anillo */}
                      <circle cx="48" cy="48" r={radius} stroke="currentColor" strokeWidth="6" fill="transparent" className="text-surface-container-high/30" />
                      {/* Anillo de progreso */}
                      <circle cx="48" cy="48" r={radius} stroke={m.color} strokeWidth="6" fill="transparent" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className="transition-all duration-[1500ms] ease-out" />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="material-symbols-outlined text-[16px] mb-0.5 opacity-80" style={{ color: m.color }}>{m.icon}</span>
                      <span className="text-xl font-black text-on-surface leading-none">{m.value}{m.suffix}</span>
                    </div>
                  </div>

                  <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider text-center h-8 flex items-center">
                    {m.label}
                  </span>
                </div>
              );
            })}

            {/* Sexta caja: Resumen de Alertas */}
            <div className="bg-error/5 border border-error/20 rounded-2xl p-4 flex flex-col justify-center items-center text-center shadow-sm relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-error opacity-80"></div>
               <span className="material-symbols-outlined text-error text-3xl mb-1">error</span>
               <span className="text-4xl font-black text-error mb-1">5</span>
               <span className="text-[10px] font-bold text-error uppercase tracking-wider leading-tight">Alertas Críticas<br/>Detectadas</span>
            </div>
          </div>

          {/* Sección Inferior: 3 Columnas de Análisis */}
          <div className="mt-4 border-t border-outline-variant pt-8">
            <h2 className="font-headline-md text-2xl font-black text-on-surface mb-6">
              Análisis Multi-Agente
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              
              {/* Columna 1: Borrador Original */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-outline-variant pb-2">
                  <h3 className="font-bold text-sm text-on-surface-variant uppercase tracking-wider">Input Comercial</h3>
                  <span className="bg-surface-container-high text-xs px-2 py-1 rounded font-bold">Original</span>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex-grow shadow-sm text-on-surface-variant leading-relaxed text-sm">
                  <p>
                    "<span className="bg-[#E0F2FE] text-[#0284C7] font-bold border-b-2 border-[#0284C7] px-1 cursor-help" title="Filtro de Claridad">Apreciable cliente, por medio de la presente se le notifica que</span>, <span className="bg-[#E0F2FE] text-[#0284C7] font-bold border-b-2 border-[#0284C7] px-1 cursor-help" title="Filtro de Claridad">prior a la fecha</span> de vencimiento, debe realizar la cancelación de su cuota. En caso de que <span className="bg-[#E0F2FE] text-[#0284C7] font-bold border-b-2 border-[#0284C7] px-1 cursor-help" title="Filtro de Claridad">incurra en mora</span>, <span className="bg-[#FEF3C7] text-[#D97706] font-bold border-b-2 border-[#D97706] px-1 cursor-help" title="Filtro de Tono">perderá sus beneficios</span> y procederemos a aplicar las penalidades. Pague <span className="bg-[#F3E8FF] text-[#9333EA] font-bold border-b-2 border-[#9333EA] px-1 cursor-help" title="Filtro UX">HOY MISMO</span> para <span className="bg-[#FEF3C7] text-[#D97706] font-bold border-b-2 border-[#D97706] px-1 cursor-help" title="Filtro de Tono">evitar problemas con su negocio</span>. Atte. Mibanco."
                  </p>
                </div>
              </div>

              {/* Columna 2: Panel de Agentes IA */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-outline-variant pb-2">
                  <h3 className="font-bold text-sm text-on-surface-variant uppercase tracking-wider">Panel de Agentes IA</h3>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded font-bold">Procesando</span>
                </div>
                <div className="flex flex-col gap-4 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  
                  {/* Tarjeta Claridad */}
                  <div className="border border-[#0284C7]/30 bg-[#E0F2FE]/50 rounded-xl p-4 transition-all hover:shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-[#0284C7] text-[18px]">format_paint</span>
                      <h4 className="font-bold text-sm text-[#0284C7]">Agente de Claridad (ISO 24495)</h4>
                    </div>
                    <p className="text-[12px] text-on-surface-variant mb-2">
                      <span className="font-bold">Diagnóstico:</span> Uso de jerga burocrática y locuciones anticuadas que generan sobrecarga cognitiva.
                    </p>
                    <p className="text-[12px] text-on-surface-variant mb-3">
                      <span className="font-bold text-[#0284C7]">Regla Mibanco:</span> El manual exige eliminar fórmulas de cortesía vacías y usar lenguaje cotidiano.
                    </p>
                    <div className="bg-surface p-2 rounded border border-[#0284C7]/20">
                      <span className="font-bold block mb-1 text-[10px] text-outline">SUGERENCIA:</span>
                      <p className="text-[12px] text-on-surface">Cambiar a pronombres directos: <span className="font-bold">"Le informamos que..."</span>, <span className="font-bold">"Antes de su fecha..."</span></p>
                    </div>
                  </div>

                  {/* Tarjeta Tono */}
                  <div className="border border-[#D97706]/30 bg-[#FEF3C7]/50 rounded-xl p-4 transition-all hover:shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-[#D97706] text-[18px]">campaign</span>
                      <h4 className="font-bold text-sm text-[#D97706]">Agente de Tono (Voz "El Tigre")</h4>
                    </div>
                    <p className="text-[12px] text-on-surface-variant mb-2">
                      <span className="font-bold">Diagnóstico:</span> Tono punitivo y amenazante. Va en contra de la identidad del emprendedor peruano.
                    </p>
                    <p className="text-[12px] text-on-surface-variant mb-3">
                      <span className="font-bold text-[#D97706]">Regla Mibanco:</span> El tono debe ser motivador y apelar al progreso. Usar Nudges de ganancia.
                    </p>
                    <div className="bg-surface p-2 rounded border border-[#D97706]/20">
                      <span className="font-bold block mb-1 text-[10px] text-outline">SUGERENCIA:</span>
                      <p className="text-[12px] text-on-surface">Reformular con empatía: <span className="font-bold">"Mantenga su historial impecable para impulsar el progreso de su negocio."</span></p>
                    </div>
                  </div>

                  {/* Tarjeta UX */}
                  <div className="border border-[#9333EA]/30 bg-[#F3E8FF]/50 rounded-xl p-4 transition-all hover:shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-[#9333EA] text-[18px]">touch_app</span>
                      <h4 className="font-bold text-sm text-[#9333EA]">Agente UX/CX (WhatsApp)</h4>
                    </div>
                    <p className="text-[12px] text-on-surface-variant mb-2">
                      <span className="font-bold">Diagnóstico:</span> Alta fricción. Mayúsculas agresivas y no hay un Call to Action (botón) ágil.
                    </p>
                    <p className="text-[12px] text-on-surface-variant mb-3">
                      <span className="font-bold text-[#9333EA]">Regla Mibanco:</span> Mensajes cortos, máximo 2 emojis, incluir enlace/botón de pago directo.
                    </p>
                    <div className="bg-surface p-2 rounded border border-[#9333EA]/20">
                      <span className="font-bold block mb-1 text-[10px] text-outline">SUGERENCIA:</span>
                      <p className="text-[12px] text-on-surface">Estructurar con saltos de línea, agregar emojis y colocar botón de <span className="font-bold">Yape/Plin</span>.</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Columna 3: Propuesta Optimizada */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-outline-variant pb-2">
                  <h3 className="font-bold text-sm text-on-surface-variant uppercase tracking-wider">Output Inteligente</h3>
                  <span className="bg-success/10 text-success text-xs px-2 py-1 rounded font-bold">Optimizado</span>
                </div>
                
                {/* Mockup WhatsApp */}
                <div className="bg-[#EFEAE2] border border-outline-variant rounded-xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden h-full min-h-[350px]">
                  {/* WhatsApp Header Mockup */}
                  <div className="bg-[#008069] absolute top-0 left-0 w-full px-4 py-3 flex items-center gap-3 shadow-md z-10">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden p-1">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmssiu49Zy8zQu6aJwt2ouVEUwZKT2EENlQ-39re8WEkENKMg4sRlGKw-h56xguvnlrMceDX7d2itsqsT5anlGHr9J6EI2nBCv6S6I5QTQXeMNZoTEle-nGdY7n9qFx1_k8VPiWGxE7twh6dVOC1wGFQJ5AxklaffZAUGbACdy2oXG4lndxwYF4zlzZ21NRfUeUqo6sazMPQZiPDfmDcilN7PlxU_TP-yhiz7Ky4i1yFYISSJ9vl8IyMvrQMnecNgj1dtWMzUn41LY" alt="Mibanco" className="object-contain" />
                    </div>
                    <span className="text-white font-bold text-sm">Mibanco Asistente</span>
                  </div>

                  <div className="mt-14 flex flex-col gap-2 relative z-10">
                    <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[90%] text-[13px] text-on-surface leading-snug">
                      <p className="mb-2">¡Hola María! 👋 Cuida tu historial crediticio, aprovecha que mañana es tu fecha de pago.</p>
                      <p className="mb-2">En Mibanco sabemos que tu negocio no se detiene. Asegura el progreso de tu librería y accede a nuevas oportunidades. 🐅</p>
                      <p>Paga tu cuota de S/ 250 de forma rápida y segura desde tu celular aquí:</p>
                    </div>
                    {/* Fake WhatsApp Button */}
                    <div className="bg-white rounded-lg shadow-sm max-w-[90%] overflow-hidden border border-outline-variant/30 text-center cursor-pointer hover:bg-surface-container transition-colors">
                      <div className="p-2 border-b border-outline-variant/30 flex items-center justify-center gap-1">
                         <span className="material-symbols-outlined text-[16px] text-[#00A159]">payments</span>
                         <span className="text-[13px] font-bold text-[#00A159]">Pagar con Yape/Plin</span>
                      </div>
                      <div className="p-2 text-[11px] text-outline bg-surface-container-lowest">
                         Enlace Seguro
                      </div>
                    </div>
                  </div>

                  {/* Botones de Acción Real del Dashboard */}
                  <div className="mt-6 z-10 flex flex-col gap-3">
                    <Link href="/tracking" className="w-full bg-[#00A159] hover:bg-[#00894B] text-white font-bold text-sm py-4 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1">
                      Aprobar y Enviar a WhatsApp
                      <span className="material-symbols-outlined text-[20px]">send</span>
                    </Link>
                    <button className="w-full bg-surface border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-primary font-bold text-xs py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">forward_to_inbox</span>
                      Responder Solicitud por Email
                    </button>
                  </div>
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
