function contar() {
    let inicio = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")

    if (inicio.value === "" || fim.value === "" || passo.value === "") {
        res.innerHTML = "Impossível contar!"
        // alert("Faltam dados!")
    } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert("Passo inválido! Considerando PASSO = 1")
            p = 1
        }

        if (i < f) {
            // CONTAGEM CRESCENTE
            for (i; i <= f; i += p) {
                res.innerHTML += `${i} \u{27A1} `
            }

        } else {
            // CONTAGEM DECRESCENTE
            for (i; i >= f; i -= p) {
                res.innerHTML += `${i} \u{27A1} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}