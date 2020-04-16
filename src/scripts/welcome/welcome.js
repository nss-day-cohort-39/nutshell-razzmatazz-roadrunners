const contentTarget = document.querySelector('.welcome_container')


export const Welcome = () => {
    /* define the inner HTML of the content target and
    call the necessary button components */
    contentTarget.innerHTML = `
  <h1>Welcome to Nutshell!</h1>
  <div>
    <p>**Add synopsis here**</p>
  </div>
  <div>
    <button id="loginSelect">Login</button>
    <button id="registerSelect">Register</button>
  </div>
  
  `
}