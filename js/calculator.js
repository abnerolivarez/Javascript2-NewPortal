

const calculatorContainer = document.getElementById("calculator-container");
const calculatorOverlay = document.querySelector(".calculator-overlay");

const paymentRadios = document.querySelectorAll('input[name="payment"]');
const calccloseBtn = document.getElementById("calc-closebtn");
const installModeBtn = document.querySelector(".installment-mode");
const debitOverlay = document.querySelector(".debit-overlay");


installModeBtn.addEventListener("click", () => {
  calculatorContainer.classList.add("active");
  debitOverlay.classList.add("active");
});


debitOverlay.addEventListener("click", (event) => {
    // Only close when clicking outside the form
    if (event.target === debitOverlay) {
        calculatorContainer.classList.remove("active");
        debitOverlay.classList.remove("active");
        resultConvertion.textContent = "";
        dollarAmount.value  = ""; 
    }

});


//=======MONTHLY CALCULATOR ===========//
const resultsDiv = document.getElementById('results');
const principalInput = document.getElementById('principal');
const calcResetBtn = document.getElementById("resetCalcBtn");


const monthsInput = document.getElementById("months");

// ==========================================//

// ==========================================
// GET CURRENT CART TOTAL
// ==========================================

const cart = JSON.parse(localStorage.getItem("cart")) || [];

let grandTotal = 0;

cart.forEach(product => {

    grandTotal += product.price * product.quantity;

});


// Put current cart total into principal input
principalInput.value = grandTotal;


// ==========================================
// CALCULATE INSTALLMENT
// ==========================================

document.getElementById("calculateInterest")
    .addEventListener("click", () => {


        // Get values
        const principal = parseFloat(principalInput.value);
        const months = parseInt(monthsInput.value);


        // Fixed monthly interest rate
        const monthlyRate = 0.02;


        // ==========================================
        // VALIDATION
        // ==========================================

        if (isNaN(principal) || isNaN(months)) {
            alert("Please enter valid numbers for principal and months");
            return;
        }

        if (principal <= 0) {
            alert("Principal amount must be greater than 0");
            return;
        }

        if (months < 3) {
            alert("It should be a minimum of 3 months");
            return;

        }


        // ==========================================
        // MONTHLY INTEREST
        // ==========================================

        const monthlyInterest =
            principal * monthlyRate;


        // ==========================================
        // PRINCIPAL INSTALLMENT
        // ==========================================

        const monthlyInstallment =
            principal / months;


        // ==========================================
        // MONTHLY PAYMENT INCLUDING INTEREST
        // ==========================================

        const monthlyPaid =
            monthlyInstallment + monthlyInterest;


        // ==========================================
        // TOTAL INTEREST
        // ==========================================

        const totalInterest =
            monthlyInterest * months;


        // ==========================================
        // TOTAL PAYMENT
        // ==========================================

        const totalPayment =
            principal + totalInterest;


        // ==========================================
        // YEARLY INTEREST BREAKDOWN
        // ==========================================

        const fullYears =
            Math.floor(months / 12);

        const remainingMonths = months % 12;

        let yearlyBreakdown = "";


        // ------------------------------------------
        // FULL YEARS
        // ------------------------------------------

        for (let year = 1; year <= fullYears; year++) {

            const interestForYear =
                monthlyInterest * 12;


            yearlyBreakdown += `

                <p class="year-interest">
                    Year ${year} Interest:
                    <span>
                        ₱${interestForYear.toLocaleString()}
                    </span>
                </p>

            `;

        }


        // ------------------------------------------
        // REMAINING MONTHS
        // ------------------------------------------

        if (remainingMonths > 0) {

            const remainingInterest =
                monthlyInterest * remainingMonths;


            yearlyBreakdown += `

                <p class="year-interest">
                    Remaining ${remainingMonths}
                    ${remainingMonths === 1 ? "Month" : "Months"}

                    Interest:
                    <span>
                        ₱${remainingInterest.toLocaleString()}
                    </span>
                </p>

            `;

        }


        // ==========================================
        // DISPLAY RESULTS
        // ==========================================

        resultsDiv.innerHTML = `

            <div class="interest-results">
                <strong>Results:</strong>
                <br><br>


                <!-- MONTHLY PAYMENT -->

                <p>
                    Monthly Installment
                    Including Interest:

                    <strong>
                        ₱${monthlyPaid.toLocaleString()}
                    </strong>
                </p>


                <!-- MONTHLY RATE -->

                <p>
                    Monthly Interest Rate:
                    <strong>
                        ${monthlyRate * 100}%
                    </strong>
                </p>


              <!-- MONTHLY INTEREST -->
                <p>Monthly Interest:
                    <strong>
                        ₱${monthlyInterest.toLocaleString()}
                    </strong>
                </p>


            <!-- TOTAL INTEREST -->
                <p>
                    Total Interest for
                    ${months}
                    ${months === 1 ? "Month" : "Months"}:

                    <strong>
                        ₱${totalInterest.toLocaleString()}
                    </strong>
                </p>


              <!-- NUMBER OF INSTALLMENTS -->
                <p>Number of Installments:
                    <strong>
                        ${months}
                        ${months === 1 ? "Month" : "Months"}
                    </strong>
                </p>


            <!-- TOTAL AMOUNT -->

                <h3 class="total-paid">
                    Total Amount in
                    ${months}
                    ${months === 1 ? "Month" : "Months"}:
                    <span>₱${totalPayment.toLocaleString()}</span>
                </h3>


                <!-- YEARLY BREAKDOWN -->

                <div class="yearly-interest">
                    <h3>Interest Breakdown</h3>
                    ${yearlyBreakdown}
                </div>


            </div>

        `;


        // ==========================================
        // RESET MONTHS ONLY
        // ==========================================

        monthsInput.value = "";

    });


calcResetBtn.addEventListener("click",()=>{
    resultsDiv.innerHTML = "";
});


//  Close when clicking outside the calculator
calccloseBtn.addEventListener("click",()=>{
  
    calculatorContainer.classList.remove("active")
    calculatorOverlay.classList.remove("active");
    debitOverlay.classList.remove("active");
    resultsDiv.innerHTML = "";
});


calculatorOverlay.addEventListener("click", () => {
    calculatorContainer.classList.remove("active");
    calculatorOverlay.classList.remove("active");
    resultsDiv.innerHTML = "";
});

// ====================================================//


const creditContainer = document.querySelector(".creditCard");
const creditCardBtn = document.querySelector(".creditcard-mode");



creditCardBtn.addEventListener("click", () => {
  creditContainer.classList.add("active");
  debitOverlay.classList.add("active");
});


debitOverlay.addEventListener("click", (event) => {
    // Only close when clicking outside the form
    if (event.target === debitOverlay) {
        creditContainer.classList.remove("active");
        debitOverlay.classList.remove("active");
        resultConvertion.textContent = "";
        dollarAmount.value  = ""; 
    }

});

// paymentRadios.forEach(radio => {

//     radio.addEventListener("change", () => {

//         if (radio.value === "creditCard") {

//             if (creditContainer) {
//                 creditContainer.classList.add("active");
//             }

//             if (debitOverlay) {
//                 debitOverlay.classList.add("active");
//             }

//         } else {

//             if (creditContainer) {
//                 creditContainer.classList.remove("active");
//             }

//             if (debitOverlay) {
//                 debitOverlay.classList.remove("active");
//             }

//         }

//     });

// });



// DEBIT SECTION
// if (debitOverlay) {

//     debitOverlay.addEventListener("click", () => {

//         if (creditContainer) {
//             creditContainer.classList.remove("active");
//         }

//         debitOverlay.classList.remove("active");

//     });

// }


// CONVERT DOLLAR TO PESO//
// Auto display the current dollar rate from API online
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('https://v6.exchangerate-api.com/v6/6870cdf0c3d64aa9aa6d0cd5/latest/USD');
    const data = await response.json();
    const exchangeRate = data.conversion_rates.PHP;

    document.getElementById('dollar-rate').textContent = `Current Rate: ₱${exchangeRate.toFixed(2)}`;
  } catch (error) {
    document.getElementById('dollar-rate').textContent = 'Unable to fetch current rate.';
    console.error(error);
  }
});

  const convertToPeso = document.getElementById('convertToPeso').addEventListener('click', async () => {  
  const dollarAmount = parseFloat(document.getElementById('dollarInput').value);

  if (isNaN(dollarAmount) || dollarAmount < 0) {
    document.getElementById('result-convertion').textContent = 'Please enter a valid amount.';
    return;
  }

  try {
    // Fetch live exchange rate
    const response = await fetch('https://v6.exchangerate-api.com/v6/6870cdf0c3d64aa9aa6d0cd5/latest/USD');
    const data = await response.json();
    const exchangeRate = data.conversion_rates.PHP;

    // Show the current rate in the element with id="dollar-rate"
    document.getElementById('dollar-rate').textContent = `Current Rate: ₱${exchangeRate.toFixed(2)} `;

    const pesoAmount = dollarAmount * exchangeRate;
    document.getElementById('result-convertion').textContent = 
      `$${dollarAmount.toFixed(2)} = ₱${pesoAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  } catch (error) {
    document.getElementById('result-convertion').textContent = 'Error fetching exchange rate.';
    console.error(error);
  }
});

const dollarAmount = document.getElementById('dollarInput');
const resultConvertion = document.getElementById("result-convertion");
const debitBtn = document.querySelector(".debit-closebtn");

  debitBtn.addEventListener("click",()=>{
        creditContainer.classList.remove("active");
        debitOverlay.classList.remove("active");
        resultConvertion.textContent = "";
        dollarAmount.value  = ""; 
  });

// ========================//
// GCASH SECTION
// ========================//
const gcashContainer = document.querySelector(".gcash-main-container");
const gcashBtn = document.querySelector(".gcash-mode");

gcashBtn.addEventListener("click", () => {
    gcashContainer.classList.add("active");
});


gcashContainer.addEventListener("click", (event) => {
    // Only close when clicking outside the form
    if (event.target === gcashContainer) {
        gcashContainer.classList.remove("active");
        creditContainer.classList.remove("active");
    }

});


// ========================//
// PAYMAYA SECTION
// ========================//
const paymayaContainer = document.querySelector(".paymaya-main-container");
const paymayaBtn = document.querySelector(".paymaya-mode");

paymayaBtn.addEventListener("click", () => {
    paymayaContainer.classList.add("active");
});


paymayaContainer.addEventListener("click", (event) => {
    // Only close when clicking outside the form
    if (event.target === paymayaContainer) {
        paymayaContainer.classList.remove("active");
        creditContainer.classList.remove("active");
    }

});