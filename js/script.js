function startTimer(duration, display) {

    var timer = duration, minutes, seconds;
    parar = setInterval(function () {
        
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < -1) {
            timer = duration;
        } else if (timer === -1) {
            clearInterval(parar)
            var removeButton = document.querySelector('.button-start')
            var tradeButton = document.getElementById('button-trade')
            var tradepage = document.querySelector('.challenges')
            tradepage.innerHTML = ` <div class="earnXP">
                                    <h1>Ganhe 400 xp</h1>
                                    </div>
                                    <div class="line4-center">
                                    <div class="line4"></div></div>
                                    <img class="peso" src="images/Peso.png" alt="strong">
                                    <div class="exercise">
                                    <h1>Exercite-se</h1>
                                    <p>É agora Victor, bora lá meu parça. <br>
                                    Caminhe por 3 minutos e estique suas pernas <br>
                                    pra você ficar saudável.</p>
                                    <div class="buttons">
                                    <button onclick="buttonFailed()" class="button-failed">Falhei</button>
                                    <button onclick="buttonSuccessful()" class="button-successful">Completei</button>
                                    </div>
                                    </div>`
            
            removeButton.remove()
            tradeButton.innerHTML = `<div class="button-finish">
                                        <button id="botao3" type="submit"  > Ciclo encerrado <img src="images/check_circle.png" alt=""></button>
                                    </div> `                 
        }
    }, 100);
}


function buttonSuccessful(){
    var challFinish = document.getElementById('chall')
    var lineGreen = document.getElementById('line')
    var challenges2 = document.querySelector('.challenges')
    

    lineGreen.innerHTML = ` <div id="line-green"></div> `  
    //for(i= 0; i < 2; i++) {
     //   challFinish.innerHTML = i < 10 ? "0" + i : i;
   // }

    challenges2.innerHTML =`<div class="earnXP">
    <h1>Parabéns!</h1>
    </div>
    <div class="line4-center">
    <div class="line4"></div></div>
    <img class="peso" src="images/emojiTongue.png" alt="strong">
    <div class="exercise">
    <h1>Você conseguiu!</h1>
    <p>Agora é só comemorar e recomeçar<br>para ganhar mais xp!<br></p> 
    </div>`
    
    var tradeButton = document.querySelector('.button-finish')
    tradeButton.remove()

    var botaoReset = document.getElementById('button-trade')
    botaoReset.innerHTML= `<div class="button-start">
    <button  type="submit" onclick="iniciaContagem(), anotherCicle()" id="botao">Começar outro ciclo<img src="images/arrow.png" alt=""></button>
    </div>`

    challenges2.remove()
    var challegens2 = document.getElementById('challenges-trade')
    challegens2.innerHTML = `<div class="challenges">
    <h1>Inicie um ciclo <br> para receber desafios</h1>
    <div class="uparrow">
    <img  src="images/uparrow.png" alt="seta"></div>
    <h2>Avance de level completando <br> os desafios.</h2>
    </div>`
   
}





function iniciaContagem() {
        var duration = 60 * 1 //Conversão para segundos
        var display = document.querySelector('#timer') //Elemento para exibir o timer
        
        trocarbotao()
    startTimer(duration, display) //inicia a função
    
}



function trocarbotao() {
    var botao2 = document.getElementById('botao')
    var botao = document.querySelector('.button-start')
    botao2.remove()
    botao.innerHTML=`  <button class="botao2" "type="submit" onclick="pararContagem()" id="botao"> Abandonar ciclo <img src="images/X.png" alt=""></button> `

    }

function pararContagem() {
    clearInterval(parar)

    var botao2 = document.getElementById('botao')
    var botao = document.querySelector('.button-start')
    botao2.remove()
    botao.innerHTML=` <button class="botao" "type="submit" onclick="iniciaContagem()" id="botao">Reiniciar um ciclo<img src="images/arrow.png" alt=""></button> `
}


    

