# Arquitectura de Pantallas (MVP Módulo 1)

**Propósito:** Definir las vistas y componentes de interfaz gráfica (UI/UX) requeridas para la simulación del prototipo interactivo (Módulo 1: Fábrica de Contenidos).

---

## 🖥️ Pantalla 0: Portal de Acceso (Login / Seguimiento)
*   **Descripción:** La vista inicial pública del sistema. Sirve como bifurcación para dos tipos de usuarios: los que inician sesión para operar y los que solo vienen a rastrear el estado de una campaña.
*   **Elementos Visuales (Componentes):**
    *   Logotipo principal de Mibanco.
    *   **Sección de Tracking:** Input limpio para ingresar el "Código de Pieza" y un botón ("Buscar Pieza") para entrar al visor de solo lectura.
    *   **Sección de Login (CX/Legal):** Formulario de acceso institucional con usuario, contraseña y botón Verde Mibanco ("Ingresar al Módulo").

## 🖥️ Pantalla 1: Interfaz de Ingesta (El Ingestor Simulado)
*   **Descripción:** La vista de bienvenida y punto de partida de la demostración. Aquí el usuario (jurado o presentador) subirá el contenido "crudo" para ser procesado.
*   **Elementos Visuales (Componentes):**
    *   Zona interactiva grande de *Drag & Drop* centrada (para soltar un texto, documento o correo).
    *   Logotipo de Mibanco o del ecosistema "Ingeniero Locaso".
    *   Un *Call to Action* (CTA) principal: Botón "Analizar Contenido" (Verde Mibanco).

## 🖥️ Pantalla 2: Animación de Carga (Procesamiento de Agentes)
*   **Descripción:** Pantalla de transición (loading state) para simular los milisegundos en los que los 5 agentes de Inteligencia Artificial evalúan simultáneamente la pieza.
*   **Elementos Visuales (Componentes):**
    *   Animaciones (destellos amarillos "Sparkles" o *spinners* dinámicos).
    *   Texto dinámico rotativo: *"La IA del Tigre está analizando el tono..."*, *"Validando riesgos legales con Indecopi..."*, *"Ajustando claridad..."*.

## 🖥️ Pantalla 3: Dashboard de Aprobación "Human-in-the-Loop"
*   **Descripción:** Es el panel de control central. La vista más importante donde se evidencian las mejoras de la IA y el usuario final mantiene el control.
*   **Elementos Visuales (Componentes):**
    *   **Panel Dividido (Split Screen):** Lado izquierdo muestra el "Borrador Original". Lado derecho muestra la "Versión Optimizada".
    *   **Resaltador de Cambios:** En la versión optimizada se deben destacar con colores los arreglos (ej. verde para mejora de tono, rojo para bloqueos legales).
    *   **Semáforo Legal:** Un indicador visual del riesgo de Indecopi.
    *   **Panel de Agentes:** Checkmarks o íconos que muestren el estatus de las 5 evaluaciones (Tono, Legal, UX, Claridad, Demográfico).
    *   Botón final superior de "Aprobar y Enviar".

## 🖥️ Pantalla 4: Panel "Tracking Link" (Estado en Vivo)
*   **Descripción:** Vista minimalista y de *solo lectura* enfocada a las áreas solicitantes para saber el estado de su revisión.
*   **Elementos Visuales (Componentes):**
    *   Barra de progreso visual por etapas ("Ingresado" -> "Análisis IA" -> "Aprobación Humana" -> "Listo").
    *   Información en tarjeta: Código Único de Pieza (ej. `CMP1-SMS-001`).

## 🖥️ Pantalla 5: Central de Trazabilidad e Historial
*   **Descripción:** Bitácora de auditoría para buscar y revisar piezas anteriores.
*   **Elementos Visuales (Componentes):**
    *   Barra de búsqueda grande y centrada ("Buscar Código Único").
    *   Tabla de resultados o *cards* apiladas mostrando un resumen del historial de cambios de IA y revisiones humanas (útil para cumplimiento legal).

---

*(Nota: La "Extensión Grammarly CX" queda como un componente conceptual que podría simularse como un pop-up flotante, pero no es una pantalla en sí misma para el ecosistema del prototipo principal).*
