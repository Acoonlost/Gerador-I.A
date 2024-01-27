document.getElementById('add-slide').addEventListener('click', function() {
    const presentationContainer = document.getElementById('presentation-container');
    const newSlide = document.createElement('div');
    newSlide.className = 'slide';
    newSlide.innerText = 'New Slide';
    presentationContainer.appendChild(newSlide);
});

// Initialize the presentation with 3 slides
document.addEventListener('DOMContentLoaded', function() {
    const presentationContainer = document.getElementById('presentation-container');
    for (let i = 0; i < 3; i++) {
        const newSlide = document.createElement('div');
        newSlide.className = 'slide';
        newSlide.innerText = 'Slide ' + (i + 1);
        presentationContainer.appendChild(newSlide);
    }
});

function generatePresentationPDF() {
    const presentationContainer = document.getElementById('presentation-container');
    const pdf = new jsPDF('p', 'pt', 'letter');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    for (let i = 0; i < presentationContainer.children.length; i++) {
        const slide = presentationContainer.children[i];
        const slideWidth = pdfWidth - 72; // Subtract margins
        const slideHeight = slide.offsetHeight * 1.33; // Convert pixels to points and adjust for A4 aspect ratio

        if (slideHeight > pdfHeight) {
            pdf.addPage();
        }

        pdf.setFontSize(16);
        pdf.text(72, 72, slide.innerText);
        pdf.fromHTML(
            slide,
            72,
            pdfHeight - (slideHeight + 72),
            {
                'width': slideWidth,
            },
            function() {
                if (i === presentationContainer.children.length - 1) {
                    pdf.save('presentation.pdf');
                }
            }
        );
    }
}

document.getElementById('download-presentation').addEventListener('click', function() {
    generatePresentationPDF();
});
