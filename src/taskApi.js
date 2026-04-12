const apiMoveTask = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject("Network Error") : resolve("Success");
    }, 2000);
  });
};
