module.exports = (C) => {
  let carz = C
  let refine = {}
   for (let CAR in carz) {
           let count = [];
            // COUNT SPLICE INDEXES

            for (let i = 0; i < carz[CAR].length; i++) {
      if (carz[CAR][i][1].includes("Tota")) {
        count.push(i)
       
      }
    }

          
        count.unshift(0);
        let list = [];

      for (let i = 0; i < count.length - 1; i++) {
      let c = count[i];
      let b = count[i + 1];
      let r = b - c;
      list.push(r);
    }
      
        
          const final = [];
    
    list[0] = list[0] + 1;
    list.forEach((l, i) => {
    final.push(carz[CAR].splice(0, l));

    });

    refine[CAR] = final
     
      }
    
     return refine
}