class JokeView {
  handlerBtn(handler) {
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", function () {
      handler();
    });
  }

  printJoke(res) {
    const cont = document.querySelector(".the-joke-container");
    const id = res.id;
    const joke = res.joke;
    const markup = this._generateMarkup(id, joke);

    cont.innerHTML = markup;
  }

  _generateMarkup(id, joke) {
    return `
      <div class="the-joke-id">Joke #${id}</div>
      <hr />
      <div class="the-joke">${joke}</div>
    `;
  }
}

export default new JokeView();
