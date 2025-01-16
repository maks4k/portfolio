const buttonDarkMode = document.querySelector('.dark__mode');
console.log(buttonDarkMode);

buttonDarkMode.addEventListener('click', () => {
buttonDarkMode.classList.toggle ('dark__mode_active');
})