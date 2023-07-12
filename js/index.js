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

const confirmOk = () => {
    output.textContent = `
    Congratulations you have been redirected to the main page`
}

const customPrompt = () => {
    output.innerHTML = `
        <p>${'Enter your age'} </p>
        <input type= text name=prompt>
        <button onclick="cancelPopup()"> Cancel </button>
        <button onclick="confirmOk()"> Ok </button>`
     dialog.showModal()
}