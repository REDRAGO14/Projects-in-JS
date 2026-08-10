document.addEventListener("DOMContentLoaded", ()=>{
    let expenseForm = document.getElementById("expense-form")
    let expenseNameInput = document.getElementById("expense-name")
    let expenseAmountInput = document.getElementById("expense-amount")
    let expenseListDisplay = document.getElementById("expense-list")
    let expenseTotalDisplay = document.getElementById("total-amount")

    let expenses = []

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
        }
    })
})