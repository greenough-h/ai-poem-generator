function generatePoem(event) {
  event.preventDefault();

  let apiKey = "t0cee57ed010o387a24333e4fba6d54e";
  let topic = document.querySelector(".poem-topic");
  let prompt = `Write a short poem about ${topic.value}`;
  let context =
    "You ae a famous short poem writed who enjoys creating visuals with your words. Please create a poem less than 8 lines long in basic HTML";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

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
