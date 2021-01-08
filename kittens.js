let filenames = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg"];

let imgs = document.getElementsByTagName("img");

for (imgElt of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = "kittens/" + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
}
