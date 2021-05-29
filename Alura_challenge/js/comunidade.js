document.querySelectorAll('.interatividade').forEach(selectHeart => {
    selectHeart.addEventListener('click', event => {
        const svg = selectHeart.querySelector('#like');
        svg.style.color = '#F65151';
  })
})

document.querySelectorAll('.interatividade').forEach(selectHeart => {
    selectHeart.addEventListener('dblclick', event => {
        const svg = selectHeart.querySelector('#like');
        svg.style.color = 'white';
  })
})