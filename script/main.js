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

/**
{"catalogus":[
    { "placement": 1, "url": 'https://img.nl'},
    { "placement": 1, "url": 'https://img.nl'},
    { "placement": 1, "url": 'https://img.nl'},
    { "placement": 1, "url": 'https://img.nl'}
]}
 */

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
      { "placement": 1, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/1.jpg' },
      { "placement": 2, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/2.jpg' },
      { "placement": 3, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/3.jpg' },
      { "placement": 4, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/4.jpg' },
      { "placement": 5, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/5.jpg' },
      { "placement": 6, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/6.jpg' },
      { "placement": 7, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/7.jpg' },
      { "placement": 8, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/8.jpg' },
      { "placement": 9, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/9.jpg' },
      { "placement": 10, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/10.jpg' },
      { "placement": 11, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/11.jpg' },
      { "placement": 12, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/12.jpg' },
      { "placement": 13, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/13.jpg' },
      { "placement": 14, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/14.jpg' },
      { "placement": 15, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/15.jpg' },
      { "placement": 16, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/16.jpg' },
      { "placement": 17, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/17.jpg' },
      { "placement": 18, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/18.jpg' },
      { "placement": 19, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/19.jpg' },
      { "placement": 20, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/20.jpg' },
      { "placement": 21, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/21.jpg' },
      { "placement": 22, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/22.jpg' },
      { "placement": 23, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/23.jpg' },
      { "placement": 24, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/24.jpg' },
      { "placement": 25, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/25.jpg' },
      { "placement": 26, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/26.jpg' },
      { "placement": 27, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/27.jpg' },
      { "placement": 28, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/28.jpg' },
      { "placement": 29, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/29.jpg' },
      { "placement": 30, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/30.jpg' },
      { "placement": 31, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/31.jpg' },
      { "placement": 32, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/32.jpg' },
      { "placement": 33, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/33.jpg' },
      { "placement": 34, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/34.jpg' },
      { "placement": 35, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/35.jpg' },
      { "placement": 36, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/36.jpg' },
      { "placement": 37, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/37.jpg' },
      { "placement": 38, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/38.jpg' },
      { "placement": 39, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/39.jpg' },
      { "placement": 40, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/40.jpg' },
      { "placement": 41, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/41.jpg' },
      { "placement": 42, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/42.jpg' },
      { "placement": 43, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/43.jpg' },
      { "placement": 44, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/44.jpg' },
      { "placement": 45, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/45.jpg' },
      { "placement": 46, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/46.jpg' },
      { "placement": 47, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/47.jpg' },
      { "placement": 48, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/48.jpg' },
      { "placement": 49, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/49.jpg' },
      { "placement": 50, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/50.jpg' },
      { "placement": 51, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/51.jpg' },
      { "placement": 52, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/52.jpg' },
      { "placement": 53, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/53.jpg' },
      { "placement": 54, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/54.jpg' },
      { "placement": 55, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/55.jpg' },
      { "placement": 56, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/56.jpg' },
      { "placement": 57, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/57.jpg' },
      { "placement": 58, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/58.jpg' },
      { "placement": 59, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/59.jpg' },
      { "placement": 60, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/60.jpg' },
      { "placement": 61, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/61.jpg' },
      { "placement": 62, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/62.jpg' },
      { "placement": 63, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/63.jpg' },
      { "placement": 64, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/64.jpg' },
      { "placement": 65, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/65.jpg' },
      { "placement": 66, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/66.jpg' },
      { "placement": 67, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/67.jpg' },
      { "placement": 68, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/68.jpg' },
      { "placement": 69, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/69.jpg' },
      { "placement": 70, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/70.jpg' },
      { "placement": 71, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/71.jpg' },
      { "placement": 72, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/72.jpg' },
      { "placement": 73, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/73.jpg' },
      { "placement": 74, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/74.jpg' },
      { "placement": 75, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/75.jpg' },
      { "placement": 76, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/76.jpg' },
      { "placement": 77, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/77.jpg' },
      { "placement": 78, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/78.jpg' },
      { "placement": 79, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/79.jpg' },
      { "placement": 80, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/80.jpg' },
      { "placement": 81, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/81.jpg' },
      { "placement": 82, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/82.jpg' },
      { "placement": 83, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/83.jpg' },
      { "placement": 84, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/84.jpg' },
      { "placement": 85, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/85.jpg' },
      { "placement": 86, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/86.jpg' },
      { "placement": 87, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/87.jpg' },
      { "placement": 88, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/88.jpg' },
      { "placement": 89, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/89.jpg' },
      { "placement": 90, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/90.jpg' },
      { "placement": 91, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/91.jpg' },
      { "placement": 92, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/92.jpg' },
      { "placement": 93, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/93.jpg' },
      { "placement": 94, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/94.jpg' },
      { "placement": 95, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/95.jpg' },
      { "placement": 96, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/96.jpg' },
      { "placement": 97, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/97.jpg' },
      { "placement": 98, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/98.jpg' },
      { "placement": 99, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/99.jpg' },
      { "placement": 100, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/100.jpg' },
      { "placement": 101, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/101.jpg' },
      { "placement": 102, "url": 'https://igzwtkracgboxcylhryh.supabase.co/storage/v1/object/public/images/public/102.jpg' }
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
        img.setAttribute('src', catalogus.img[i + j].url);
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