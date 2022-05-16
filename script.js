const btn = document.getElementById('btn');
btn.onclick = function(){
    const modal = document.getElementById('modal-box');
    modal.style.display= 'block';
}
const close = document.getElementById('closeBtn')
close.onclick = function(){
    const modal = document.getElementById('modal-box');
    modal.style.display= 'none';
}
