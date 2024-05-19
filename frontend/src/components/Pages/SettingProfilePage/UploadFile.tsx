import React, { useState } from "react";  

const UploadFile = () => {

    const css = `
        .btn{
            display: inline-block; 
            width: 100%;
            height: max(5vh, 4.5vw);
            border-radius: 20vw;
            background: #3b3bfb;
            border: solid min(0.4vh, 0.4vw) #1818d2;
            text-decoration: none;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: whitesmoke; 
            font-weight: 600;
            font-size: max(2.5vh, 2.5vw); 
            display: block; 
            text-align: center; 
        }

        .btn:hover{
            background: #6868ff; 
            border-color: #4949c9;
            cursor: pointer;
        }

        .btnText{
            transform: translateY(18%); 
        }
    `; 

    const [file, setFile] = useState<File | null>(null); 

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);  
        }
    }; 

    const handleUpload = async () => {
        // fill later
    }; 

    return(
        <>
            <style>
                {css}
            </style>

            <label htmlFor="file" className="btn">
                <div className="btnText">Upload</div>
            </label>
            <input id="file" type="file" onChange={handleFileChange} style={{display: "none"}} 
            accept="image/png, image/jpg, image/jpeg"/>
        </>
    )
}

export default UploadFile; 