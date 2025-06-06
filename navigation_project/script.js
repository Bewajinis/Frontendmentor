document.querySelector(".dropdown-toggle").addEventListener("click", function () {
    let dropdownMenu = document.getElementById("featuresMenu");
    let caretIcon = document.getElementById("caretIcon");

    dropdownMenu.classList.toggle("show");

    caretIcon.textContent = caretIcon.textContent === "arrow_drop_down" ? "arrow_drop_up" : "arrow_drop_down";
});


document.querySelector(".sec_drop_toggle").addEventListener("click", function () {
    let dropDown = document.getElementById("companyMenu");
    let caretMenu = document.getElementById("caretMenu");

    dropDown.classList.toggle("show");

    caretMenu.textContent = caretMenu.textContent === "arrow_drop_down" ? "arrow_drop_up" : "arrow_drop_down";
});