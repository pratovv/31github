function totalMoney(n: number): number {
   let balance = 0;
   let day = 1;
   let week = 0;

   for (let i = 1; i <= n; i++) {
       balance = balance + (week + day );
       day++;
       
       if (i % 7 === 0) {
           week++;
           day = 1;
       }
   }

   return balance;
};