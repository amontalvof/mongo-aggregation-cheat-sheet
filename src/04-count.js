/*
 *
 * Examples:
 */

db.persons.aggregate([{ $count: 'allDocumentsCount' }]); // { "allDocumentsCount": 1000 }
