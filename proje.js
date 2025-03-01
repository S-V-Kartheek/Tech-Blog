document.addEventListener("DOMContentLoaded", function () {
    // Toast Notification for Subscription
    document.getElementById("showToastBtn").addEventListener("click", function () {
        var toast = new bootstrap.Toast(document.getElementById("myToast"));
        toast.show();
    });

    // Form Validation on Contact Page
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you for reaching out! We'll get back to you soon.");
        this.reset();
    });

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
