"use client";

import Link from "next/link";
import { useState } from "react";

const mockHistory = [
  {
    id: "CMP-NV-092",
    name: "Campaña_Navidad_Final.docx",
    date: "26 Jun 2026",
    status: "Aprobado",
    risk: "Bajo",
    type: "SMS Promocional"
  },
  {
    id: "CMP-CT-045",
    name: "Mailing_Capital_Trabajo_v2.pdf",
    date: "24 Jun 2026",
    status: "En Revisión",
    risk: "Medio",
    type: "Mailing"
  },
  {
    id: "CMP-CR-012",
    name: "Guion_Cobranza_Preventiva.txt",
    date: "20 Jun 2026",
    status: "Aprobado",
    risk: "Bajo",
    type: "Guion Telefónico"
  },
  {
    id: "CMP-LD-088",
    name: "Landing_Page_Depositos_Plazo.docx",
    date: "15 Jun 2026",
    status: "Rechazado",
    risk: "Alto",
    type: "Web Content"
  }
];

export default function HistorialPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHistory = mockHistory.filter(item => 
    item.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-4 md:px-10 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img alt="Mibanco Logo" className="h-12 md:h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmssiu49Zy8zQu6aJwt2ouVEUwZKT2EENlQ-39re8WEkENKMg4sRlGKw-h56xguvnlrMceDX7d2itsqsT5anlGHr9J6EI2nBCv6S6I5QTQXeMNZoTEle-nGdY7n9qFx1_k8VPiWGxE7twh6dVOC1wGFQJ5AxklaffZAUGbACdy2oXG4lndxwYF4zlzZ21NRfUeUqo6sazMPQZiPDfmDcilN7PlxU_TP-yhiz7Ky4i1yFYISSJ9vl8IyMvrQMnecNgj1dtWMzUn41LY" />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link className="text-on-surface-variant hover:text-primary-container transition-colors py-1" href="/">Inicio</Link>
          <Link className="text-on-surface-variant hover:text-primary-container transition-colors py-1" href="/dashboard">Dashboard</Link>
          <span className="text-primary font-bold border-b-2 border-primary transition-colors py-1">Historial CX</span>
        </div>
        <div className="flex items-center gap-4 text-primary">
          <span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-all">account_circle</span>
        </div>
      </nav>

      {/* Main Content Layout */}
      <main className="flex-grow flex flex-col items-center justify-start relative px-4 md:px-10 py-10 min-h-[80vh] bg-surface-dim">
        <div className="absolute inset-0 bunting-pattern pointer-events-none opacity-30"></div>
        
        <div className="w-full max-w-5xl z-10 flex flex-col gap-8">
          
          {/* Header y Buscador */}
          <div className="bg-primary-container rounded-xl p-8 md:p-12 mibanco-shadow flex flex-col items-center text-center tilted-header relative overflow-hidden">
            <span className="material-symbols-outlined text-on-primary text-6xl opacity-20 absolute top-4 right-8">manage_search</span>
            <h1 className="font-headline-xl text-3xl md:text-4xl text-on-primary font-black mb-4">
              Central de Trazabilidad e Historial
            </h1>
            <p className="font-body-lg text-on-primary-container mb-8 max-w-2xl">
              Bitácora de auditoría inmutable. Busca el código único o nombre de la pieza para revisar su historial de cambios y aprobación legal.
            </p>
            
            <div className="relative w-full max-w-2xl">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-2xl">search</span>
              <input 
                type="text" 
                placeholder="Buscar Código Único (Ej: CMP-NV-092) o nombre de pieza..." 
                className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-transparent focus:border-primary shadow-lg text-body-lg outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Tabla de Resultados (Estilo Cards Apiladas) */}
          <div className="bg-surface-container-lowest rounded-xl p-6 md:p-8 mibanco-shadow">
            <div className="flex justify-between items-center mb-6 border-b border-outline-variant pb-4">
              <h2 className="font-headline-md text-xl font-bold text-on-surface">
                Registros Recientes
              </h2>
              <span className="font-label-bold text-sm text-outline font-bold">
                Mostrando {filteredHistory.length} resultados
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {filteredHistory.map((item, index) => (
                <Link href={item.id === "CMP-NV-092" ? "/tracking" : "#"} key={index} className="group flex flex-col md:flex-row justify-between items-start md:items-center p-4 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface transition-all bg-surface-container-lowest cursor-pointer">
                  
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="bg-surface-dim p-3 rounded-lg text-primary group-hover:bg-primary-container transition-colors">
                      <span className="material-symbols-outlined">description</span>
                    </div>
                    <div>
                      <h3 className="font-body-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex gap-3 mt-1">
                        <span className="font-mono text-xs font-bold text-outline bg-surface-container px-2 py-1 rounded">
                          {item.id}
                        </span>
                        <span className="font-label-bold text-xs text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-outline-variant pt-4 md:pt-0">
                    <div className="flex flex-col md:items-end">
                      <span className="font-label-bold text-xs text-outline mb-1 font-bold">ESTADO LEGAL</span>
                      <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                        item.status === 'Aprobado' ? 'bg-success/10 text-success' :
                        item.status === 'En Revisión' ? 'bg-warning/10 text-warning' :
                        'bg-error/10 text-error'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                      chevron_right
                    </span>
                  </div>

                </Link>
              ))}

              {filteredHistory.length === 0 && (
                <div className="py-12 flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-6xl text-outline mb-4">search_off</span>
                  <p className="font-body-lg text-on-surface-variant font-bold">No se encontraron piezas con ese código.</p>
                  <button className="mt-4 text-primary font-label-bold hover:underline" onClick={() => setSearchTerm("")}>
                    Limpiar búsqueda
                  </button>
                </div>
              )}

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
