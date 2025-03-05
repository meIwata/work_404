document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.querySelector('button');
    closeButton.addEventListener('click', function() {
        window.close();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.querySelector('button');
    closeButton.addEventListener('click', function() {
        window.close();
    });

    // 禁止滾輪滾動
    window.addEventListener('wheel', function(e) {
        e.preventDefault();
    }, { passive: false });

    // 禁止鍵盤滾動
    window.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'PageUp' || e.key === 'PageDown' || e.key === 'Home' || e.key === 'End') {
            e.preventDefault();
        }
    }, { passive: false });
});