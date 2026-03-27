window.onload = function() {
  const btn = document.getElementById('baixar-curriculo');
  const areaCurriculo = document.getElementById('caixa_principal');

  if (btn) {
    btn.addEventListener('click', function() {

      const { jsPDF } = window.jspdf;
      const doc = new jsPDF('p', 'pt', 'a4');

      html2canvas(areaCurriculo, {
        scale: 3,
        useCORS: true
      }).then(canvas => {

        const imgData = canvas.toDataURL('image/png');

        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = doc.internal.pageSize.getHeight();

        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        // primeira página
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;

        // páginas extras
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pdfHeight;
        }

        doc.save("Curriculo_Lucas_Gabriel_FullStack.pdf");
      });
    });
  }
};