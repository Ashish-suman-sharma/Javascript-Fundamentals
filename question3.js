function findCharacterClasses(string) {
    const digits = string.match(/\d+/g);
    const uppercase = string.match(/[A-Z]+/g);
    const lowercase = string.match(/[a-z]+/g);
    const special = string.match(/[!@#$%^&*(),.?":{}|<>]+/g);

    return {
        digits,
        uppercase,
        lowercase,
        special
    };
}

const result = findCharacterClasses('Hello World! 123');
console.log(result);
