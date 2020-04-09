$ (function() {
	
	//Анимация разлетающихся элементов после загрузки страницы
	$('#fly__div-top').addClass("fly__animate fly__div-top_after");
	$('#fly__div-bottom').addClass("fly__animate fly__div-bottom_after");
	$('#fly__slash-bottom').addClass("fly__animate fly__slash-bottom_after");
	$('#fly__braces').addClass("fly__animate fly__braces_after");
	$('#fly__grid').addClass("fly__animate fly__grid_after");
	$('#fly__slash-top').addClass("fly__animate fly__slash-top_after");


	//СКРОЛЛ СТРАНИЦЫ
	//Функция отключения скролла
	function disable(){
		$('body').addClass('body__scroll-off');
	};

	//функция включения скролла
	function enable(){
		$('body').removeClass('body__scroll-off');
	}

	
	//ДЛЯ МОБИЛЬНОГО МЕНЮ

	//Открываем мобильное меню
	$('body').on('click','#btn-burger',function(e){
		e.preventDefault();
		$('#nav').addClass('nav-mobile-active');
		disable();
	});

	//Закрываем мобильное меню
	function closeMobileMenu() {
		$('#nav').removeClass('nav-mobile-active');
		enable();
	}

	//Вызов функции закрыть меню при нажатии на кнопку Закрыть
	$('body').on('click','#menu-mobile-off', function(e){
		e.preventDefault();
		closeMobileMenu();
	});

	//Вызов функции закрытия меню при нажатии вне мобильного меню
	$(document).mouseup(function (e){
		let div=$("#mobile-menu-content");
		if ((!div.is(e.target)) && (div.has(e.target).length===0)) {closeMobileMenu();};
	});	

	//Закрываем меню при нажатии на ссылку в header
	$('body').on('click','.nav__link', function(){
		closeMobileMenu();
	});


	//ОКНО ЗАКАКЗ УСЛУГИ ИЛИ ЗВОНКА
	//Открываем модальное окно Заказ услуги/звонка
	$('body').on ('click', function(e){
		let btnId = e.target.id;

		/*форма с емейлом*/
		if ((btnId == 'btn-more') || (btnId == 'btn-order-doing') || (btnId == 'btn-order-portfolio')) {
			$('#pop-up-order').css('display','block');
			$('#emailField').attr('required', '');
			disable();
		};

		/*форма без емейла*/
		if ((btnId == 'btn-call-back-header') || (btnId == 'call-back-icon') || (btnId == 'btn-call-back-footer') || (btnId == 'btn-text')) {
			$('#pop-up-order').css('display','block');
			$("#form-title").text('Заказать обратный звонок');
			$('#emailField').css('display','none');
			$('#span-email').css('display','none');
			$('#form-btn').val('Заказать звонок');
			disable();
		};
	});

	//Функция, которая закрывает модальное окно Заказ услуги/звонка и включает скролл
	function closeModalWithEmail() {
		//Возвращаю значения по умолчанию
		$("#form-title").text('Заказать консультацию');
		$('#emailField').removeAttr('required');
		$('#emailField').css('display','block');
		$('#span-email').css('display','block');
		$('#form-btn').val('Заказать консультацию');
		//Убираю с экрана форму
		$('#pop-up-order').css('display','none');	
		enable();
	}

	//Закрываем форму при нажатии на кнопку Закрыть
	$('body').on('click','#order-off', function(){
		closeModalWithEmail();
	})

	//Вызов функции закрытия меню при нажатии вне модального окна
	$(document).mouseup(function (e){
		var div=$("#pop-up-order-content");
		if ((!div.is(e.target)) && (div.has(e.target).length===0)) {closeModalWithEmail();};
	});	

	$('input[type="tel"]').inputmask({"mask": "+7 (999) 999-9999"}); //specifying options


	//ПЛАВНЫЙ ПЕРЕХОД ПО ССЫЛКАМ
	//Для плавного скролла при переходе по ссылкам
	$('nav a').on('click', function(event){
		event.preventDefault();

		let href = $(this).attr('href');			
		let offset = $(href).offset().top;

		$('body,html').animate ({
			scrollTop: offset, 
		}, 500);
	});


	//ДЛЯ СЛАЙДЕРА
	var swiper = new Swiper('.swiper-container', {
  	slidesPerView: 1,
  	spaceBetween: 30,
  	slidesPerGroup: 1,
  	loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
	  },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
    breakpoints: {
     	950: {
        slidesPerView: 2,
        spaceBetween: 33,
        },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },  
      1230: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });
});