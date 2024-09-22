let count = 0;
function getInputValueById(id) {
 return parseFloat(document.getElementById(id).value);
}



const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function () {
  // const income = parseFloat(document.getElementById("income").value);
  // const software = parseFloat(document.getElementById("software").value);
  // const courses = parseFloat(document.getElementById("courses").value);
  // const internet = parseFloat(document.getElementById("internet").value);

  //getInputValueById
  const income = getInputValueById("income");
  const software = getInputValueById("software");
  const courses = getInputValueById("courses");
  const internet = getInputValueById("internet");

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  if(totalExpenses> income){
    document.getElementById("logic-error").classList.remove('hidden');
    return;
  }

  const totalExpensesElement = document.getElementById("total-expenses");
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  const result = document.getElementById("results");
  result.classList.remove("hidden");

  count++;
  const historyItem = document.createElement("div");
  historyItem.className =
    "bg-white p-3 rounded-md border-1-2 border-indigo-500";
  historyItem.innerHTML = `
    <p class = 'text-xs text-gray-500'>Serial: ${count}</p>
    <p class = 'text-xs text-gray-500'>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
    <p class = 'text-xs text-gray-500'>Income: $${income.toFixed(2)}</p>
    <p class = 'text-xs text-gray-500'>Expenses: $${totalExpenses.toFixed(
      2
    )}</p>
    <p class = 'text-xs text-gray-500'>Balance: $${balance.toFixed(2)}</p>
  `;
  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

const calculateSavingsButton = document.getElementById("calculate-savings");
calculateSavingsButton.addEventListener("click", function () {
  // const savings = parseFloat(document.getElementById("savings").value);
  // const income = parseFloat(document.getElementById("income").value);
  // const software = parseFloat(document.getElementById("software").value);
  // const courses = parseFloat(document.getElementById("courses").value);
  // const internet = parseFloat(document.getElementById("internet").value);

  //getInputValue
  const savings = getInputValueById("savings");
  const income = getInputValueById("income");
  const software = getInputValueById("software");
  const courses = getInputValueById("courses");
  const internet = getInputValueById("internet");

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const savingsAmount = (savings * balance) / 100;

  const savingsAmountElement = document.getElementById("savings-amount");
  savingsAmountElement.innerHTML = savingsAmount.toFixed(2);

  const remainingBalance = balance - savingsAmount;
  const remainingBalanceElement = document.getElementById("remaining-balance");
  remainingBalanceElement.innerText = remainingBalance.toFixed(2);
});

const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-purple-600",
    "to-blue-500"
  );
  historyTab.classList.remove("text-gray-600");

  assistantTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-purple-600",
    "to-blue-500"
  );
  assistantTab.classList.add("text-gray-600");

  document.getElementById("expense-form").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

assistantTab.addEventListener("click", function () {
  assistantTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-purple-600",
    "to-blue-500"
  );
  assistantTab.classList.remove("text-gray-600");

  historyTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-purple-600",
    "to-blue-500"
  );
  historyTab.classList.add("text-gray-600");

  document.getElementById("expense-form").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});

document.getElementById("income").addEventListener("input", function () {
  const inputValue = parseFloat(document.getElementById("income").value);
  if (isNaN(inputValue) || inputValue <= 0) {
    document.getElementById("income-error").classList.remove("hidden");
    return;
  }
});

document.getElementById("software").addEventListener("input", function () {
  const inputValue = parseFloat(document.getElementById("software").value);
  if (isNaN(inputValue) || inputValue < 0) {
    document.getElementById("software-error").classList.remove("hidden");
    return;
  }
});

document.getElementById("courses").addEventListener("input", function () {
  const inputValue = parseFloat(document.getElementById("courses").value);
  if (isNaN(inputValue) || inputValue < 0) {
    document.getElementById("courses-error").classList.remove("hidden");
    return;
  }
});

document.getElementById("internet").addEventListener("input", function () {
  const inputValue = parseFloat(document.getElementById("internet").value);
  if (isNaN(inputValue) || inputValue < 0) {
    document.getElementById("internet-error").classList.remove("hidden");
    return;
  }
});

document.getElementById("savings").addEventListener("input", function () {
  const inputValue = parseFloat(document.getElementById("savings").value);
  if (isNaN(inputValue) || inputValue <= 0) {
    document.getElementById("savings-error").classList.remove("hidden");
    return;
  }
});

