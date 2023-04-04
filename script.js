const amountInput = document.getElementById("amount");
const activeWallet = document.getElementById("active-wallet");
const passiveWallet = document.getElementById("passive-wallet");

function calculateWallets() {
  const amount = parseFloat(amountInput.value);
  if (isNaN(amount)) {
    activeWallet.textContent = "0.00";
    passiveWallet.textContent = "0.00";
    return;
  }
  const activeAmount = (amount * 0.7).toFixed(2);
  const passiveAmount = (amount * 0.3).toFixed(2);
  activeWallet.textContent = activeAmount;
  passiveWallet.textContent = passiveAmount;
}

amountInput.addEventListener("input", calculateWallets);
