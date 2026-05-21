db = db.getSiblingDB("botiga");

print("==================================");
print("BLOC 3 - OPERACIONS CRUD");
print("==================================");


/* =======================================================
   3.1 CREATE
======================================================= */

print("\n1. insertOne()");

const resultat1 = db.productes.insertOne({
  nom: "Teclat Gaming",
  preu: 70,
  categoria: "electronica",
  estoc: 12,
  valoracio: 4.6,
  actiu: true,
  etiquetes: ["gaming", "pc"],
  creat_el: new Date()
});

printjson(resultat1);



print("\n2. insertMany()");

const resultat2 = db.productes.insertMany([
  {
    nom: "Oferta Cascos",
    preu: 20,
    categoria: "ofertes",
    estoc: 10,
    valoracio: 4.1,
    actiu: true,
    etiquetes: ["audio"],
    creat_el: new Date()
  },
  {
    nom: "Oferta Webcam",
    preu: 35,
    categoria: "ofertes",
    estoc: 5,
    valoracio: 4.3,
    actiu: true,
    etiquetes: ["stream"],
    creat_el: new Date()
  },
  {
    nom: "Oferta Micro",
    preu: 15,
    categoria: "ofertes",
    estoc: 20,
    valoracio: 4.0,
    actiu: true,
    etiquetes: ["audio"],
    creat_el: new Date()
  }
]);

printjson(resultat2);



/* =======================================================
   3.2 READ
======================================================= */

print("\n3. Mostrar tots els productes");

printjson(
  db.productes.find().toArray()
);



print("\n4. Productes amb preu inferior a 50€");

printjson(
  db.productes.find({
    preu: { $lt: 50 }
  }).toArray()
);



print("\n5. Productes categoria electronica amb estoc > 0");

printjson(
  db.productes.find({
    categoria: "electronica",
    estoc: { $gt: 0 }
  }).toArray()
);



print("\n6. Productes amb valoracio >= 4.0 (projeccio)");

printjson(
  db.productes.find(
    {
      valoracio: { $gte: 4.0 }
    },
    {
      _id: 0,
      nom: 1,
      preu: 1,
      valoracio: 1
    }
  ).toArray()
);



print("\n7. Cerca per etiqueta gaming");

printjson(
  db.productes.find({
    etiquetes: "gaming"
  }).toArray()
);



/* =======================================================
   3.3 UPDATE
======================================================= */

print("\n8. Actualitzar preu producte");

const resultat8 = db.productes.updateOne(
  {
    nom: "Teclat Gaming"
  },
  {
    $set: {
      preu: 80
    }
  }
);

printjson(resultat8);



print("\n9. Augmentar estoc electronica +10");

const resultat9 = db.productes.updateMany(
  {
    categoria: "electronica"
  },
  {
    $inc: {
      estoc: 10
    }
  }
);

printjson(resultat9);



print("\n10. Afegir etiqueta");

const resultat10 = db.productes.updateOne(
  {
    nom: "Teclat Gaming"
  },
  {
    $push: {
      etiquetes: "rgb"
    }
  }
);

printjson(resultat10);



print("\n11. Desactivar productes sense estoc");

const resultat11 = db.productes.updateMany(
  {
    estoc: 0
  },
  {
    $set: {
      actiu: false
    }
  }
);

printjson(resultat11);



/* =======================================================
   3.4 DELETE
======================================================= */

print("\n12. Eliminar producte pel nom");

const resultat12 = db.productes.deleteOne({
  nom: "Teclat Gaming"
});

printjson(resultat12);



print("\n13. Eliminar productes categoria ofertes");

const resultat13 = db.productes.deleteMany({
  categoria: "ofertes"
});

printjson(resultat13);



print("\n==================================");
print("FI CRUD");
print("==================================");