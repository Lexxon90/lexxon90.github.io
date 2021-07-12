import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './scss/style.scss';
import './just-validate.min.js'

let mainContaner = document.querySelector(".main__comment");

fetch("https://lexxon90.github.io/HoneyHunters/src/comment.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        let comment = response.comment;

        for (let i=0; i < comment.length; i++) {
            let contanerItem = document.createElement("div");
            contanerItem.className = "col-6 col-md-4 comment-item gx-md-5";

            let itemName = document.createElement("div");
            itemName.className = "comment-item__name";
            itemName.textContent = comment[i].name;

            let itemEmail = document.createElement("div");
            itemEmail.className = "comment-item__email";
            itemEmail.textContent = comment[i].email;

            let itemText = document.createElement("div");
            itemText.className = "comment-item__text";
            itemText.textContent = comment[i].comment;

            contanerItem.appendChild(itemName);
            contanerItem.appendChild(itemEmail);
            contanerItem.appendChild(itemText);

            mainContaner.appendChild(contanerItem);
        }
    })

new JustValidate('.valid-form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 20
      },
      email: {
        required: true,
        email: true
      },
      textarea: {
        required: true,
        minLength: 2,
        maxLength: 100
      }
    },
    messages: {
      name: {
        required: 'Поле обязательное для заполнения',
        minLength: 'Поле должно содержать минимум 2 символа',
        maxLength: 'Поле должно содержать не больше 20 символов'
      },
      email: {
        required: 'Поле обязательное для заполнения',
        email: 'Поле не соответсвтует формату email'
      },
      textarea: {
        required: 'Поле обязательное для заполнения',
        minLength: 'Поле должно содержать минимум 2 символа',
        maxLength: 'Поле должно содержать не больше 100 символов'
      },
    },
    submitHandler: function() {
        let contanerItem = document.createElement("div");
        contanerItem.className = "col-6 col-md-4 comment-item gx-md-5";

        let itemName = document.createElement("div");
        itemName.className = "comment-item__name";
        itemName.textContent = document.querySelector('.input-name').value;

        let itemEmail = document.createElement("div");
        itemEmail.className = "comment-item__email";
        itemEmail.textContent = document.querySelector('.input-email').value;

        let itemText = document.createElement("div");
        itemText.className = "comment-item__text";
        itemText.textContent = document.querySelector('.comment').value;

        contanerItem.appendChild(itemName);
        contanerItem.appendChild(itemEmail);
        contanerItem.appendChild(itemText);

        mainContaner.appendChild(contanerItem);
    }
});