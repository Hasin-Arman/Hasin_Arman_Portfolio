function sendEmail() {
    console.log('clicked');
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "chayan",
        Password : "chayanAaru07",
        To : 'hasinarman6@gmail.com',
        From : document.getElementById('emailId').value,
        Subject :document.getElementById('subjectId').value,
        Body : document.getElementById('textId').innerText
    }).then(
      message => alert(message)
    );
}