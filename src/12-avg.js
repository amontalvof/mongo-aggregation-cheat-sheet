/*
 * Examples:
 */

db.persons.aggregate([
    {
        $group: {
            _id: '$eyeColor',
            avgAge: { $avg: '$age' },
        },
    },
]);
// result:
// {"_id": "brown", "avgAge" : 29.816023738872403 }
// {"_id": "blue", "avgAge" : 30.033033033033032 }
// {"_id": "green", "avgAge" : 29.654545454545456 }
