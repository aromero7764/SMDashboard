const toggle = document.getElementById('toggle')
const toggleCircle = document.getElementById('toggle-circle')
const toggleLabel = document.getElementById('toggle-label')

const changeDarklight = () => {
    toggleCircle.classList.toggle('toggle_circle-right')
    document.body.classList.toggle('light-mode')
    if (toggleLabel.textContent === 'Dark Mode') {
        toggleLabel.textContent = 'Light Mode'
    } else {
        toggleLabel.textContent = 'Dark Mode'
    }
   
}

toggle.addEventListener('click', changeDarklight )

