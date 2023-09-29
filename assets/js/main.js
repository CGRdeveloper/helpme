const AddToCard = document.getElementById('AddToCard_btn');
const CardNum_Count = document.getElementById('AddCount');
const DelCount = document.getElementById('DelCount');

var Num = 0;

AddToCard.addEventListener('click', ()=>{
    Num++;
    CardNum_Count.innerHTML = Num;
    console.log("yes");

    // if (Num > 0) {
    //     DelCount.classList.add("Popup_Card");
    // } 
});

DelCount.addEventListener('click', ()=>{
    CardNum_Count.innerHTML = '';
    Num = 0
});



