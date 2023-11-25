
//let nameElement=document.getElementById("name").value;
const submit=document.getElementById("continue")
console.log(submit)
submit.addEventListener("click", ()=>{
    // event.preventDefault();

     let nameElement=document.getElementById("name").value;
    let emailElement=document.getElementById("email").value;
    let passwordElement=document.getElementById("password").value;
    let conformpasswordElement=document.getElementById("conformPassword").value;

    if (nameElement && emailElement && passwordElement && conformpasswordElement ) {
      

        console.log("Username:", nameElement);
        console.log("Email:", emailElement);
        console.log("Password:", passwordElement);
        console.log("Password:", conformpasswordElement);

        alert("Signup successful!");
    }
    else{
        alert("Please fill in all fields.");
    }
    console.log(nameElement)
})
 //console.log(nameElement)