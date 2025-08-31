const acc = document.querySelectorAll('.accordion');
const panels = document.querySelectorAll('.panel');

acc.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    const isOpen = btn.classList.contains('active');

    // 1) Закриваємо все
    acc.forEach((b, i) => {
      b.classList.remove('active');
      panels[i].style.maxHeight = null; // згорнути
    });

    // 2) Якщо клік був по закритій — відкриваємо її
    if (!isOpen) {
      btn.classList.add('active');
      panel.style.maxHeight = panel.scrollHeight + 'px';

      // опц.: м’яко прокрутити до центру
      requestAnimationFrame(() => {
        setTimeout(() => {
          panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 50);
      });
    }
  });
});

// Опц.: якщо зміниться розмір вікна — підлаштувати висоту відкритої панелі
window.addEventListener('resize', () => {
  const openBtn = document.querySelector('.accordion.active');
  if (openBtn) {
    const openPanel = openBtn.nextElementSibling;
    openPanel.style.maxHeight = openPanel.scrollHeight + 'px';
  }
});


// const acc = document.getElementsByClassName("accordion");
// let i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     const panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }


// const button = document.getElementById('showImageBtn');
// const imageContainer = document.getElementById('imageContainer');
// const myImage = document.getElementById('myImage');
// const closeBtn = document.getElementById('closeBtn');

// button.addEventListener('click', () => {
//     imageContainer.style.display = 'flex';
//     setTimeout(() => {
//         imageContainer.classList.add('show');
//         myImage.scrollIntoView({
//             behavior: 'smooth',
//             block: 'center'
//         });
//     }, 10);    
// })

// closeBtn.addEventListener('click', () => {
//     imageContainer.classList.remove('show');
//     setTimeout(() => {
//         imageContainer.style.display = 'none';
//     }, 500);
// })