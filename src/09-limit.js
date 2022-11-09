/*
 * Examples:
 */

db.persons.aggregate([
    { $limit: 100 },
    { $match: { age: { $gt: 27 } } },
    { $group: { _id: '$company.location.country' } },
]);

// result:
// {"_id": "Germany" }
// {"_id": "France" }
// {"_id": "Italy" }
// { "_id": "USA" }
