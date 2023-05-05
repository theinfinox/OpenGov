async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




// Path: app.js

async function openPopup(id, passData) {

    var popupContainer = document.getElementById("containerD");
    popupContainer.style.display = "flex";
    await sleep(100);
    popupContainer.style.opacity = 1;
    var popup = document.getElementById(id);
    popup.style.display = "flex";
    if (id == "transactionConf") {
        document.getElementById("ConfirmBttrans").setAttribute("onclick", "transConf('" + passData + "')")
        document.getElementById("TransactID").innerHTML = "Transaction ID : " + passData;
    }
    if (id == "transfer") {
        document.getElementById("confirmTransfer").setAttribute("onclick", "transfer('" + passData + "')")

    }
    await sleep(100);
    popup.style.opacity = 1;
}
async function closePopup(id) {
    var popup = document.getElementById(id);
    popup.style.opacity = 0;
    await sleep(100);
    popup.style.display = "none";
    var popupContainer = document.getElementById("containerD");
    document.getElementById("TransactID").innerHTML = "loading...";

    popupContainer.style.opacity = 0;
    await sleep(100);
    popupContainer.style.display = "none";
}


async function test() {
    openPopup("transactionConf");
}

function closeThis(e) {
    closePopup(e)
}
var Ijo = document.getElementById("io").contentWindow
function transConf(id) {
    Ijo.transferStateReady(id)
    closePopup("transactionConf");
}

function transfer(id) {
    Ijo.transferStateOn(id);
    closePopup('transfer');
}






// window.onload = function () {
//     web3 = new Web3("https://mainnet.infura.io/v3/a43f21c30bbc4b4a87e778404f3cfda9");
//     var address = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
//     var abi = [
//         {
//             "inputs": [],
//             "stateMutability": "nonpayable",
//             "type": "constructor"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "company",
//                     "type": "address"
//                 }
//             ],
//             "name": "addCompany",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "stateGov",
//                     "type": "address"
//                 }
//             ],
//             "name": "addStateGov",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "centralGov",
//             "outputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "centralToState",
//             "outputs": [
//                 {
//                     "internalType": "address",
//                     "name": "from",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "to",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "amount",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "stateGov",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "amount",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "centralToStateTransfer",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "name": "companies",
//             "outputs": [
//                 {
//                     "internalType": "bool",
//                     "name": "",
//                     "type": "bool"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "getCentralToStateTransactions",
//             "outputs": [
//                 {
//                     "components": [
//                         {
//                             "internalType": "address",
//                             "name": "from",
//                             "type": "address"
//                         },
//                         {
//                             "internalType": "address",
//                             "name": "to",
//                             "type": "address"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "amount",
//                             "type": "uint256"
//                         }
//                     ],
//                     "internalType": "struct Funding.Transaction[]",
//                     "name": "",
//                     "type": "tuple[]"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "getStateToCompanyTransactions",
//             "outputs": [
//                 {
//                     "components": [
//                         {
//                             "internalType": "address",
//                             "name": "from",
//                             "type": "address"
//                         },
//                         {
//                             "internalType": "address",
//                             "name": "to",
//                             "type": "address"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "amount",
//                             "type": "uint256"
//                         }
//                     ],
//                     "internalType": "struct Funding.Transaction[]",
//                     "name": "",
//                     "type": "tuple[]"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "name": "stateGovs",
//             "outputs": [
//                 {
//                     "internalType": "bool",
//                     "name": "",
//                     "type": "bool"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "stateToCompany",
//             "outputs": [
//                 {
//                     "internalType": "address",
//                     "name": "from",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "to",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "amount",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "company",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "amount",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "stateToCompanyTransfer",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         }
//     ]

//     contract = new web3.eth.Contract(abi, address)

//     contract.methods.getCentralToStateTransactions().call().then((res) => {
//         console.log(res)
//     });

// }