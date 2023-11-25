const $ = document
let numberOfTimesInput = $.querySelector('.compound-input')
let numberOfAddEachTimeInput = $.querySelector('.adding-number-input')
let interestRateInput = $.querySelector('.interest-input')
let calculatorBtn = $.querySelector('.calculator-btn')
let showResult = $.querySelector('.show')
let finalResult = 0

calculatorBtn.addEventListener('click', ()=> {

    if (numberOfTimesInput.value && numberOfAddEachTimeInput.value && interestRateInput.value){
        for(let i = 0; i < (+numberOfTimesInput.value); i++) {
            finalResult += (+interestRateInput.value / 100) * finalResult
            finalResult += +numberOfAddEachTimeInput.value
        }
        
        showResult.innerHTML = Math.round(finalResult * 10) / 10

        finalResult = 0
    }
})