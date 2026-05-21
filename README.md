# 🛒 Pràctica MongoDB + Docker - Botiga Online

## 📌 Descripció del projecte

Aquest projecte simula el backend d’una botiga online utilitzant MongoDB dins de contenidors Docker.

Es treballa amb:
- Base de dades NoSQL (MongoDB)
- Contenidors Docker
- Mongo Express per interfície gràfica
- Operacions CRUD
- Consultes avançades i índexs

L’objectiu és aprendre la gestió completa d’una base de dades NoSQL en un entorn dockeritzat.

---

## 🧰 Prerequisits

Per executar aquest projecte cal tenir instal·lat:

- Docker (mínim 20+)
- Docker Compose
- Git
- Navegador web

---

## 🚀 Instal·lació i posada en marxa

### 1. Clonar el repositori

```bash
git clone <URL_DEL_REPOSITORI>
cd practica-mongodb
2. Iniciar l’entorn
docker compose up -d
3. Verificar contenidors
docker ps

Han d’aparèixer:

mongodb-botiga
mongoexpress-botiga
4. Accedir a Mongo Express

Obrir al navegador:

http://localhost:8081
5. Executar scripts

CRUD:

docker cp queries/crud.js mongodb-botiga:/crud.js

docker exec -it mongodb-botiga mongosh -u admin -p admin123 --authenticationDatabase admin /crud.js

Consultes avançades:

docker cp queries/advanced.js mongodb-botiga:/advanced.js

docker exec -it mongodb-botiga mongosh -u admin -p admin123 --authenticationDatabase admin /advanced.js
📁 Estructura del projecte
'''
    practica-mongodb/
    │
    ├── docker-compose.yml
    ├── data/                      # Volum persistent MongoDB
    ├── mongo-init/
    │   └── init.js               # Dades inicials
    ├── queries/
    │   ├── crud.js              # Operacions CRUD
    │   └── advanced.js          # Consultes avançades + índexs
    ├── README.md
    └── practica.md
'''
🧪 Comandes principals
▶️ Iniciar entorn
docker compose up -d
⛔ Aturar entorn
docker compose down
📊 Veure logs
docker logs mongodb-botiga
🗄️ Operacions MongoDB
Entrar a MongoDB manualment
docker exec -it mongodb-botiga mongosh -u admin -p admin123 --authenticationDatabase admin
Seleccionar base de dades
use botiga
Exemple de consultes
db.productes.find()
db.productes.find({ preu: { $lt: 50 } })
db.productes.updateOne(...)
db.productes.deleteOne(...)
💾 Volums i persistència
📦 Volum principal
./data:/data/db

🔹 Guarda totes les dades de MongoDB
🔹 Permet que les dades NO es perdin quan es reinicien els contenidors

⚙️ Volum d’inicialització
./mongo-init:/docker-entrypoint-initdb.d

🔹 Executa automàticament init.js al primer inici
🔹 Crea la base de dades i dades inicials

🌐 Xarxes
Xarxa utilitzada
xarxa-botiga

🔹 Permet comunicació interna entre:

MongoDB
Mongo Express

🔹 Avantatge:

més seguretat
comunicació interna sense exposar ports
📌 Resum funcional

Aquest projecte permet:

Crear base de dades MongoDB amb Docker
Gestionar dades amb CRUD
Fer consultes avançades
Crear índexs per optimitzar rendiment
Mantenir persistència amb volums
Visualitzar dades amb Mongo Express