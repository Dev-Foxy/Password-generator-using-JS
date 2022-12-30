const form = document.querySelector("form")
const span = document.querySelector("span")

form.addEventListener("submit",(e)=>{
    //To prevent the page from refreshing
    e.preventDefault()

    var length = form.querySelector("input[name = 'length']").value
    var password = generatePass(length)
    span.textContent = password
})

function generatePass(length){
    password = ''
    //These are the characters that will randomly build a password
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"
    //this is to store those random characters
    var character = ''

    for(let i =0;i<length;i++){
        character += characters[Math.floor(Math.random() * characters.length)]
    }
    password = character
    return password
}