import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

const AddImage = ({image, setImage}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onImage = async (e) => {
    e.preventDefault()
    let data = {file_name: selectedImage.name, status: 1 }
    try {
    await fetch('https://aubrey.digital/phpAPI/api/images/create.php', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify(data)
      });
    } catch (err) {
      console.log(e.target[0].files[0].name);
    }
        if (selectedImage){
 
       var formData = new FormData();
       formData.append("imageUp", selectedImage);
 
       var xhttp = new XMLHttpRequest();
 
       // Set POST method and ajax file path
       xhttp.open("POST", "https://www.aubrey.digital/phpAPI/ajaxfile.php", true);
 
       // call on request changes state
       xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
 
            var response = this.responseText;
            if(response == 1){
               alert("Upload successfully.");
            }else{
               alert("File not uploaded.");
            }
          }
       };
 
       // Send request with data
       xhttp.send(formData);
 
    }
    
  }
  //   let data
  //   if (selectedImage !== null) {
  //   data = {file_name: selectedImage.name, status: 1 }
  //   } 
  //   // console.log(e.target[0].files[0])
  //   console.log(selectedImage)
  //   var formData = new FormData();
  //   formData.append("image", selectedImage);
  //   console.log(formData)
  //     try {
  //       await fetch('https://aubrey.digital/phpAPI/api/images/create.php', {
  //       method: 'POST',
  //       mode: 'no-cors',
  //       headers: {
  // 'Content-Type': 'multipart/form-data'
  //       },
  //       body: JSON.stringify(data)
  //       });
  //     } catch (err) {
  //       console.log(e.target[0].files[0].name);
  //     }
  // }
  
  // // const uploadFile = (e) => {


    
  return (
    <div>
      <h1>Upload Image</h1>
      {selectedImage && (
        <div>
        <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <Form onSubmit={onImage}>
      <input
        type="file"
        name="imageUp"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
          setImage(event.target.files[0].name);
        }}
      />
      <input type="submit" name="submit" value="Upload image"/>
      </Form>
    </div>
  );
};

export default AddImage;