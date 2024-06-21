// Select elements
let cv = document.getElementById('anoukCV');
let downloadBtn = document.getElementById('downloadBtn');

// Function to generate PDF
function generateCV() {
  // Set up the options object
  let opt = {
    margin:       1,
    filename:     'Anouk_Rodrigo_CV.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Use html2pdf library to generate PDF
  html2pdf().from(cv).set(opt).save();
}

// Add click event listener to the download button
downloadBtn.addEventListener('click', generateCV);
