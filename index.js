
const txt = document.getElementById("txt");
const btn = document.getElementById("btn");
const feedback = document.getElementById("feedback");
const copyToClipboar = () => {
  navigator.clipboard
    .writeText(txt.innerText)
    .then(() => {
      console.log("this is the text !");
      feedback.innerText = "Text copied to clipboard 🎉";
    //   setTimeout(() => {
    //     feedback.innerText = "";
    //   }, 2000);
    })
    .catch((err) => {
      console.log("error occured:-", err);
    });
  console.log("working");
};
btn.addEventListener("click", copyToClipboar);
