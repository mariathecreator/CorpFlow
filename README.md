# CorpFlow

CorpFlow is an internal payroll and attendance management system.

Stack:

Frontend
- React / Next.js
- TailwindCSS

Backend
- Node.js
- Express
- PostgreSQL
- Redis
- RabbitMQ

Architecture
```
Client → Express API → PostgreSQL
                ↓
              Redis
                ↓
             RabbitMQ       
```