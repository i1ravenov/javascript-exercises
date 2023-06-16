const findTheOldest = function(people) {
    return people.reduce((p1, p2) => {
        return getAge(p1) > getAge(p2) ? p1 : p2;
    })
};

function getAge(person) {
    if (!person.yearOfDeath) {
        return new Date().getFullYear() - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

// Do not edit below this line
module.exports = findTheOldest;
