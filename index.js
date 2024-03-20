import { gsap } from 'gsap';

class ForgingFireTextEffects {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    if (!this.element) {
      console.error('Element not found');
      return;
    }
    this.animate();
  }

  animate() {
    gsap.to(this.element, {
      duration: 1,
      color: "orange",
      textShadow: "0 0 6px red, 0 0 10px yellow, 0 0 2px black",
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  }
}

export default ForgingFireTextEffects;
