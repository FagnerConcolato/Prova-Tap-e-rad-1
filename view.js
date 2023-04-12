class view {

    constructor(model){
      this.model = model;

    }

    template(){
        return `<p>Formulário enviado com sucesso!</p>
        `
        
        }

    templateErro(){
         return `<p>Formulário incompleto!<p>`

        }
}



