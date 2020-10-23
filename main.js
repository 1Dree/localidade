(() => {
  const input = document.querySelector("input"),
    result = document.querySelector("#result"),
    actionBtn = document.querySelector("#action");

  const getURLData = (url) => {
    return fetch(url)
      .then((data) => {
        return data.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderResult = (data) => {
    const p = result.querySelectorAll("p");

    p.forEach((item) => {
      item.innerHTML = "";
    });

    p[0].append(`${data.logradouro}`);
    p[1].append(`${data.bairro}`);
    p[2].append(`${data.localidade}`);
    p[3].append(`${data.uf}`);
    p[4].append(`${datba.ibge}`);
  };

  actionBtn.addEventListener("click", () => {
    getURLData(`https://viacep.com.br/ws/${input.value}/json/`)
      .then((data) => {
        if (data.erro) {
          alert("CEP não encontrado");
          return;
        }
        renderResult(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
})();
