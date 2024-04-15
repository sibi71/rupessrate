const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one")
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two")
const rateEl =  document.getElementById("rate");
const swap = document.getElementById("swap");



async function calculate(){
    const  currency_one = currencyEl_one.value;    //usd
    const currency_two  = currencyEl_two.value ;  //inr
    try {
        const res = await fetch(
            `https://api.exchangerate-api.com/v4/latest/${currency_one}` //usd 

        );
        const data = await res.json()
        console.log(data);

        const rate = data.rates[currency_two]  // rate
        
        console.log(rate);

        rateEl.innerHTML = `1 ${currency_one} = ${rate}  ${currency_two} ` ; 

        amountEl_two.value = (amountEl_one.value * rate).toFixed(2) //234.23444 = 234.23



    } catch (error) {
        console.log(error);
    }

}

currencyEl_one.addEventListener("change",calculate) ;
currencyEl_two.addEventListener("change",calculate);
amountEl_one.addEventListener("input",calculate);
amountEl_two.addEventListener("input",calculate);

swap.addEventListener("click",()=>{
    const temp = currencyEl_one.value ;
    currencyEl_one.value = currencyEl_two.value 
    currencyEl_two.value = temp ;
    calculate()
})