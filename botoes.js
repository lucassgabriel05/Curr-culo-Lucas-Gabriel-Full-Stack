window.onload = function() {
    const btn = document.getElementById('baixar-curriculo');
    const areaCurriculo = document.getElementById('caixa_principal');

    if (btn) {
        btn.addEventListener('click', function() {
            console.log("Iniciando geração do PDF...");

            const { jsPDF } = window.jspdf;
            const doc = new jsPDF('p', 'pt', 'a4');

           
            const originalWidth = areaCurriculo.style.width;
            t
            areaCurriculo.style.width = '1000px' 

            html2canvas(areaCurriculo, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                scrollY: -window.scrollY, // Garante que ignore o scroll atual
                windowWidth: 1000          // Força o html2canvas a pensar que a janela tem 1000px
            }).then(canvas => {
                // 3. Restaura o estilo original imediatamente após o "print"
                areaCurriculo.style.width = originalWidth;

                const imgData = canvas.toDataURL('image/png');
                
                const pdfWidth = doc.internal.pageSize.getWidth();
                // Calcula a altura proporcional para não distorcer a imagem
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

                doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                doc.save("Curriculo_Lucas_Gabriel_FullStack.pdf");
                console.log("PDF Gerado com sucesso!");
            }).catch(err => {
                areaCurriculo.style.width = originalWidth; // Restaura em caso de erro também
                console.error("Erro no html2canvas:", err);
            });
        });
    } else {
        console.error("Botão 'baixar-curriculo' não encontrado no HTML.");
    }
};