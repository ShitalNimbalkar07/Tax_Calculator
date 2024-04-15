// script.js

$(document).ready(function() {
    $('#taxForm').submit(function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Reset errors
      $('.form-group').removeClass('invalid');
      $('.error-icon').hide();
  
      // Get user inputs
      var grossIncome = parseFloat($('#grossIncome').val());
      var extraIncome = parseFloat($('#extraIncome').val());
      var deductions = parseFloat($('#deductions').val());
      var age = $('#age').val();
  
      // Validate inputs
      var isValid = true;
  
      if (isNaN(grossIncome) || grossIncome < 0) {
        $('#grossIncomeError').text('Invalid input').show();
        $('#grossIncome').closest('.form-group').addClass('invalid');
        isValid = false;
      }
  
      if (isNaN(extraIncome) || extraIncome < 0) {
        $('#extraIncomeError').text('Invalid input').show();
        $('#extraIncome').closest('.form-group').addClass('invalid');
        isValid = false;
      }
  
      if (isNaN(deductions) || deductions < 0) {
        $('#deductionsError').text('Invalid input').show();
        $('#deductions').closest('.form-group').addClass('invalid');
        isValid = false;
      }
  
      if (!age) {
        $('#ageError').text('Please select an age').show();
        $('#age').closest('.form-group').addClass('invalid');
        isValid = false;
      }
  
      if (!isValid) {
        return; // Exit if inputs are invalid
      }
  
      // Calculate tax
      var tax = 0;
      var taxableIncome = grossIncome + extraIncome - deductions;
      
      if (taxableIncome > 8) {
        if (age === '<40') {
          tax = 0.3 * (taxableIncome - 8);
        } else if (age === '>=40 & <60') {
          tax = 0.4 * (taxableIncome - 8);
        } else if (age === '>=60') {
          tax = 0.1 * (taxableIncome - 8);
        }
      }
  
      // Display tax calculation result
      $('#taxResultModal #taxAmount').text(tax.toFixed(2) + ' Lakhs');
      $('#taxResultModal').modal('show');
    });
  });
  