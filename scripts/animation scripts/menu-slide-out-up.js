const button = document.querySelector(".menu-slide-out-up__button");
const menu = document.querySelector(".menu-slide-out-up__menu");

button.addEventListener("click", (event) => {
  event.preventDefault();
  menuAnimation();
});

function menuAnimation() {
  let rightModifier = 50;

  let cancelAnimation = (interval) => {
    clearInterval(interval);
  };

  let animationForward = setInterval(() => {
    let run = true;
    // Animations go here
    menu.style.right = `${rightModifier}px`;
    console.log(rightModifier);

    // Check run conditions
    if (rightModifier > 200) {
      cancelAnimation(animationForward);
      console.log("Too big");
    }

    // Up the modifiers
    rightModifier += 5;
  }, 10);
}
