/*
 * Examples:
 */

db.persons.aggregate([{ $sort: { score: -1 } }]); // -1 DESC

db.persons.aggregate([{ $sort: { age: 1, country: 1 } }]); // 1 ASC
