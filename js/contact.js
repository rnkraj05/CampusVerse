const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const contact = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        subject: document.getElementById("subject").value,

        message: document.getElementById("message").value

    };

    try {

        const response = await fetch(`${BASE_URL}/contact`, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(contact)

        });

        const data = await response.json();

        if (data.success) {

            alert("✅ Message Sent Successfully!");

            contactForm.reset();

        } else {

            alert(data.message);

        }

    }

    catch (error) {

        console.error(error);

        alert("Server Error!");

    }

});