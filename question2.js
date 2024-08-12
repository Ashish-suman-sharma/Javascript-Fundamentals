function matchPattern(pattern, string) {
    const regex = new RegExp(pattern);
    return regex.test(string);
}

console.log(matchPattern('hello', 'hello world'));
console.log(matchPattern('\\d+', '123 abc'));
console.log(matchPattern('abc', '123 def'));
