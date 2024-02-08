const form = document.querySelector('form');
const input = document.getElementById("input");
const select = document.querySelector("select");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const QR = document.getElementById("QR");


const generateQRCode = async(e) => {
  e.preventDefault();
  // console.log(input.value , select.value);

  const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?"size=${select.value}&data=${input.value}`);

  // console.log(response.url);
  QR.setAttribute("src", response.url);
  form.reset();


  downloadBtn.addEventListener('click', ()=>{
    console.log("Download Btn")
    if(QR !== null){
      console.log("Data Not Show");
      let QRAtrr = QR.getAttribute('src');
    downloadBtn.setAttribute("href", QRAtrr);
    }else{
      console.log("Data Show")
    }
  })

};





form.addEventListener('submit', generateQRCode);