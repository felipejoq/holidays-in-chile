## Feriados en Chile

En este proyecto se desarrolla un proyecto usando Node.js >= v20
Para obtener datos de [este servicio](https://apis.digital.gob.cl/fl) donde
se exponen los días feriados de Chile.

👉 Live demo [AQUÍ](https://holidays-in-chile.up.railway.app/) 🗓️

El proyecto muestra si ayer, hoy o mañana es feriado y también muestra el
próximo feriado que se aproxima en el calendario.

```
Changelog: 13 de Septiembre, 2023.

- Se hace fetch solo una vez al día para obtener los datos optimizando así el tiempo de respuesta.
- Se separó en servicios (data), controllers (rutas), vistas (HTML con Handlebars) intentando una arquitectura mvc.
- Se organizó la estructura de carpetas.
- En la carpeta data se crea el archivo holidays.json el que contiene la información de los feriados.
- Se modificaron estilos CSS para lograr un diseño más minimalista y ordenado.
```

### Vista previa:
Aquí una vista previa de cómo se ve al desplegar el proyecto.
![Es feriado en Chile vista previa](https://github.com/felipejoq/holidays-in-chile/blob/main/preview.png?raw=true)
