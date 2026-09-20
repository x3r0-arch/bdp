const avatarBase = '';

const messengers = [
  {
    name: 'Ezekiel',
    role: 'boi tulog kasi broken',
    image: avatarBase,
    message:
      '.'
  },
  {
    name: 'Rex Jr.',
    role: 'pancit canton',
    image: avatarBase,
    message:
      '.'
  },
  {
    name: 'Jm',
    role: 'baliw na baliw kay brenda',
    image: avatarBase,
    message:
      '.'
  },
  {
    name: 'Charles',
    role: 'Man vs. Nature',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Zaijan',
    role: 'The bading',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Clyde',
    role: 'Joshua',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Christian Jay',
    role: 'Cj',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Jian',
    role: 'boi flex',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Junnica',
    role: 'Press naming corrupt',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Feian',
    role: 'sungay lang matangkad',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Fiona',
    role: 'tahimik lang',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Jerolyn',
    role: 'CAPSICUM',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Laica',
    role: 'matangkad na siga',
    image: avatarBase,
    message: '.'
  },   
  {
    name: 'Rj',
    role: 'tahimik lang',
    image: avatarBase,
    message: '.'
  },   
  {
    name: 'Eziegael',
    role: 'Find your height',
    image: avatarBase,
    message: '.'
  },    
  {
    name: 'Khate',
    role: 'modern vampire',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Aleisha',
    role: 'Shapeshifter',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Leanne',
    role: 'madik ammo',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Samantha',
    role: 'tukak',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Ivy',
    role: 'madik ammo',
    image: avatarBase,
    message: '.'
  },   
  {
    name: 'Lykamae',
    role: 'madik ammo',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Riza',
    role: 'Tam Ryzza',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Leny',
    role: 'Cora',
    image: avatarBase,
    message: '.'
  },    
  {
    name: 'Jheslyn',
    role: 'madik ammo',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Honelyn',
    role: 'madik ammo',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Angel',
    role: 'madik ammo',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Tamcyn',
    role: 'madik ammo',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Dani',
    role: 'madik ammo',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Nicole',
    role: 'madik ammo',
    image: avatarBase,
    message: '.'
  },
  {
    name: 'Aryana',
    role: 'John Rick',
    image: avatarBase,
    message: '.'
  }
];

const messengerList = document.getElementById('messenger-list');
const modal = document.getElementById('message-modal');
const modalTitle = document.getElementById('message-title');
const modalText = document.getElementById('message-text');
const modalAvatar = document.getElementById('modal-avatar');
const closeButton = document.querySelector('.close-btn');

messengers.forEach((person) => {
  const button = document.createElement('button');
  button.className = 'messenger-card';
  button.type = 'button';
  button.setAttribute('aria-label', `Open message from ${person.name}`);
  button.innerHTML = `
    <img src="${person.image}" alt="${person.name} profile" />
    <strong>${person.name}</strong>
    <span>${person.role}</span>
  `;

  button.addEventListener('click', () => {
    modalTitle.textContent = person.name;
    modalText.textContent = person.message;
    modalAvatar.src = person.image;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
  });

  messengerList.appendChild(button);
});

function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.close === 'true') {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
