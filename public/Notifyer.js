const Nofifyer ={
  async init(){
    const permission =await Notification.requestPermission();
    if(permission!=="granted"){
      throw new Error("Permission negada");
    }

  },
  notify({title,body,icon}){
      new Notification(title,{
        body,
        icon
      })
  }
}
export {Nofifyer}