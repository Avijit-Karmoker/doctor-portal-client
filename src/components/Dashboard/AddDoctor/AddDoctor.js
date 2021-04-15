import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";

const AddDoctor = () => {
  const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
  };

  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (event) => {
    const newInfo = { ...info };
    newInfo[event.target.name] = event.target.value;
    setInfo(newInfo);
    console.log(info)
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    console.log(newFile)
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);

    fetch("http://localhost:5000/addADoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <SideBar></SideBar>
      <div className="col-md-10 float-end ps-3 pe-5" style={containerStyle}>
        <div className="p-5">
          <h2 className="text-brand">Add a Doctor</h2>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="Email"
                onBlur={handleBlur}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                name="name"
                placeholder="Name"
                onBlur={handleBlur}
              />
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Upload a image
              </label>
              <input onChange={handleFileChange} class="form-control" type="file" id="formFile" />
            </div>
            <button
              type="submit"
              class="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
