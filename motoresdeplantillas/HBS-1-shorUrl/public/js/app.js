console.log("Estoy aquí soy el frontend");

document.addEventListener("click", (e) => {
    if (e.target.dataset.short) {
        const url = `http://localhost:5000/${e.target.dataset.short}`;
        navigator.clipboard
            .writeText(url)
            .then(() => {
                console.log('url copiada al portapapeles');
            })
            .catch((err) => {
                console.log("Something went wrong", err);
            });
    }
});