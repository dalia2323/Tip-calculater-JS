let bill=document.getElementById('bill');
let tip=document.getElementById('tip');
let total=document.getElementById('total');
const btn = document.getElementById("calculate");
function tipCalculate(){
    const billValue=bill.value;
    const tipValue=tip.value;
    const totalVal=billValue * (1 + tipValue / 100);
    total.innerHTML=totalVal.toFixed(2);
}
btn.addEventListener("click",tipCalculate);