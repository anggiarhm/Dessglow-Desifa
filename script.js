// Menu
document.querySelector('.desiva-mobile-menu-icon').addEventListener('click', () => {
    const menu = document.querySelector('.desiva-menu-links');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

window.addEventListener('resize', () => {
    const menu = document.querySelector('.desiva-menu-links');
    if (window.innerWidth >= 768) {
        menu.style.display = 'flex';
        // menu.style.position = 'absolute';
    } else {
        menu.style.display = 'none'; 
    }
});




// shop
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".desiva-category-button");
    const cards = document.querySelectorAll(".desiva-shop-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons, then add to clicked button
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Get the category to filter by
            const category = button.getAttribute("data-category");

            // Filter cards based on the category
            cards.forEach(card => {
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.style.display = "flex"; // Show matching cards
                } else {
                    card.style.display = "none"; // Hide non-matching cards
                }
            });
        });
    });
});


// offer
document.querySelectorAll('.offer-button').forEach(button => {
    button.addEventListener('click', () => {
        alert("Thank you for your purchase!");
    });
});


// contac
document.querySelector('.desiva-contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (name && email && message) {
        alert('Your message has been sent!');
    } else {
        alert('Please fill in all fields!');
    }
});

//Profile 
document.querySelector('.desiva-edit-profile-btn').addEventListener('click', () => {
    alert("Profile editing is coming soon!");
});


