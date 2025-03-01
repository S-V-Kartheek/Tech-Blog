document.getElementById("showToastBtn").addEventListener("click", function () {
    var toast = new bootstrap.Toast(document.getElementById("myToast"));
    toast.show();
});

function showMessage() {
    window.alert("Thank you for your interest in Hyperloop India!");
}
