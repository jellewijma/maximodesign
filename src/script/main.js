window.addEventListener('load', init);

// Globals
let prv;
let nxt;
let index;
let catalogus = {};
let gallery;
let page;
let counter;
let sidebar;

async function init() {
  gallery = document.getElementById('gallery');
  if (gallery) {
    prv = document.getElementById('prv');
    nxt = document.getElementById('nxt');
    prv.addEventListener('click', prev);
    nxt.addEventListener('click', next);
    counter = document.getElementById('counter');
    sidebar = document.getElementById('sidebar');
    sidebar.addEventListener('click', goToSlide);

    // load images
    await fetch('/src/catalogus.json')
      .then((response) => response.json())
      .then((data) => {
        catalogus = data;
      });

    page = 0;
    showGallery();
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      showSidebar();
    }
  }

  const menu = document.getElementById('menu');
  const nav = document.getElementById('list');
  menu.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
  });
}

function prev() {
  page -= 2;
  showGallery('prev');
}

function next() {
  page += 2;
  showGallery('next');
}

function showGallery(state) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // true for mobile device
    // show pages vertically
    const slider = document.createElement('div');
    catalogus.img.forEach((img, i) => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', img.url);
      imgEl.classList = 'w-full object-contain pb-4';
      slider.appendChild(imgEl);
      gallery.appendChild(slider);
      slider.classList = 'flex flex-col overflow-y-scroll pt-36 px-8 py-4 w-full';
      // gallery.classList = 'flex flex-col overflow-y-scroll p-8';
    }
    );
  } else {
    // false for not mobile device
    if (page === 0) {
      gallery.innerHTML = '';
      createImage(0);
      counter.innerHTML = `1 / ${catalogus.img.length}`;
      // exit
      return;
    } else if (state === 'next') {
      gallery.innerHTML = '';
      createImage(page - 1);
      createImage(page);
    } else if (state === 'prev') {
      gallery.innerHTML = '';
      createImage(page - 1);
      createImage(page);
    }
    counter.innerHTML = `${page} / ${catalogus.img.length}`;
  }
}

function createImage(imgNumber) {
  if (imgNumber == 0) {
    let img = document.createElement('img');
    img.setAttribute('src', catalogus.img[imgNumber].url);
    img.classList = 'w-full object-contain';
    img.dataset.index = imgNumber;
    img.loading = 'lazy';
    img.onclick = showImage;
    gallery.appendChild(img);
    return;
  }
  let img = document.createElement('img');
  img.setAttribute('src', catalogus.img[imgNumber].url);
  img.classList = ((imgNumber % 2 !== 0) ? 'w-1/2 object-contain object-right' : 'w-1/2 object-contain object-left');
  img.dataset.index = imgNumber;
  img.onclick = showImage;
  gallery.appendChild(img);
}

function showSidebar() {
  for (let i = 0; i < catalogus.img.length; i += 2) {
    let div = document.createElement('div');
    div.classList = 'flex justify-between items-center p-2 border-b border-gray-300';

    // start first row with one empthy and 1 image
    if (i === 0) {
      let empty = document.createElement('div');
      empty.classList = 'w-1/2';
      div.appendChild(empty);

      let img = document.createElement('img');
      img.setAttribute('src', catalogus.img[i].url);
      img.classList = 'w-1/2 object-contain object-center';
      img.dataset.index = i;
      div.appendChild(img);
    } else {

      // create 2 images per row
      for (let j = 1; j < 3; j++) {
        let img = document.createElement('img');
        img.setAttribute('src', catalogus.img[i + j - 2].url);
        // img.classList = 'w-1/2 object-contain object-left';
        img.classList = ((i % 2 !== 0) ? 'w-1/2 object-contain object-left' : 'w-1/2 object-contain object-right');
        img.dataset.index = i + j - 2;
        div.appendChild(img);
      }
    }

    sidebar.appendChild(div);
  }
}

function goToSlide(e) {

  if (e.target.tagName === 'IMG') {
    page = parseInt(e.target.dataset.index);
    // make page even number
    if (page % 2 !== 0) {
      page += 1;
    }

    showGallery('next');
  }
}

function showImage(e) {
  console.log('show image');
  console.log(e.target);

  // get index of image
  index = parseInt(e.target.dataset.index);
  console.log(index);
  // get image url
  let url = catalogus.img[index].url;
  console.log(url);

  // create modal
  let modal = document.createElement('div');
  modal.classList = 'fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center modal backdrop-blur-xs';
  modal.onclick = closeModal;
  document.body.appendChild(modal);

  // create image
  let img = document.createElement('img');
  img.setAttribute('src', url);
  img.classList = 'object-contain w-full h-full';
  modal.appendChild(img);

  // create close button
  let close = document.createElement('div');
  close.classList = 'absolute top-0 right-0 p-4 cursor-pointer text-white z-10';
  close.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(3.55556,3.55556)"><path d="M19,15c-1.023,0 -2.04812,0.39087 -2.82812,1.17188c-1.562,1.562 -1.562,4.09425 0,5.65625l14.17188,14.17188l-14.17187,14.17188c-1.562,1.562 -1.562,4.09425 0,5.65625c0.78,0.78 1.80513,1.17188 2.82813,1.17188c1.023,0 2.04812,-0.39088 2.82813,-1.17187l14.17188,-14.17187l14.17188,14.17188c1.56,1.562 4.09525,1.562 5.65625,0c1.563,-1.563 1.563,-4.09325 0,-5.65625l-14.17187,-14.17187l14.17188,-14.17187c1.562,-1.562 1.562,-4.09425 0,-5.65625c-1.56,-1.561 -4.09625,-1.562 -5.65625,0l-14.17187,14.17188l-14.17187,-14.17187c-0.78,-0.78 -1.80513,-1.17187 -2.82812,-1.17187z"></path></g></g>
</svg>`;
  // close.onclick = closeModal;
  modal.appendChild(close);
}

function closeModal() {
  document.querySelector('.modal').remove();
}
