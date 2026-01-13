const showSocial = (toggleCard, socialCard) => {
  const toggle = document.getElementById(toggleCard);
  const social = document.getElementById(socialCard);

  toggle.addEventListener("click", () => {
    if (social.classList.contains("animation")) {
      social.classList.add("down-animation");

      setTimeout(() => {
        social.classList.remove("down-animation")
      },1500);
    }
    social.classList.toggle("animation");
  });
};

showSocial("card-toggle", "card-social");
