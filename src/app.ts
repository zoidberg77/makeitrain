import "./style.css"



const inputBox = document.getElementById("monthly") as HTMLInputElement;
inputBox!.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        let amount = 0;
        const monthly = document.getElementById("monthly") as HTMLInputElement;
        const monthlyAmount = parseInt(monthly.value);
        document.getElementById("question")?.remove();
        document.getElementById("attr")?.remove();
        const amountField = document.getElementById("amount");
        amountField!.innerText = `${amount}`;
        const perSecound = monthlyAmount/(30*24*60*60);
        window.setInterval(function(){
            amount += perSecound;
            const amountField = document.getElementById("amount");
            amountField!.innerText = `${amount.toFixed(4)} $`;
        }, 1000);
    }
}, false);