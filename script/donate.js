var input = document.getElementById('donation-amount-custom');

// Add event listener for input changes
input.addEventListener('input', function() {
    // Get the current value of the input field
    var value = input.value;
    
    // Check if the value already starts with a dollar sign
    if (!value.startsWith('$')) {
        // Prepend a dollar sign to the input value
        input.value = '$' + value;
    }
});