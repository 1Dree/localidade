(() => {
  const input = document.querySelector("input"),
    result = document.querySelector("#result"),
    actionBtn = document.querySelector("#action"),
    p = result.querySelectorAll("p");

  const getError = (err) => {
    console.log(err);
  };
  const getURLData = (url) => {
    return fetch(url)
      .then((data) => {
        return data.json().then(correctData).catch(getError);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderResult = (data) => {
    cleanResult();

    p[0].append(`${data.logradouro}`);
    p[1].append(`${data.bairro}`);
    p[2].append(`${data.localidade}`);
    p[3].append(`${data.uf}`);
    p[4].append(`${data.ibge}`);
  };

  const cleanResult = () => {
    p.forEach((item) => {
      item.innerHTML = "";
    });
  };

  const correctData = (data) => {
    if (data.erro) {
      alert("CEP não encontrado");
      cleanResult();
    } else {
      renderResult(data);
    }
  };

  actionBtn.addEventListener("click", () => {
    getURLData(`https://viacep.com.br/ws/${input.value}/json/`);
  });
})();
