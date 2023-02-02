
export const scroll = () => {
  const sticky = document.querySelector("#main").offsetTop;
  document.body.scrollTop = sticky - 1; // For Safari
  document.documentElement.scrollTop = sticky - 1;
};
