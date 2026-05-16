let video = document.getElementById("mainVideo");
let title = document.getElementById('title');
let description = document.getElementById('description')

let data=[
    {
    video: "videos/snake.mp4",
    title: "Giant Snake",
    desc: "A massive reptile that moves silently and strikes with deadly precision."
  },
  {
    video: "videos/raccon.mp4",
    title: "Raccoon",
    desc: "A clever and curious animal known for its intelligence and adaptability."
  },
  {
    video: "videos/turtle.mp4",
    title: "Turtle",
    desc: "A slow yet resilient creature, symbol of patience and long life."
  },
  {
    video: "videos/dinasaur.mp4",
    title: "Dinosaur",
    desc: "Ancient giants that once ruled the Earth millions of years ago."
  },
  {
    video: "videos/elephant.mp4",
    title: "Elephant",
    desc: "A gentle giant with strong memory and deep emotional intelligence."
  },
  {
    video: "videos/crane.mp4",
    title: "Japanese Crane",
    desc: "A long-neck white japanese bird."
  }
]
function changeVideo(index){

  // fade out
  video.style.opacity = 0;

  let newVideo = data[index].video;

  // wait for video to load
  video.onloadeddata = () => {
    video.style.opacity = 1; // show after loaded
  };

  // change video
  video.src = newVideo;

  // update text immediately
  title.innerText = data[index].title;
  desc.innerText = data[index].desc;

}