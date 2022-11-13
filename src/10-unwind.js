/*
 * Examples:
 */

db.persons.aggregate([
    { $unwind: '$tags' },
    { $project: { name: 1, gender: 1, tags: 1 } },
]);

db.persons.aggregate([{ $unwind: '$tags' }, { $group: { _id: '$tags' } }]);
// result:
// {"_id" : "nulla" }
// {"_id" : "reprehenderit" }
// {"_id": "laboris" }
// {"_id" : "anim" }
// {"_id" : "consectetur" }
// {"_id" : "sit" }
