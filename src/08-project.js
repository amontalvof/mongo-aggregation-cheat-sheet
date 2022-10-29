/*
 * Examples:
 */
db.persons.aggregate([{ $project: { name: 1, 'company.title': 1 } }]); // 1 include the field

db.persons.aggregate([{ $project: { _id: 0, name: 1, age: 1 } }]); // 0 exclude the field

db.persons.aggregate([{ $project: { eyeColor: 0, age: 0 } }]);

db.persons.aggregate([{ $project: { name: 1, newAge: '$age' } }]); // newAge is a new field that accepts an expression that in this case is age
