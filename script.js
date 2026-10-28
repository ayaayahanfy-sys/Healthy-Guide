function calculateBMI() {
    let w = document.getElementById('weight').value;
    let h = document.getElementById('height').value;
    let res = document.getElementById('bmi-result');

    if (w > 0 && h > 0) {
        let bmi = (w / ((h / 100) * (h / 100))).toFixed(1);
        let status = "";

        if (bmi < 18.5) status = "Underweight";
        else if (bmi < 25) status = "Healthy Weight";
        else status = "Overweight";

        res.innerHTML = `Result: ${bmi} (${status})`;
    } else {
        alert("Please enter valid numbers");
    }
}