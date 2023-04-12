class controller{

 constructor() {
   
    this.bind();
    this.init(); 
 }

 bind(){
        document.querySelector("#botaoMenos").addEventListener('click', ()=>{
        this.funçãoDiminuir();
       
         })

         document.querySelector('#botaoMais').addEventListener('click', ()=>{
            this.funçãoSomar();
         })

         document.querySelector("#botaoEnviar").addEventListener('click', () =>{
           this.enviar()
         })
        this.verificacaoInput(); 
         
 }
funçãoDiminuir(){
    let valor = parseInt(document.querySelector('#inputQuantidade').value);
    valor-=1;
    if(valor>0){
        document.querySelector("#botaoEnviar").disabled = false;
        document.querySelector('#inputQuantidade').value = valor;
        document.querySelector("#botaoEnviar").classList.remove("cinza") 
    }else{
        document.querySelector("#botaoEnviar").disabled = true;
        document.querySelector('#inputQuantidade').value = 0; 
        document.querySelector("#botaoEnviar").classList.add("cinza");  
        
    }
    this.limpar()
   
    
}

funçãoSomar(){
    let valor = parseInt(document.querySelector('#inputQuantidade').value);
    valor+=1;
    if(valor<0){
        document.querySelector("#botaoEnviar").disabled = true;
        document.querySelector("#botaoEnviar").classList.add("cinza") 
    }else{
        document.querySelector("#botaoEnviar").classList.remove("cinza") 
        document.querySelector("#botaoEnviar").disabled = false;
    }
    document.querySelector('#inputQuantidade').value = valor;
    this.limpar();

}

init(){
    document.querySelector('#inputQuantidade').value = 0;
    document.querySelector('.input_caixaTexto').value = '';
    document.querySelector("#botaoEnviar").disabled = false;
    document.querySelector("#botaoEnviar").classList.add("cinza")
    document.querySelector("#botaoMenos").classList.add("cinza") 
    document.querySelectorAll(".BotaoRadio").checked = false; 
  
const BotaoRadio = document.getElementsByName("nomeRadio")
for(let i = 0; i<BotaoRadio.length; i++){
    BotaoRadio[i].checked = false;
}

}

enviar(){
   
    const reactSelecionado = document.getElementById('react').checked;
    const vueSelecionado = document.getElementById('Vue').checked;
    const angularSelecionado = document.getElementById('angular').checked;

    const algumRadioFoiSelecionado = reactSelecionado || vueSelecionado || angularSelecionado; 

    const teste2 = document.querySelector('.BotaoRadio').checked;
    let botaoRadio = document.querySelector('.BotaoRadio').value
    let quantidade = document.querySelector("#inputQuantidade").value
    let texto = document.querySelector('#mensagem').value

    let Model =  new model(botaoRadio,quantidade,texto);


    if(+Model.quantidade !== 0 && algumRadioFoiSelecionado === true){
        let View = new view(Model);
        document.querySelector(".formularioEnviado").innerHTML = View.template();

        const a = document.querySelectorAll('.BotaoRadio');  
        
        a.forEach(radio => {
            radio.classList.remove("inputFormularioErro");
        });
    }
    
     if(+Model.quantidade === 0 || !algumRadioFoiSelecionado){
        let View = new view(Model);
        document.querySelector(".formularioErro").innerHTML = View.templateErro();
        document.querySelector("#inputQuantidade").classList.add("inputFormularioErro");
        
        const a = document.querySelectorAll('.BotaoRadio');  
        
        a.forEach(radio => {
            radio.classList.add("inputFormularioErro");
        });
     }else if(+Model.quantidade !== 0 ||!algumRadioFoiSelecionado ){
         
        document.querySelector(".formularioErro").innerHTML = View.templateErro();
        document.querySelector("#inputQuantidade").classList.add("inputFormularioErro");
        const a = document.querySelectorAll('.BotaoRadio');  
        
        a.forEach(radio => {
            radio.classList.add("inputFormularioErro");
        });


     }

     this.init(); 
    }


limpar(){

    document.querySelector('.formularioErro').innerHTML = '';    
    document.querySelector('.formularioEnviado').innerHTML = '';    
}

verificacaoInput(){
    let valorInput = document.getElementById("inputQuantidade") 
    valorInput.addEventListener('input', function() {
       
        
     if(this.value == 0) {
          
          document.querySelector("#botaoEnviar").classList.add("cinza") 
          document.querySelector('#botaoMenos').disabled = true;
          document.querySelector('#botaoMenos').classList.add("cinza");
     }
     limpar()
    });
   
   }


}