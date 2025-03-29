/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}

const articleHearts = document.querySelectorAll(".like");

function mimicServerCall(url = "http://mimicServer.example.com") {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      let isRandomFailure = Math.random() < 0.2; 
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

articleHearts.forEach((heart) => {
  heart.addEventListener("click", () => {

    mimicServerCall()
      .then(() => {

        heart.classList.toggle("activated-heart");
      })
      .catch((error) => {
        
        alert(error);
      });
  });
});
