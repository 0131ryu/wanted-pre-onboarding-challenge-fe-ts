export type User = { //1. user에 사용된 값들의 타입 정의
    name: string,
    age: number,
    occupation: string
}

export const users: User[] = [ //2. 1개 이상이므로 배열 사용
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(users: User) {//3. unknown이 아닌 User 사용 시 오류 없어짐
    console.log(` - ${users.name}, ${users.age}`);
}

console.log('Users:');
users.forEach(logPerson);


