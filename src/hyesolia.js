import './mindscapeStyles.css';
import hyesoliaImg from './assets/hyesolia.jpeg';

document.body.setAttribute("id", "hyesoliaBody");
const storyImage = document.querySelector("#storyImage");
const storyContainer = document.querySelector("#storyContainer");
storyContainer.setAttribute("id", "hyesoliaStoryContainer");
storyImage.src = hyesoliaImg;