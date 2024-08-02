// GSAP animations for spinning elements
gsap.to("#Outer_spinners", {
    rotation: 360,
    transformOrigin: "50% 50%",
    repeat: -1,
    duration: 15,
    ease: "linear"
});
gsap.to("#Inner_spinners", {
    rotation: -360, // Rotate anticlockwise
    transformOrigin: "50% 50%",
    repeat: -1,
    duration: 15,
    ease: "linear"
});
gsap.to("#Big_circle_1", {
    rotation: 360,
    transformOrigin: "50% 50%",
    repeat: -1,
    duration: 15,
    ease: "linear"
});
gsap.to("#Big_circle_2", {
    rotation: -360, // Rotate anticlockwise
    transformOrigin: "50% 50%",
    repeat: -1,
    duration: 15,
    ease: "linear"
});
gsap.to("#Inner_Spinner2", {
    rotation: 360,
    transformOrigin: "50% 50%",
    repeat: -1,
    duration: 15,
    ease: "linear"
});
gsap.to("#Outer_Spinner2", {
    rotation: -360, // Rotate anticlockwise
    transformOrigin: "50% 50%",
    repeat: -1,
    duration: 15,
    ease: "linear"
});

// Function to zoom to a specific element
function zoomToElement(element, callback) {
    const rect = element.getBoundingClientRect();
    const zoomContainer = document.getElementById('zoom-container');

    // Remove existing zoom class if any
    zoomContainer.classList.remove('zoomed');
    
    // Reflow the element to ensure the transition applies
    void zoomContainer.offsetWidth;
    
    // Set transform origin based on the element position
    zoomContainer.style.transformOrigin = `${rect.left + rect.width / 2}px ${rect.top + rect.height / 2}px`;
    zoomContainer.classList.add('zoomed');

    // Execute the callback after the zoom animation completes
    zoomContainer.addEventListener('transitionend', () => {
        callback();
    }, { once: true });
}

// Attach event listeners
document.getElementById('about-link').addEventListener('click', (event) => {
    event.preventDefault();
    const leftSvgContainer = document.querySelector('.left-svg-container');
    zoomToElement(leftSvgContainer, () => {
        document.getElementById('about-me-tab').style.display = 'block';
    });
});

document.getElementById('projects-link').addEventListener('click', (event) => {
    event.preventDefault();
    const rightSvgContainer = document.querySelector('.right-svg-container');
    zoomToElement(rightSvgContainer, () => {
        document.getElementById('projects-tab').style.display = 'block';
    });
});
