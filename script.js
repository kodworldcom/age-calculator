function calculateAge() {
  const birthdate = document.getElementById("birthdate").value;
  if (birthdate === "") {
    alert("Please select your birthdate.");
    return;
  }

  const birthdateObj = new Date(birthdate);
  const currentDate = new Date();

  let ageYears = currentDate.getFullYear() - birthdateObj.getFullYear();
  let ageMonths = currentDate.getMonth() - birthdateObj.getMonth();
  let ageDays = currentDate.getDate() - birthdateObj.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById("result").innerText = `
  You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}
