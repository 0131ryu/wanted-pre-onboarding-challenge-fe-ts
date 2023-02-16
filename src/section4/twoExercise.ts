//const persons내 항목 중 occupation나 role이 들어감

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin; //둘 중 한 개 포함되도록 함
 
export const persons: Person[] = [ //Person이 배열로 들어갈 것 
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: Person) {//타입이 person이 아닌 Person
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);