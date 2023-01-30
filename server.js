const FAVORITE_INSTRUCTOR = process.env.NAME
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    // console.log("Microservices rock!");
    console.log(`${FAVORITE_INSTRUCTOR} rules!!`);
    console.log(`Gerald rules!!`);
    await sleep(5000);
  }
}

main();
