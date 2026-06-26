"use client";

import Link from "next/link";

export default function TrackingPage() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-4 md:px-10 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img alt="Mibanco Logo" className="h-12 md:h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmssiu49Zy8zQu6aJwt2ouVEUwZKT2EENlQ-39re8WEkENKMg4sRlGKw-h56xguvnlrMceDX7d2itsqsT5anlGHr9J6EI2nBCv6S6I5QTQXeMNZoTEle-nGdY7n9qFx1_k8VPiWGxE7twh6dVOC1wGFQJ5AxklaffZAUGbACdy2oXG4lndxwYF4zlzZ21NRfUeUqo6sazMPQZiPDfmDcilN7PlxU_TP-yhiz7Ky4i1yFYISSJ9vl8IyMvrQMnecNgj1dtWMzUn41LY" />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link className="text-on-surface-variant hover:text-primary-container transition-colors py-1" href="/">Inicio</Link>
          <span className="text-primary font-bold border-b-2 border-primary transition-colors py-1">Rastreador</span>
        </div>
        <div className="flex items-center gap-4 text-primary">
          <span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-all">language</span>
        </div>
      </nav>

      {/* Main Content Layout */}
      <main className="flex-grow flex flex-col items-center justify-start relative px-4 md:px-10 py-8 min-h-[80vh] bg-surface-dim">
        <div className="absolute inset-0 bunting-pattern pointer-events-none opacity-50"></div>
        
        <div className="w-full max-w-4xl z-10 flex flex-col md:flex-row gap-8">
          
          {/* Tarjeta de Resumen (Izquierda) */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 mibanco-shadow border-t-8 border-primary">
              <span className="material-symbols-outlined text-primary text-4xl mb-2">qr_code_2</span>
              <h1 className="font-headline-md text-2xl text-on-surface font-black leading-tight">
                Detalle del Ticket
              </h1>
              <p className="font-mono text-lg font-bold text-primary mt-2 bg-primary-container/10 p-2 rounded inline-block">
                CMP-NV-092
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <div>
                  <p className="font-label-bold text-xs text-outline font-bold">NOMBRE DE PIEZA</p>
                  <p className="font-body-md text-on-surface font-bold">Campaña_Navidad_Final.docx</p>
                </div>
                <div>
                  <p className="font-label-bold text-xs text-outline font-bold">TIPO DE CONTENIDO</p>
                  <p className="font-body-md text-on-surface font-bold">SMS Promocional</p>
                </div>
                <div>
                  <p className="font-label-bold text-xs text-outline font-bold">ESTADO ACTUAL</p>
                  <span className="inline-flex items-center gap-1 bg-success/10 text-success font-bold text-sm px-3 py-1 rounded-full mt-1 border border-success/20">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    Aprobado Legalmente
                  </span>
                </div>
              </div>
            </div>

            {/* Acción de Retroceso */}
            <Link href="/" className="bg-surface hover:bg-surface-container-high text-primary font-bold text-sm py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 mibanco-shadow border border-outline-variant">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Volver al Inicio
            </Link>
          </div>

          {/* Línea de Tiempo / Timeline (Derecha) */}
          <div className="w-full md:w-2/3 bg-surface-container-lowest rounded-xl p-8 md:p-10 mibanco-shadow relative">
            <h2 className="font-headline-md text-xl font-bold text-on-surface mb-8 border-b border-outline-variant pb-4">
              Trazabilidad Inmutable
            </h2>

            <div className="relative pl-8 flex flex-col gap-10">
              {/* Línea vertical base */}
              <div className="absolute left-[15px] top-4 bottom-8 w-0.5 bg-outline-variant"></div>

              {/* Paso 1: Completado */}
              <div className="relative">
                <div className="absolute -left-[41px] bg-success text-on-primary rounded-full w-8 h-8 flex items-center justify-center z-10 shadow-[0_0_0_4px_#f9f9fb]">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div>
                  <h3 className="font-label-bold font-bold text-lg text-on-surface">Ingreso de Pieza a la Fábrica</h3>
                  <p className="font-body-sm text-on-surface-variant mt-1">Cargado por el creador <span className="font-bold">m.flores</span>. Hash generado.</p>
                  <p className="font-mono text-xs text-outline mt-1">26-Jun-2026 10:14 AM</p>
                </div>
              </div>

              {/* Paso 2: Completado */}
              <div className="relative">
                <div className="absolute -left-[41px] bg-success text-on-primary rounded-full w-8 h-8 flex items-center justify-center z-10 shadow-[0_0_0_4px_#f9f9fb]">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div>
                  <h3 className="font-label-bold font-bold text-lg text-on-surface">Auditoría IA (5 Agentes)</h3>
                  <p className="font-body-sm text-on-surface-variant mt-1">Se detectó observación en TCEA. Se aplicó corrección automática del "Tono Tigre".</p>
                  <p className="font-mono text-xs text-outline mt-1">26-Jun-2026 10:16 AM</p>
                </div>
              </div>

              {/* Paso 3: Actual (Highlight) */}
              <div className="relative">
                <div className="absolute -left-[41px] bg-primary text-on-primary rounded-full w-8 h-8 flex items-center justify-center z-10 shadow-[0_0_0_4px_#f9f9fb] animate-pulse">
                  <span className="material-symbols-outlined text-[16px]">pending</span>
                </div>
                <div className="bg-primary-container/20 p-4 rounded-lg border border-primary/30 mt-[-10px]">
                  <h3 className="font-label-bold font-bold text-lg text-primary">Aprobación Legal Consolidada</h3>
                  <p className="font-body-sm text-on-surface-variant mt-1">El usuario administrador ha validado los cambios sugeridos. El documento está blindado legalmente.</p>
                  <p className="font-mono text-xs text-primary mt-1 font-bold">26-Jun-2026 10:25 AM</p>
                  
                  {/* Botón Descargar Certificado */}
                  <button className="mt-4 bg-primary hover:opacity-90 text-on-primary text-xs font-bold py-2 px-4 rounded transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">workspace_premium</span>
                    Descargar Certificado Indecopi (PDF)
                  </button>
                </div>
              </div>

              {/* Paso 4: Pendiente */}
              <div className="relative opacity-50">
                <div className="absolute -left-[41px] bg-surface border-2 border-outline rounded-full w-8 h-8 flex items-center justify-center z-10 shadow-[0_0_0_4px_#f9f9fb]">
                  <span className="material-symbols-outlined text-[16px] text-outline">schedule</span>
                </div>
                <div>
                  <h3 className="font-label-bold font-bold text-lg text-on-surface">Pase a Producción (SAB/HubSpot)</h3>
                  <p className="font-body-sm text-on-surface-variant mt-1">Pendiente de sincronización con el sistema core de campañas de Mibanco.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant mt-auto">
        <div className="w-full py-8 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="font-label-bold text-sm text-on-surface-variant font-bold">© 2024 Mibanco - Todos los derechos reservados.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-label-bold text-sm text-primary font-bold">Hecho por el grupo 16: Los Tigres de la Ulima</span>
          </div>
        </div>
      </footer>
    </>
  );
}
