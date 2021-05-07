document.addEventListener("DOMContentLoaded", () => {
    let isPinned = false
    const h2 = document.querySelector('.title');
    var io = new IntersectionObserver(([e]) => {
        isPinned = (e.intersectionRatio < 1);
        console.log(isPinned);
    }, {
        threshold: [1]
    });
    io.observe(h2);
    document.addEventListener('scroll', () => {
        if (!isPinned) {
            let html = document.documentElement
            let height = parseInt(getComputedStyle(h2).getPropertyValue('height')) + parseInt(getComputedStyle(h2).getPropertyValue('margin-bottom'))
            let marginTop = parseInt(getComputedStyle(h2).getPropertyValue('margin-top'));
            let scrolled = (html.scrollTop - marginTop) / height;
            h2.style.setProperty('--scale', (1 - scrolled))
            console.log(scrolled);
        }
    })
})