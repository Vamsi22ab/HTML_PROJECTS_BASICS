function changeColor() {
    // Array of colors to change the background to
    const colors = ['#f0f0f0', '#f39c12', '#8e44ad', '#3498db', '#2ecc71'];
    
    // Get a random index
    const randomIndex = Math.floor(Math.random() * colors.length);
    
    // Change the background color
    document.body.style.backgroundColor = colors[randomIndex];
}
