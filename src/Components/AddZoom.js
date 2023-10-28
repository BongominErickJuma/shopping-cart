export function addImageZoom() {
  document.querySelectorAll(".productItem").forEach((product) => {
    const image = product.querySelector("img");
    const button = product.querySelector("button");

    button.addEventListener("click", () => {
      const imgClone = image.cloneNode(true);
      imgClone.classList.add("zoom");

      document.body.appendChild(imgClone);

      setTimeout(() => {
        document.body.removeChild(imgClone);
      }, 1000);
    });
  });
}
