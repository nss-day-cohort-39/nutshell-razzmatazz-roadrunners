import { saveUsers } from "./RegistrarionProvider.js"
import { DisplayRegistrationText } from "./DisplayRegistrationText.js"

const contentTarget = document.querySelector(".registration_container")
const eventHub = document.querySelector("#container");

contentTarget.addEventListener("click", clickEvent => {
    // Adding data to our database.json file uppon the click of the correct id.
    if(clickEvent.target.id === "registerButton") {
        const newRegistration = {
            username: document.querySelector("#registrationEmail").value,
            email: document.querySelector("#registrationUsername").value ,
            password: document.querySelector("#registrationPassword").value
        }

        // Checking to see if the two passwords match
        let passwordOne = document.querySelector("#registrationPassword").value
        let passwordTwo = document.querySelector("#registrationConfirmPassword").value

        if(passwordOne === passwordTwo) {
            saveUsers(newRegistration)
        } else if (passwordOne !== passwordTwo) {
            alert("Password Does Not Match")
        }
    }
    
})

// Removing invisible class upon clicking the anchor link for registration
eventHub.addEventListener("allRegistrationClicked", event => {
    document.querySelector(".registration").classList.remove("invisible")
    document.querySelector(".registrationButton").classList.remove("invisible")       
})

const render = () => {
    contentTarget.innerHTML = `
        <h1>Welcome to Nutshell Registration</h1>   
        ${DisplayRegistrationText()}
        <form action="" class="registration invisible">
            <fieldset class="registration_email">
                <label for="registrationEmail">Email</label>
                <input type="text" name="registrationEmail" id="registrationEmail">
            </fieldset>

            <fieldset class="registration_username">
                <label for="registrationUsername">Username</label>
                <input type="text" name="registrationUsername" id="registrationUsername">
            </fieldset>

            <fieldset class="registration_password">
                <label for="registrationPassword">Password</label>
                <input type="password" name="registrationPassword" id="registrationPassword">
            </fieldset>

            <fieldset class="registration_confirm_password">
                <label for="registrationConfirmPassword">Confirm Password</label>
                <input type="password" name="registrationConfirmPassword" id="registrationConfirmPassword">
            </fieldset>         
        </form>
        <button id="registerButton" class="registrationButton invisible">Register</button>
    `

}

export const registrationForm = () => {
    render()
}