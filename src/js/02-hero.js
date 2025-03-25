import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(TextPlugin);

  const words = [
    'Fullstack Developer',
    'JavaScript Developer',
    'Frontend Developer',
    'Backend Developer',
  ];

  const hiElement = document.querySelector('.hero-hi');
  const textElement = document.querySelector('.hero-label');

  if (!hiElement || !textElement) {
    console.error('Required elements for animation not found');
    return;
  }

  gsap.from('.hero-hi', {
    y: 100,
    duration: 1,
    delay: 1,
    ease: 'power3.out',
    onComplete: () => {
      masterTl.play();
    },
  });

  const masterTl = gsap.timeline({ repeat: -1 }).pause();

  words.forEach(word => {
    const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 0.5 });
    tl.to('.hero-label', { duration: 2, text: word });
    masterTl.add(tl);
  });
});
