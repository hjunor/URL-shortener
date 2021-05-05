export function  gereneteCode(){
      let code = '';
      const length = Math.floor(Math.random() * 10 + 5);
      const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         code += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
 
   return code;
  
}
