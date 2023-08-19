const forms = () => {
  const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input'),
        phoenInputs = document.querySelectorAll('input[name="user_phone"]');

  phoenInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value =item.value.replace(/\D/, '');
    })
  })

const messages = {
  loading: 'Загрузочка',
  success: 'Все зашибись',
  failure: 'Упс ошибочка'
}

const postData = async (url, data) => {
document.querySelector('.status').textContent = messages.loading;

let res = await fetch(url, {
  method: 'POST',
  body: data
})
 
return await res.text();

};

function clearInputs() {
  input.forEach(item => {
    item.value = '';
  })
}

form.forEch(item  => {
  item.addEventListener('submit', (e) =>{
    e.preventDefault();
  })


 let statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  item.appendChild(statusMessage);

  let formData = new FormData(item);

  postData('assets/server.php', formData)
  .then(res => {
    console.log(res);
    statusMessage.textContent = messages.success;
  })
  .catch( () => {
    statusMessage.textContent = messages.failure;
  })
  .finally(() => {
    clearInputs();
    setTimeout(() => {
      statusMessage.remove();
    }, 5000);

  }
  )


})

}

export default forms;