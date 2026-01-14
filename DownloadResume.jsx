import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

const DownloadResume = () => {
  const resumeRef = useRef(null);

  const downloadPDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [297, 210], // A4 page size in mm
    });

    // Get the resume template element
    const resumeTemplate = resumeRef.current;

    // Convert the resume template element to a canvas
    html2canvas(resumeTemplate, {
      allowTaint: true,
      useCORS: true,
      scale: 2.8,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.1);

      // Set the image size and position to fit the page
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var position = 0;

      // Add the canvas image to the PDF document
      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Save the PDF document
      doc.save("resume.pdf");
    });
  };

  return (
    <div>
      <button onClick={downloadPDF}>Generate Resume PDF</button>
      <div ref={resumeRef} style={{ width: "60%", margin: "5rem" }}>
        {/* Render your resume template component here */}
        {/* <ResumeTemplate /> */}
      </div>
    </div>
  );
};

export default DownloadResume;
