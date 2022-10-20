/*
 *
 * Examples:
 */

db.persons.aggregate([{ $count: 'allDocumentsCount' }]); // { "allDocumentsCount": 1000 }

// Different count methods

db.persons.aggregate([]).toArray().length;
//1,7 Sec -> 1000 documents

db.persons.aggregate([]).itcount();
// 1,4 Sec -> 1000 documents

db.persons.aggregate([{ $count: 'total' }]);
// 0,21 Sec -> { "total" : 1000 }

db.persons.find({}).count();
// 0,21 Sec -> 1000
