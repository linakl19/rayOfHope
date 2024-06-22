document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("donation-amount-custom");

    input.addEventListener("input", function(e) {
        // Get the input value
        let value = input.value;

        // Remove all non-digit and non-dot characters except the dollar sign
        value = value.replace(/[^0-9.]/g, '');

        // If the first character is not a dollar sign, add it
        if (!value.startsWith('$')) {
            value = '$' + value;
        }

        // Limits 2 decimal places after "." to display cents
        if (value.includes(".")) {
            // step 1: searches for "." charcter
            let char = ".";
            charIndex = value.indexOf(char);
            // step 2: limit 2 indexes after, factors in the initial "$" character
            let maxIndex = charIndex + 3
            // value.maxLength = charIndex + 2;
            value = value.slice(0, maxIndex);
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

const button = document.getElementById("next-button");

button.addEventListener("click", showMessage);
function showMessage() {
    alert("Thanks for Donating!");
}