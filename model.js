class model{

    constructor(botaoRadio,quantidade,texto){
      this.botaoRadio = botaoRadio;
      this.quantidade = quantidade;
      this.texto = texto;
    }

    //criar gets

    get retonarBotaoRadio(){
        return this.botaoRadio;
        }

        get retornaQuantidade(){
          return this.quantidade;
        }

        get retornaTexto(){
           return this.texto;

        }
}


