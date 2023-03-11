const body = document.querySelector('body');

// Desktop dynamic content
const popups = [
  {
    id: 'firstpopup',
    title: 'TONIC',
    image: 'images/desktop one popup.png',
    tagspop: ['html', 'css', 'javascript'],
    liveLink: 'https://github.com/MussieTeka/',
    sourceLink: 'https://github.com/MussieTeka/TheEduFord',
  },
  {
    id: 'secondpopup',
    title: 'Multi-Post Stories',
    image: 'Images/popup desktop 3.png',
    tagspop: ['html', 'css', 'javascript'],
    liveLink: 'https://github.com/MussieTeka/',
    sourceLink: 'https://github.com/MussieTeka/TheEduFord',
  },
  {
    id: 'thirdpopup',
    title: 'Facebook 360',
    image: 'Images/nature desktop.png',
    tagspop: ['html', 'css', 'javascript'],
    liveLink: 'https://github.com/MussieTeka/',
    sourceLink: 'https://github.com/MussieTeka/TheEduFord',
  },
  {
    id: 'fourthpopup',
    title: 'Uber Navigation',
    image: 'Images/Desktop 2.png',
    tagspop: ['html', 'css', 'javascript'],
    liveLink: 'https://github.com/MussieTeka/',
    sourceLink: 'https://github.com/MussieTeka/TheEduFord',
  },
];

popups.forEach((popup) => {
  const newPopup = document.createElement('div');
  newPopup.className = 'firstpopup';
  newPopup.id = popup.id;
  newPopup.innerHTML = `
    <div class="firstcontainer">
      <div class="toptonic">
        <div>
          <h1>${popup.title}</h1>
          <img src="images/frame canopy popup.png" alt="" />
        </div>
        <i onclick="closePopup('${popup.id}')" class="fa fa-times"></i>
      </div>
      <div class="natureimage">
        <img src="${popup.image}" alt="" />
      </div>
      <div class="lowertonic">
        <div class="tonicdetails">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it 1960s with the releaLorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it
            1960s with the releorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum han printer took a galley of
            type and scrambled it 1960s with the releawn printer took a galley
            of type and scrambled it 1960s with the releaLorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it
            1960s with the relea
          </p>
        </div>
        <div class="lowerright">
          <div>
            <ul class="tagspop">
              ${popup.tagspop
    .map((tag) => `<li id="${tag}"><p>${tag}</p></li>`)
    .join('')}
            </ul>
          </div>
          <div class="strline">
            <img src="images/straight line.png" alt="" />
          </div>
          <div class="imgbtns">
            ${
  popup.liveLink
              && `
              <button id="imgbtn">
                <p onclick="window.location.href='${popup.liveLink}'">See live</p>
                <img src="Icons/button icon.png" />
              </button>
            `
}
            ${
  popup.sourceLink
              && `
              <button onclick="window.location.href='${popup.sourceLink}'" id="seesource">
                <p>See source</p>
                <img src="Icons/gitbtn icon.png" />
              </button>
            `
}
          </div>
        </div>
      </div>
    </div>
  `;
  body.append(newPopup);
});

function openPopup(id) {
  const popup = document.getElementById(id);
  popup.classList.add('openPopup');
  popup.style.display = 'block';
}

function closePopup(id) {
  const popup = document.getElementById(id);
  popup.classList.remove('openPopup');
  popup.style.display = 'none';
}

// Mobile dynamic content

const popupData = [
  {
    id: 'mobilepopup',
    title: 'Tonic',
    image: 'Images/Snapshoot Portfolio.png',
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essent.",
    tags: ['html', 'css', 'javascript'],
  },
  {
    id: 'secondmobilepopup',
    title: 'Multi-Post Stories',
    image: 'Images/Snapshoot Portfolio (1).png',
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essent.",
    tags: ['html', 'css', 'javascript'],
  },
  {
    id: 'thirdmobilepopup',
    title: 'Tonic',
    image: 'Images/Snapshoot Portfolio (2).png',
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essent.",
    tags: ['html', 'css', 'javascript'],
  },
  {
    id: 'fourthmobilepopup',
    title: 'Multi-Post Stories',
    image: 'Images/Snapshoot Portfolio (3).png',
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essent.",
    tags: ['html', 'css', 'javascript'],
  },
];

popupData.forEach((popup) => {
  const popupWindow = document.createElement('div');
  popupWindow.className = 'mobilepopup';
  popupWindow.id = popup.id;
  popupWindow.innerHTML = `
    <div class="mobilepopup-container">
      <div class="poptop">
        <div class="tonicpopup">
          <h2>${popup.title}</h2>
          <img src="Images/frame canpoy popup mobile.png" alt="" />
        </div>
        <i  
        onclick="toggleMobilePopup('${popup.id}', false)"
        class="fa fa-times"></i>
      </div>
      <img src="${popup.image}" alt="" />
      <p>${popup.description}</p>
      <ul class="poptag">
        ${popup.tags
    .map((tag) => `<li id="${tag}"><p>${tag}</p></li>`)
    .join('')}
      </ul>
      <img src="images/mobile popup line.png" />
      <div class="imgbtns">
        <button onclick="window.location.href='https://github.com/MussieTeka/';" id="imgbtn">
          <p>See live</p>
          <img src="Icons/button icon.png" />
        </button>
        <button onclick="window.location.href='https://github.com/MussieTeka/Portfolio-Website';" id="seesource">
          <p>See source</p>
          <img src="Icons/gitbtn icon.png" />
        </button>
      </div>
    </div>
  `;
  body.append(popupWindow);
});

function toggleMobilePopup(id, isOpen) {
  const popup = document.getElementById(id);
  if (isOpen) {
    popup.classList.add('mobileopenPopup');
  } else {
    popup.classList.remove('mobileopenPopup');
  }
}

// Mobile side menu

const sidemenu = document.getElementById('sidemenu');
function openMenu() {
  sidemenu.style.right = '0';
}
function closeMenu() {
  sidemenu.style.right = '-768px';
}

// Form validation project

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const emailInput = document.querySelector('#email');
  const email = emailInput.value;

  if (email === email.toLowerCase()) {
    // email is in lowercase, form can be submitted
    form.submit();
  } else {
    // email is not in lowercase, show error message
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Sorry! Error occured. Email must be in lowercase!';
    form.appendChild(errorMessage);
  }
}
