function getCategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

document.getElementById("calc").addEventListener("click", () => {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);
  const result = document.getElementById("result");

  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    result.textContent = "Please enter a valid weight and height.";
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  result.textContent = `BMI: ${bmi.toFixed(1)} (${getCategory(bmi)})`;
});
