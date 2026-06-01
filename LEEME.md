# 📱 Corrector de Exámenes (app móvil / PWA)

App web instalable para corregir exámenes tipo test **con la cámara del móvil**.
Adapta el algoritmo de corrección del proyecto de escritorio:

- ✔️ **Acierto** = **+0,30**
- ❌ **Fallo** = **−0,10**
- ❔ **Duda** (el alumno marcó **dos o más** opciones) → **amarillo**, **no suma ni resta**
- · **En blanco** = 0
- **Nota final** sobre 10 = puntos / 3,00 × 10 (Sobresaliente ≥9, Notable ≥7, Aprobado ≥5)

Las soluciones ya vienen cargadas:

| Pr. | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|-----|---|---|---|---|---|---|---|---|---|----|
| **Modelo 1** (Duración subrayada) | a | a | b | a | a | a | c | b | a | a |
| **Modelo 2** (Duración sin subrayar) | b | a | a | c | b | c | a | c | b | b |

Puedes editarlas tocando las letras del apartado 1.

---

## ▶️ Cómo usarla (rápido)

1. Copia la carpeta `corrector_movil` al móvil (o ábrela como se indica abajo).
2. Abre **`index.html`**.
3. Elige **Modelo 1** o **Modelo 2**.
4. Pulsa **📷 Tomar / elegir foto** y fotografía el examen del alumno.
5. Toca, fila por fila, la letra que marcó el alumno → verás al instante ✔ / ✘ / ?
   y abajo el **cuadro con el total desglosado**.
6. **↺ Empezar examen nuevo** para el siguiente.

> El panel de corrección **funciona siempre** solo con toques, sin configurar nada.

---

## ✨ Detección automática (opcional)

Para que detecte sola la respuesta marcada en la foto:

1. **Calibra una vez por modelo** (apartado 4 → «🎯 Calibrar este modelo»):
   con una foto bien encuadrada, toca las **30 letras** en orden
   (a, b, c de la pregunta 1; a, b, c de la 2; … hasta la 10).
2. En cada examen nuevo: pulsa **📍 Marcar referencias** y toca solo
   **la «a)» de la pregunta 1** y **la «c)» de la pregunta 10**.
3. Pulsa **✨ Detectar respuestas**. La app rellena el panel sola.
4. Corrige a mano lo que haga falta tocando las letras. Las marcas dobles
   salen como **? amarillo** (duda).
5. Ajusta el deslizador **Sensibilidad** si confunde marcas.

> Funciona mejor con la foto recta y bien iluminada. Lo que no detecte bien,
> lo arreglas en 1 toque.

---

## 📲 Instalarla como app (icono en el móvil)

La cámara en vivo y la instalación necesitan **HTTPS**. Tienes dos opciones:

**A) Subirla a GitHub Pages (gratis, recomendado)**
1. Crea un repositorio y sube los archivos de esta carpeta.
2. Settings → Pages → activa Pages sobre la rama principal.
3. Abre la URL `https://...` en el móvil → menú del navegador →
   **«Añadir a pantalla de inicio»**. Ya tienes el icono como una app.

**B) Servidor local en tu PC (misma red wifi)**
```powershell
cd "C:\Documents\EDUCACIÓN\examenes\corrector_movil"
python -m http.server 8000
```
En el móvil abre `http://IP-DE-TU-PC:8000` (p. ej. `http://192.168.1.40:8000`).
Sin HTTPS la cámara en vivo puede no abrir, pero **«Tomar / elegir foto» siempre funciona**.

> Si solo abres `index.html` directamente (sin servidor), la app funciona y la
> foto se hace con la cámara nativa del móvil; solo la cámara «en vivo» y la
> instalación con icono requieren HTTPS.

---

## Archivos

- `index.html` — la app completa (toda la lógica está aquí).
- `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png` — para instalarla y usarla sin conexión.
