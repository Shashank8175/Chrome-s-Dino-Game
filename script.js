const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 20;

const worldElem = document.querySelector('[data-world]');

setPixenToWorldScale()
window.addEventListener('resize', setPixenToWorldScale)

let lastTime;
function update(time) {
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime;
    console.log(delta);

    lastTime = time
    window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update)

function setPixenToWorldScale() {
    let worldToPixelScale;
    if(window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
        worldToPixelScale = window.innerWidth / WORLD_WIDTH;
    } else {
        worldToPixelScale = window.innerHeight / WORLD_HEIGHT;
    }

    worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`;
    worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
}