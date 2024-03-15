// rbSlider Begin
const rbSlider_wrapper = document.querySelectorAll('.rb-slider');

rbSlider_wrapper.forEach((item) => {
    const rbSlider_wrapper_Title = item.querySelector('.rb-slider-title-wrapper'); //Контейнер для заголовков
    const rbSlider_wrapper_Img = item.querySelector('.rb-slider-img-wrapper'); //Контейнер для картинок
    const rbSlider_wrapper_Control = item.querySelector('.rb-slider-control-wrapper'); //Контейнер для точек управления

    const rbSlider_wrapper_Img_Items = rbSlider_wrapper_Img.querySelectorAll('.rb-slider-img-wrapper__item');  //Картинки

    //Добавляем левую, правую стрелки над картинками
    let arrowWrapper = document.createElement('div');
    arrowWrapper.classList.add('completed-projects-slider__control-wrapper');

    let arrowLeftWrapper = document.createElement('div');
    arrowLeftWrapper.classList.add('completed-projects-slider__control-left');
    arrowLeftWrapper.innerHTML = '<img src="./images/icons/slider-control.svg" alt="left">';
    arrowWrapper.appendChild(arrowLeftWrapper);

    let arrowRightWrapper = document.createElement('div');
    arrowRightWrapper.classList.add('completed-projects-slider__control-right');
    arrowRightWrapper.innerHTML = '<img src="./images/icons/slider-control.svg" alt="right">';
    arrowWrapper.appendChild(arrowRightWrapper);

    rbSlider_wrapper_Img.after(arrowWrapper);

    //Добавляем левую, правую стрелки и контейнер для точек в rb-slider-control-wrapper
    let leftControlArrow = document.createElement('div');
    leftControlArrow.classList.add('completed-projects-control__arrow-left');
    leftControlArrow.innerHTML = '<img src="./images/icons/arrow.svg" alt="left">';
    rbSlider_wrapper_Control.appendChild(leftControlArrow);

    let dotsWrapper = document.createElement('div');
    dotsWrapper.classList.add('completed-projects-control-dots-wrapper');
    rbSlider_wrapper_Control.appendChild(dotsWrapper);

    let rightControlArrow = document.createElement('div');
    rightControlArrow.classList.add('completed-projects-control__arrow-right');
    rightControlArrow.innerHTML = '<img src="./images/icons/arrow.svg" alt="lefrightt">';
    rbSlider_wrapper_Control.appendChild(rightControlArrow);


    let i = 0;
    rbSlider_wrapper_Img_Items.forEach((item_img) => {
        if (i === 0) item_img.classList.add('active');
        //Добавляем заголовки в rb-slider-title-wrapper
        let titleElement = document.createElement('span');
        titleElement.classList.add('completed-projects-choose-city__item');
        titleElement.classList.add('rb-slider-title-wrapper__item');
        titleElement.innerText = item_img.getAttribute('data-title');
        titleElement.setAttribute('data-index', i);
        if (i === 0) titleElement.classList.add('active');
        rbSlider_wrapper_Title.appendChild(titleElement);

        //Добавляем элементы управления (точки) в rb-slider-control-wrapper
        let dot = document.createElement('div');
        dot.classList.add('completed-projects-control__dot');
        dot.innerHTML = '<img src="./images/icons/dot.svg" alt="">';
        dot.setAttribute('data-index', i);
        if (i === 0) dot.classList.add('active');
        dotsWrapper.appendChild(dot);

        i++;
    });

    //Находим все элементы
    const rbSliderImages = rbSlider_wrapper_Img.querySelectorAll('.rb-slider-img-wrapper__item');  // Картинки
    const rbSliderTitles = rbSlider_wrapper_Title.querySelectorAll('.rb-slider-title-wrapper__item');  // Заголовки
    const rbSliderDots = rbSlider_wrapper_Control.querySelectorAll('.completed-projects-control__dot');  // Точки

    //Функция изменения картинки при клике на заголовоки и точки
    function clickTitleDot(clickElement){
        rbSlider_wrapper_Img.querySelector('.active').classList.remove('active');
        rbSlider_wrapper_Title.querySelector('.active').classList.remove('active');
        rbSlider_wrapper_Control.querySelector('.active').classList.remove('active');

        rbSliderImages[clickElement.getAttribute('data-index')].classList.add('active');
        rbSliderTitles[clickElement.getAttribute('data-index')].classList.add('active');
        rbSliderDots[clickElement.getAttribute('data-index')].classList.add('active')
    }

    //Клик на заголовки
    rbSliderTitles.forEach((title) => {
        title.addEventListener('click', () => {
            if (title.classList.contains('active')) return;
            clickTitleDot(title);
        })
    })

    //Клик на точки
    rbSliderDots.forEach((dot) => {
        dot.addEventListener('click', () => {
            if (dot.classList.contains('active')) return;
            clickTitleDot(dot);
        })
    })

    //Функция изменения картинки при клике на левую, правую стрелки над картинками и около точек
    function arrowClick(side) {
        // Определяем активную картинку
        const activeImg = rbSlider_wrapper_Img.querySelector('.active');
        // Определяем активный заголовок
        const activeTitle = rbSlider_wrapper_Title.querySelector('.active');
        // Определяем активную точку
        const activeDot = rbSlider_wrapper_Control.querySelector('.active');

        //Убираем у активных элементов класс active
        activeImg.classList.remove('active');
        activeTitle.classList.remove('active');
        activeDot.classList.remove('active');

        if (side === 'left') {
            if (activeImg.previousElementSibling === null) {
                rbSliderImages[rbSliderImages.length - 1].classList.add('active');
                rbSliderTitles[rbSliderImages.length - 1].classList.add('active');
                rbSliderDots[rbSliderImages.length - 1].classList.add('active');
            } else {
                activeImg.previousElementSibling.classList.add('active');
                activeTitle.previousElementSibling.classList.add('active');
                activeDot.previousElementSibling.classList.add('active');
            }
        } else {
            if (activeImg.nextElementSibling === null) {
                rbSliderImages[0].classList.add('active');
                rbSliderTitles[0].classList.add('active');
                rbSliderDots[0].classList.add('active');
            } else {
                activeImg.nextElementSibling.classList.add('active');
                activeTitle.nextElementSibling.classList.add('active');
                activeDot.nextElementSibling.classList.add('active');
            }
        }
    }
    //Левая стрелка над картинками
    arrowLeftWrapper.addEventListener('click', () => {
        arrowClick('left');
    });
    //Правая стрелка над картинками
    arrowRightWrapper.addEventListener('click', () => {
        arrowClick('right');
    });
    //Левая стрелка, где точки
    leftControlArrow.addEventListener('click', () => {
        arrowClick('left');
    });
    //Правая стрелка, где точки
    rightControlArrow.addEventListener('click', () => {
        arrowClick('right');
    });
});



// rbSlider End