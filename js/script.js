class Mascote {
    constructor() {
        this.vidas = 3;
        this.fome = 90;
        this.disposicao = 90;
        this.sono = 90;
        this.cuidados = 90;
        this.doenca = 90;
        this.humor = 0;
        this.lazer = 0;
        this.intervalId = null;
    }

    estado() {
        var estado = document.getElementById("estado");
        estado.innerHTML =
        `Fome: ${this.fome}<br>
         Cuidados: ${this.cuidados}<br> 
         Disposição: ${this.disposicao}<br> 
         Sono: ${this.sono}<br>
         Doença: ${this.doenca}<br> 
         Lazer: ${this.lazer}<br> 
         Humor: ${this.humor}<br> 
         Vidas: ${this.vidas}<br>`;
    }

    // Inicio ____________ Métodos igets _______________________________________________________________________________________
    alimentarMaca() {
        this.fome -= 10;
        this.humor +=5;
        if (this.fome <0) this.fome = 0; 
        var container = document.getElementById("container");
        container.innerHTML = `Obrigada pela maça! <br>`;
        this.atualizarBarraFome();
        this.estado();
        this.atualizarHumor();
    }
    alimentarMacarrao() {
       
        this.fome -= 10;
        if (this.fome <0) this.fome = 0; 
        var container = document.getElementById("container");
        container.innerHTML = `macarronada <br>`;
        this.atualizarBarraFome();
        this.estado();
        this.atualizarHumor();

    }
    alimentarSorvete() {
       this.humor +=15;
        this.fome -= 10;
        if (this.fome <0) this.fome = 0; 
        var container = document.getElementById("container");
        container.innerHTML = `sorvete <br>`;
        this.atualizarBarraFome();
        this.estado();
        this.atualizarHumor();

    }

    alimentarBurguer() {
       
        this.fome -= 10;
        if (this.fome <0) this.fome = 0; 
        var container = document.getElementById("container");
        container.innerHTML = `Burguer <br>`;
        this.atualizarBarraFome();
        this.estado();
        this.atualizarHumor();

    }

     
    descansarSofa() {
       
        this.disposicao -= 10;
        if (this.disposicao <0) this.disposicao = 0; 
        var container = document.getElementById("container");
        container.innerHTML = `sofá <br>`;
        this.atualizarBarraDisposicao();
        this.estado();
        this.atualizarHumor();

    }

    descansarCama() {
       
        this.disposicao -= 10;
        if (this.disposicao <0) this.disposicao = 0; 
        var container = document.getElementById("container");
        container.innerHTML = `cama <br>`;
        this.atualizarBarraDisposicao();
        this.estado();
        this.atualizarHumor();

    }
    
    descansarCadeira() {
       
        this.disposicao -= 10;
        if (this.disposicao <0) this.disposicao = 0; 
        var container = document.getElementById("container");
        container.innerHTML = `cadeira <br>`;
        this.atualizarBarraDisposicao();
        this.estado();
        this.atualizarHumor();

    }

    dormir() {
        this.humor +=5;
        this.dormir -= 10;
        if (this.dormir <0) this.dormir = 0; 
        var container = document.getElementById("container");
        container.innerHTML = `Dormir <br>`;
        this.atualizarBarraSono();
        this.estado();
        this.atualizarHumor();

    }
    tomarBanho() {
       
        this.cuidados -= 10;
        if (this.cuidados <0) this.cuidados = 0; 
        var container = document.getElementById("container");
        container.innerHTML = `Banho <br>`;
        this.atualizarBarraCuidados();
        this.estado();
        this.atualizarHumor();

    }
    tomarDucha() {
       
        this.cuidados -= 5;
        if (this.cuidados <0) this.cuidados = 0; 
        var container = document.getElementById("container");
        container.innerHTML = `Ducha <br>`;
        this.atualizarBarraCuidados();
        this.estado();
        this.atualizarHumor();

    }
    escovarDentes() {
       
        this.cuidados -= 2;
        if (this.cuidados <0) this.cuidados = 0; 
        var container = document.getElementById("container");
        container.innerHTML = ` escovar os dentes <br>`;
        this.atualizarBarraCuidados();
        this.estado();
        this.atualizarHumor();

    }
    lavarMaos() {
       
        this.cuidados -= 1;
        if (this.cuidados <0) this.cuidados = 0; 
        var container = document.getElementById("container");
        container.innerHTML = `Lavar as Mãos <br>`;
        this.atualizarBarraCuidados();
        this.estado();
        this.atualizarHumor();

    }
    ouvirMusica() {
        this.humor +=5;
        this.lazer += 1;
        if (this.lazer <0) this.lazer = 0; 
        var container = document.getElementById("container");
        container.innerHTML = `ouvir musica <br>`;
        this.atualizarBarraOuvirMusica();
        this.estado();
        this.atualizarHumor();

    }

    viajar() {
        this.humor +=20;
        this.lazer += 10;
        if (this.cuidados <0) this.lazer = 0; 
        var container = document.getElementById("container");
        container.innerHTML = `viajar <br>`;
        this.estado();
        this.atualizarHumor();

        
    }

    jogar() {
        this.humor +=5;
        this.lazer += 5;
        if (this.lazer <0) this.lazer = 0; 
        var container = document.getElementById("container");
        container.innerHTML = `jogar vide game <br>`;
        this.estado();
        this.atualizarHumor();

        
    }

    ler() {
        this.humor +=5;
        this.lazer += 10;
        if (this.lazer <0) this.lazer = 0; 
        var container = document.getElementById("container");
        container.innerHTML = `ler <br>`;
        this.estado();
        this.atualizarHumor();

        
    }

    
    // Fim ______________Métodos igets _______________________________________________________________________________________

    // Inicio ______________Métodos Ciclos _______________________________________________________________________________________


    iniciarCicloFome() {
        if (this.vidas > 0) {
            this.intervalId = setInterval(() => {
                if (this.fome < 100) {
                    this.fome += 30;
                    if (this.fome >= 100) {
                        clearInterval(this.intervalId);
                        this.morrer();
                    }
                    this.atualizarBarraFome();
                }
            }, 10000);
        }
    }

    iniciarCicloDisposicao() {
        if (this.vidas > 0) {
            this.intervalId = setInterval(() => {
                if (this.disposicao < 100) {
                    this.disposicao += 30;
                    if (this.disposicao >= 100) {
                        clearInterval(this.intervalId);
                        
                    }
                    this.atualizarBarraDisposicao();
                }
            }, 10000);
        }
    }

    iniciarCicloSono() {
        if (this.vidas > 0) {
            this.intervalId = setInterval(() => {
                if (this.sono < 100) {
                    this.sono += 30;
                    if (this.sono >= 100) {
                        clearInterval(this.intervalId);
                    
                    }
                    this.atualizarBarraSono();
                }
            }, 10000);
        }
    }

    iniciarCicloCuidados() {
        if (this.vidas > 0) {
            this.intervalId = setInterval(() => {
                if (this.cuidados < 100) {
                    this.cuidados += 30;
                    if (this.cuidados >= 100) {
                        clearInterval(this.intervalId);
                        
                    }
                    this.atualizarBarraSono();
                }
            }, 10000);
        }
    }



   


    morrer() {
        this.vidas -= 1;

        var container = document.getElementById("container");
        container.innerHTML += `Perdeu uma vida! <br>`;
        this.atualizarVidas();
        this.iniciarCicloFome(); 
        
    }

    // Fim ______________Métodos ciclos _______________________________________________________________________________________


    // Inicio ______________Métodos Atualizações _______________________________________________________________________________________

    atualizarVidas(){
        if (this.vidas === 3) {
                  
            var container = document.getElementById("vida");
            container.innerHTML = `❤️❤️❤️ `;
     
        } else if (this.vidas === 2) {
           
           
            var container = document.getElementById("vida");
            container.innerHTML = `❤️❤️🤍 `;
            
        } else if (this.vidas === 1) {
              
            var container = document.getElementById("vida");
            container.innerHTML = `❤️🤍🤍 `;
            

        }  else if (this.vidas === 0) {
           
            var container = document.getElementById("vida");
            container.innerHTML = `🤍🤍🤍 `; 
            

        }
        
        
    }

    
    atualizarHumor(){
        if (this.humor < 50) {
            
            
           
            var humor = document.getElementById("humor");
            humor.innerHTML = `  😞 `;
     
        } else if (this.humor === 50) {
           
           
            var humor = document.getElementById("humor");
            humor.innerHTML = `🥹 `;
            
                

        }  else if (this.humor >50) {
              
            var humor = document.getElementById("humor");
            humor.innerHTML = `😄`; 
            

        }
        
        
    }
   


    atualizarBarraFome() {
        var fomeBar = document.getElementById("fomeBar");
        fomeBar.style.width = `${this.fome}%`;
    }

    atualizarBarraDisposicao() {
        var disposicaoBar = document.getElementById("disposicaoBar");
        disposicaoBar.style.width = `${this.disposicao}%`;
    }

    atualizarBarraSono() {
        var sonoBar = document.getElementById("sonoBar");
        sonoBar.style.width = `${this.sono}%`;
    }

    atualizarBarraCuidados() {
        var cuidadosBar = document.getElementById("cuidadosBar");
        cuidadosBar.style.width = `${this.cuidados}%`;
    }


    // Fim ______________Métodos atualizações _______________________________________________________________________________________


    // fim do jogo

    gameover() {
        var div = document.getElementById("gameOver");
        if (div.style.display === "none") {
            div.style.display = "block"; 
        } else {
            div.style.display = "none";
        }
    }
}




const bichinho = new Mascote();
bichinho.estado();
bichinho.viver();
bichinho.iniciarCicloFome();
bichinho.iniciarCicloDisposicao(); 
bichinho.iniciarCicloSono(); 
bichinho.iniciarCicloLazer();
bichinho.iniciarCicloHumor(); 




function alimentarMaca() {
    bichinho.alimentarMaca();
}

function alimentarMacarrao() {
    bichinho.alimentarMacarrao();
}

function alimentarSorvete() {
    bichinho.alimentarSorvete();
}

function alimentarBurguer() {
    bichinho.alimentarBurguer();
}

function tomarBanho() {
    bichinho.tomarBanho();
}

function tomarDucha() {
    bichinho.tomarDucha();
}

function lavarMaos() {
    bichinho.lavarMaos();
}

function escovarDentes() {
    bichinho.escovarDentes();
}

function dormir() {
    bichinho.dormir();
}
function descansarSofa() {
    bichinho.descansarSofa();
}
function descansarCama() {
    bichinho.descansarCama();
}
function descansarCadeira() {
    bichinho.descansarCadeira();
}


function ouvirMusica() {
    bichinho.ouvirMusica();
}

function jogar() {
    bichinho.jogar();
}
function ler() {
    bichinho.ler();
}
function viajar() {
    bichinho.viajar();
}















