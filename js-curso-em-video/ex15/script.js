function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoUsuario = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (anoUsuario.value.length == 0 || Number(anoUsuario.value) > ano) {
        alert("Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(anoUsuario.value)
        var genero = " "

        // CRIANDO IMAGEM DINAMICAMENTE
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            genero = "Masculino"
            if (idade >= 0 && idade < 12) {
                img.setAttribute("src", "/ex15/img/criancam.png")
            } else if (idade < 21) {
                img.setAttribute("src", "/ex15/img/jovemm.png")
            } else if (idade < 50) {
                img.setAttribute("src", "/ex15/img/adultom.png")
            } else {
                img.setAttribute("src", "/ex15/img/idosom.png")
            }
        } else {
            genero = "Feminino"
            if (idade >= 0 && idade < 12) {
                img.setAttribute("src", "/ex15/img/criancaf.png")
            } else if (idade < 21) {
                img.setAttribute("src", "/ex15/img/jovemf.png")
            } else if (idade < 50) {
                img.setAttribute("src", "/ex15/img/adultof.png")
            } else {
                img.setAttribute("src", "/ex15/img/idosof.png")
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}