"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const bunting = document.querySelector('.bunting-pattern') as HTMLElement;
    let posX = 0;
    let posY = 0;
    
    function animateBg() {
      posX += 0.05;
      posY += 0.05;
      if (bunting) {
        bunting.style.backgroundPosition = `${posX}px ${posY}px`;
      }
      requestAnimationFrame(animateBg);
    }
    const req = requestAnimationFrame(animateBg);
    return () => cancelAnimationFrame(req);
  }, []);

  return (
    <>
      {/* TopNavBar Shell */}
      <nav className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-4 md:px-10 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img alt="Mibanco Logo" className="h-12 md:h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmssiu49Zy8zQu6aJwt2ouVEUwZKT2EENlQ-39re8WEkENKMg4sRlGKw-h56xguvnlrMceDX7d2itsqsT5anlGHr9J6EI2nBCv6S6I5QTQXeMNZoTEle-nGdY7n9qFx1_k8VPiWGxE7twh6dVOC1wGFQJ5AxklaffZAUGbACdy2oXG4lndxwYF4zlzZ21NRfUeUqo6sazMPQZiPDfmDcilN7PlxU_TP-yhiz7Ky4i1yFYISSJ9vl8IyMvrQMnecNgj1dtWMzUn41LY" />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => setIsLoginView(true)}
            className={`${isLoginView ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary-container'} transition-colors py-1 cursor-pointer`}
          >
            Inicio
          </button>
          <button 
            onClick={() => setIsLoginView(false)}
            className={`${!isLoginView ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary-container'} transition-colors py-1 cursor-pointer`}
          >
            Rastreador
          </button>
          <a className="text-on-surface-variant hover:text-primary-container transition-colors py-1 cursor-pointer" href="/acerca">Acerca de</a>
        </div>
        <div className="flex items-center gap-4 text-primary">
          <span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-all">help</span>
          <span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-all">language</span>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="flex-grow flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-10 py-8">
        {/* Background Accents */}
        <div className="absolute inset-0 bunting-pattern pointer-events-none"></div>
        
        {/* Page Header */}
        <div className="mb-8 text-center z-10">
          <div className="flex justify-center mb-6">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyi9ULuKRFAUMalekJ4b3BINtxfS6J5pXzm1Bp_CVqacrB6JIDsbqrfNVExRaKVn7JvJ9t3cCjKpAlBuSlg-7gmBkzhJj4Vt4FGsoE07Gdu0e28jGt7ahmYYsv_ZJR3UsCbMPShUewm_sGaMcY7wjX1QiRV05FjcjiOEv65NobUXblaRS8k0WoAfuCWiL2D3CvXMAfP3yOcUXgtTMsJ5EAtjp6Beg6JhUdsBydesx7foceErSDq38B6Oti4v3WTkoaT3pUmydc-jML" alt="Mibanco Logo Large" className="h-24 md:h-32 object-contain" />
          </div>
          <h1 className="font-headline-xl text-5xl md:text-5xl text-on-surface font-black tracking-tight">MiBanco Experience</h1>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto mt-2">
            Gestión inteligente de campañas CX y cumplimiento legal para el guerrero emprendedor.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="w-full max-w-xl z-10">
          {/* Centered Access Card */}
          <div className="bg-surface-container-lowest rounded-xl mibanco-shadow overflow-hidden flex flex-col">
            <div className="bg-primary-container p-6 tilted-header relative">
              <div className="absolute top-4 right-6 opacity-20">
                <span className="material-symbols-outlined text-on-primary text-6xl">
                  {isLoginView ? "admin_panel_settings" : "travel_explore"}
                </span>
              </div>
              <h2 className="font-headline-md text-2xl text-on-primary font-bold">
                {isLoginView ? "Acceso Equipo CX y Legal" : "Rastreador de Pieza"}
              </h2>
              <p className="font-body-md text-on-primary-container mt-1 opacity-90">
                {isLoginView ? "Gestión de cumplimiento y optimización" : "Consulta el estado en tiempo real"}
              </p>
            </div>
            
            <div className="p-8 flex-grow flex flex-col gap-6">
              {/* Toggle Switcher */}
              <div className="flex justify-center mb-2">
                <button 
                  onClick={() => setIsLoginView(!isLoginView)}
                  className="text-primary hover:text-primary-container font-label-bold text-sm flex items-center gap-1 transition-colors group"
                >
                  <span className="material-symbols-outlined text-lg">track_changes</span>
                  <span className="border-b border-primary group-hover:border-primary-container">
                    {isLoginView ? "Ir a Rastreador de Pieza" : "Volver a Acceso Equipo CX"}
                  </span>
                </button>
              </div>
              
              {isLoginView ? (
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-sm text-on-surface-variant font-bold">Usuario</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">person</span>
                      <input className="w-full pl-12 pr-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-body-md transition-all outline-none" placeholder="nombre.apellido@mibanco.com.pe" type="text" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <label className="font-label-bold text-sm text-on-surface-variant font-bold">Contraseña</label>
                      <a className="text-primary text-sm font-label-bold hover:underline font-bold" href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                      <input className="w-full pl-12 pr-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-body-md transition-all outline-none" placeholder="••••••••" type="password" />
                    </div>
                  </div>
                  <button 
                    onClick={() => { setIsAuthenticating(true); setTimeout(() => router.push('/panel'), 800); }}
                    disabled={isAuthenticating}
                    className="bg-secondary-container hover:opacity-90 text-on-secondary-fixed font-bold text-sm py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 mibanco-shadow active:scale-95 mt-2 disabled:opacity-50"
                  >
                    {isAuthenticating ? (
                      <>
                        <span className="material-symbols-outlined animate-spin" style={{ animationDuration: '1s' }}>progress_activity</span>
                        Autenticando...
                      </>
                    ) : (
                      <>
                        Ingresar al Módulo
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </>
                    )}
                  </button>
                  <div className="flex items-center gap-2 justify-center py-2 opacity-60">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    <span className="text-sm font-label-bold font-bold">Acceso seguro con cifrado bancario</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-bold text-sm text-on-surface-variant font-bold">Código de Seguimiento</label>
                    <p className="text-sm text-gray-500 mb-2">Ingresa el código único (ej. CMP1-SMS-001) para ver el estado de tu pieza.</p>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                      <input className="w-full pl-12 pr-4 py-3 rounded-lg border border-outline-variant focus:border-secondary focus:ring-0 text-body-md transition-all outline-none" placeholder="CMP1-SMS-001" type="text" />
                    </div>
                  </div>
                  <Link href="/tracking" className="bg-primary hover:opacity-90 text-on-primary font-bold text-sm py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 mibanco-shadow active:scale-95 mt-2">
                    Consultar Estado
                    <span className="material-symbols-outlined">search</span>
                  </Link>
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
          <div className="flex gap-6">
            <a className="font-body-md text-sm text-on-surface-variant hover:underline hover:text-primary transition-all" href="#">Privacidad</a>
            <a className="font-body-md text-sm text-on-surface-variant hover:underline hover:text-primary transition-all" href="#">Términos</a>
            <a className="font-body-md text-sm text-on-surface-variant hover:underline hover:text-primary transition-all" href="#">Soporte CX</a>
          </div>
        </div>
      </footer>
    </>
  );
}
