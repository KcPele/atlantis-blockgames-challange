import React, { useState, useCallback } from "react";

import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
function DragAndDrop() {
    //excell setters
  const [excelFile, setExcelFile] = useState(null);
  //handling errors
  const [excelFileError, setExcelFileError] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0]);
    const fileType = ["application/vnd.ms-excel"];
    const file = acceptedFiles[0]
    if (file) {
      //checking to see if the file is an excel file
      if (file && fileType.includes(file.type)) {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);

        fileReader.onload = (e) => {
          setExcelFileError(null);
          const bufferArray = e.target.result;
          //wookBook(wb)
          const wookBook = XLSX.read(bufferArray, { type: "buffer" });
          //getting the name of the excel sheet
          const wookSheetName = wookBook.SheetNames[0];

          const wookSheet = wookBook.Sheets[wookSheetName];

          const data = XLSX.utils.sheet_to_json(wookSheet);
          setExcelFile(data);
        };
      } else {
        setExcelFileError("Plese select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("select a file");
    }
 
  }, []);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
console.log("testing")
  return (
    <div className="drop-container">
      <div className="drop" {...getRootProps()}>
        <input {...getInputProps()} />
        
        {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
      </div>
    </div>
  );
}
export default DragAndDrop;
