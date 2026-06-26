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

                  {/* Botón de Aprobación Real del Dashboard */}
                  <div className="mt-6 z-10">
                    <Link href="/tracking" className="w-full bg-[#00A159] hover:bg-[#00894B] text-white font-bold text-sm py-4 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1">
                      Aprobar y Enviar a WhatsApp
                      <span className="material-symbols-outlined text-[20px]">send</span>
                    </Link>
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
