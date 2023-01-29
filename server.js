const favoriteFood = process.env.FAVORITE_FOOD
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    // console.log("Microservices rock!");
    console.log(`my favorite food is ${favoriteFood}`);
    await sleep(5000);
  }
}

main();
