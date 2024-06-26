const trimHexVal = (employeeId) => {
    const trimmedValue = employeeId.toString().slice(3);
    console.log("trimmedValue: ", trimmedValue);
    const finalId = generateNextExEmployId(trimmedValue);
    console.log("finalId: ", finalId);

    return finalId;
}
// function generateNextExEmployId(currentHex) {
//     // Extract the last two digits of the current year
//     const currentYear = new Date().getFullYear().toString().slice(-2);
//     // Convert the current hexadecimal to a number
//     const currentNumber = parseInt(currentHex, 16);
//     // Increment the number by 1
//     const nextNumber = currentNumber + 1;
//     // Convert the incremented number back to a 16-bit hexadecimal
//     const nextHex = nextNumber.toString(16).padStart(4, '0').toUpperCase();
//     // Generate the next exEmployId
//     const nextExEmployId = `SM${currentYear}${nextHex}`;
//     return nextExEmployId;
// }
module.exports = {
    trimHexVal,
}