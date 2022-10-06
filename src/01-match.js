/*
 * Examples:
 */

db.persons.aggregate([
    // stage 1
    { $match: { age: { $gt: 25 } } },
]);

db.persons.aggregate([
    // stage 1
    { $match: { isActive: true } },
]);

db.persons.aggregate([
    // stage 1
    { $match: { tags: { $size: 3 } } },
]);
