const input = document.getElementById("speed");
const changeSpeed = () => {
    console.log(input.value);
    const wings = document.getElementById("wings");
    wings.style.animationDuration = input.value+'s';
}