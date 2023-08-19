const showFormButton = document.getElementById("show-form-button");
    const form = document.getElementById("contact-form");
    
    showFormButton.addEventListener("click", function() {
        form.classList.remove("hidden");
        showFormButton.style.display = "none";
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const data = {};
        
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        sendDataToTelegram(data);

        // Hide the form after submitting
        form.classList.add("hidden");
        showFormButton.style.display = "block";
    });

    function sendDataToTelegram(data) {
        // Replace 'YOUR_BOT_TOKEN' and 'YOUR_CHAT_ID' with actual values
        const botToken = '6555455191:AAFZ2Y6fKuWAM8kk8VaFMwHuxhmDgWYkC7g';
        const chatId = '1269709744';
        
        const message = `New Contact Form Submission:
Name: ${data.name}
Phone Number: ${data.phone}
Service: ${data.service}`;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
        
        fetch(url)
            .then(response => response.json())
            .then(responseData => {
                if (responseData.ok) {
                    console.log("Message sent to Telegram!");
                } else {
                    console.error("Error sending message to Telegram");
                }
            })
            .catch(error => {
                console.error("Error sending message:", error);
            });
    }