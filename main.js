var reasons = [
  "Shrenik Shah (Father)",
  "Jenish Shah (Mother)",
  "Karan Shah (Me)",
  "Saloni Shah (Sister)",
  "Sanjna Shah (Sister)",
  "Bharthi Shah (Grandmother)",
  "Kirit Shah (Grandfather)"

];
var images = [
  "https://us.123rf.com/450wm/ylivdesign/ylivdesign1605/ylivdesign160500244/56085314-dad-icon-in-cartoon-style-on-a-white-background.jpg?ver=6",
  "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-mother-s-day-baby-smiling-expression-image_1157402.jpg",
  "https://image.similarpng.com/very-thumbnail/2020/07/Happy-boy-cartoon-on-transparent-background-PNG.png",
  "https://previews.123rf.com/images/unitonevector/unitonevector1904/unitonevector190403135/123089242-little-girl-wears-dress-flat-vector-illustration-smiling-fathers-princess-daughter-sister-cartoon-ch.jpg",
  "https://c8.alamy.com/comp/2F5AKCJ/nasty-girl-icon-cartoon-of-nasty-girl-vector-icon-for-web-design-isolated-on-white-background-2F5AKCJ.jpg",
  "https://thumbs.dreamstime.com/z/flat-drawing-smiling-grandmother-cute-granny-glasses-friendly-cartoon-character-isolated-vector-178173177.jpg",
  "https://image.shutterstock.com/image-vector/cute-grandfather-cartoon-260nw-726215185.jpg",

];

var i = 0;
function nextslide() {
  document.getElementById("reasontext").innerHTML = reasons[i];
  document.getElementById("album").src = images[i];
  i++;
  document.getElementById("audio").play();

}