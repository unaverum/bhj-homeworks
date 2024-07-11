const cookie = document.getElementById('cookie');
const clicks = document.getElementById('clicker__counter');
let startValue = 0;

cookie.onclick = function() {
    let newClick = parseInt(clicks.textContent);
    clicks.textContent = newClick + 1;

    if (newClick % 2 == 0) {
        cookie.width = 220;
    }
    else cookie.width = 200;
}
