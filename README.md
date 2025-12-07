🌐 Demo: https://v0.app/chat/uni-task-planner-dashboard-cgtpUWysaqS?b=b_YV7TgXf7d2v&path=%2F

UniTask Planner

Proyecto académico desarrollado como evaluación final del curso Programación Web, Universidad Da Vinci de Guatemala.
El objetivo principal es implementar una solución web para la gestión de tareas académicas mediante arquitectura cliente–servidor, base de datos en PostgreSQL y un dashboard en v0 para visualizar consultas SQL.

📌 Objetivo del proyecto

Crear una aplicación web funcional que permita:

Registrar tareas, cursos y recordatorios.

Mostrar tareas próximas, tareas del día y próximos recordatorios.

Ejecutar consultas SQL reales.

Visualizar resultados mediante prototipo en v0.

🧠 Problema que resuelve

Los estudiantes universitarios manejan tareas en múltiples lugares (notas, chats, recordatorios), generando desorden y olvidos.
UniTask Planner centraliza información académica y ayuda a priorizar actividades.

🚀 Tecnologías utilizadas

Frontend: React

Backend: Node.js + Express

Base de datos: PostgreSQL

Visualización: v0 (UI)

Despliegue: Vercel + Render

🏗 Arquitectura

Arquitectura Cliente–Servidor con API REST:

React  →  API Node.js  → PostgreSQL

🗃 Modelo de datos principal

Tablas:

usuarios

cursos

tareas

recordatorios

Incluye diagrama EDR dentro del documento PDF.

🌐 API REST (Endpoints implementados)
GET /api/v1/tareas

Lista tareas cercanas a vencer, filtrables por estado o fecha.

POST /api/v1/tareas

Crea nueva tarea asociada al usuario.

PATCH /api/v1/tareas/:id_tarea

Actualiza estado 

📊 Dashboard en v0

El dashboard muestra visualmente los resultados SQL:

tareas próximas

tareas para hoy

recordatorios programados


🔎 Consultas SQL documentadas
Consulta 1

Tareas próximas a vencer (orden por fecha).

Consulta 2

Tareas correspondientes al día actual.

Consulta 3

Recordatorios próximos no enviados.

Todas contienen:

SELECT real

resultado simulado

vista en v0


🧾 Documento del proyecto

El repositorio incluye archivo PDF con:

arquitectura

diseño de BD

endpoints

consultas SQL

dashboard

costos

conclusiones

🎓 Autor

Ronald Isaías Godinez Hernández
Universidad Da Vinci de Guatemala
2025
