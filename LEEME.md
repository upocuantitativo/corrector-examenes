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

## 🤖 v3.0 — Calibrado de fábrica, autocalibrado y detección de modelo A/B

**Los dos modelos precargados ya vienen calibrados de fábrica** (a partir del PDF
del examen): no hace falta calibrar nada ni marcar referencias.

Flujo normal de corrección:

1. Haz la **foto de la página 1** del examen del alumno (encuadra el folio
   razonablemente recto).
2. La app **localiza sola las referencias** (autocalibrado por correlación con
   parches guardados), **detecta el modelo** (comprueba si «Duración» está
   subrayada y, además, compara qué modelo casa mejor con la foto) y **se cambia
   sola** al modelo correcto.
3. Detecta las respuestas, te avisa de que **des la vuelta** y repites con la
   página 2. Lo dudoso va al **diálogo de revisión** (cada respuesta que
   confirmas entrena el modelo).

Si el autocalibrado no localiza las referencias con seguridad (foto muy girada,
borrosa, con poca luz…), te lo dice y puedes pulsar **«📍 Marcar referencias»**
para colocarlas tú (el respaldo manual de siempre). El interruptor
**«🤖 Auto»** del apartado 4 desactiva el proceso automático si prefieres el
modo manual.

- **Calibrar este examen** (apartado 4) sigue disponible para exámenes nuevos:
  al calibrar se guardan también los parches del autocalibrado.
- **Borrar calibración** en los dos modelos precargados **restaura la de
  fábrica**.
- **Detección de modelo (A/B)**: para tus propios exámenes con dos modelos,
  marca una vez la palabra distintiva (p. ej. «Duración») con
  **«🔤 Marcar palabra distintiva»** y di qué examen corresponde a subrayada /
  sin subrayar.

---

## 🗂️ Gestionar exámenes (apartado 1)

No estás limitado a los dos modelos precargados. En el apartado 1 puedes:

- **Seleccionar** un examen de la lista desplegable.
- **➕ Nuevo**: crear un examen nuevo, darle un **nombre** y que quede guardado.
- **✏️ Renombrar** / **🗑️ Borrar** el examen seleccionado.

Cada examen guarda sus **soluciones**, su **calibración** y si es de **1 ó 2 páginas**.

### Definir las soluciones de un examen
Dos formas:
1. **A mano**: toca la letra correcta de cada pregunta en el apartado 1.
2. **Desde un examen corregido (foto)**: pulsa **«📷 Definir soluciones desde un
   examen corregido»**. Requiere haber calibrado el examen (apartado 4). Entonces
   haz la foto del examen bien resuelto, marca 2 referencias y «Detectar»: la app
   **lee las respuestas marcadas y las guarda como soluciones**. Revísalas después
   (quedan editables).

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
   con una foto bien encuadrada, señala las **30 letras** en orden
   (a, b, c de la pregunta 1; a, b, c de la 2; … hasta la 10).
   **Con lupa para precisión**: mantén el dedo pulsado sobre la letra —aparece
   un círculo ampliado con una cruz— deslízalo hasta centrar la cruz en la
   letra y **suelta** para fijar el punto (así no te tapa el dedo aunque la
   foto se vea pequeña). Igual al marcar las 2 referencias.
2. En cada examen nuevo: pulsa **📍 Marcar referencias** y toca solo
   **la «a)» de la pregunta 1** y **la «c)» de la pregunta 10**.
3. Pulsa **✨ Detectar respuestas**. La app rellena el panel sola.
4. Corrige a mano lo que haga falta tocando las letras. Las marcas dobles
   salen como **? amarillo** (duda).
5. Ajusta el deslizador **Sensibilidad** si confunde marcas.

> Funciona mejor con la foto recta y bien iluminada. Lo que no detecte bien,
> lo arreglas en 1 toque.

### Exámenes de 2 páginas

Si el examen reparte las preguntas en dos hojas (p. ej. **1–4** en la página 1
y **5–10** en la página 2), en el apartado 2 elige **«2 páginas»**. Aparece un
selector **Pág. 1 / Pág. 2**:

1. Selecciona **Pág. 1**, calíbrala una vez (12 letras) y luego, por cada examen,
   foto de la página 1 → 2 referencias → Detectar.
2. Selecciona **Pág. 2**, calíbrala una vez (18 letras) y, por cada examen,
   foto de la página 2 → 2 referencias → Detectar.
3. El cuadro de puntuación **suma las dos páginas** en una sola nota.

El marcado a mano (apartado 3) tiene siempre las 10 preguntas, da igual cuántas
páginas tenga el examen.

---

## 🧠 Aprendizaje del modelo (apartado 5)

Cada vez que resuelves una **duda**, la app guarda un ejemplo (los 3 valores de
tinta de esa pregunta + la letra que indicas — **sin imágenes ni nombres**).
Con esos ejemplos se entrena un modelo que reduce las dudas con el tiempo.

- **Actualizar modelo**: descarga la última versión entrenada
  (`https://upocuantitativo.github.io/corrector-examenes-datos/model.json`).
  Mientras haya pocos datos usa la heurística; con suficientes, un modelo entrenado.
- **Exportar para el servidor (JSONL)** → sube ese archivo a la carpeta
  `samples/` del repo de datos (`corrector-examenes-datos`). GitHub reentrena
  solo y la app se descarga el modelo nuevo. (Sin servidor.)
- **Subida automática (opcional)**: despliega el Worker de Cloudflare (ver el repo
  de datos, carpeta `worker/`) y pega su URL + clave en la app; entonces los
  ejemplos se suben solos.

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
