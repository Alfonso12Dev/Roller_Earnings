const secFullDay = 86400;

console.log("Javascript cargado");

function blockAmount() {
    //--> Valores por defecto conocidos en la actualidad (14/12/2024)
    switch (document.getElementById("block-type").selectedIndex) {

        //BTC
        case 0:
        document.getElementById("block-reward").value = 22000;
        break;

        //Doge
        case 1: 
        document.getElementById("block-reward").value = 44;
        break;

        //ETH
        case 2:
        document.getElementById("block-reward").value = 0.005;
        break;

        //BNB
        case 3:
        document.getElementById("block-reward").value = 0.035;
        break;

        //Polygon
        case 4: 
        document.getElementById("block-reward").value = 30;
        break;

        //SOLANA
        case 5: 
        document.getElementById("block-reward").value = 0.11;
        break;

        //TRX
        case 6:
        document.getElementById("block-reward").value = 73;
        break;

        //XRP
        case 7:
        document.getElementById("block-reward").value = 12;
        break;

       //RLT
       default:
       document.getElementById("block-reward").value = 30;
        break;
    }
}

function showHashpowerHelp() {
    var x = document.querySelector("body > div.row.no-gutters.hashinput > div > div:nth-child(1) > img");
    if (x.classList.contains("hide")) {
        x.classList.remove("hide");
    } else {
        x.classList.add("hide");
    }
}

function supportMeToggle() {
    var x = document.querySelector("body > div.supportMe");
    if (x.classList.contains("hidden")) {
        x.classList.add("animate__animate", "animate__fadeInLeft");
        x.classList.remove("hidden");
        console.log("revealed SupportMe")
        // x.classList.add("animate__animated", "animate__bounceOutLeft"); 
    } else {
        x.classList.add("hidden");
        console.log("Hide SupportMe")
    }
}

function calculateGoalPower() {
    console.log("Calculate Begin");
    let netpower = parseFloat(document.getElementById("network-power").value);
    let goalpower = parseFloat(document.getElementById("goal-power").value);
    let blockreward = parseFloat(document.getElementById("block-reward").value);

    switch (document.getElementById("network-power-selector").selectedIndex) {
        case 0:
            netpower *= 1000000000;
            console.log("Poder de Red en GH/S" + netpower);
            break;
        case 1:
            netpower *= 1000000000000;
            console.log("Poder de Red en PH/S " + netpower);
            break;
        case 2:
            netpower *= 1000000000000000;
            console.log("Poder de Red en EH/S " + netpower);
            break;

        default:
            netpower *= 1000000000000000000000;
            console.log("Poder de Red en ZH/S " + netpower);
            break;
    }

    switch (document.getElementById("goal-power-selector").selectedIndex) {
        case 0:
            //GH/s
            goalpower *= 1000000000;
            console.log("goalpower after ghs conversion: " + goalpower);
            break;
        case 1:
            //TH/s
            goalpower *= 1000000000000;
            console.log("goalpower after ths conversion: " + goalpower);
            break;
        case 2:
            //PH/s
            goalpower *= 1000000000000000;
            console.log("goalpwer after phs conversion: " + goalpower);
            break;

        case 3:
            //EH/s
            goalpower *= 1000000000000000000;
            console.log("goalpwer after ehs conversion: " + goalpower);

            break;
        default:
            //ZH/s
            goalpower *= 1000000000000000000000;
            console.log("goalpwer after ehs conversion: " + goalpower);
            break;
    }

    let exp_reward = blockreward * (goalpower / netpower);

    //All timers are now the same 2021-04-19
    let blockInput = parseFloat(document.getElementById("block-timer").value);
    const BlockTimer = blockInput * 60;
    const dailyBlocks = secFullDay / BlockTimer;

    switch (document.getElementById("block-type").selectedIndex) {
        case 0:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(4) + " Satoshi";
            var btcResult = (exp_reward * dailyBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = btcResult + " Satoshi";
            document.getElementById("weekly").innerHTML = (btcResult * 7).toFixed(4) + " Satoshi";
            document.getElementById("monthly").innerHTML = (btcResult * 30).toFixed(4) + " Satoshi";
            break;
        case 1:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(4) + " DOGE";
            var dogeResult = (exp_reward * dailyBlocks).toFixed(6);
            document.getElementById("daily").innerHTML = dogeResult + " DOGE";
            document.getElementById("weekly").innerHTML = (dogeResult * 7).toFixed(4) + " DOGE";
            document.getElementById("monthly").innerHTML = (dogeResult * 30).toFixed(4) + " DOGE";
            break;
        case 2:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " Ethereum";
            var ethResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = ethResult + " Ethereum";
            document.getElementById("weekly").innerHTML = (ethResult * 7).toFixed(8) + " Ethereum";
            document.getElementById("monthly").innerHTML = (ethResult * 30).toFixed(8) + " Ethereum";
            break;
        case 3:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " BNB";
            var bnbResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = bnbResult + " BNB";
            document.getElementById("weekly").innerHTML = (bnbResult * 7).toFixed(8) + " BNB";
            document.getElementById("monthly").innerHTML = (bnbResult * 30).toFixed(8) + " BNB";
            break;
        case 4:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " MATIC";
            var maticResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = maticResult + " MATIC";
            document.getElementById("weekly").innerHTML = (maticResult * 7).toFixed(8) + " MATIC";
            document.getElementById("monthly").innerHTML = (maticResult * 30).toFixed(8) + " MATIC";
            break;
        case 5:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " SOL";
            var solResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = solResult + " SOL";
            document.getElementById("weekly").innerHTML = (solResult * 7).toFixed(8) + " SOL";
            document.getElementById("monthly").innerHTML = (solResult * 30).toFixed(8) + " SOL";
            break;
        case 6: 
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " RLT";
            var solResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = solResult + " RLT";
            document.getElementById("weekly").innerHTML = (solResult * 7).toFixed(8) + " RLT";
            document.getElementById("monthly").innerHTML = (solResult * 30).toFixed(8) + " RLT";
            break;
    
        case 7:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " TRX";
            var rltResult = (exp_reward * dailyBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = rltResult + " TRX";
            document.getElementById("weekly").innerHTML = (rltResult * 7).toFixed(4) + " TRX";
            document.getElementById("monthly").innerHTML = (rltResult * 30).toFixed(4) + " TRX";
            break;

        case 8:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " XRP";
            var rltResult = (exp_reward * dailyBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = rltResult + " XRP";
            document.getElementById("weekly").innerHTML = (rltResult * 7).toFixed(4) + " XRP";
            document.getElementById("monthly").innerHTML = (rltResult * 30).toFixed(4) + " XRP";
            break;
        default:
            alert("Ha ocurrido un error inesperado");
            break;
    }
}

// Arc.io Div appender

// TESTING

function parseInput() {
    const inputText = document.getElementById('inputBox').value;
    const lines = inputText.trim().split('\n');
    const data = [];
    
    lines.forEach(line => {
        const segments = line.trim().split(/\s+/);
        if (segments.length >= 3) {
            const coin = segments[0].toUpperCase();
            const value = parseFloat(segments[segments.length - 2]);
            if (!isNaN(value)) {
                data.push({ coin, value });
            }
        }
    });

    console.log(data);

}
