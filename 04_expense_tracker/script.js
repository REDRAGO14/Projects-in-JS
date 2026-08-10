document.addEventListener("DOMContentLoaded", ()=>{
    let expenseForm = document.getElementById("expense-form")
    let expenseNameInput = document.getElementById("expense-name")
    let expenseAmountInput = document.getElementById("expense-amount")
    let expenseListDisplay = document.getElementById("expense-list")
    let expenseTotalDisplay = document.getElementById("total-amount")

    let expenses =  JSON.parse(localStorage.getItem("Expenses")) || []
    renderExpenses()

    expenseForm.addEventListener("submit", (e) =>{
        e.preventDefault()
        let ExpenseName = expenseNameInput.value.trim()
        let ExpenseAmount = parseFloat(expenseAmountInput.value.trim())

        if(!ExpenseName == "" && !isNaN(ExpenseAmount) && ExpenseAmount > 0){
            const newExpense = {
                id: Date.now(),
                name: ExpenseName,
                amount: ExpenseAmount
            }

            expenses.push(newExpense)
            saveExpenseToLocal()
            renderExpenses()
        expenseNameInput.value = ""
        expenseAmountInput.value = ""
        }
    })

    function saveExpenseToLocal(){
        localStorage.setItem("Expenses",JSON.stringify(expenses))
    }

    function renderExpenses(){
        if(expenses.length > 0){
            expenses.forEach(expense => {
                let li = document.createElement("li")
                li.innerHTML = `
                ${expense.name} - $${expense.amount}
                `
                expenseListDisplay.append(li)
            })
        }
    }
})