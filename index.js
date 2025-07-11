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
function PuppyListItem(roster) {
    const $li = document.createElement("li");

    if (roster.id === selectedPuppy?.id) {
        $li.classList.add("selected");
    }



}

//addParty
const addParty = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    console.log(e.target[0]);
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);
  
    const isoDate = new Date(e.target[2].value).toISOString()
  
    const obj = {
      name: e.target[0].value,
      description: e.target[1].value,
      date: isoDate,
      location: e.target[3].value,
    };
  
    console.log(obj);
    try {
      const response = await fetch(API + "/events",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
  
      console.log(response);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  ;


//add puppy to the list
const setForm = () => {
    const $form = document.createElement("form");
    $form.innerHTML = `
        <div class="form-group">
          <label for="enterPartyName">Name</label>
          <input
            type="text"
            class="form-control"
            id="enterPartyName"
            aria-describedby="emailHelp"
            placeholder="Enter Party Name"
          />
        </div>
        <div class="form-group">
          <label for="dogBreed">Breed</label>
          <input
            type="test"
            class="form-control"
            id="dogBreed"
            placeholder="Breed"
          />
        </div>
        <div class="form-group">
          <label for="status">Status</label>
          <input
            type="test"
            class="form-control"
            id="status"
            placeholder="Status"
          />
        </div>

        </div>
        <div class="form-group">
          <label for="imageURL">Image URL</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="imageURL"
          />
        </div>
  
        <button type="submit" class="btn btn-primary">Submit</button>
      `;
    $form.style.width = "75%";
    $form.style.margin = "0 auto";
  
    $form.addEventListener("submit", addParty)
  
    return $form;
  };

// === Render ===
function render() {
    const $app = document.querySelector("#app");
    $app.innerHTML = `
    <h1>Puppy Party</h1>
    <main>
        <section>
          <h2>Puppy Player Options</h2>
          <Puppies></Puppies>
        </section>
        <section>
          <h2>Invite a new Puppy</h2>
          <PuppyForm></PuppyForm>
        <section>
    </main>
    `;

    $app.querySelector("PuppyForm").replaceWith(setForm());
}

//getPuppy("39006")

async function main() {
    console.log("HERE WE GO");
    await getPuppies();
    render()
}

main()