window.onload = function() {
    const container = document.getElementById('loop-container');
    const content = container.innerHTML;
    
    // 中身をもう1セット追加して2倍にする
    container.innerHTML = content + content;
    
    // アニメーション用のクラスを付与
    container.classList.add('is-animation');
};
window.onload = function() {
    const container = document.getElementById('loop-container');
    const overlay = document.getElementById('modal-overlay');
    const modalImg = document.getElementById('modal-target-image');
    const closeBtn = document.querySelector('.close-btn');

    // 無限ループ用に複製
    container.innerHTML += container.innerHTML;
    container.classList.add('is-animation');

    // カードクリック時の処理
    container.addEventListener('click', (e) => {
        const card = e.target.closest('.drive-card');
        if (card) {
            const imgSrc = card.getAttribute('data-img'); // data-imgを取得
            modalImg.src = imgSrc; // ポップアップ内の画像URLを差し替え
            overlay.style.display = 'flex'; // 表示
        }
    });

    // 閉じる処理
    const closeModal = () => { overlay.style.display = 'none'; };
    closeBtn.onclick = closeModal;
    overlay.onclick = (e) => { if(e.target === overlay) closeModal(); };
};