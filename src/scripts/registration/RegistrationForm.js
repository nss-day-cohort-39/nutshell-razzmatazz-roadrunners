const contentTarget = document.querySelector(".registration_container")


const render = () => {
    contentTarget.innerHTML = `
        <h1>Welcome to Nutshell Registration</h1>   
        <a href="#">Register a new account</a>
        <form action="" class="registration">
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
                <input type="text" name="registrationPassword" id="registrationPassword">
            </fieldset>

            <fieldset class="registration_confirm_password">
                <label for="registrationConfirmPassword">Confirm Password</label>
                <input type="text" name="registrationConfirmPassword" id="registrationConfirmPassword">
            </fieldset>         
        </form>
    `

}

export const registrationForm = () => {
    render()
}