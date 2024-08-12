function extractDateComponents(dateString) {
    const datePattern = /(\d{2})\/(\d{2})\/(\d{4})/;
    const match = dateString.match(datePattern);

    if (match) {
        const [fullMatch, day, month, year] = match;
        return { day, month, year };
    } else {
        return null;
    }
}

console.log(extractDateComponents('Today is 12/08/2024'));
