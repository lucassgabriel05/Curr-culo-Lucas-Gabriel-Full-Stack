window.onload = function() {
    const btn = document.getElementById('baixar-curriculo');
    
    if (!btn) {
        console.error("Botão 'baixar-curriculo' não foi encontrado!");
        return;
    }

    btn.addEventListener('click', function() {
        const areaCurriculo = document.getElementById('caixa_principal');
        
        if (!areaCurriculo) {
            alert("Erro: A área do currículo não foi encontrada.");
            return;
        }

        console.log("Iniciando geração...");

        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'pt', 'a4');

        
        const originalWidth = areaCurriculo.style.width;

        
        areaCurriculo.style.width = '1000px';

        html2canvas(areaCurriculo, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            logging: true, 
            windowWidth: 1000,
            scrollY: 0
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            doc.save("Curriculo_Lucas_Gabriel.pdf");
            
            
            areaCurriculo.style.width = originalWidth;
            console.log("Sucesso!");
        }).catch(err => {
            console.error("Erro ao gerar canvas:", err);
            areaCurriculo.style.width = originalWidth;
        });
    });
};