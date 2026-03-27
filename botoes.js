window.onload = function () {
  const btn = document.getElementById("baixar-curriculo");

  if (btn) {
    btn.addEventListener("click", function () {
      const elemento = document.getElementById("caixa_principal");

      const larguraOriginal = elemento.style.width;

      // força tamanho A4 temporário
      elemento.style.width = "210mm";

      const opcoes = {
        margin: 0,
        filename: "Curriculo_Lucas_Gabriel_FullStack.pdf",
        html2canvas: {
          scale: 2,
          useCORS: true
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait"
        },
        pagebreak: {
          mode: ["css", "legacy"]
        }
      };

      html2pdf()
        .set(opcoes)
        .from(elemento)
        .save()
        .then(() => {
          elemento.style.width = larguraOriginal;
        });
    });
  }
};