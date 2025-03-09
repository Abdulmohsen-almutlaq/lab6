const initLikes = 2400;
const initdisLikes = 120;
let likesCount = initLikes;
let disLikesCount = initdisLikes;

const likebtn = document.getElementById("likebtn");
const disLikes = document.getElementById("dislikebtn");

const commentbox = document.getElementById("commentbox");

const submit = document.getElementById("submit");
const clear = document.getElementById("clear");

const commentsection = document.getElementById("commentsection");

likebtn.innerText = "\u{1F44D}" + likesCount;
disLikes.innerText = "\u{1F44E}" + disLikesCount;

likebtn.addEventListener("click", () => {
  likesCount++;
  likebtn.innerText = "\u{1F44D}" + likesCount;
  setCookie();
  likebtn.disabled = true;
  disLikes.disabled = true;
});
disLikes.addEventListener("click", () => {
  disLikesCount++;
  disLikes.innerText = "\u{1F44E}" + disLikesCount;
  setCookie();
  likebtn.disabled = true;
  disLikes.disabled = true;
});

//setCookie();
function setCookie() {
  const expiresOn = new Date(Date.now() + 2 * 60 * 1000);
  const cookie = "voted=true; path=/;expires=" + expiresOn.toUTCString();
  document.cookie = cookie;
}
clear.addEventListener("click", () => {
  commentbox.value = "";
});

document.addEventListener("DOMContentLoaded", (event) => {
  if (document.cookie.includes("voted=true")) {
    likebtn.disabled = true;
    disLikes.disabled = true;
    submit.disabled = true;
  }
}); 
clear.addEventListener("click", () => {
    commentbox.value = "";
    document.cookie = "voted=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    likebtn.disabled = false;
    disLikes.disabled = false;
    submit.disabled = false;
});

commentbox.addEventListener("input", () => {
    if (commentbox.value.length > 0) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
});

submit.addEventListener("click", () => {
    const comment = document.createElement("p");
    comment.innerText += "UserComment:"+commentbox.value+"\n";
    commentsection.appendChild(comment);
    commentbox.value = "";
    submit.disabled = true;
});
