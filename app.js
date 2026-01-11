// Elementleri seçelim 
const amountInput= document.querySelector('#amount');
const firstOption= document.querySelector('#firstCurrencyOption');
const secondOption = document.querySelector('#secondCurrencyOption');
const resultElement = document.querySelector('#result');


// Kendi oluşturduğumuz Currecny sınıfından nesne türetiyoruz
const currency = new Currency();

runEventListeners();
function runEventListeners(){
    //Amount inputuna bir değer girildiğinde excahnge fonksiyonu çalışacak
    amountInput.addEventListener('input',exchange);
}
function exchange(){
   //amount inputuna girilen değerler string olduğu için matematik işlemleri yapamyız dönüşüm yapmamız lazım 
   const amount = Number(amountInput.value.trim())// trim kullanmamızın sebebi başta ve sonra boşluk olmması içim

   //?selectedlerimizin içindeki değerleri alıyoruz
   const firstOptionValue=firstOption.options[firstOption.selectedIndex].textContent;
   const secondOptionValue= secondOption.options[secondOption.selectedIndex].textContent;
   console.log(firstOptionValue, secondOptionValue) 

   currency.exchange(amount,firstOptionValue,secondOptionValue)
   .then((result)=> {
    resultElement.value=result.toFixed(3)
   })


}