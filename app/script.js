console.log("IronCore Fitness website loaded successfully!");

const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("Thank you for choosing IronCore Fitness!");

    });

});