

const searchInput = document.getElementById("productSearch");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const filter = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".product-card");

        cards.forEach(function(card) {

            const text = card.textContent.toLowerCase();

            if (text.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}




const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please complete all fields before submitting.");

            event.preventDefault();

        }

    });

}