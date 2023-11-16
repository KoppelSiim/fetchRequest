import "./styles.css";
 
let givenProfile = "";
let profileName = "";
let profileId = "";
let profileLink = "";
let profileRepos = "";
//TARge22 aken
 
async function fetchProfile() {
  let fetchedData;
  await fetch(`https://api.github.com/users/${givenProfile}`, {headers: {
    'Authorization': 'Bearer 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',
    'Content-Type': 'application/json'
  },})
    .then((response) => response.json())
    .then((data) => (fetchedData = data));
  profileName = fetchedData.login ;
  profileId = fetchedData.id ;
  profileLink = fetchedData.url;
  profileRepos = fetchedData.public_repos;  
  renderPage();
  console.log(fetchedData)
}
function renderPage() {
  document.getElementById("app").innerHTML = 
  `<div>
  <h1>Github Profile Stalker</h1>
  <p>Please enter profile name: </p>
  <input />
    <div class="content">
      <h1 id="name">Name: ${profileName}</h1>
      <p id="id">Id: ${profileId}</p>
      <p id="repos">Repositories: ${profileRepos}</p>
      <p id="profileurl">Link: ${profileLink}
      <a href="${profileName}" target="_blank">/users/</a>
      </p>
    </div>
</div>`};
renderPage();
function updateValue(e) {
  givenProfile = e.target.value;
  fetchProfile();
}
const input = document.querySelector("input");
input.addEventListener("change", updateValue);