function calculateInterest() {
    const principalu = document.getElementById("principal");
    const rateu = document.getElementById("interest");
    const yearsu = document.getElementById("time");
    const label = document.getElementById("totalAmount");
    let total = 0;
    let principal = Number(principalu.value);
    let rate = Number(rateu.value) / 100;
    let years = Number(yearsu.value);

    if (principal) {
        total = principal * Math.pow(1 + rate, years);
        label.textContent = `TOTAL = $${total.toFixed(2)}`;
    } else {
        label.textContent = "FILL IN PLEASE";
    }
}