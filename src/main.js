import './style.css'
import gsap from 'gsap'

// 1. LOGIC MODAL PENDAFTARAN
const buttons = document.querySelectorAll('.buka-regis');
const modal = document.getElementById('modal-regis');
const tutup = document.getElementById('tutup-regis');
const regisInfo = document.getElementById('regis-info');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lomba = btn.getAttribute('data-lomba');
        const tingkat = btn.getAttribute('data-tingkat');

        // Isi info lomba secara otomatis
        regisInfo.innerText = `${lomba} - Tingkat ${tingkat}`;

        // Tampilkan Modal (Slide Up)
        modal.style.transform = 'translateY(0)';
    });
});

tutup.addEventListener('click', () => {
    modal.style.transform = 'translateY(100%)';
});

// 2. ANIMASI LOADING (Simple GSAP)
window.addEventListener('load', () => {
    gsap.from('h1', { y: 50, opacity: 0, duration: 1, ease: 'back.out' });
});
