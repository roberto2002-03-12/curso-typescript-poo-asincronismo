(async () => {
  function delay (time: number) {
    //problema
    //const promise = new Promise((resolve)
    //no se le esta declarando el tipo de valor que retornara promise
    //para declararle el tipo se utiliza <>
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  };
  //result sale como unkown y no me deja colocarle el tipo
  //hasta que promise se le haya declarado su tipo
  //una vez declarado ahora ya le puedo declarar el tipo a result
  const result: boolean = await delay(5000);
  console.log(result);
})();