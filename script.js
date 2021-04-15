const currencyEl_one=document.getElementById('currency-one')
const amountEl_one=document.getElementById('amount-one')
const currencyEl_two=document.getElementById('currency-two')
const amountEl_two=document.getElementById('amount-two')
const swap=document.getElementById('swap')
const rate=document.getElementById('rate')

function calculate(){
    const currencyvalue1=currencyEl_one.value;
    const currencyvalue2=currencyEl_two.value;
    
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyvalue1}`)
    .then(res => res.json())
    .then(data =>{
        const rateEl = data.rates[currencyvalue2];
        rate.innerText=`1 ${currencyvalue1}=${rateEl} ${currencyvalue2}`;
        amountEl_two.value = (amountEl_one.value * rateEl).toFixed(2);
    })
}

currencyEl_one.addEventListener('change',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
  });



calculate();