/*
 * Examples:
 */

db.persons.aggregate([
    { $group: { _id: '$company.location.country' } },
    { $count: 'countriesCount' },
]);
// { "countriesCount": 4 }
