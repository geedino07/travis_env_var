const favoriteFood = process.env.FAVORITE_FOOD
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    // console.log("Microservices rock!");
    console.log(`The food we love most at home is ${favoriteFood}`);
    await sleep(5000);
  }
}

main();
