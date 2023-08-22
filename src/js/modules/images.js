// const images = () => {
//   const imgPopup = document.createElement('div'),
//   workSection = document.querySelector('.works'),
//   bigImage = document.createElement('img');

//   imgPopup.classList.add('.popup');
//   workSection.appendChild(imgPopup);

//   imgPopup.style.justifyContent = 'center';
//   imgPopup.style.alingItems = 'center';
//   imgPopup.style.display = 'none';

//   imgPopup.appendChild(bigImage);

//   workSection.addEventListener('click', (e) => {
//     e.preventDefault();

//     let target = e.target;

//     if (target && target.classList.contains('preview')) {
//       imgPopup.style.display = 'flex';
//       const path = target.parentNode.getAttribute('href');
//       bigImage.setAttribute('src', path);
//     }

//     if (target && target.matches('div.popup')) {
//       imgPopup.style.display = 'none';
//     }
//   })
// }

// export default images;

const images = () => {
  const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

        console.log('Adding classes to imgPopup');
  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (e) => {
      e.preventDefault();

      let target = e.target;

      if (target && target.classList.contains('preview')) {
        console.log('Preview clicked');
          imgPopup.style.display = 'flex';
          const path = target.closets('.preview').getAttribute('href');
          console.log('Path:', path);
          bigImage.setAttribute('src', path);
          bigImage.classList.add('img-fluid');
      }

      if (target && target.matches('div.popup')) {
        console.log('Popup clicked');
          imgPopup.style.display = 'none';
      }
  });
};

export default images;