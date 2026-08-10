document.addEventListener("DOMContentLoaded", ()=>{
    let expenseForm = document.getElementById("expense-form")
    let expenseNameInput = document.getElementById("expense-name")
    let expenseAmountInput = document.getElementById("expense-amount")
    let expenseListDisplay = document.getElementById("expense-list")
    let expenseTotalDisplay = document.getElementById("total-amount")

    let expenses =  JSON.parse(localStorage.getItem("Expenses")) || []
    renderExpenses()
    updateTotalExpense()
    

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
            updateTotalExpense()
        expenseNameInput.value = ""
        expenseAmountInput.value = ""
        }
    })

    function saveExpenseToLocal(){
        localStorage.setItem("Expenses",JSON.stringify(expenses))
    }

    function renderExpenses(){
        expenseListDisplay.innerHTML = ""
        if(expenses.length > 0){
            expenses.forEach(expense => {
                let li = document.createElement("li")
                li.innerHTML = `
                ${expense.name} - $${expense.amount}
                <button data-id=${expense.id}>delete</button>
                `
                expenseListDisplay.append(li)
            })
        }
        
        
    }
console.log(expenses);

expenseListDisplay.addEventListener("click", (e) =>{
    if(e.target.tagName === "BUTTON"){
        let id = parseInt(e.target.getAttribute("data-id"))
        let target = expenses.find(item => item.id === id);
        expenses.splice(expenses.indexOf(target), 1)
        saveExpenseToLocal()
        renderExpenses()
        updateTotalExpense()
            
        }
        
    })
    function calculateTotalExpense(){
        return expenses.reduce((accumlator, currentItem) => (accumlator + currentItem.amount), 0)
    }

    function updateTotalExpense(){
        totalExpense = calculateTotalExpense()
        expenseTotalDisplay.textContent = totalExpense
    }

    
})