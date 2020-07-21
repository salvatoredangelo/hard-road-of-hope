const navColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--nav-color')
const navColor2 = getComputedStyle(document.documentElement)
    .getPropertyValue('--nav-color-secondary')

window.onscroll = () => scrollFunction()

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.documentElement.style
            .setProperty('--nav-color-secondary', navColor)
    } else {
        document.documentElement.style
            .setProperty('--nav-color-secondary', navColor2)
    }
}