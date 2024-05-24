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
      { "placement": 1, "url": '../catalogus/1.jpg' },
      { "placement": 2, "url": '../catalogus/2.jpg' },
      { "placement": 3, "url": '../catalogus/3.jpg' },
      { "placement": 4, "url": '../catalogus/4.jpg' },
      { "placement": 5, "url": '../catalogus/5.jpg' },
      { "placement": 6, "url": '../catalogus/6.jpg' },
      { "placement": 7, "url": '../catalogus/7.jpg' },
      { "placement": 8, "url": '../catalogus/8.jpg' },
      { "placement": 9, "url": '../catalogus/9.jpg' },
      { "placement": 10, "url": '../catalogus/10.jpg' },
      { "placement": 11, "url": '../catalogus/11.jpg' },
      { "placement": 12, "url": '../catalogus/12.jpg' },
      { "placement": 13, "url": '../catalogus/13.jpg' },
      { "placement": 14, "url": '../catalogus/14.jpg' },
      { "placement": 15, "url": '../catalogus/15.jpg' },
      { "placement": 16, "url": '../catalogus/16.jpg' },
      { "placement": 17, "url": '../catalogus/17.jpg' },
      { "placement": 18, "url": '../catalogus/18.jpg' },
      { "placement": 19, "url": '../catalogus/19.jpg' },
      { "placement": 20, "url": '../catalogus/20.jpg' },
      { "placement": 21, "url": '../catalogus/21.jpg' },
      { "placement": 22, "url": '../catalogus/22.jpg' },
      { "placement": 23, "url": '../catalogus/23.jpg' },
      { "placement": 24, "url": '../catalogus/24.jpg' },
      { "placement": 25, "url": '../catalogus/25.jpg' },
      { "placement": 26, "url": '../catalogus/26.jpg' },
      { "placement": 27, "url": '../catalogus/27.jpg' },
      { "placement": 28, "url": '../catalogus/28.jpg' },
      { "placement": 29, "url": '../catalogus/29.jpg' },
      { "placement": 30, "url": '../catalogus/30.jpg' },
      { "placement": 31, "url": '../catalogus/31.jpg' },
      { "placement": 32, "url": '../catalogus/32.jpg' },
      { "placement": 33, "url": '../catalogus/33.jpg' },
      { "placement": 34, "url": '../catalogus/34.jpg' },
      { "placement": 35, "url": '../catalogus/35.jpg' },
      { "placement": 36, "url": '../catalogus/36.jpg' },
      { "placement": 37, "url": '../catalogus/37.jpg' },
      { "placement": 38, "url": '../catalogus/38.jpg' },
      { "placement": 39, "url": '../catalogus/39.jpg' },
      { "placement": 40, "url": '../catalogus/40.jpg' },
      { "placement": 41, "url": '../catalogus/41.jpg' },
      { "placement": 42, "url": '../catalogus/42.jpg' },
      { "placement": 43, "url": '../catalogus/43.jpg' },
      { "placement": 44, "url": '../catalogus/44.jpg' },
      { "placement": 45, "url": '../catalogus/45.jpg' },
      { "placement": 46, "url": '../catalogus/46.jpg' },
      { "placement": 47, "url": '../catalogus/47.jpg' },
      { "placement": 48, "url": '../catalogus/48.jpg' },
      { "placement": 49, "url": '../catalogus/49.jpg' },
      { "placement": 50, "url": '../catalogus/50.jpg' },
      { "placement": 51, "url": '../catalogus/51.jpg' },
      { "placement": 52, "url": '../catalogus/52.jpg' },
      { "placement": 53, "url": '../catalogus/53.jpg' },
      { "placement": 54, "url": '../catalogus/54.jpg' },
      { "placement": 55, "url": '../catalogus/55.jpg' },
      { "placement": 56, "url": '../catalogus/56.jpg' },
      { "placement": 57, "url": '../catalogus/57.jpg' },
      { "placement": 58, "url": '../catalogus/58.jpg' },
      { "placement": 59, "url": '../catalogus/59.jpg' },
      { "placement": 60, "url": '../catalogus/60.jpg' },
      { "placement": 61, "url": '../catalogus/61.jpg' },
      { "placement": 62, "url": '../catalogus/62.jpg' },
      { "placement": 63, "url": '../catalogus/63.jpg' },
      { "placement": 64, "url": '../catalogus/64.jpg' },
      { "placement": 65, "url": '../catalogus/65.jpg' },
      { "placement": 66, "url": '../catalogus/66.jpg' },
      { "placement": 67, "url": '../catalogus/67.jpg' },
      { "placement": 68, "url": '../catalogus/68.jpg' },
      { "placement": 69, "url": '../catalogus/69.jpg' },
      { "placement": 70, "url": '../catalogus/70.jpg' },
      { "placement": 71, "url": '../catalogus/71.jpg' },
      { "placement": 72, "url": '../catalogus/72.jpg' },
      { "placement": 73, "url": '../catalogus/73.jpg' },
      { "placement": 74, "url": '../catalogus/74.jpg' },
      { "placement": 75, "url": '../catalogus/75.jpg' },
      { "placement": 76, "url": '../catalogus/76.jpg' },
      { "placement": 77, "url": '../catalogus/77.jpg' },
      { "placement": 78, "url": '../catalogus/78.jpg' },
      { "placement": 79, "url": '../catalogus/79.jpg' },
      { "placement": 80, "url": '../catalogus/80.jpg' },
      { "placement": 81, "url": '../catalogus/81.jpg' },
      { "placement": 82, "url": '../catalogus/82.jpg' },
      { "placement": 83, "url": '../catalogus/83.jpg' },
      { "placement": 84, "url": '../catalogus/84.jpg' },
      { "placement": 85, "url": '../catalogus/85.jpg' },
      { "placement": 86, "url": '../catalogus/86.jpg' },
      { "placement": 87, "url": '../catalogus/87.jpg' },
      { "placement": 88, "url": '../catalogus/88.jpg' },
      { "placement": 89, "url": '../catalogus/89.jpg' },
      { "placement": 90, "url": '../catalogus/90.jpg' },
      { "placement": 91, "url": '../catalogus/91.jpg' },
      { "placement": 92, "url": '../catalogus/92.jpg' },
      { "placement": 93, "url": '../catalogus/93.jpg' },
      { "placement": 94, "url": '../catalogus/94.jpg' },
      { "placement": 95, "url": '../catalogus/95.jpg' },
      { "placement": 96, "url": '../catalogus/96.jpg' },
      { "placement": 97, "url": '../catalogus/97.jpg' },
      { "placement": 98, "url": '../catalogus/98.jpg' },
      { "placement": 99, "url": '../catalogus/99.jpg' },
      { "placement": 100, "url": '../catalogus/100.jpg' },
      { "placement": 101, "url": '../catalogus/101.jpg' },
      { "placement": 102, "url": '../catalogus/102.jpg' }
    ]
  };
  console.log(catalogus.img)

  page = 0;
  showGallery();
  showSidebar();
}

function prev() {
  console.log('prev');
  page -= 2;
  showGallery('prev');
}

function next() {
  console.log('next');
  page += 2;
  showGallery('next');
}

function showGallery(state) {
  console.log('show gallery');

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

function createImage(imgNumber) {
  let img = document.createElement('img');
  img.setAttribute('src', catalogus.img[imgNumber].url);
  img.classList = ((imgNumber % 2 !== 0) ? 'w-1/2 object-contain object-right' : 'w-1/2 object-contain object-left');
  img.dataset.index = imgNumber;
  gallery.appendChild(img);
}

function showSidebar() {
  console.log('show sidebar');

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
        img.dataset.index = i + j;
        div.appendChild(img);
      }
    }

    sidebar.appendChild(div);
  }
}

function goToSlide(e) {
  console.log('go to slide');

  if (e.target.tagName === 'IMG') {
    console.log(e.target.dataset.index);
    page = parseInt(e.target.dataset.index);
    console.log(page);
    // make page even number
    if (page % 2 !== 0) {
      page += 1;
    }

    showGallery('next');
  }
}