window.addEventListener('load', () => { /* Страница загружена, включая все ресурсы */
  const preloader = document.querySelector('.preloader') /* находим блок Preloader */
  preloader.classList.add('preloader_hidden') /* добавляем ему класс для скрытия */
})

window.onload = () =>{
    let input = document.querySelector('#input');
    input.oninput = function(){
        let value = this.value.trim();
        let list = document.querySelectorAll('.article-ul, .article-li');

        if(value != ''){

            list.forEach(elem => {
                if(elem.innerText.search(val) == -1) {
                  elem.classList.add('hide')  
                }
            });
        } else {
            list.forEach(elem => {
                elem.classList.remove('hide')
            })
        }


        console.log(this.value);
    };
};
