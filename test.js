test("One euro should be 1.07 dollars", function() {

    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = parseFloat(3.5 * 1.07).toFixed(2); 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("500 dollars should be 73130.84 yens", function() {

    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromDollarToYen(500);

    // If 1 euro is 1.07 dollars and 156.5 yens, then 500 dollars should be = ((500 / 1.07) * 156.5)
    const expected = parseFloat((500 / 1.07) * 156.5).toFixed(2); 
    
    // This is the comparison for the unit test
     expect(yens).toBe(expected); // 1 euro is 1.07 dollars and 156.5 yens, then 500 dollars should be = ((500 / 1.07) * 156.5)
})
test("170000 yens should be 945.04 pounds", function() {

    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(170000);

    // 1 euro is 0.87 pounds and 156.5 yens, then 1700000 yens should be = ((170000/156.5) * 0.87)
    const expected = parseFloat((170000/156.5) * 0.87).toFixed(2); 
    
    // This is the comparison for the unit test
     expect(pounds).toBe(expected); // 1 euro is 0.87 pounds and 156.5 yens, then 1700000 yens should be = ((170000/156.5) * 0.87)
})