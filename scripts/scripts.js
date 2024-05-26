const button = document.querySelectorAll(".accordion-button")

button.forEach(element => {
    element.addEventListener("click", function(){
        element.classList.toggle("active")
        if(element.classList.contains("active")){
            element.nextElementSibling.style.maxHeight = element.nextElementSibling.scrollHeight + "px"
        }else{
            element.nextElementSibling.style.maxHeight = 0
        }
    })
})

window.addEventListener("resize", handleResize)

function handleResize(){
button.forEach(element => {
    if(element.classList.contains("active")){
        console.log("hey");
        element.nextElementSibling.style.maxHeight = element.nextElementSibling.scrollHeight + "px"
    }
})
}