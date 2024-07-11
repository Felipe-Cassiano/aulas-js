document.querySelector('button').addEventListener("click", () => {
    document.body.appendChild(document.createElement("p")).textContent = document.querySelector('input').value
    return document.querySelector('input').value = ""
})