


var btn = document.getElementById('btn')
btn.addEventListener('click',function(e){
    e.preverntDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value
    let body = `Name :${name} <br>Email : ${email} <br>Message : ${message}`
    Email.send({
        Host : "smtp.gmail.com",
        Username : "athulpr147social@gmail.com",
        Password : "hlbexmguqavllqrz",
        To : 'athulpr147social@gmail.com',
        From : email,
        Subject : "From portfolio form",
        Body :body
    }).then(
      message => alert(message)
    );
})