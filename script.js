
     window.ethereum.enable();
     const provider = new ethers.providers.Web3Provider (
         web3.currentProvider,
         "ropsten"
     );
     const MoodContractAddress = "0x0660D5498b9DF2638C09865Ad1B3e5983b790D4E";
     const MoodContractABI = [
 {
     "inputs": [
         {
             "internalType": "string",
             "name": "_mood",
             "type": "string"
         }
     ],
     "name": "setMood",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
 },
 {
     "inputs": [],
     "name": "getMood",
     "outputs": [
         {
             "internalType": "string",
             "name": "",
             "type": "string"
         }
     ],
     "stateMutability": "view",
     "type": "function"
 }
];
     let MoodContract;
     let signer;

     provider.listAccounts().then(function(accounts) {
         signer = provider.getSigner(accounts[0]);
         MoodContract = new ethers.Contract(
             MoodContractAddress,
             MoodContractABI,
             signer
         )
     });
     async function getMood() {
     const getMoodPromise = MoodContract.getMood();
     const Mood = await getMoodPromise;
     console.log(Mood);
    }

    async function setMood() {
    const mood = document.getElementById("mood").value;
    const setMoodPromise = MoodContract.setMood(mood);
    await setMoodPromise;
   }