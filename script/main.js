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

function init() {
  prv = document.getElementById('prv');
  nxt = document.getElementById('nxt');
  prv.addEventListener('click', prev);
  nxt.addEventListener('click', next);
  gallery = document.getElementById('gallery');
  counter = document.getElementById('counter');
  sidebar = document.getElementById('sidebar');
  sidebar.addEventListener('click', goToSlide);

  // load images
  catalogus = {
    "img": [
      { "placement": 1, "url": './catalogus/1.webp' },
      { "placement": 2, "url": './catalogus/2.webp' },
      { "placement": 3, "url": './catalogus/3.webp' },
      { "placement": 4, "url": './catalogus/4.webp' },
      { "placement": 5, "url": './catalogus/5.webp' },
      { "placement": 6, "url": './catalogus/6.webp' },
      { "placement": 7, "url": './catalogus/7.webp' },
      { "placement": 8, "url": './catalogus/8.webp' },
      { "placement": 9, "url": './catalogus/9.webp' },
      { "placement": 10, "url": './catalogus/10.webp' },
      { "placement": 11, "url": './catalogus/11.webp' },
      { "placement": 12, "url": './catalogus/12.webp' },
      { "placement": 13, "url": './catalogus/13.webp' },
      { "placement": 14, "url": './catalogus/14.webp' },
      { "placement": 15, "url": './catalogus/15.webp' },
      { "placement": 16, "url": './catalogus/16.webp' },
      { "placement": 17, "url": './catalogus/17.webp' },
      { "placement": 18, "url": './catalogus/18.webp' },
      { "placement": 19, "url": './catalogus/19.webp' },
      { "placement": 20, "url": './catalogus/20.webp' },
      { "placement": 21, "url": './catalogus/21.webp' },
      { "placement": 22, "url": './catalogus/22.webp' },
      { "placement": 23, "url": './catalogus/23.webp' },
      { "placement": 24, "url": './catalogus/24.webp' },
      { "placement": 25, "url": './catalogus/25.webp' },
      { "placement": 26, "url": './catalogus/26.webp' },
      { "placement": 27, "url": './catalogus/27.webp' },
      { "placement": 28, "url": './catalogus/28.webp' },
      { "placement": 29, "url": './catalogus/29.webp' },
      { "placement": 30, "url": './catalogus/30.webp' },
      { "placement": 31, "url": './catalogus/31.webp' },
      { "placement": 32, "url": './catalogus/32.webp' },
      { "placement": 33, "url": './catalogus/33.webp' },
      { "placement": 34, "url": './catalogus/34.webp' },
      { "placement": 35, "url": './catalogus/35.webp' },
      { "placement": 36, "url": './catalogus/36.webp' },
      { "placement": 37, "url": './catalogus/37.webp' },
      { "placement": 38, "url": './catalogus/38.webp' },
      { "placement": 39, "url": './catalogus/39.webp' },
      { "placement": 40, "url": './catalogus/40.webp' },
      { "placement": 41, "url": './catalogus/41.webp' },
      { "placement": 42, "url": './catalogus/42.webp' },
      { "placement": 43, "url": './catalogus/43.webp' },
      { "placement": 44, "url": './catalogus/44.webp' },
      { "placement": 45, "url": './catalogus/45.webp' },
      { "placement": 46, "url": './catalogus/46.webp' },
      { "placement": 47, "url": './catalogus/47.webp' },
      { "placement": 48, "url": './catalogus/48.webp' },
      { "placement": 49, "url": './catalogus/49.webp' },
      { "placement": 50, "url": './catalogus/50.webp' },
      { "placement": 51, "url": './catalogus/51.webp' },
      { "placement": 52, "url": './catalogus/52.webp' },
      { "placement": 53, "url": './catalogus/53.webp' },
      { "placement": 54, "url": './catalogus/54.webp' },
      { "placement": 55, "url": './catalogus/55.webp' },
      { "placement": 56, "url": './catalogus/56.webp' },
      { "placement": 57, "url": './catalogus/57.webp' },
      { "placement": 58, "url": './catalogus/58.webp' },
      { "placement": 59, "url": './catalogus/59.webp' },
      { "placement": 60, "url": './catalogus/60.webp' },
      { "placement": 61, "url": './catalogus/61.webp' },
      { "placement": 62, "url": './catalogus/62.webp' },
      { "placement": 63, "url": './catalogus/63.webp' },
      { "placement": 64, "url": './catalogus/64.webp' },
      { "placement": 65, "url": './catalogus/65.webp' },
      { "placement": 66, "url": './catalogus/66.webp' },
      { "placement": 67, "url": './catalogus/67.webp' },
      { "placement": 68, "url": './catalogus/68.webp' },
      { "placement": 69, "url": './catalogus/69.webp' },
      { "placement": 70, "url": './catalogus/70.webp' },
      { "placement": 71, "url": './catalogus/71.webp' },
      { "placement": 72, "url": './catalogus/72.webp' },
      { "placement": 73, "url": './catalogus/73.webp' },
      { "placement": 74, "url": './catalogus/74.webp' },
      { "placement": 75, "url": './catalogus/75.webp' },
      { "placement": 76, "url": './catalogus/76.webp' },
      { "placement": 77, "url": './catalogus/77.webp' },
      { "placement": 78, "url": './catalogus/78.webp' },
      { "placement": 79, "url": './catalogus/79.webp' },
      { "placement": 80, "url": './catalogus/80.webp' },
      { "placement": 81, "url": './catalogus/81.webp' },
      { "placement": 82, "url": './catalogus/82.webp' },
      { "placement": 83, "url": './catalogus/83.webp' },
      { "placement": 84, "url": './catalogus/84.webp' },
      { "placement": 85, "url": './catalogus/85.webp' },
      { "placement": 86, "url": './catalogus/86.webp' },
      { "placement": 87, "url": './catalogus/87.webp' },
      { "placement": 88, "url": './catalogus/88.webp' },
      { "placement": 89, "url": './catalogus/89.webp' },
      { "placement": 90, "url": './catalogus/90.webp' },
      { "placement": 91, "url": './catalogus/91.webp' },
      { "placement": 92, "url": './catalogus/92.webp' },
      { "placement": 93, "url": './catalogus/93.webp' },
      { "placement": 94, "url": './catalogus/94.webp' },
      { "placement": 95, "url": './catalogus/95.webp' },
      { "placement": 96, "url": './catalogus/96.webp' },
      { "placement": 97, "url": './catalogus/97.webp' },
      { "placement": 98, "url": './catalogus/98.webp' },
      { "placement": 99, "url": './catalogus/99.webp' },
      { "placement": 100, "url": './catalogus/100.webp' },
      { "placement": 101, "url": './catalogus/101.webp' },
      { "placement": 102, "url": './catalogus/102.webp' },
      { "placement": 103, "url": './catalogus/103.webp' },
      { "placement": 104, "url": './catalogus/104.webp' },
      { "placement": 105, "url": './catalogus/105.webp' },
      { "placement": 106, "url": './catalogus/106.webp' },
      { "placement": 107, "url": './catalogus/107.webp' },
      { "placement": 108, "url": './catalogus/108.webp' },
      { "placement": 109, "url": './catalogus/109.webp' },
      { "placement": 110, "url": './catalogus/110.webp' },
      { "placement": 111, "url": './catalogus/111.webp' },
      { "placement": 112, "url": './catalogus/112.webp' },
      { "placement": 113, "url": './catalogus/113.webp' },
      { "placement": 114, "url": './catalogus/114.webp' },
      { "placement": 115, "url": './catalogus/115.webp' },
      { "placement": 116, "url": './catalogus/116.webp' },
    ]
  };

  page = 0;
  showGallery();
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    showSidebar();
  }
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
      imgEl.loading = 'lazy';
      slider.appendChild(imgEl);
      gallery.appendChild(slider);
      slider.classList = 'flex flex-col overflow-y-scroll px-8 py-4 w-full';
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