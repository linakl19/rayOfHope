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





document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("dollarInput");

    input.addEventListener("input", function(e) {
        // Get the input value
        let value = input.value;

        // Remove all non-digit and non-dot characters except the dollar sign
        value = value.replace(/[^0-9.]/g, '');

        // If the first character is not a dollar sign, add it
        if (!value.startsWith('$')) {
            value = '$' + value;
        }

        // Set the cleaned value back to the input field
        input.value = value;

        // Ensure cursor is placed after the dollar sign
        setTimeout(() => {
            input.selectionStart = input.selectionEnd = input.value.length;
        }, 0);
    });

    input.addEventListener("focus", function() {
        // On focus, if the input is empty, add the dollar sign
        if (input.value === '') {
            input.value = '$';
        }
    });

    input.addEventListener("blur", function() {
        // On blur, if the input is only the dollar sign, clear it
        if (input.value === '$') {
            input.value = '';
        }
    });
});