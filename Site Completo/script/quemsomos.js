// MENU HAMBURGUER //
function clickMenu() {
    let menu = document.getElementById("menu");
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


// LINHA DO TEMPO //
document.querySelectorAll('.timeline-item').forEach(item => {
  const year = item.dataset.year;
  const step = item.dataset.step;
  const icon = item.dataset.icon;

  const iconEl = document.createElement('div');
  iconEl.className = 'icon';
  iconEl.innerHTML = `<i class="fas ${icon}"></i>`;

  const yearEl = document.createElement('div');
  yearEl.className = 'year';
  yearEl.textContent = year;

  const stepEl = document.createElement('div');
  stepEl.className = 'step';
  stepEl.textContent = step;

  item.prepend(stepEl);
  item.prepend(yearEl);
  item.prepend(iconEl);
});

// Animações com GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.timeline-item').forEach(item => {
  gsap.to(item, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});



