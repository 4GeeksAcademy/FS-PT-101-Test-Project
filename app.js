let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
function fromEuroToDollar(euro){
    let result = parseFloat(oneEuroIs.USD * euro).toFixed(2);
    return result
    }
    
function fromDollarToYen(dollar){
    let eur = dollar/oneEuroIs.USD;
    let result = parseFloat(eur * oneEuroIs.JPY).toFixed(2);
    return result
    }

function fromYenToPound(yen){
    let eur = yen/oneEuroIs.JPY;
    let result = parseFloat(eur * oneEuroIs.GBP).toFixed(2)
    return result
    }

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };


    
