import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();


// Animate progress bars
// Animate progress bars
// Animate progress bars
const progressBars = document.querySelectorAll('.progress');

const animateProgressBars = () => {
  progressBars.forEach((progress) => {
    const targetWidth = progress.getAttribute('data-width');
    progress.style.width = targetWidth;
  });
};

// Trigger animation when skills section is in view
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgressBars();
        observer.unobserve(skillsSection); // Stop observing after animation
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(skillsSection);


const typingText = document.getElementById('typing-text');
const text = "Software Developer";
let index = 0;

function type() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (index > 0) {
    typingText.textContent = text.substring(0, index - 1);
    index--;
    setTimeout(erase, 50);
  } else {
    setTimeout(type, 500);
  }
}

type();

// Get the modal
var modal = document.getElementById("project-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal with project details
function openModal(title, description, liveLink, sourceLink) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-overview").innerText = description;
  document.getElementById("modal-live-link").href = liveLink;
  document.getElementById("modal-source-link").href = sourceLink;
  modal.style.display = "block";
}

// Function to close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Add click event to project images
document.querySelectorAll('.project-image-link').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var projectTitle = link.closest('.row').querySelector('.project-wrapper__text-title').innerText;
    var projectDescription = link.closest('.row').querySelector('.mb-4').innerText;
    var liveLink = link.closest('.row').querySelector('.cta-btn--hero').href;
    var sourceLink = link.closest('.row').querySelector('.cta-btn.text-color-main').href;
    openModal(projectTitle, projectDescription, liveLink, sourceLink);
  });
});

// Carousel Functionality

// Function to update carousel position
// Carousel Functionality
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
let currentIndex = 0;

// Function to update carousel position
function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

// Event listener for next button
nextButton.addEventListener('click', () => {
  if (currentIndex < carouselItems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first image
  }
  updateCarousel();
});

// Event listener for previous button
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = carouselItems.length - 1; // Loop to the last image
  }
  updateCarousel();
});