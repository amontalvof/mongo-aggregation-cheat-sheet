/*
 * Examples:
 */

db.persons.aggregate([
    {
        $group: {
            _id: '$age',
            count: { $sum: 1 },
        },
    },
]);
// result:
// {"_id": 27, "count": 42 }
// {"_id": 30, "count": 38 }
// {"_id": 26, "count": 51 }
// {"_id": 31, "count": 53 }
// {"_id": 23, "count": 57 }
// {"_id": 37, "count": 49 }
// {"_id": 32, "count": 38 }

db.persons.aggregate([
    { $unwind: '$tags' },
    {
        $group: {
            _id: '$tags',
            count: { $sum: 1 },
        },
    },
]);
// result:
// {"_id": "nulla", "count": 65 }
// {"_id": "reprehenderit", "count": 57 }
// {"_id": "laboris", "count" : 52 }
// {"_id": "anim", "count": 35 }
// { _id": "consectetur", "count": 62 }
// {"_id": "sit", "count": 56 }
