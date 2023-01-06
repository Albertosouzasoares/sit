const conteudo = document.getElementById("content");

function negrito1() {
    const b = document.createElement("b");
    b.innerText = " ";
    conteudo.appendChild(b);

    document.getElementById("b-1").style.display = "none";
    document.getElementById("b-2").style.display = "block";
    
} function negrito2() {
    const p = document.createElement("p");
    p.innerText = " ";
    conteudo.appendChild(p);
    
    document.getElementById("b-2").style.display = "none";
    document.getElementById("b-1").style.display = "block";
}


function italico1() {
    const i = document.createElement("i");
    i.innerText = " ";
    conteudo.appendChild(i);

    document.getElementById("i-1").style.display = "none";
    document.getElementById("i-2").style.display = "block";

} function italico2() {
    const p = document.createElement("p");
    p.innerText = " ";
    conteudo.appendChild(p);

    document.getElementById("i-2").style.display = "none";
    document.getElementById("i-1").style.display = "block";
}


function sublinhado1() {
    const u = document.createElement("u");
    u.innerText = " ";
    conteudo.appendChild(u);

    document.getElementById("u-1").style.display = "none";
    document.getElementById("u-2").style.display = "block";

} function sublinhado2() {
    const p = document.createElement("p");
    p.innerText = " ";
    conteudo.appendChild(p);

    document.getElementById("u-2").style.display = "none";
    document.getElementById("u-1").style.display = "block";
}


function maiuscula() {
    const A = document.createElement("p");
    A.innerText = " ";
    A.style.textTransform = "uppercase";
    conteudo.appendChild(A);

} function minuscula() {
    const a = document.createElement("p");
    a.innerText = " ";
    conteudo.appendChild(a);

} function maiusculaEminuscula() {
    const Aa = document.createElement("p");
    Aa.innerText = " ";
    Aa.style.textTransform = "capitalize";
    conteudo.appendChild(Aa);
}


function right() {
    const textRight = document.createElement("div");
    textRight.innerText = " ";
    textRight.style.textAlign = "right";
    conteudo.appendChild(textRight);

} function center() {
    const textCenter = document.createElement("div");
    textCenter.innerText = " ";
    textCenter.style.textAlign = "center";
    conteudo.appendChild(textCenter);

} function left() {
    const textLeft = document.createElement("div");
    textLeft.innerText = " ";
    textLeft.style.textAlign = "left";
    conteudo.appendChild(textLeft);

} function justify() {
    const textJustify = document.createElement("div");
    textJustify.innerText = " ";
    textJustify.style.textAlign = "justify";
    conteudo.appendChild(textJustify);
}


function limparTitulo() {
    if (document.getElementById("titulo").innerText == "TÍTULO DO TEXTO") {
        document.getElementById("titulo").innerText = "";
    }

} function limparTituloClick() {
    if (document.getElementById("content").innerText == "") {
        document.getElementById("content").innerText = "CONTEUDO DO TEXTO";
    }
}

function limparContent() {
    if (document.getElementById("content").innerText == "CONTEUDO DO TEXTO") {
        document.getElementById("content").innerText = "";
    }

} function limparContentClick() {
    if (document.getElementById("titulo").innerText == "") {
        document.getElementById("titulo").innerText = "TÍTULO DO TEXTO";
    }
}