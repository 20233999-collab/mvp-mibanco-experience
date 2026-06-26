"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function IngestaPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  
  // Tabs & Modes
  const [ingestaMode, setIngestaMode] = useState<"inbox" | "manual">("inbox");
  
  // Manual State
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  
  // Inbox State
  const [inboxState, setInboxState] = useState<"idle" | "searching" | "results">("idle");
  const [unreadOnly, setUnreadOnly] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [campaignCode, setCampaignCode] = useState("");
  
  // Pieces State
  const [foundPieces, setFoundPieces] = useState([
    { id: 1, name: "Borrador_Campaña_Madres.pdf", type: "pdf", sender: "marketing@mibanco.com.pe", selected: false, group: null as string | null },
    { id: 2, name: "Guion_CallCenter_v2.docx", type: "docx", sender: "agencia.centro@mibanco.com.pe", selected: false, group: null as string | null },
    { id: 3, name: "Banner_RRSS_Propuesta.png", type: "image", sender: "diseno.externo@agencia.com", selected: false, group: null as string | null },
  ]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = () => {
    router.push("/procesando");
  };

  const togglePieceSelection = (id: number) => {
    setFoundPieces(prev => prev.map(p => p.id === id ? { ...p, selected: !p.selected } : p));
  };

  const handleGroupSelected = () => {
    const selectedCount = foundPieces.filter(p => p.selected).length;
    if (selectedCount < 2) return; // Need at least 2 to group
    
    const groupId = `Grupo-${Math.floor(Math.random() * 1000)}`;
    setFoundPieces(prev => prev.map(p => p.selected ? { ...p, group: groupId, selected: false } : p));
  };

  const handleAddPiece = () => {
    const newId = Date.now();
    setFoundPieces(prev => [...prev, { 
      id: newId, 
      name: `Nuevo_Documento_${Math.floor(Math.random() * 100)}.pdf`, 
      type: "pdf", 
      sender: "cargado_manualmente", 
      selected: false, 
      group: null 
    }]);
  };

  return (
    <>
      {/* TopNavBar Shell */}
      <nav className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-4 md:px-10 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img alt="Mibanco Logo" className="h-12 md:h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmssiu49Zy8zQu6aJwt2ouVEUwZKT2EENlQ-39re8WEkENKMg4sRlGKw-h56xguvnlrMceDX7d2itsqsT5anlGHr9J6EI2nBCv6S6I5QTQXeMNZoTEle-nGdY7n9qFx1_k8VPiWGxE7twh6dVOC1wGFQJ5AxklaffZAUGbACdy2oXG4lndxwYF4zlzZ21NRfUeUqo6sazMPQZiPDfmDcilN7PlxU_TP-yhiz7Ky4i1yFYISSJ9vl8IyMvrQMnecNgj1dtWMzUn41LY" />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link className="text-on-surface-variant hover:text-primary-container transition-colors py-1 cursor-pointer" href="/panel">Panel</Link>
          <span className="text-primary font-bold border-b-2 border-primary transition-colors py-1 cursor-pointer">Archivos</span>
        </div>
        <div className="flex items-center gap-4 text-primary">
          <span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-all">account_circle</span>
        </div>
      </nav>

      {/* Main Content Layout */}
      <main className={`flex-grow flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-10 py-8 min-h-[80vh] transition-all duration-[800ms] ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="absolute inset-0 bunting-pattern pointer-events-none"></div>
        
        <div className="w-full max-w-3xl z-10 flex flex-col gap-4">
          
          <Link href="/panel" className="self-start text-on-surface-variant hover:text-primary font-bold text-sm flex items-center gap-2 transition-colors bg-surface-container-lowest py-2 px-4 rounded-full mibanco-shadow active:scale-95">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Volver al Panel de Control
          </Link>

          <div className="bg-surface-container-lowest rounded-xl mibanco-shadow overflow-hidden flex flex-col mt-2">
            <div className="bg-primary-container p-6 tilted-header relative">
              <div className="absolute top-4 right-6 opacity-20">
                <span className="material-symbols-outlined text-on-primary text-6xl">
                  {ingestaMode === 'inbox' ? 'inbox_customize' : 'upload_file'}
                </span>
              </div>
              <h2 className="font-headline-md text-2xl text-on-primary font-bold">Ingreso de Nueva Pieza</h2>
              <p className="font-body-md text-on-primary-container mt-1 opacity-90">Sube el contenido para análisis automatizado con Inteligencia Artificial.</p>
            </div>

            <div className="p-8 md:p-12 flex-grow flex flex-col gap-6 items-center">
              
              {/* Toggle Switcher */}
              <div className="flex bg-surface-container p-1 rounded-lg self-center mb-2">
                <button 
                  onClick={() => setIngestaMode("inbox")}
                  className={`px-4 py-2 text-sm font-bold rounded-md transition-all flex items-center gap-2 ${ingestaMode === 'inbox' ? 'bg-surface mibanco-shadow text-primary' : 'text-on-surface-variant hover:text-primary'}`}
                >
                  <span className="material-symbols-outlined text-[18px]">forward_to_inbox</span>
                  Analizar Bandeja
                </button>
                <button 
                  onClick={() => setIngestaMode("manual")}
                  className={`px-4 py-2 text-sm font-bold rounded-md transition-all flex items-center gap-2 ${ingestaMode === 'manual' ? 'bg-surface mibanco-shadow text-primary' : 'text-on-surface-variant hover:text-primary'}`}
                >
                  <span className="material-symbols-outlined text-[18px]">upload</span>
                  Subida Manual
                </button>
              </div>

              {ingestaMode === "inbox" ? (
                <div className="w-full relative border border-outline-variant rounded-xl p-8 md:p-12 flex flex-col items-center justify-center text-center bg-surface-container-low transition-all">
                  
                  {inboxState === "idle" && (
                    <div className="flex flex-col items-center w-full animate-in fade-in duration-300">
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        <span className="bg-primary-container text-on-primary-container text-[11px] px-3 py-1 rounded-full font-bold flex items-center gap-1 border border-primary/20">
                          <span className="material-symbols-outlined text-[14px]">mail</span>
                          cx.legal@mibanco.com.pe
                        </span>
                      </div>
                      <div className="w-20 h-20 bg-surface rounded-full shadow-sm flex items-center justify-center mb-6 text-primary">
                        <span className="material-symbols-outlined text-4xl">inventory_2</span>
                      </div>
                      <h3 className="font-headline-md text-xl text-on-surface mb-2 font-bold">Analizar bandeja de entrada</h3>
                      <p className="font-body-md text-on-surface-variant mb-6 text-sm">Detecta, organiza y extrae las piezas que llegan al correo del área.</p>
                      
                      <div className="w-full max-w-sm flex flex-col gap-4 text-left">
                        <div className="flex flex-col gap-2">
                          <label className="font-label-bold text-sm text-on-surface-variant font-bold">Código de Campaña (Opcional)</label>
                          <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                            <input 
                              type="text" 
                              value={campaignCode}
                              onChange={(e) => setCampaignCode(e.target.value)}
                              placeholder="Ej: CMP-NV-092" 
                              className="w-full pl-12 pr-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-body-md transition-all outline-none bg-surface" 
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <label className="flex items-center gap-2 cursor-pointer group w-fit">
                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${unreadOnly ? 'bg-primary border-primary' : 'border-outline group-hover:border-primary'}`}>
                              {unreadOnly && <span className="material-symbols-outlined text-on-primary text-[14px]">check</span>}
                            </div>
                            <input type="checkbox" className="hidden" checked={unreadOnly} onChange={() => setUnreadOnly(!unreadOnly)} />
                            <span className="text-sm text-on-surface-variant font-bold group-hover:text-primary transition-colors">Solo no leídos</span>
                          </label>

                          <button 
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center gap-1 text-sm font-bold transition-colors ${showFilters ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
                          >
                            <span className="material-symbols-outlined text-[16px]">filter_list</span>
                            Filtros
                          </button>
                        </div>

                        {showFilters && (
                          <div className="bg-surface border border-outline-variant rounded-lg p-4 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-200">
                            <div className="flex flex-col gap-1">
                              <label className="text-[11px] font-bold text-outline">Remitente contiene:</label>
                              <input type="text" placeholder="@mibanco.com.pe" className="w-full text-sm py-1.5 px-3 border border-outline-variant rounded focus:border-primary outline-none" />
                            </div>
                            <div className="flex gap-2">
                              <div className="flex flex-col gap-1 flex-1">
                                <label className="text-[11px] font-bold text-outline">Fecha desde:</label>
                                <input type="date" className="w-full text-sm py-1.5 px-3 border border-outline-variant rounded focus:border-primary outline-none" />
                              </div>
                              <div className="flex flex-col gap-1 flex-1">
                                <label className="text-[11px] font-bold text-outline">Fecha hasta:</label>
                                <input type="date" className="w-full text-sm py-1.5 px-3 border border-outline-variant rounded focus:border-primary outline-none" />
                              </div>
                            </div>
                          </div>
                        )}

                        <button
                          onClick={() => {
                            setInboxState("searching");
                            setTimeout(() => setInboxState("results"), 2500);
                          }}
                          className="w-full mt-4 bg-primary hover:opacity-90 text-on-primary active:scale-95 font-bold text-sm py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 mibanco-shadow"
                        >
                          Buscar Piezas
                          <span className="material-symbols-outlined">search</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {inboxState === "searching" && (
                    <div className="flex flex-col items-center justify-center py-10 animate-in fade-in duration-300">
                      <div className="w-16 h-16 rounded-full border-4 border-surface border-t-primary animate-spin mb-6"></div>
                      <h3 className="font-headline-md text-xl text-on-surface mb-2 font-bold">La IA está detectando piezas...</h3>
                      <p className="font-body-md text-on-surface-variant text-sm animate-pulse">Escaneando cx.legal@mibanco.com.pe</p>
                    </div>
                  )}

                  {inboxState === "results" && (
                    <div className="w-full flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4 text-success">
                        <span className="material-symbols-outlined text-4xl">check_circle</span>
                      </div>
                      <h3 className="font-headline-md text-xl text-on-surface mb-2 font-bold">{foundPieces.length} Piezas Detectadas</h3>
                      <p className="font-body-md text-on-surface-variant text-sm mb-6 max-w-sm">¿Deseas importar estas piezas y generar un código único para cada una de ellas?</p>

                      <div className="w-full flex justify-between items-center mb-4 px-2">
                        <button 
                          onClick={handleGroupSelected}
                          disabled={foundPieces.filter(p => p.selected).length < 2}
                          className="flex items-center gap-1 text-[12px] font-bold text-primary disabled:text-outline disabled:cursor-not-allowed hover:bg-primary-container/50 px-2 py-1 rounded transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">view_comfy</span>
                          Agrupar Seleccionados
                        </button>
                        
                        <button 
                          onClick={handleAddPiece}
                          className="flex items-center gap-1 text-[12px] font-bold text-on-surface-variant hover:text-primary hover:bg-surface-container px-2 py-1 rounded transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">add_circle</span>
                          Añadir Pieza
                        </button>
                      </div>

                      <div className="w-full flex flex-col gap-2 mb-8 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                        {foundPieces.map((piece) => (
                          <div key={piece.id} className={`bg-surface border ${piece.selected ? 'border-primary ring-1 ring-primary' : 'border-outline-variant'} rounded-lg p-3 flex items-center justify-between gap-3 text-left transition-all`}>
                            <div className="flex items-center gap-3 overflow-hidden flex-1 cursor-pointer" onClick={() => togglePieceSelection(piece.id)}>
                              <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors shrink-0 ${piece.selected ? 'bg-primary border-primary' : 'border-outline'}`}>
                                {piece.selected && <span className="material-symbols-outlined text-on-primary text-[12px]">check</span>}
                              </div>
                              <span className={`material-symbols-outlined text-[24px] shrink-0 ${piece.type === 'pdf' ? 'text-error' : piece.type === 'docx' ? 'text-info' : 'text-warning'}`}>
                                {piece.type === 'pdf' ? 'picture_as_pdf' : piece.type === 'docx' ? 'description' : 'image'}
                              </span>
                              <div className="flex flex-col truncate">
                                <span className="font-bold text-sm text-on-surface truncate flex items-center gap-2">
                                  {piece.name}
                                  {piece.group && (
                                    <span className="bg-tertiary-container text-on-tertiary-container text-[9px] px-2 py-0.5 rounded-full whitespace-nowrap">
                                      {piece.group}
                                    </span>
                                  )}
                                </span>
                                <span className="text-[10px] text-on-surface-variant flex items-center gap-1">
                                  <span className="material-symbols-outlined text-[10px]">mail</span>
                                  {piece.sender}
                                </span>
                              </div>
                            </div>
                            <button 
                              onClick={() => setFoundPieces(prev => prev.filter(p => p.id !== piece.id))}
                              className="w-8 h-8 rounded-full hover:bg-error/10 text-outline hover:text-error flex items-center justify-center transition-colors shrink-0"
                              title="Quitar pieza"
                            >
                              <span className="material-symbols-outlined text-[16px]">delete</span>
                            </button>
                          </div>
                        ))}
                        {foundPieces.length === 0 && (
                          <p className="text-sm text-outline italic py-4 text-center">No hay piezas seleccionadas.</p>
                        )}
                      </div>

                      <div className="flex gap-3 w-full max-w-sm">
                        <button 
                          onClick={() => setInboxState("idle")}
                          className="flex-1 border border-outline-variant text-on-surface-variant hover:bg-surface-container font-bold text-sm py-3 rounded-full transition-all active:scale-95"
                        >
                          Cancelar
                        </button>
                        <button 
                          onClick={handleAnalyze}
                          disabled={foundPieces.length === 0}
                          className="flex-1 bg-primary hover:opacity-90 text-on-primary disabled:opacity-50 disabled:cursor-not-allowed font-bold text-sm py-3 rounded-full transition-all active:scale-95 mibanco-shadow"
                        >
                          Importar y Continuar
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              ) : (
                /* Drop Area */
                <div className="w-full flex flex-col items-center animate-in fade-in duration-300">
                  <div 
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`w-full relative border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center transition-all duration-300 ${
                      isDragging 
                        ? "border-primary bg-primary-container/10 scale-[1.02]" 
                        : "border-outline-variant bg-surface-container-low hover:bg-surface-container"
                    }`}
                  >
                    <input 
                      type="file" 
                      accept=".txt,.doc,.docx,.pdf"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      onChange={handleFileChange}
                    />
                    
                    {!file ? (
                      <>
                        <div className="w-20 h-20 bg-surface rounded-full shadow-sm flex items-center justify-center mb-6 text-primary">
                          <span className="material-symbols-outlined text-4xl">cloud_upload</span>
                        </div>
                        <h3 className="font-headline-md text-xl text-on-surface mb-2 font-bold">Arrastra tu archivo aquí</h3>
                        <p className="font-body-md text-on-surface-variant">o haz clic para buscar en tu equipo</p>
                        <p className="text-outline text-sm mt-4 font-label-bold font-bold">Formatos soportados: PDF, DOCX, TXT</p>
                      </>
                    ) : (
                      <>
                        <div className="w-20 h-20 bg-secondary-container rounded-full shadow-sm flex items-center justify-center mb-6 text-on-secondary-fixed">
                          <span className="material-symbols-outlined text-4xl">draft</span>
                        </div>
                        <h3 className="font-headline-md text-xl text-on-surface mb-2 font-bold">{file.name}</h3>
                        <p className="font-body-md text-on-surface-variant">{(file.size / 1024).toFixed(2)} KB listos para analizar</p>
                        <button 
                          onClick={(e) => { e.preventDefault(); setFile(null); }}
                          className="mt-4 text-error text-sm font-label-bold hover:underline z-20 relative font-bold"
                        >
                          Quitar archivo
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Action Button for Manual Mode */}
                  <button
                    onClick={handleAnalyze}
                    disabled={!file}
                    className={`w-full max-w-sm mt-8 font-label-bold text-sm py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 mibanco-shadow ${
                      file 
                        ? "bg-primary hover:opacity-90 text-on-primary active:scale-95 font-bold" 
                        : "bg-surface-container-highest text-outline cursor-not-allowed opacity-70 font-bold"
                    }`}
                  >
                    Iniciar Análisis Multi-Agente
                    <span className="material-symbols-outlined">psychology</span>
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>

      {/* Footer Shell */}
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
