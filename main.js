import { getObject } from "./three/GLTFLoader/modelLoader";

window.addEventListener("scroll", () => {
    if (getObject()) {
        const scrollY = window.scrollY; 
        getObject().rotation.y = scrollY * 0.005; 
    }
})
/*
window.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

window.addEventListener('touchend', (e) => {
    const endY = e.changedTouches[0].clientY;
    if (startY > endY + 50) {
        if (currentSection < sections.length - 1) {
            currentSection++;
        }
    } else if (startY < endY - 50) {
        if (currentSection > 0) {
            currentSection--;
        }
    }
    sections[currentSection].scrollIntoView({ behavior: 'smooth' });
});*/