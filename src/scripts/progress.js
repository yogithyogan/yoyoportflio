// Animate progress bars
const progressBars = document.querySelectorAll('.progress');

const animateProgressBars = () => {
  progressBars.forEach((progress) => {
    const targetWidth = progress.style.width;
    progress.style.width = '0'; // Reset width for animation
    setTimeout(() => {
      progress.style.width = targetWidth;
    }, 100);
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