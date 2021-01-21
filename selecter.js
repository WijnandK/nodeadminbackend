
module.exports = (DATA) => {
  const cr = [...DATA];
  cr.shift();
  cr.shift();
  cr.shift();
  cr.forEach((l) => {
    l.shift();
    l.shift();
  });

  let empty = [];

  for (let i = 0; i < cr.length; i++) {
    if (cr[i][0] === "" && cr[i][1] === "" && cr[i][11] === "") {
      empty.push(i - 1);
   
    }
  }

  const list = [];
  empty.unshift(0);
  for (let i = 0; i < empty.length - 1; i++) {
    let c = empty[i];
    let h = empty[i + 1];
    let r = h - c;
    list.push(r);
  }
  const final = [];
  list[0] = list[0] + 1;

  list.forEach((l) => {
    final.push(cr.splice(0, l));
  });
  final[0].unshift(["", "", "", "", "", "", "", "", "", "", "", ""]);
  final.forEach((row) => {
    row.shift();
  });
  const lastone = [...final];
  const b = {};
    lastone.map((index) => {
    b[index[0][0]] = [...index];
    return [...lastone]
  });
  
 const STARTLIST = []
 const getCarList = (b) => {
  for (const [key] of Object.entries(b)) {

      STARTLIST.push(parseInt(key));
    }
}
  getCarList(b)
  
return {cars: b, startlist: STARTLIST};
};


