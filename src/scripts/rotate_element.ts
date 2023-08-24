export function rotateElement(element: HTMLElement) {
  let rotation = 0;
  setInterval(() => {
    rotation += 2;
    element.style.transform = `rotate(${rotation}deg)`;
  }, 10);
}