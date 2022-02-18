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

addComponent({
  name: 'Andrzej Andrzejewicz',
  pictureSource: 'https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg',
  occupation: 'bezrobotny',
  gender: 'Male',
  about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet consequuntur dicta doloremque, eaque enim eos est eum explicabo fuga hic, impedit in minima minus mollitia natus neque quia quis quod ratione repellat similique tempore temporibus, voluptas! Blanditiis cupiditate dicta ea eligendi impedit ipsum iure, optio provident velit veritatis?',
  size: 'large',
  onButtonClick: (direction, component) => {
    console.log(direction, component);
    if (direction === 'shrink') {
      component.classList.remove('large');
      component.classList.remove('medium');
      component.classList.add('small');
    }
  }
})