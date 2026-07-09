let hp = 42;

function applyDamage() {
    const damage =
        parseInt(document.getElementById("damage").value) || 0;

    hp -= damage;

    if (hp < 0) {
        hp = 0;
    }

    document.getElementById("hp").textContent = hp;
}
