import {Nofifyer} from "./Notifyer.js";
const App ={
  async start(){
    try {
      await Nofifyer.init();
      Nofifyer.notify({title:"ola",body:"Criar conteudo"})
    } catch (error) {
      console.log(error.message);
      
    }
  }
}
export {App};