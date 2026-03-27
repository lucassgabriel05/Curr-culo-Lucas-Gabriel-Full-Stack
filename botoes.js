document.getElementById('baixar-curriculo').addEventListener('click', () => {
    
    const elemento = document.getElementById('caixa_principal');

    
    const opcoes = {
        margin: [10, 10, 10, 10], 
        filename: 'Curriculo_Lucas_Gabriel_FullStack.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 1.7,       
            useCORS: true,    
            windowWidth: 900, 
            scrollY: 0,       
            scrollX: 0
        },
        jsPDF: { 
            unit: 'pt', 
            format: 'a4', 
            orientation: 'portrait' 
        }
    };

    
    html2pdf().set(opcoes).from(elemento).save();
});