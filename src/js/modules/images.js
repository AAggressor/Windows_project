
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
          document.body.classList.add('modal-open');
          
          const path = target.parentNode.getAttribute('href');
          console.log('Path:', path);
          bigImage.setAttribute('src', path);
          bigImage.classList.add('img-fluid');
          bigImage.style.width = '30%';
          bigImage.style.height = 'auto';
        

      }

      if (target && target.matches('div.popup')) {
        console.log('Popup clicked');
          imgPopup.style.display = 'none';
      }
  });
};

export default images;