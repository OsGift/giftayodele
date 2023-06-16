const form = document.querySelector('form#contact_form');

//function to send message when clicked
function sendMsg(e){    
    e.preventDefault();

    const name = document.querySelector('input#name'),
    email = document.querySelector('input#email'),
    subject = document.querySelector('input#subject'),
    message = document.querySelector('textarea#message');

    const successMessagediv = document.querySelector('#successMessage');

    const errorMessagediv = document.querySelector('#errorMessage');

        Email.send({
    SecureToken : "f8bbe50d-0f7a-4019-8c50-289f4233c318",
    To : 'giftayodeleos@gmail.com',
    From : 'devjaynie@gmail.com',
    Subject: subject.value,
    Body: `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
  
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
            border-radius: 5px;
          }
  
          h2 {
            color: #333;
          }
  
          p {
            margin-bottom: 10px;
          }
  
          strong {
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Email from ${name.value}</h2>
          <p><strong>Name:</strong> ${name.value}</p>
          <p><strong>Email:</strong> ${email.value}</p>
          <p><strong>Subject:</strong> ${subject.value}</p>
          <p><strong>Message:</strong> ${message.value}</p>
        </div>
      </body>
    </html>  
    `
})
.then(function () {
         document.getElementById("successMessage").classList.remove("d-none");
        form.reset();
      }).catch(function (error) {
        document.getElementById("errorMessage").classList.remove("d-none");
        console.log(error);
      });
}
//add event listener
form.addEventListener('submit',sendMsg);

function hideMessage(messageId) {
    document.getElementById(messageId).classList.add("d-none");
  }
  
  
       