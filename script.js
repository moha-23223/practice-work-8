// зад1

const countVowels = (word) => {

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    return [...word.toLowerCase()].filter(char => vowels.includes(char)).length;
};
const word = 'JavaScript';
const vowelCount = countVowels(word);
console.log(vowelCount);


// зад2

const users = [
    ["Alice", 25, true],
    ["Bob", 30, false],
    ["Charlie", 22, true],
    ["David", 27, true],
    ["Eve", 20, false]
];

function filterAndSortUsers(users) {
    const filteredUsers = users.filter(user => {
        const [, age, isAthlete] = user;
        return age > 25 && isAthlete;
    });

    const sortedUsers = filteredUsers.sort((a, b) => {
        const [, ageA] = a;
        const [, ageB] = b;
        return ageA - ageB;
    });

    return sortedUsers.map(user => user[0]);
}

const sportUsersOver25 = filterAndSortUsers(users);
console.log(sportUsersOver25);