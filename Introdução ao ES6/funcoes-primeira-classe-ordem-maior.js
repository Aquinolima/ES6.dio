(() => {
  const getName = () => {
    return "Thiago Aquino A. de Lima";
  };

  const log = value => {
    console.log(value);
  };

  const main = fn => {
    return () => log(fn());
  };

  const logName = main(getName);

  logName();
})();
