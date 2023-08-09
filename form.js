document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const additionalInfo = document.getElementById("additionalInfo").value;

    // Call the function to send the information to the owner
    sendInfoToOwner(name, service, phoneNumber, additionalInfo);
});

function sendInfoToOwner(name, service, phoneNumber, additionalInfo) {
    const apiKey = "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";
    const ownerEmail = "instatushir@gmail.com";

    const url = `https://api.sendinblue.com/v3/smtp/email`;

    const data = {
        sender: {
            email: "your@email.com",
            name: name,
        },
        to: [
            {
                email: ownerEmail,
                name: "Owner Name"
            }
        ],
        subject: "New Information Submission",
        textContent: `Name: ${name}\nService: ${service}\nPhone Number: ${phoneNumber}\nAdditional Info: ${additionalInfo}`
    };

    const headers = {
        "Content-Type": "application/json",
        "api-key": apiKey
    };

    fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.code === "success") {
            document.getElementById("infoForm").style.display = "none";
            document.getElementById("responseMessage").style.display = "block";
        } else {
            document.getElementById("responseMessage").textContent = "Failed to send information.";
        }
    })
    .catch(error => {
        console.error("Error sending information:", error);
        document.getElementById("responseMessage").textContent = "An error occurred.";
    });
}
