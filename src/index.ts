class Person{

    speak (name?: string): string {

        return `Olá ${name?.toUpperCase() ?? 'Fulano'}!!!`

    }

}

const person = new Person()

person.speak('Lukas')
person.speak