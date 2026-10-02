document.getElementById("emiform").addEventListener("submit", function(e) {
    e.preventDefault();

    let P = Number(document.getElementById("amount").value);
    let R = Number(document.getElementById("in-rate").value) / 100 ;
    let N = Number(document.getElementById("durate").value);

    let EMI = P * R * (1 + R) ** N / ((1 + R) ** N - 1);
    let totalAmount = EMI * N;
    let totalInterest = totalAmount - P;

    document.getElementById("totalmonths").innerText = N + " months";
    document.getElementById("emi").innerText = "₹" + EMI.toFixed(2);
    document.getElementById("totalamount").innerText = "₹" + totalAmount.toFixed(2);
    document.getElementById("totalinterest").innerText = "₹" + totalInterest.toFixed(2);
});