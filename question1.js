function outerFunction(param) {
    const outerVariable = 'I am from outerFunction';

    function innerFunction() {
        console.log(`Parameter: ${param}`);
        console.log(`Outer variable: ${outerVariable}`);
    }

    return innerFunction;
}

const myInnerFunction = outerFunction('Hello');
myInnerFunction();
