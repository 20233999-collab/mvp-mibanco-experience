---
name: Sistema de Diseño Mibanco
colors:
  surface: '#ffffff'
  surface-dim: '#f3f4f6'
  on-surface: '#1f2937'
  primary: '#00964B'
  on-primary: '#ffffff'
  secondary: '#FFD100'
  on-secondary: '#1f2937'
  error: '#F6323E'
  on-error: '#ffffff'
  background: '#ffffff'
  on-background: '#1f2937'
typography:
  headline-h1:
    fontFamily: Brevia
    fontSize: 48px
    fontWeight: '700'
  body-md:
    fontFamily: Brevia
    fontSize: 16px
    fontWeight: '400'
rounded:
  DEFAULT: 0.5rem
---
# 🎨 Sistema de Diseño y UI/UX (design.md)
**Proyecto:** Plataforma de Inteligencia Artificial Híbrida para Validación y Cobranza Predictiva  
**Cliente:** Mibanco (Banco de la Microempresa S.A.)  

Este documento define las directrices visuales, de interacción y de identidad verbal para garantizar que la plataforma tecnológica refleje exactamente el manual de marca oficial de Mibanco.

---

## 1. IDENTIDAD Y TERRITORIO DE MARCA
Toda la plataforma, tanto en su interfaz para el trabajador (Fábrica de Contenidos) como en su interacción con el cliente (Motor de Cobranza), debe respirar el territorio de marca **"El Tigre"**.
*   **Concepto Central:** El microempresario peruano es un "guerrero por naturaleza". La comunicación y el diseño no deben apelar al sufrimiento o la lástima, sino a la **valentía, agilidad de decisión y capacidad de transformación**.
*   **Claim de Marca:** "El mañana es de todos", "Transformamos vidas, escribimos juntos historias de progreso".
*   **Tono de Voz de la Interfaz:** Inspirador, optimista, cercano y sencillo. La plataforma le hablará al usuario de "tú" (segunda persona del singular), con un lenguaje claro que evite el uso innecesario de anglicismos (ej. preferir "Botón" a "Button")

---

## 2. PALETA CROMÁTICA (UI COLORS)
La interfaz gráfica debe utilizar los colores institucionales para construir una imagen sólida y coherente. El color verde es el protagonista principal y debe tener presencia de privilegio.

### Colores Principales (Brand Colors)
*   🟢 **Verde Mibanco (Color Protagónico / Primary Action):**
    *   HEX: `#00964B` | RGB: 0, 149, 48.
    *   *Uso:* Barra de navegación superior, botones de acción principal (CTA) como "Aprobar y Enviar" o "Validar texto".
*   🟡 **Amarillo Brillante (Secondary Action / Highlights):**
    *   HEX: `#FFD100` | RGB: 255, 209, 0.
    *   *Uso:* Botones secundarios, iconos de atención, resaltado de palabras clave modificadas por el Agente de Claridad.
*   🟠 **Naranja Oscuro (Accents):**
    *   HEX: `#F28F00` | RGB: 243, 144, 0.
*   🟠 **Naranja Pastel (Accents):**
    *   HEX: `#FAB500` | RGB: 250, 180, 0.

### Colores Secundarios (Alertas y Estados)
Estos colores se usarán para los *Dashboards* y el semáforo de riesgo del Agente de Cumplimiento Legal:
*   🔴 **Rojo (Riesgo Legal / Alerta Indecopi):** HEX `#F6323E`.
*   🟢 **Verde Claro (Éxito / Optimizado):** HEX `#71B74C`.
*   🔵 **Celeste / Turquesa (Información / Tooltips):** HEX `#3FB4E5`.
*   🟤 **Marrón (Advertencias secundarias):** HEX `#CA7C2F`.
*   ⚪ **Gris Institucional (Textos secundarios / Deshabilitados):** HEX `#737577`.

---

## 3. TIPOGRAFIA
La plataforma utilizará la familia tipográfica oficial para favorecer el reconocimiento visual.

*   **Tipografía Principal (Web/Desktop):** **Brevia**.
    *   *Títulos (H1, H2) y Destacados:* Brevia Light, Brevia Black, o Brevia Extra Black. Se recomienda mezclar pesos (ej. Light y Black) para crear titulares llamativos y destacar palabras clave.
    *   *Cuerpo de Texto y Párrafos (Body):* Brevia Regular o Brevia Medium.
    *   *Misceláneas y Etiquetas:* Brevia Bold o Brevia Bold Italic.
*   **Tipografía Secundaria (Fallback Digital):** **Kreon**.
    *   *Uso:* Si la tipografía Brevia no es compatible con algún componente web o en la Extensión de Chrome, se utilizará Kreon (Light, Medium, SemiBold, Bold) obligatoriamente.

---

## 4. COMPONENTES VISUALES Y ELEMENTOS GRÁFICOS (UI KIT)

*   **Isologotipo:** El nombre de la marca debe escribirse siempre como **"Mibanco"** (solo la primera letra en mayúscula). El sol del logotipo lleva un degradado radial y no admite efectos 3D ni distorsiones.
*   **Contenedor de Marca:** Si el fondo es complejo, el logo debe ir en una caja con la parte superior ligeramente inclinada y la base recta.
*   **Formas y Botones:** Los botones deben tener bordes redondeados (border-radius) para denotar amigabilidad y modernidad.
*   **Burbujas de Chat (Balloons):** Para el módulo de validación o el chat de cobranza de WhatsApp, los soportes de texto deben ser redondeados, simulando cajas de diálogo ("Consultorio Financiero").
*   **Gráfica Complementaria (Patrones):** Se pueden usar "tiras de colores" (compuestas por triángulos tipo pica-pica o banderines) como recursos para separar secciones o adornar los bordes de la plataforma (máximo ocupando el 25% del espacio del header).
*   **Destellos (Sparkles):** Pequeños íconos de líneas radiales utilizados para remarcar notificaciones de éxito o el descubrimiento de una nueva funcionalidad ("¡Optimizado por IA!").

---

## 5. ESTILO DE ICONOGRAFÍA E ILUSTRACIÓN

*   **Iconos de la Plataforma:** Estilo lineal curvilíneo, simple, acompañado de un detalle o sombra sólida en color verde Mibanco para mantener la identidad.
*   **Ilustraciones (Empty States / Onboarding):** Si se usan personajes para ilustrar el dashboard (ej. cuando no hay campañas pendientes), deben ser modernos, dinámicos, inclusivos y **siempre sonrientes y animosos**. Nunca deben reflejar tristeza o preocupación. Deben reflejar la diversidad cultural y étnica del Perú.

---

## 6. APLICACIÓN DE ESTILOS AL FLUJO AGÉNTICO (EJEMPLOS)

### A. Interfaz "Fábrica de Contenidos" (Dashboard Trabajador CX)
*   **Semáforo de Riesgo (Agente Legal):** Utilizará los colores HEX `#71B74C` (Verde: Sin riesgo), `#FFD100` (Amarillo: Riesgo moderado) y `#F6323E` (Rojo: Método de cobranza abusivo detectado).
*   **Comparador de Textos (Agente de Claridad):** El panel dividirá la pantalla. El "Borrador Original" tendrá tipografía gris (`#737577`), mientras que la "Sugerencia Optimizada" usará Brevia Regular en negro o gris oscuro, con las palabras clave mejoradas destacadas en Brevia Black y color Verde Mibanco (`#00964B`).

### B. Extensión "Grammarly CX"
*   **UI Flotante:** Una tarjeta blanca minimalista con un borde superior inclinado verde (`#00964B`), emulando el contenedor de marca oficial. Las alertas aparecerán como burbujas de texto (balloons) cerca de la palabra mal escrita por el asesor.

### C. Motor Predictivo (Cara al Cliente en WhatsApp)
*   **Tono de Mensajes:** Los mensajes enviados por la IA predictiva deben cumplir el manual: asertivos, omitiendo jerga bancaria, resaltando el esfuerzo del "Tigre" y promoviendo el comportamiento positivo.
*   **Multimedios:** Cuando se envíen imágenes o infografías automáticas, la fotografía debe tener encuadres de plano general o plano medio, mostrando la realidad y alegría del entorno del cliente.

---
*Fin del documento design.md*

