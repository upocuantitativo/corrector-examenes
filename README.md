# 📱 Corrector de Exámenes (PWA)

App web instalable para **corregir exámenes tipo test con la cámara del móvil**.
Enfocas el examen y aparecen ✔ verde / ✘ roja / ❔ amarillo (duda), con el total
de puntos desglosado al final.

> Aplicación cliente 100% en el navegador (HTML/CSS/JS, sin servidor). Las
> soluciones y la calibración se guardan en el propio dispositivo (`localStorage`).

## Algoritmo de corrección

| Resultado | Puntos |
|-----------|--------|
| ✔ Acierto | **+0,30** |
| ✘ Fallo | **−0,10** |
| · En blanco | 0 |
| ❔ Duda (2+ opciones marcadas) | 0 — **excluida del total** |

Nota final sobre 10 = `puntos / 3,00 × 10` (Sobresaliente ≥9 · Notable ≥7 ·
Aprobado ≥5 · Suspenso). Examen de 10 preguntas → máximo **3,00**.

## Uso rápido

1. Abre la app, elige **Modelo 1** o **Modelo 2** (soluciones precargadas y editables).
2. **📷 Tomar / elegir foto** del examen.
3. Toca, fila por fila, la letra que marcó el alumno → ✔/✘/? + cuadro total al instante.
4. **↺ Empezar examen nuevo** para el siguiente.

### Detección automática (opcional)
Calibra una vez por modelo (toca las 30 letras). Después, en cada examen marca
2 referencias y pulsa **✨ Detectar respuestas**: rellena el panel solo y tú
corriges lo que haga falta. Detalles en [`LEEME.md`](LEEME.md).

## Instalar como app
Abre la URL **https** en el móvil → menú del navegador → **«Añadir a pantalla de
inicio»**. Funciona sin conexión gracias al service worker.

## Estructura
- `index.html` — la app completa.
- `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png` — PWA instalable/offline.
- `LEEME.md` — guía detallada (uso, calibración, instalación).

---
Hecho con ayuda de Claude Code.
