AOS.init();

const animations = [
  {
    id: 'icon1',
    src: 'https://assets6.lottiefiles.com/private_files/lf30_cgfdhxgx.json' // structural design
  },
  {
    id: 'icon2',
    src: 'https://assets3.lottiefiles.com/private_files/lf30_editor_0aomk1un.json' // Tools
  },
  {
    id: 'icon3',
    src: 'https://assets6.lottiefiles.com/packages/lf20_w51pcehl.json' // construction site
  }
];

animations.forEach(item => {
  const container = document.getElementById(item.id);
  if (container) {
    container.innerHTML = `
      <lottie-player src="${item.src}" background="transparent" speed="1" loop autoplay></lottie-player>
    `;
  }
});
