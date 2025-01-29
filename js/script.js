
//   DOMContentLoaded-гарантирует, что ваш скрипт будет выполнен только после того, как весь HTML будет загружен

document.addEventListener("DOMContentLoaded", () => {
  const buttonDarkMode = document.querySelector(".dark__mode");
  const header = document.querySelector(".header");
  const project = document.querySelector(".secthion__projects");
  const skills = document.querySelector(".skills");
  const contacts = document.querySelector(".main__contacts");
  const links = document.querySelectorAll('.nav-list__link');
  const currentUrl = window.location.href;


  

  // цикл опрежделения на какой страницы мы находимся и добавление к ней класс active
  links.forEach(el=>{
    if (el.href.includes(currentUrl)) {
      el.classList.add('nav-list__link-active');
    }
    else{
      el.classList.remove('nav-list__link-active');
    }
    console.log(currentUrl);
    
  })

  // Временно отключаем анимацию для кнопки
  if (buttonDarkMode) {
    buttonDarkMode.classList.add('no-transition');
  }

  // Проверяем состояние темы
  if (localStorage.getItem("darkMode") === "dark") {
    buttonDarkMode.classList.add("dark__mode_active");
    if (header) {
      header.classList.add("dark");
    }
    if (project) {
      project.classList.add("dark");
    }
    if (skills) {
      skills.classList.add("dark");
    }
    if (contacts) {
      contacts.classList.add("dark");
    }
  }

  // Убираем класс no-transition после загрузки
  requestAnimationFrame(() => {
    if (buttonDarkMode) {
      buttonDarkMode.classList.remove('no-transition');
    }

    buttonDarkMode.addEventListener("click", () => {
      buttonDarkMode.classList.toggle("dark__mode_active");
      const isDark = buttonDarkMode.classList.contains("dark__mode_active");
      if (header) {
        header.classList.toggle("dark");
      }
      if (project) {
        project.classList.toggle("dark");
      }
      if (skills) {
        skills.classList.toggle("dark");
      }
      if (contacts) {
        contacts.classList.toggle("dark");
      }

      // Сохраняем состояние в localStorage
      if (isDark) {
        localStorage.setItem("darkMode", "dark");
      } else {
        localStorage.setItem("darkMode", "light");
      }
    });
  });
});
