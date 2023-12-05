function calculateLoan(){
    var employeeID = document.getElementById("employeeID").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var designation = document.getElementById("designation").value;
    var loanAmount = parseFloat(document.getElementById("loanAmount").value);
    var dateOfLoan = new Date(document.getElementById("dateOfLoan").value);

    if(employeeID.length < 4 || employeeID.charAt(0) !== 'E'){
        alert("EmployeeID must be atleast 4 characters and start with 'E'.");
        return
    }
    var interestRate = 0;
    if(designation === "Manager"){
        interestRate = 0.1;
    }else if( designation === "Emlpoyee"){
        interestRate = 0.05;
    }
    var maturityDate = new Date(dateOfLoan);
    maturityDate.setFullYear(maturityDate.getFullYear() + 1);

    var interest = loanAmount * interestRate;
    var totalPayable = loanAmount + interest;

    document.getElementById("interest").innerHTML = "Interest Payable : $" + interest.toFixed(2);
    document.getElementById("totalPayable").innerHTML = "Total Payable : $" + totalPayable.toFixed(2);
    document.getElementById("maturityDate") .innerHTML = "Maturity Date : " + maturityDate.toDateString();
    
}













