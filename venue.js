/* ==================================================
   Image Modal（ギャラリー拡大表示）
================================================== */

/* --- 要素取得 --- */
const galleryImages = document.querySelectorAll(".gallery-item img");
const modal        = document.getElementById("image-modal");
const modalImg     = document.getElementById("modal-img");
const subImg       = document.getElementById("modal-sub-img");
const closeBtn     = document.querySelector(".modal-close");
const DocImg = [...document.images]; 

/* --- 初期状態 --- */
// サブ画像（魚拓）は通常非表示
subImg.style.display = "none";

// 状態管理
let currentMainSrc = "";   // 元画像のURLを保持
let isSubMode      = false; // 魚拓表示中かどうか


/* ==================================================
   ギャラリー画像クリック → モーダル表示
================================================== */
galleryImages.forEach(img => {
    img.addEventListener("click", () => {

        // モーダルを表示
        modal.style.display = "flex";

        // メイン画像をセット
        modalImg.src = img.src;
        currentMainSrc = img.src;

        // 通常モードに戻す
        modalImg.classList.remove("is-sub");
        isSubMode = false;

        // キッチンカー画像のときだけサブ画像を表示
        if (img.src.includes("kitchencar")) {
            subImg.style.display = "block";
        } else {
            subImg.style.display = "none";
        }
    });
});


/* ==================================================
   サブ画像（魚拓）クリック → 表示切替
================================================== */
subImg.addEventListener("click", () => {

    // メイン表示を魚拓画像に切替
    modalImg.src = subImg.src;
    modalImg.classList.add("is-sub");

    // 魚拓モードON
    isSubMode = true;
});


/* ==================================================
   閉じる処理（×ボタン）
================================================== */
closeBtn.addEventListener("click", () => {

    if (isSubMode) {
        // 魚拓表示中 → 元画像へ戻す
        modalImg.src = currentMainSrc;
        modalImg.classList.remove("is-sub");
        isSubMode = false;
    } else {
        // 通常表示 → モーダルを閉じる
        modal.style.display = "none";
    }
});


/* ==================================================
   背景クリックで閉じる
================================================== */
modal.addEventListener("click", (e) => {

    // 背景（画像以外）をクリックしたときのみ
    if (e.target === modal) {

        if (isSubMode) {
            // 魚拓表示中 → 元画像へ戻す
            modalImg.src = currentMainSrc;
            modalImg.classList.remove("is-sub");
            isSubMode = false;
        } else {
            // 通常表示 → モーダルを閉じる
            modal.style.display = "none";
        }
    }
});

for(x of DocImg)x.oncontextmenu=x.ondragstart=_=>![];