let form = document.querySelector("#form");

form.addEventListener('submit',function(event){
    event.preventDefault();
    let email = document.querySelector("#email").value;
    alert (`Thanks ${email} we'll be in touch!`);

})