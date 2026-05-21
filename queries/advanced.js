db = db.getSiblingDB("botiga");

print("==================================");
print("BLOC 4 - CONSULTES AVANÇADES");
print("==================================");


/* =======================================================
   4.1 CONSULTES AVANÇADES
======================================================= */

print("\n1. $and (actius + preu entre 20 i 100)");

printjson(
  db.productes.find({
    $and: [
      { actiu: true },
      { preu: { $gte: 20 } },
      { preu: { $lte: 100 } }
    ]
  }).toArray()
);


print("\n2. $or (electronica o valoracio >= 4.5)");

printjson(
  db.productes.find({
    $or: [
      { categoria: "electronica" },
      { valoracio: { $gte: 4.5 } }
    ]
  }).toArray()
);


print("\n3. $regex (nom conté 'logi')");

printjson(
  db.productes.find({
    nom: { $regex: "logi", $options: "i" }
  }).toArray()
);


print("\n4. Ordenar per preu desc i limitar a 5");

printjson(
  db.productes.find()
    .sort({ preu: -1 })
    .limit(5)
    .toArray()
);


/* =======================================================
   5. AGRUPACIONS
======================================================= */

print("\n5. Comptar productes per categoria");

printjson(
  db.productes.aggregate([
    {
      $group: {
        _id: "$categoria",
        total: { $sum: 1 }
      }
    }
  ]).toArray()
);


print("\n6. Preu mitjà per categoria");

printjson(
  db.productes.aggregate([
    {
      $group: {
        _id: "$categoria",
        preuMitja: { $avg: "$preu" }
      }
    }
  ]).toArray()
);


print("\n7. Total gastat per client");

printjson(
  db.comandes.aggregate([
    {
      $group: {
        _id: "$client_id",
        totalGastat: { $sum: "$total" }
      }
    }
  ]).toArray()
);


/* =======================================================
   4.2 ÍNDEXS
======================================================= */

print("\n8. Index simple categoria");

db.productes.createIndex({ categoria: 1 });


print("\n9. Index compost categoria + preu");

db.productes.createIndex({
  categoria: 1,
  preu: 1
});


print("\n10. Index de text en nom");

db.productes.createIndex({
  nom: "text"
});


print("\n11. Explain (sense índex)");

printjson(
  db.productes.find({
    nom: "Logitech"
  }).explain("executionStats")
);


print("\n12. Llistar índexs");

printjson(
  db.productes.getIndexes()
);


print("==================================");
print("FI BLOC 4");
print("==================================");