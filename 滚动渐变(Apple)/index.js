document.addEventListener('DOMContentLoaded', function() {
    const html = document.documentElement;
    const htmlH = html.offsetHeight;
    const screenH = html.clientHeight;
    const big_box = document.querySelector('.img-box');
    document.addEventListener('scroll', function() {
        let scrolled = (html.scrollTop + screenH) / htmlH;
        if (html.scrollTop === 0) scrolled = 0
        big_box.style.setProperty('--part-1', calculateOpacity(0.05, 0.15, scrolled))
        big_box.style.setProperty('--part-2', calculateOpacity(0.19, 0.23, scrolled))
        big_box.style.setProperty('--part-3', calculateOpacity(0.35, 0.40, scrolled))
        big_box.style.setProperty('--part-4', calculateOpacity(0.58, 0.63, scrolled))
        big_box.style.setProperty('--ending', calculateOpacity(0.80, 0.85, scrolled))
    })
})

function calculateOpacity(start, end, percent) {
    if (percent - start < 0) return 0
    if (percent - end > 0) return 1
    return (percent - start) / (end - start)
}