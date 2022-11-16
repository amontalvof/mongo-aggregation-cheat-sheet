/*
 * Examples:
 */

db.persons.aggregate([
    {
        $project: {
            name: 1,
            eyeColorType: { $type: '$eyeColor' },
            ageType: { $type: '$age' },
        },
    },
]);
// result:
// {
//     "_id" : ObjectId("5ad4cbde2edbf6ddeec71741"),
//     "name": "Aurelia Gonzales",
//     "eyeColorType": "string",
//     "ageType": "int"
// }
