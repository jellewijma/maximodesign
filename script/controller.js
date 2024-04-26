async function next(stage) {
  // prefent default action
  event.preventDefault();
  console.log(stage);

  switch (stage) {
    case 0:
      document.getElementById('addInfo').classList.remove('hidden');
      document.getElementById('addImg').classList.add('hidden');
      document.getElementById('verder').classList.remove('hidden');
      document.getElementById('verstuur').classList.add('hidden');
      break;
    case 1:
      document.getElementById('addInfo').classList.add('hidden');
      document.getElementById('addImg').classList.remove('hidden');
      document.getElementById('verder').classList.add('hidden');
      document.getElementById('verstuur').classList.remove('hidden');
      break;
    default:
      break;
  }
}


list = [];

function importData() {
  let input = document.getElementById('input');
  input.onchange = _ => {
    // you can use this method to get file and perform respective operations
    let files = Array.from(input.files);
    console.log(files);

    list = files;

    document.getElementById('file-uploaded').style.animation = " slide-top 500ms forwards";

    const previewImages = (previewContainer) => {
      if (files) {
        const numberOfFiles = files.length;
        console.log(numberOfFiles);

        for (let i = 0; i < numberOfFiles; i++) {
          const reader = new FileReader();

          reader.onload = function (event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            img.classList = 'aspect-[3/4] object-cover';
            previewContainer.appendChild(img);
          };

          reader.readAsDataURL(files[i]);
        }
      }
    };
    const gallery = document.querySelector('div.gallery');
    previewImages(gallery);
  };
  input.click();
  document.getElementById('form').appendChild(input);
}