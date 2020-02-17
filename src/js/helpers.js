export default function cr(tag, className) {
    const el = document.createElement(tag);
    if (className) el.classList.add(className);
    return el;
}