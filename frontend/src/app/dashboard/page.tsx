"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-4 md:px-10 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img alt="Mibanco Logo" className="h-12 md:h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmssiu49Zy8zQu6aJwt2ouVEUwZKT2EENlQ-39re8WEkENKMg4sRlGKw-h56xguvnlrMceDX7d2itsqsT5anlGHr9J6EI2nBCv6S6I5QTQXeMNZoTEle-nGdY7n9qFx1_k8VPiWGxE7twh6dVOC1wGFQJ5AxklaffZAUGbACdy2oXG4lndxwYF4zlzZ21NRfUeUqo6sazMPQZiPDfmDcilN7PlxU_TP-yhiz7Ky4i1yFYISSJ9vl8IyMvrQMnecNgj1dtWMzUn41LY" />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link className="text-on-surface-variant hover:text-primary-container transition-colors py-1" href="/">Inicio</Link>
          <span className="text-primary font-bold border-b-2 border-primary transition-colors py-1">Dashboard CX</span>
          <Link className="text-on-surface-variant hover:text-primary-container transition-colors py-1" href="/tracking">Rastreador</Link>
        </div>
        <div className="flex items-center gap-4 text-primary">
          <span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-all">account_circle</span>
        </div>
      </nav>

      {/* Main Content Layout */}
      <main className="flex-grow flex flex-col items-center justify-start relative px-4 md:px-10 py-8 min-h-[80vh] bg-surface-dim">
        <div className="w-full max-w-6xl z-10">
          
          {/* Header del Dashboard */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="font-headline-xl text-3xl md:text-4xl text-on-surface font-black">
                Resultados de Validación
              </h1>
              <p className="font-body-md text-on-surface-variant mt-1">
                Pieza: <span className="font-bold">Campaña_Navidad_Final.docx</span> | ID: <span className="text-primary font-mono bg-primary-container/20 px-2 rounded">CMP-NV-092</span>
              </p>
            </div>
            <Link href="/tracking" className="bg-primary hover:opacity-90 text-on-primary font-bold text-sm py-3 px-6 rounded-full transition-all flex items-center gap-2 mibanco-shadow active:scale-95">
              Generar Código de Seguimiento
              <span className="material-symbols-outlined">qr_code</span>
            </Link>
          </div>

          {/* Tarjetas de Resumen Superior */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Tarjeta 1: Score Global */}
            <div className="bg-surface-container-lowest rounded-xl p-6 mibanco-shadow border-l-8 border-success flex items-center gap-4">
              <div className="bg-success/10 p-4 rounded-full text-success">
                <span className="material-symbols-outlined text-3xl">speed</span>
              </div>
              <div>
                <p className="font-label-bold text-sm text-on-surface-variant">Score de Cumplimiento</p>
                <p className="font-headline-md text-3xl font-black text-on-surface">94<span className="text-lg text-outline">/100</span></p>
              </div>
            </div>
            
            {/* Tarjeta 2: Tono Tigre */}
            <div className="bg-surface-container-lowest rounded-xl p-6 mibanco-shadow border-l-8 border-primary flex items-center gap-4">
              <div className="bg-primary-container p-4 rounded-full text-on-primary-container">
                <span className="material-symbols-outlined text-3xl">local_fire_department</span>
              </div>
              <div>
                <p className="font-label-bold text-sm text-on-surface-variant">Nivel de "Tono Tigre"</p>
                <p className="font-headline-md text-3xl font-black text-on-surface">Alto</p>
              </div>
            </div>

            {/* Tarjeta 3: Estado Legal */}
            <div className="bg-surface-container-lowest rounded-xl p-6 mibanco-shadow border-l-8 border-warning flex items-center gap-4">
              <div className="bg-warning/10 p-4 rounded-full text-warning">
                <span className="material-symbols-outlined text-3xl">gavel</span>
              </div>
              <div>
                <p className="font-label-bold text-sm text-on-surface-variant">Riesgo Indecopi</p>
                <p className="font-headline-md text-2xl font-black text-on-surface mt-1">Requiere Ajuste</p>
              </div>
            </div>
          </div>

          {/* Grid de Contenido Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Columna Izquierda: Feedback de los Agentes (Ocupa 2 columnas en Desktop) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h2 className="font-headline-md text-xl font-bold text-on-surface mb-2 border-b border-outline-variant pb-2">
                Hallazgos y Mejoras Sugeridas
              </h2>

              {/* Feedback Agente Legal */}
              <div className="bg-surface-container-lowest rounded-xl p-6 mibanco-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-error"></div>
                <div className="flex justify-between items-start mb-4 pl-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-error">balance</span>
                    <h3 className="font-label-bold font-bold text-lg text-on-surface">Agente Legal (Indecopi)</h3>
                  </div>
                  <span className="bg-error/10 text-error font-bold text-xs px-3 py-1 rounded-full">Alta Prioridad</span>
                </div>
                <div className="pl-4">
                  <p className="font-body-md text-on-surface-variant mb-4">
                    La tasa TCEA no es visible en proporción a la oferta principal según la norma vigente de transparencia.
                  </p>
                  <div className="bg-surface-container p-4 rounded-lg border border-outline-variant">
                    <p className="text-xs font-label-bold text-outline mb-1">SUGERENCIA DE AUTOCORRECCIÓN:</p>
                    <p className="font-body-md text-on-surface">"Añadir disclaimer inferior: <span className="font-bold">TCEA Máxima 89.90% calculada a 12 meses.</span> en fuente no menor a 10pt."</p>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button className="bg-primary hover:opacity-90 text-on-primary text-xs font-bold py-2 px-4 rounded transition-all">Aceptar Cambio</button>
                    <button className="text-primary hover:bg-primary-container text-xs font-bold py-2 px-4 rounded transition-all">Ignorar</button>
                  </div>
                </div>
              </div>

              {/* Feedback Agente Claridad/Tono */}
              <div className="bg-surface-container-lowest rounded-xl p-6 mibanco-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                <div className="flex justify-between items-start mb-4 pl-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">edit_note</span>
                    <h3 className="font-label-bold font-bold text-lg text-on-surface">Agente de Claridad y Tono</h3>
                  </div>
                  <span className="bg-success/10 text-success font-bold text-xs px-3 py-1 rounded-full">Optimizado</span>
                </div>
                <div className="pl-4">
                  <p className="font-body-md text-on-surface-variant mb-4">
                    El saludo inicial es demasiado formal. Hemos reescrito la frase para conectar mejor con el "Guerrero Emprendedor".
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-error/5 p-4 rounded-lg border border-error/20">
                      <p className="text-xs font-label-bold text-error mb-1">ORIGINAL:</p>
                      <p className="font-body-sm text-on-surface line-through">"Estimado cliente, adquiera su crédito para capital de trabajo."</p>
                    </div>
                    <div className="bg-success/10 p-4 rounded-lg border border-success/30">
                      <p className="text-xs font-label-bold text-success mb-1">NUEVO TEXTO (TIGRE):</p>
                      <p className="font-body-sm text-on-surface font-bold">"¡Sobrino! Potencia tu negocio hoy con capital al toque."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Resumen de Pieza y Vista Previa */}
            <div className="flex flex-col gap-6">
              <h2 className="font-headline-md text-xl font-bold text-on-surface mb-2 border-b border-outline-variant pb-2">
                Vista Previa
              </h2>
              
              <div className="bg-surface-container-lowest rounded-xl p-6 mibanco-shadow flex flex-col items-center justify-center min-h-[300px] border border-outline-variant relative">
                <div className="absolute inset-0 bunting-pattern opacity-10 pointer-events-none rounded-xl"></div>
                <span className="material-symbols-outlined text-6xl text-outline mb-4">image</span>
                <p className="font-label-bold text-on-surface-variant text-center">Visualización del Arte Final <br/> (Pendiente de ajustes)</p>
                
                <button className="mt-6 border-2 border-primary text-primary hover:bg-primary-container font-bold text-sm py-2 px-6 rounded-full transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">download</span>
                  Descargar Mockup
                </button>
              </div>

              {/* Botón Flotante/Final de Acciones */}
              <div className="bg-secondary-container rounded-xl p-6 mibanco-shadow mt-auto">
                <h3 className="font-label-bold font-bold text-on-secondary-fixed mb-2">Aprobación Final</h3>
                <p className="text-sm text-on-secondary-fixed-variant mb-4">Al aprobar, la pieza pasará al flujo de publicación y se asignará un ticket de trazabilidad inmutable.</p>
                <Link href="/tracking" className="w-full bg-on-secondary-fixed hover:opacity-90 text-secondary-container font-bold text-sm py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md">
                  Aprobar e ir a Trazabilidad
                  <span className="material-symbols-outlined">send_and_archive</span>
                </Link>
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
