// ABRI MINI JANELA PARA CRIAR NOVO DOCUMENTO
function novo() {
    document.getElementById("novo").classList.toggle("novo");
}

// FUNÇÃO PARA ABRIR MAIS CARACTERISTICAS DE NOTAS
function notas() {
    document.getElementById("caracteristica-1").style.display = "block";
    document.getElementById("caracteristica-2").style.display = "none";
}

// FUNÇÃO PARA ABRIR MAIS CARACTERISTICAS DE TEXTO
function texto() {
    document.getElementById("caracteristica-2").style.display = "block";
    document.getElementById("caracteristica-1").style.display = "none";
}

// CRIAR NOVO DOCUMENTO
function next() {

    // NOTAS
    if (document.getElementById("notas").checked) {
        const nome1 = document.getElementById("nome-1").value;

        if (nome1 !== "") {
            
            // EDITORES DE 1 A 10
            if (localStorage.getItem("Nome-1")) {
                localStorage.setItem("Nome-2", "nome1");

                window.open("http://127.0.0.1:5500/site-1/documentos-1.html");
            } else {
                localStorage.setItem("Nome-1", nome1);
            }

            document.getElementById("novo").classList.remove("novo");
        } else {
            window.alert("Coloque um nome!")
        }
    } else if (document.getElementById("texto").checked) {
        const nome2 = document.getElementById("nome-2").value;
        const tema = document.getElementById("tema").value;
        const data = document.getElementById("data").value;

        if (nome2 !== "" && tema !== "") {
            if (localStorage.getItem("Editor-9" !== "")) {
                localStorage.setItem("Editor-10", nome2);
                localStorage.setItem("Tema-10", tema);
                localStorage.setItem("Data-10", data);
    
                window.open("http://127.0.0.1:5500/site-1/editor-10");
            } else if (localStorage.getItem("Editor-8" !== "")) {
                localStorage.setItem("Editor-9", nome2);
                localStorage.setItem("Tema-9", tema);
                localStorage.setItem("Data-9", data);
    
                window.open("http://127.0.0.1:5500/site-1/editor-9");
            } else if (localStorage.getItem("Editor-7" !== "")) {
                localStorage.setItem("Editor-8", nome2);
                localStorage.setItem("Tema-8", tema);
                localStorage.setItem("Data-8", data);
    
                window.open("http://127.0.0.1:5500/site-1/editor-8");
            } else if (localStorage.getItem("Editor-6" !== "")) {
                localStorage.setItem("Editor-7", nome2);
                localStorage.setItem("Tema-7", tema);
                localStorage.setItem("Data-7", data);
    
                window.open("http://127.0.0.1:5500/site-1/editor-7");
            } else if (localStorage.getItem("Editor-5" !== "")) {
                localStorage.setItem("Editor-6", nome2);
                localStorage.setItem("Tema-6", tema);
                localStorage.setItem("Data-6", data);
    
                window.open("http://127.0.0.1:5500/site-1/editor-6");
            } else if (localStorage.getItem("Editor-4" !== "")) {
                localStorage.setItem("Editor-5", nome2);
                localStorage.setItem("Tema-5", tema);
                localStorage.setItem("Data-5", data);
    
                window.open("http://127.0.0.1:5500/site-1/editor-5");
            } else if (localStorage.getItem("Editor-3" !== "")) {
                localStorage.setItem("Editor-4", nome2);
                localStorage.setItem("Tema-4", tema);
                localStorage.setItem("Data-4", data);
    
                window.open("http://127.0.0.1:5500/site-1/editor-4");
            } else if (localStorage.getItem("Editor-2" !== "")) {
                localStorage.setItem("Editor-3", nome2);
                localStorage.setItem("Tema-3", tema);
                localStorage.setItem("Data-3", data);
    
                window.open("http://127.0.0.1:5500/site-1/editor-3");
            } else if (localStorage.getItem("Editor-1" !== "")) {
                localStorage.setItem("Editor-2", nome2);
                localStorage.setItem("Tema-2", tema);
                localStorage.setItem("Data-2", data);
    
                window.open("http://127.0.0.1:5500/site-1/editor-2");
            } else {
                localStorage.setItem("Editor-1", nome2);
                localStorage.setItem("Tema-1", tema);
                //localStorage.setItem("Data-1", data);

                const data = new Date();
                const dia = String(data.getDate()).padStart(2, "0");
                const mes = String(data.getMonth() + 1).padStart(2, "0");
                const ano = data.getFullYear();

                localStorage.setItem("Data-1", dia + "/" + mes + "/" + ano);
    
                window.open("http://127.0.0.1:5500/site-1/editor-1");
            }
        }
    }
}