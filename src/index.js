function generatePoem(event) {
  event.preventDefault();

  let apiKey = "t0cee57ed010o387a24333e4fba6d54e";
  let topic = document.querySelector(".poem-topic");
  let prompt = `Write a short poem about ${topic.value}`;
  let context =
    "You ae a famous short poem writer who enjoys creating visuals with your words. Please create a poem less than 8 lines long in basic HTML. Each line in the poem should have its own line in the HTML. Please also sign the poem as `<strong> SheCodes AI </strong>` at the end of the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemSpace = document.querySelector(".poem");
  poemSpace.classList.remove("hidden");

  new Typewriter("#poem", {
    strings: `⏳ Generating Poem about ${topic.value}`,
    autoStart: true,
    delay: 1,
    cursor: "",
    loop: true,
  });

  axios.get(apiUrl).then(displayPoem);
}

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
