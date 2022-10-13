/*
 *
 * Examples:
 */

db.persons.aggregate([
    {
        $group: { _id: '$age' },
    },
]);

db.persons.aggregate([
    {
        $group: { _id: '$name' },
    },
]);

db.persons.aggregate([
    {
        $group: { _id: '$eyeColor' },
    },
]);
