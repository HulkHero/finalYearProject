import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import download from "downloadjs";

export async function svgToPdf(container) {
    const svg = container.querySelector("svg");
    const { width, height } = svg.getBBox();
    const doubleWidth = width * 2;
    const doubleHeight = height * 2;
    const canvas = document.createElement("canvas");
    canvas.width = doubleWidth;
    canvas.height = doubleHeight;
    const ctx = canvas.getContext("2d");

    const img = new Image(doubleWidth, doubleHeight);
    const svgBlob = new Blob([svg.outerHTML], {
        type: "image/svg+xml;charset=utf-8"
    });
    const URL = window.URL || window.webkitURL || window;
    const svgUrl = URL.createObjectURL(svgBlob);
    img.src = svgUrl;

    img.addEventListener("load", () => {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, doubleWidth, doubleHeight);
        const png = canvas.toDataURL();
        pngToPdfDownload(png);
        URL.revokeObjectURL(svgUrl);
        return png;
    });
    img.addEventListener("error", (err) => {
        URL.revokeObjectURL(svgUrl);
        throw new Error(err);
    });
}

// an array of pngs for each graph could be passed in
export async function pngToPdfDownload(png) {
    console.log(png);
    const pngImageBytes = await fetch(png).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.create();

    const pngImage = await pdfDoc.embedPng(pngImageBytes);
    const pngDims = pngImage.scale(0.35);

    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    const fontSize = 30


    page.drawText('Report', {
        x: width / 2 - timesRomanFont.widthOfTextAtSize('Report', fontSize) / 2,
        y: height - 3 * fontSize,
        size: 30,
        font: timesRomanFont,

    })
    page.moveTo(110, 200);
    page.drawImage(pngImage, {
        x: page.getWidth() / 2 - pngDims.width / 2,
        y: page.getHeight() / 2 + 70,
        width: pngDims.width,
        height: pngDims.height
    });

    const pdfBytes = await pdfDoc.save();
    download(pdfBytes, "export.pdf", "application/pdf");
}
