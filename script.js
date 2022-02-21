import mapData from './scripts/index.js'

fetch('./data.json').then((res) => res.json()).then((data) => {
  console.table(data);
  mapData(data).forEach(addComponent);
})

const mainElement = document.getElementById('main');

const addComponent = ({
  name,
  pictureSource,
  occupation,
  gender,
  about,
  size,
  onButtonClick,
  email,
  phone,
}) => {
  const newComponent = document.createElement('div');
  newComponent.classList.add(size);
  newComponent.classList.add('card');

  const profilePicture = document.createElement('img');
  profilePicture.src = pictureSource;

  const nameParagraph = document.createElement('p');
  nameParagraph.classList.add('name');
  nameParagraph.innerHTML = name;

  const occupationSpan = document.createElement('span');
  occupationSpan.innerHTML = occupation;

  const genderImg = document.createElement('img');
  genderImg.classList.add('gender');
  genderImg.src = gender === 'Male'
    ? 'https://cdn.picpng.com/symbol/male-gender-symbol-icon-man-106987.png'
    : 'https://static.thenounproject.com/png/390695-200.png';

  const aboutParagraph = document.createElement('p');
  aboutParagraph.classList.add('about');
  aboutParagraph.innerHTML = about;

  const smallerButton = document.createElement('button');
  smallerButton.addEventListener('click', () => onButtonClick('shrink', newComponent));
  smallerButton.innerHTML = 'Shrink';

  const largerButton = document.createElement('button');
  largerButton.addEventListener('click', () => onButtonClick('grow', newComponent));
  largerButton.innerHTML = 'Grow';



  nameParagraph.appendChild(genderImg);
  nameParagraph.appendChild(occupationSpan);

  if (phone) {
    const phoneSpan = document.createElement('span');
    phoneSpan.innerHTML = phone;
    nameParagraph.appendChild(phoneSpan);
  }

  if (email) {
    const emailSpan = document.createElement('span');
    emailSpan.innerHTML = email;
    nameParagraph.appendChild(emailSpan);
  }

  newComponent.appendChild(profilePicture);
  newComponent.appendChild(nameParagraph);
  newComponent.appendChild(aboutParagraph);
  newComponent.appendChild(smallerButton);
  newComponent.appendChild(largerButton);

  mainElement.appendChild(newComponent);
}
