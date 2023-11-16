import "./styles.css";

let givenProfile = ""; 
let profileName = "";
let profileId = "";
let profileLink = "";
let profileRepos = "";
//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
let fetchprofile = async () => {
  let fetchedData;
  await fetch(`https://api.github.com/users/${givenProfile}`,{headers: {
    'Authorization': 'Bearer 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',
    'Content-Type': 'application/json'
  },})
    .then( (response) => response.json() )
    .then ( (data) => (fetchedData = data)  )

  profileName = fetchedData.login;
  profileId = fetchedData.id;
  profileLink = fetchedData.html_url;
  profileRepos = fetchedData.public_repos;

  renderPage();


};


function renderPage(){
  document.getElementById("app").innerHTML = `
     <div>
      <h1>Github profile viewer</h1>
      <p>Pleas enter profile name: </p>
      <input/>
        <div class = "content">
          <h1 id = "name"> Name: ${profileName}</h1>
          <p id = "id"> ProfileId: ${profileId}</p>
          <p id = "repos"> ProfileRepos: ${profileRepos}</p>
          <p id = "profilelink"> ProfileLink: ${profileName}
            <a href = "${profileLink} " target = "_blank">/users/</a>
          </p>
        </div>
     </div>
  `;
}
renderPage();
function updateValue(e){
  givenProfile = e.target.value;
  fetchprofile();
}
const input = document.querySelector("input");
input.addEventListener("change", updateValue);










