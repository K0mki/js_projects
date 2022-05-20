function calculator() {
    let inflation = document.querySelector('#inflationRate').value;
    let money = document.querySelector('#money').value;
    let years = document.querySelector('#years').value;

    inflation = parseFloat(inflation);
    money = parseFloat(money);
    years = parseFloat(years)

    console.log(inflation)
    console.log(money)
    console.log(years)

    let result = money + money * inflation / 100;

    for (let i = 1; i < years; i++) {
        result += result * (inflation / 100);
    }
    result = result.toFixed(2);
    console.log(result);

    let newElement = document.createElement('div');
    newElement.className = 'new-value' ; 
    newElement.innerText = `Todays ${money}€ is worth the same as ${result}€ in ${years} years.`;
    document.querySelector('.container').appendChild(newElement);
}

