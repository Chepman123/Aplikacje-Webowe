import readline from 'node:readline';

   const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

   let a:number=0;
   let b:number=0;

   const numbers:number[]=[2,4,6,8,10];
   function Addition(c:number,d:number):number{
    return c+d;
   }
   function Multiplication(c:number,d:number):number{
    return c*d;
   }
   function Division(c:number,d:number):number|null{
    if(d!=0)return c/d;

    return null;
   }
   rl.question(`1 number:`, num => {
  a=Number(num);
  rl.question(`2 number:`, num => {
  b=Number(num);
  rl.close();
  for(let num of numbers){
      console.log(Addition(a,num));
      console.log(Multiplication(a,num));
      console.log(Division(a,num));
   }
});
});

  
