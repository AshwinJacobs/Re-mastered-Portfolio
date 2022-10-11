function toggleMobileBtn() {
    document.getElementById('m-btn').classList.toggle('arrow-state');
    document.getElementById('nav').classList.toggle('nav-expand-state');
  }
  
  // SEAT ANIMATION TOOL
  document.addEventListener("DOMContentLoaded", function () {
    const timeBetweenAnimations = 90;
  
    reloadAnimations(timeBetweenAnimations);
  });
  
  function reloadAnimations(timeBetweenAnimations) {
    let parentAnimations = document.getElementsByClassName("parentAnimation");
    let childAnimations = document.getElementsByClassName("childAnimation");
    let heroAnimations = document.getElementsByClassName("heroAnimation");
    let imageAnimations = document.getElementsByClassName("image-animation");
    let fadeInAnimations = document.getElementsByClassName("fade-in-animation");
    let pageFadeAnimations = document.getElementsByClassName(
      "page-fade-animation"
    );
  
    resetAnimationsArray(parentAnimations, "parentAnimationKeyframes");
    resetAnimationsArray(childAnimations, "childAnimationKeyframes");
    resetAnimationsArray(heroAnimations, "heroAnimationKeyframes");
    resetAnimationsArray(imageAnimations, "image-animation-keyframes");
    resetAnimationsArray(fadeInAnimations, "fade-in-animation-keyframes");
    resetAnimationsArray(pageFadeAnimations, "page-fade-animation-keyframes");
  
    playAnimationsArray(
      parentAnimations,
      timeBetweenAnimations,
      "parentAnimationKeyframes"
    );
    playAnimationsArray(
      childAnimations,
      timeBetweenAnimations,
      "childAnimationKeyframes"
    );
    playAnimationsArray(
      heroAnimations,
      timeBetweenAnimations,
      "heroAnimationKeyframes"
    );
    playAnimationsArray(
      imageAnimations,
      timeBetweenAnimations,
      "image-animation-keyframes"
    );
    playAnimationsArray(
      fadeInAnimations,
      timeBetweenAnimations,
      "fade-in-animation-keyframes"
    );
  
    playAnimationsArray(
      pageFadeAnimations,
      timeBetweenAnimations,
      "page-fade-animation-keyframes"
    );
  }
  
  function resetAnimationsArray(animationsArray, animation) {
    for (let i = 0; i < animationsArray.length; i++) {
      animationsArray[i].classList.remove(animation);
    }
  }
  
  function playAnimationsArray(
    animationsArray,
    timeBetweenAnimations,
    animation
  ) {
    let delay = 0;
  
    for (let i = 0; i < animationsArray.length; i++) {
      delay += timeBetweenAnimations;
      playAnimation(animationsArray, i, delay, animation);
    }
  }
  
  function playAnimation(animationsArray, index, delay, animation) {
    setTimeout(function () {
      animationsArray[index].classList.add(animation);
    }, delay);
  }
  
  // END SEAT ANIMATION  TOOL
  