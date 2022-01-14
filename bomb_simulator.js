
// price vars
var priceUSD = 0;
var volumeUSD = 0;
var priceBrl = 0;
var volumeBrl = 0;
var priceChange = 0;

// Main Vars 
// Chests HP 
let chestWoodHp = 80;
let chestMetalHp = 170;
let chestGoldHp = 800;
let chestCrystalHp = 1300;
let chestTreasureHp = 2000;

// Chests Rewards
let chestWoodRw = 0.01425;
let chestMetalRw = 0.0325;
let chestGoldRw = 0.1625;
let chestCrystalRw = 0.325;
let chestTreasureRw = 1.18;

let averageProfitBadHero = 0.17;
let averageProfitPerMap = 0.52;

let heroList = [];
let fullStats = [];

const skinsImageList = ["cowboy", "witch", "vampire", "knight", "frog","ninja", "flog2"];
const rarityList = ["common", "rare", "super rare", "epic", "legend", "super legend"];


function updateSimulator(){
    // get vars together
    var hero = 156
    var customName = "naosei"
    var rarity = "comum"
    var skin = "frog"
    var power = 1
    var speed = 1
    var stamina = 1
    var bombnum = 1
    var bombrange = 1
    var energy = 0
    var mana = 0

    // Lets calculate the time this hero needs to fully recover
    var timeToRecover;
    // if (energy == 1) {
    //     timeToRecover = stamina * 50;
    // }else{
    //     timeToRecover = stamina * 100;
    // }

    // Lets calculate how many hits it needs for every chest
    var hitsWood = chestWoodHp / power;
    var hitsMetal = chestMetalHp / power;
    var hitsGold = chestGoldHp / power;
    var hitsCrystal = chestCrystalHp / power;
    var hitsTreasure = chestTreasureHp / power;

    // Lets calculate the profitability
    // we have a base calculation for a basic char
    // we just sum every talent, and subtract 30% if mana is enabled
    // then we calculate it against the time to recover up to 24hours
    var totalTalents = power + speed + stamina + bombnum + bombrange;
    
    totalTalents = (totalTalents * averageProfitBadHero) / 5;
    
    var totalProfit = parseFloat(totalTalents.toFixed(3));
    
    if (mana == 1) {totalProfit += totalProfit * 0.2;}
    
    if (energy == 1) {totalProfit = totalProfit * 2;}
    
    var maxProfit = totalProfit + (totalProfit * 0.2);
    
    maxProfit = parseFloat(maxProfit.toFixed(3));
    
    var minProfit = totalProfit - (totalProfit * 0.4);
    
    minProfit = parseFloat(minProfit.toFixed(3));
    
    var avgProfit = avgProfit = (maxProfit + minProfit) / 2;


    // now lets update the local database
    // firstly we search if this is in the list
    console.log(heroList);
    var index = heroList.findIndex((obj => obj.hero == hero));
    var heroObj = heroList[index];
    heroObj = {
        skin: skin,
        customName: customName,
        rarity: rarity,
        power: power,
        speed: speed,
        stamina: stamina,
        bombnum: bombnum,
        bombrange: bombrange,
        energy: energy,
        mana: mana,
        timeToRecover: timeToRecover,
        hitsWood: roundDown(hitsWood),
        hitsMetal: roundDown(hitsMetal),
        hitsGold: roundDown(hitsGold),
        hitsCrystal: roundDown(hitsCrystal),
        hitsTreasure: roundDown(hitsTreasure),
        totalProfit: totalProfit,
        maxProfit: maxProfit,
        minProfit: minProfit,
        avgProfit: avgProfit
    }

    console.log(heroObj)
    
    // now we update the statistics for the current Char
    //calculateStats("current");

    // and finally we update the stats for every char in the list
    //calculateStats("list");
    
    // for user preference, we will save this in the cookies
    //updateDatabaseCookie();
}	


updateSimulator()


function roundDown(n){
    return  Math.floor(n); 
}