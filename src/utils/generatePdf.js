import { jsPDF } from "jspdf";


export function generatePdf(name, email, total, questions, answers) {
    const doc = new jsPDF();

    let y = 40;

    doc.addImage("/images/logo.png","PNG",10,10, 15, 15);


    doc.setFontSize(18);
    doc.text("Quote Summary", 10, y);

    y += 10;


    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 10, y);
    y += 8;

    doc.text(`Email: ${email}`, 10, y);
    y += 10;


    doc.line(10, y, 200, y);
    y += 10;

    questions.forEach((q) => {
        const answer = answers[q.id];

        if (!answer) return;

        doc.setFontSize(12);
        doc.text(q.question, 10, y);
        y += 6;

        if (Array.isArray(answer)) {
            answer.forEach((item) => {
                doc.text(`- ${item.label} (${item.price}$)`, 15, y);
                y += 6;
            });
        } else {
            doc.text(`${answer.label} (${answer.price}$)`, 15, y);
            y += 6;
        }

        y += 4;

        if (y > 270) {
            doc.addPage();
            y = 10;
        }
    });




    doc.setFontSize(14);
    doc.text(`Total: $${total}`, 10, y + 10);


    doc.save("quote.pdf");
}