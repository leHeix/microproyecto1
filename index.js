function validateUsername()
{
    const userinput = document.getElementById("username");
    if(userinput)
    {
        const username = userinput.value;
        if(username.length === 0)
        {
            userinput.classList.add("input-error");
            alert("El nombre de usuario no puede estar vacío.");
            return;
        }

        localStorage.setItem("current_user", username);
        location.href = "quiz.html";
    }
}

document.getElementById("username").addEventListener("change", (event) => {
    if(event.target.classList.contains("input-error"))
        event.target.classList.remove("input-error");
})