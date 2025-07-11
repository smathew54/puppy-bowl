// === Constants ===
const BASE = "https://fsa-puppy-bowl.herokuapp.com/api";
const COHORT = "/2506-Shawn"; // Make sure to change this!
const API = BASE + COHORT;

//2505-ftb-ct-web-pt-Shawn
// === State ===
let puppyList = [];
let selectedPuppy = []


let rsvp = [];
let guests = [];

/** Updates state with all the puppies from the API */
async function getPuppies() {
    try {
        const apiURL = API +"/players" //double check the endpoint
        console.log(apiURL)
        const response = await fetch(apiURL)
        const result = await response.json()
        const players = result.data;
        console.log(players);
        render()
    }
    catch (e) {
        console.error(e);
    }
}

async function getPuppy(id) {
    try {
        const apiURL = API + "/players/" + id;
        console.log(apiURL);
        const response = await fetch(apiURL);
        const result = await response.json();
        const individualPuppy = result.data
        console.log(individualPuppy)
    }
    catch (e) {
        console.error(e)
    }
}

//don't know if we need a third function
//async function getRsvps() {
//    try
//}

// === Components ===
function Puppy


// === Render ===
function render() {
    const $app = document.querySelector("#app");
    $app.innerHTML = `
    <h1>Puppy Party</h1>
    `
}

//getPuppy("39006")

async function main() {
    console.log("HERE WE GO");
    await getPuppies();
    render()
}

main()