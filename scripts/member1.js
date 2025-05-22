document.addEventListener('DOMContentLoaded', function() {
    gsap.to("#greeting", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    });
    
    gsap.to("#name", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out"
    });
    gsap.to("#title", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out"
    });
    
    gsap.to("#subtitle", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "power2.out"
    });

    gsap.to("#badges", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 1,
        ease: "power2.out"
    });

    gsap.to("#tech-title", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 1.2,
      ease: "power2.out"
  });

  gsap.to("#tech-underline", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 1.4,
      ease: "power2.out"
  });

  // Tech icons animation - staggered from right to left
  const techIcons = document.querySelectorAll('.tech-icon');
  gsap.to(techIcons, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      delay: 1.6,
      stagger: {
          amount: 1.2,
          from: "end", // Start from the last element (right side)
          grid: [5, 5], // 4x4 grid
          axis: "x" // Stagger along x-axis (left to right)
      },
      ease: "power2.out"
  });

    // Animate the blob
    const blob = document.querySelector('.blob');
    gsap.to(blob, {
        x: '+=30',
        y: '+=20',
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
    });
});