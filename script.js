const toggleSwitch = document.querySelector("input[type='checkbox']")
const toggleIcon = document.getElementById("toggle-icon")
const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")
const image3 = document.getElementById("image3")
const nav = document.getElementById("nav")
const textBox = document.getElementById("text-box")

// setting up image and nav, etc attributes based on dark or light parameter
const themeAttributes = (color, isDark) => {
    //params needing color
    localStorage.setItem("theme",color)
    document.documentElement.setAttribute('data-theme',color)   
    image1.src = `img/undraw_proud_coder_${color}.svg`
    image2.src = `img/undraw_feeling_proud_${color}.svg`
    image3.src = `img/undraw_conceptual_idea_${color}.svg`
  
    //params needing isDark
    nav.style.backgroundColor = isDark? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)' ;
    textBox.style.backgroundColor = isDark? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)'  ;
    toggleIcon.children[0].textContent = isDark? 'Dark Mode' : 'Light Mode';
    isDark?
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') ;  
}

const switchTheme = (event) => {
    event.target.checked ?        
    themeAttributes('dark', true) :
    themeAttributes('light', false)
}

//Event listeners
toggleSwitch.addEventListener("change",switchTheme)

//checking local storage for theme
const currentTheme = localStorage.getItem('theme')
if (currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme)
    if (currentTheme==="dark"){
        toggleSwitch.checked = true
        darkTheme()
    }
}