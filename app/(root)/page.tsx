const delay = (ms:number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const Homepage = async() => {
  await delay(2000);
  return <div>Prostore...</div>;
};

export default Homepage;
