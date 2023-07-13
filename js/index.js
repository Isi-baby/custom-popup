let dialog = document.querySelector('dialog');
let output = document.querySelector('.output');
let cancelBtn = document.querySelector('.cancel')
const customAlert = (message) => {
    output.textContent = message;
    dialog.showModal()
    // alert(message)
}

const cancelPopup = () => {
    dialog.close()
}
 
cancelBtn.onclick = () => {
    cancelPopup()
}

const customConfirm = (message) => {
    output.innerHTML = `
        <p> ${message} </p>
        <button onclick="cancelPopup()"> NO </button>
        <button onclick="confirmOk()"> YES </button>
    
    `
    dialog.showModal()
}

const confirmOk = (message) => {
    output.textContent = message ?? `
    Congratulations you have been redirected to the main page`
}

const customPrompt = () => {
    output.innerHTML = `
        <p>${'Enter your age'} </p>
        <input type="text" id="inp"  name="prompt">
        <button onclick="cancelPopup()"> Cancel </button>
        <button class="ok_btn"> Ok </button>`;
    
        document.querySelector('.ok_btn').onclick = () => {
            confirmOk(`Age Entered is ${document.querySelector("#inp").value} Years old`);
       }
     dialog.showModal()
}