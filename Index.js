let controllerIndex = null;

window.addEventListener("gamepadconnected", (event) => {
    const gamepad = event.gamepad;
    controllerIndex = gamepad.index;
    console.log("connected")
});

window.addEventListener("gamepaddisconnected", (event) => {
  controllerIndex = null;
  console.log("disconnected")
 });

 function handleButtons(buttons){
    for(let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        const buttonElement = document.getElementById(`controller-b${i}`);
        const selectedButtonClass = "selected-button";

        if(buttonElement){
            if(button.value > 0){
                buttonElement.classList.add(selectedButtonClass);
            }
            else{
                buttonElement.classList.remove(selectedButtonClass);
            }
        }
    }
 }
 
 function gameLoop() {
    if(controllerIndex !== null){
        const gamepad = navigator.getGamepads()[controllerIndex];
        handleButtons(gamepad.buttons)
    }
    requestAnimationFrame(gameLoop)
 }

 gameLoop();