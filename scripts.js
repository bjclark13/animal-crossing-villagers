console.log(`We have ${villagers.length} villagers!`);

const villagersCount = document.querySelector(".villagers-count");
console.log(villagersCount);
villagersCount.innerText = villagers.length;

const villager2 = villagers[1];
console.log(villager2);

console.log(document.getElementById("villager-2"));

for (let index = 0; index < villagers.length; index++) {
    const element = villagers[index];
    console.log(element.name["name-USen"]);

    // Get Name
    const villagerName = document.querySelector('#villager-' + (index + 1)  + ' .villager-name');
    villagerName.innerText = element.name["name-USen"];

    // Get Image
    const villagerImage = document.querySelector('#villager-' + (index + 1)  + ' .villager-image');
    villagerImage.setAttribute('src', element.image_uri);

    // Get Personality
    const personality = document.querySelector('#villager-' + (index + 1)  + ' .personality');
    personality.innerText = element.personality; // #villager-1 .personality

    // Get Gender
    const gender = document.querySelector('#villager-' + (index + 1)  + ' .gender');
    gender.innerText = element.gender;

    // Get Catch Phrase
    const catchPhrase = document.querySelector('#villager-' + (index + 1)  + ' .catch-phrase');
    catchPhrase.innerText = element["catch-phrase"];

    const villagerBio = document.querySelector(`#villager-${index + 1}`);
    villagerBio.style.backgroundColor = element["bubble-color"];
    villagerBio.style.color = element["text-color"];

    const button = document.querySelector(`#villager-${index + 1} button`);
    button.style.backgroundColor = element['text-color'];
    button.style.color = element["bubble-color"];

}
