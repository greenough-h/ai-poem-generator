function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "testing",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);

function poemAI() {
  let apiKey = "t0cee57ed010o387a24333e4fba6d54e";
  let prompt = "Write a short poem";
  let context =
    "You ae a famous short poem writed who enjoys creating visuals with your words. Please create a poem less than 8 lines long";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
}
