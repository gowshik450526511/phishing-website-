document.addEventListener('DOMContentLoaded', function() {
    var emailOrPhoneField = document.getElementById('email_or_phone');
    emailOrPhoneField.addEventListener('input', function() {
        var value = this.value.trim();
        // Regular expression to match email or phone number
        var emailRegex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i;
        var phoneRegex = /^\d{10}$/; // Modify this regex for your phone number validation
        if (emailRegex.test(value) || phoneRegex.test(value)) {
            this.setCustomValidity('');
        } else {
            this.setCustomValidity('Please enter a valid email address or phone number');
        }
    });
});
