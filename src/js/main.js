(() => {
  const inputTop = $('.i_fio');
  const inputBottom = $('.b_fio');

  const months = 'января февраля марта апреля мая июня июля августа сентября октября ноября декабря'
    .split(' ');

  /* set current date */
  (() => {
    const date = new Date();
    const dateString = `${date.getDate()} ${months[date.getMonth()]}`;

    $('.date-target').text(dateString);
    $('.current-year').text(date.getFullYear());
  })();

  const signature = (() => {
    const el = $('.signature-instance');
    const src = el.attr('src');

    function show() {
      el.show(200);
      setTimeout(() => el.attr('src', src), 0);
    }

    function hide() {
      el.hide(200);
    }

    return { show, hide };
  })();

  const button = (() => {
    const el = $('.access-btn');
    let timer;

    function enable() {
      timer = setInterval(() => {
        el.prop('disabled', false);
      }, 2000);
    }

    function disable() {
      clearInterval(timer);

      el.prop('disabled', true);
    }

    return { enable, disable };
  })();

  const checkbox = (() => {
    const wrap = $('#access-check');
    const el = wrap.find('#check');

    function enable() {
      el.prop('disabled', false);
      wrap.css('opacity', 1);
    }

    function disable() {
      el.prop('checked', false);
      el.prop('disabled', true);
      wrap.css('opacity', 0.3);
    }

    el.on('change', (event) => {
      const { checked } = event.target;

      if (checked) {
        signature.show();
        button.enable();
      } else {
        signature.hide();
        button.disable();
      }
    });

    disable();

    return { enable, disable };
  })();

  inputTop.on('input', ({ target }) => {
    const value = $(target).val();
    inputBottom.val(value);
    inputTop.css('border-color', '#b39c72');
    inputBottom.css('border-color', '#b39c72');

    if (value) {
      checkbox.enable();
    } else {
      checkbox.disable();
      button.disable();
      signature.hide();
      inputTop.css('border-color', '#a7a7a7');
      inputBottom.css('border-color', '#a7a7a7');
    }
  });

  inputBottom.on('input', ({ target }) => {
    const value = $(target).val();
    inputTop.val(value);
    inputTop.css('border-color', '#b39c72');
    inputBottom.css('border-color', '#b39c72');

    if (value) {
      checkbox.enable();
    } else {
      checkbox.disable();
      button.disable();
      signature.hide();
      inputTop.css('border-color', '#a7a7a7');
      inputBottom.css('border-color', '#a7a7a7');
    }
  });
})();
