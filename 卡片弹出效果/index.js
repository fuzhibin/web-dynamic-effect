document.addEventListener('DOMContentLoaded', function() {
    const getUpdate = document.querySelector('.getUpdate');
    const card = document.querySelector('.card');
    const close = document.querySelector('.close');
    getUpdate.addEventListener('click', e => {
        e.stopPropagation()
        card.style.display = 'flex';
    });
    close.addEventListener('click', _ => {
        card.style.display = 'none';
    });
    document.addEventListener('click', e => {
        e.stopPropagation()
        if (e.target != card) {
            close.click()
        }
    })

})