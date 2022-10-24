/*
 * Examples:
 */

db.persons.aggregate([
    { $group: { _id: '$favoriteFruit' } },
    { $sort: { _id: 1 } },
]);

db.persons.aggregate([
    // stage 1
    { $match: { age: { $gte: 25 } } },
    // stage 2
    {
        $group: {
            _id: { eyeColor: '$eyeColor', favoriteFruit: '$favoriteFruit' },
        },
    },
    // stage 3
    { $sort: { '_id.eyeColor': 1, '_id.favoriteFruit': -1 } },
]);
