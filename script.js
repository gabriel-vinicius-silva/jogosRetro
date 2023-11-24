document.addEventListener("DOMContentLoaded", function () {
    const shooter = document.getElementById("shooter");
    const target = document.getElementById("target");

    function getRandomPosition(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    function updateTargetPosition() {
        const maxX = document.getElementById("game-container").offsetWidth - target.offsetWidth;
        const maxY = document.getElementById("game-container").offsetHeight - target.offsetHeight;

        const newX = getRandomPosition(maxX);
        const newY = getRandomPosition(maxY);

        target.style.left = newX + "px";
        target.style.top = newY + "px";
    }

    function shoot() {
        const shooterX = shooter.offsetLeft + shooter.offsetWidth / 2;
        const shooterY = shooter.offsetTop;
        const targetX = target.offsetLeft + target.offsetWidth / 2;
        const targetY = target.offsetTop + target.offsetHeight / 2;

        const distance = Math.sqrt(Math.pow(targetX - shooterX, 2) + Math.pow(targetY - shooterY, 2));

        if (distance < 50) {
            alert("Você acertou o alvo!");
            updateTargetPosition();
        } else {
            alert("Você errou! Tente novamente.");
        }
    }

    updateTargetPosition();
});
