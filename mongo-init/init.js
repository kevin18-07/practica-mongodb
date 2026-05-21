
db = db.getSiblingDB("botiga");

//productes

db.productes.insertMany([
  {
    nom: "Portatil Lenovo",
    preu: 800,
    categoria: "electronica",
    estoc: 10,
    valoracio: 4.5,
    actiu: true,
    etiquetes: ["pc", "gaming"],
    creat_el: new Date()
  },
  {
    nom: "Samarreta Nike",
    preu: 25,
    categoria: "roba",
    estoc: 50,
    valoracio: 4.2,
    actiu: true,
    etiquetes: ["sport"],
    creat_el: new Date()
  },
  {
    nom: "Bicicleta MTB",
    preu: 450,
    categoria: "esport",
    estoc: 5,
    valoracio: 4.8,
    actiu: true,
    etiquetes: ["bici"],
    creat_el: new Date()
  },
  {
    nom: "Monitor LG",
    preu: 200,
    categoria: "electronica",
    estoc: 15,
    valoracio: 4.6,
    actiu: true,
    etiquetes: ["monitor"],
    creat_el: new Date()
  },
  {
    nom: "Sofà Modern",
    preu: 600,
    categoria: "llar",
    estoc: 2,
    valoracio: 4.1,
    actiu: true,
    etiquetes: ["casa"],
    creat_el: new Date()
  },
  {
    nom: "Pilota futbol",
    preu: 20,
    categoria: "esport",
    estoc: 40,
    valoracio: 4.3,
    actiu: true,
    etiquetes: ["futbol"],
    creat_el: new Date()
  },
  {
    nom: "Tauleta Samsung",
    preu: 300,
    categoria: "electronica",
    estoc: 7,
    valoracio: 4.4,
    actiu: true,
    etiquetes: ["tablet"],
    creat_el: new Date()
  },
  {
    nom: "Jaqueta Adidas",
    preu: 90,
    categoria: "roba",
    estoc: 12,
    valoracio: 4.5,
    actiu: true,
    etiquetes: ["hivern"],
    creat_el: new Date()
  },
  {
    nom: "Làmpada LED",
    preu: 35,
    categoria: "llar",
    estoc: 25,
    valoracio: 4.0,
    actiu: true,
    etiquetes: ["llum"],
    creat_el: new Date()
  },
  {
    nom: "Ratolí Logitech",
    preu: 45,
    categoria: "electronica",
    estoc: 30,
    valoracio: 4.7,
    actiu: true,
    etiquetes: ["pc", "gaming"],
    creat_el: new Date()
  }
]);

//clientes

db.clients.insertMany([
  { _id: 1, nom: "Marc", email: "marc@test.com", ciutat: "Barcelona" },
  { _id: 2, nom: "Anna", email: "anna@test.com", ciutat: "Girona" },
  { _id: 3, nom: "Joan", ciutat: "Tarragona", email: "joan@test.com" },
  { _id: 4, nom: "Laura", email: "laura@test.com", ciutat: "Lleida" },
  { _id: 5, nom: "Pau", email: "pau@test.com", ciutat: "Barcelona" },
  { _id: 6, nom: "Nuria", email: "nuria@test.com", ciutat: "Madrid" },
  { _id: 7, nom: "Eric", email: "eric@test.com", ciutat: "València" },
  { _id: 8, nom: "Sofia", email: "sofia@test.com", ciutat: "Sevilla" },
  { _id: 9, nom: "Ivan", email: "ivan@test.com", ciutat: "Bilbao" },
  { _id: 10, nom: "Clara", email: "clara@test.com", ciutat: "Zaragoza" }
]);

//comandes

db.comandes.insertMany([
  {
    client_id: 1,
    productes: [{ nom: "Portatil Lenovo", quantitat: 1, preu: 800 }],
    total: 800,
    data: new Date()
  },
  {
    client_id: 2,
    productes: [{ nom: "Samarreta Nike", quantitat: 2, preu: 25 }],
    total: 50,
    data: new Date()
  },
  {
    client_id: 3,
    productes: [{ nom: "Bicicleta MTB", quantitat: 1, preu: 450 }],
    total: 450,
    data: new Date()
  },
  {
    client_id: 4,
    productes: [{ nom: "Monitor LG", quantitat: 1, preu: 200 }],
    total: 200,
    data: new Date()
  },
  {
    client_id: 5,
    productes: [{ nom: "Sofà Modern", quantitat: 1, preu: 600 }],
    total: 600,
    data: new Date()
  },
  {
    client_id: 6,
    productes: [{ nom: "Pilota futbol", quantitat: 3, preu: 20 }],
    total: 60,
    data: new Date()
  },
  {
    client_id: 7,
    productes: [{ nom: "Tauleta Samsung", quantitat: 1, preu: 300 }],
    total: 300,
    data: new Date()
  },
  {
    client_id: 8,
    productes: [{ nom: "Jaqueta Adidas", quantitat: 1, preu: 90 }],
    total: 90,
    data: new Date()
  },
  {
    client_id: 9,
    productes: [{ nom: "Làmpada LED", quantitat: 2, preu: 35 }],
    total: 70,
    data: new Date()
  },
  {
    client_id: 10,
    productes: [{ nom: "Ratolí Logitech", quantitat: 2, preu: 45 }],
    total: 90,
    data: new Date()
  }
]);