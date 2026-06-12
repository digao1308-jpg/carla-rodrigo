/* ==========================
   SENHA DE ACESSO
========================== */

const senhaCorreta = "CarlaRodrigo2013";

function entrar(){

    const senha =
    document.getElementById("senha").value;

    if(senha === senhaCorreta){

        document.getElementById("login")
        .style.display = "none";

        document.getElementById("site")
        .style.display = "block";

        criarCoracoes();

    }else{

        alert("Senha incorreta ❤️");

    }

}

/* ==========================
   CONTADOR DE AMOR
========================== */

const dataNamoro =
new Date("2013-03-05T00:00:00");

function atualizarContador(){

    const agora = new Date();

    let diferenca =
    agora - dataNamoro;

    const segundos =
    Math.floor(diferenca / 1000);

    const minutos =
    Math.floor(segundos / 60);

    const horas =
    Math.floor(minutos / 60);

    const dias =
    Math.floor(horas / 24);

    const anos =
    Math.floor(dias / 365);

    const meses =
    Math.floor((dias % 365) / 30);

    const diasRestantes =
    (dias % 365) % 30;

    document.getElementById("contador")
    .innerHTML =

    `
    ❤️ ${anos} anos
    ❤️ ${meses} meses
    ❤️ ${diasRestantes} dias
    `;
}

setInterval(
    atualizarContador,
    1000
);

atualizarContador();

/* ==========================
   MÚSICA
========================== */

function tocarMusica(){

    const musica =
    document.getElementById("musica");

    musica.play();

}

/* ==========================
   MENSAGENS SECRETAS
========================== */

const mensagens = [

"❤️ Você é meu lugar favorito no mundo.",

"❤️ Eu escolheria você em todas as vidas.",

"❤️ Obrigado por todos esses anos.",

"❤️ Meu melhor capítulo é você.",

"❤️ Te amaria outra vez.",

"❤️ Você é minha melhor escolha.",

"❤️ Meu coração sempre será seu."

];

function mostrarMensagem(){

    const sorteio =

    Math.floor(
        Math.random()
        * mensagens.length
    );

    document.getElementById("mensagem")
    .innerHTML =

    mensagens[sorteio];

}

/* ==========================
   ÁLBUM SECRETO
========================== */

function abrirAlbum(){

    const resposta =

    prompt(
    "Qual cidade marcou o início da nossa história?"
    );

    if(
        resposta &&
        resposta.toLowerCase()
        .includes("rio")
    ){

        alert(
        "❤️ Álbum secreto desbloqueado!"
        );

        window.open(
        "album-secreto.html",
        "_blank"
        );

    }else{

        alert(
        "Resposta incorreta ❤️"
        );

    }

}

/* ==========================
   CORAÇÕES FLUTUANTES
========================== */

function criarCoracoes(){

    setInterval(() => {

        const coracao =
        document.createElement("div");

        coracao.className =
        "heart";

        coracao.innerHTML =
        "❤️";

        coracao.style.left =

        Math.random() * 100 + "vw";

        coracao.style.fontSize =

        (Math.random() * 25 + 15)
        + "px";

        document.body
        .appendChild(coracao);

        setTimeout(() => {

            coracao.remove();

        },10000);

    },500);

}

/* ==========================
   EFEITO NETFLIX
========================== */

window.addEventListener(
"load",
() => {

    document.body.style.opacity = 0;

    setTimeout(() => {

        document.body.style.transition =
        "opacity 2s";

        document.body.style.opacity = 1;

    },300);

}
);

/* ==========================
   LIGHTBOX DE FOTOS
========================== */

const imagens =
document.querySelectorAll(".fotos img");

imagens.forEach((img)=>{

    img.addEventListener("click",()=>{

        const fundo =
        document.createElement("div");

        fundo.style.position =
        "fixed";

        fundo.style.top = 0;
        fundo.style.left = 0;

        fundo.style.width = "100%";
        fundo.style.height = "100%";

        fundo.style.background =
        "rgba(0,0,0,.95)";

        fundo.style.display =
        "flex";

        fundo.style.justifyContent =
        "center";

        fundo.style.alignItems =
        "center";

        fundo.style.zIndex =
        "99999";

        const foto =
        document.createElement("img");

        foto.src = img.src;

        foto.style.maxWidth =
        "90%";

        foto.style.maxHeight =
        "90%";

        foto.style.borderRadius =
        "20px";

        fundo.appendChild(foto);

        document.body
        .appendChild(fundo);

        fundo.onclick = () => {

            fundo.remove();

        };

    });

});

/* ==========================
   MENSAGEM FINAL
========================== */

console.log(

"❤️ Carla & Rodrigo ❤️"

);

console.log(

"Desde 05/03/2013"

);

console.log(

"Feliz Dia dos Namorados ❤️"

);