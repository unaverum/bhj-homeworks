document.addEventListener('DOMContentLoaded', () => {
    const bookView = document.getElementById('book');

    function changeFontSize(event) {
      event.preventDefault();
      document.querySelector('.font-size_active').classList.remove('font-size_active');
      event.target.classList.add('font-size_active');
//свойство event.target использовала по руководству на https://developer.mozilla.org/en-US/docs/Web/API/Event/target и из занятия "Объект события"
      bookView.classList.remove('book_fs-small', 'book_fs-big');
      
      const textSize = event.target.dataset.size;
//свойство dataset использовала по руководству на https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
      if (textSize) {
        bookView.classList.add(`book_fs-${textSize}`);
      }
    }

    function changeTextColor(event) {
      event.preventDefault();
  
      document.querySelector('.book__control_color .color_active').classList.remove('color_active');
      event.target.classList.add('color_active');

      bookView.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

      const textColor = event.target.dataset.textColor;
      if (textColor) {
        bookView.classList.add(`book_color-${textColor}`);
      }
    }

    function changeBckgColor(event) {
      event.preventDefault();

      document.querySelector('.book__control_background .color_active').classList.remove('color_active');
      event.target.classList.add('color_active');

      bookView.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

      const bgColor = event.target.dataset.bgColor;
      if (bgColor) {
        bookView.classList.add(`book_bg-${bgColor}`);
      }
    }

    document.querySelectorAll('.font-size').forEach(item => {
      item.addEventListener('click', changeFontSize);
    });

    document.querySelectorAll('.book__control_color .color').forEach(item => {
      item.addEventListener('click', changeTextColor);
    });

    document.querySelectorAll('.book__control_background .color').forEach(item => {
      item.addEventListener('click', changeBckgColor);
    });
  });