import Axios from "axios";
import { useState } from "react";
import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import { Link } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  const [first_name, setFirstName] = useState([""]);
  const [last_name, setLastName] = useState([""]);
  const [age, setAge] = useState([0]);
  const [tel, setTel] = useState([""]);
  const [mail, setMail] = useState([""]);
  const [type, setType] = useState([""]);
  const [address, setAddress] = useState([""]);

  const [newAddress, setNewAddress] = useState([""]);
  const [newFirstName, setNewFirstName] = useState([""]);
  const [newLastName, setNewLastName] = useState([""]);
  const [newAge, setNewAge] = useState([""]);
  const [newTel, setNewTel] = useState([""]);
  const [newMail, setNewMail] = useState([""]);
  const [newType, setNewType] = useState([""]);

  const [userList, setUserList] = useState([]);

  const getUser = () => {
    Axios.get("http://localhost:3001/user").then((Response) => {
      console.log(Response.data);
      setUserList(Response.data);
    });
  };

  const addUser = () => {
    Axios.post("http://localhost:3001/create", {
      first_name: first_name,
      last_name: last_name,
      age: age,
      tel: tel,
      mail: mail,
      type: type,
      address: address,
    }).then(() => {
      setUserList([
        ...userList,
        {
          first_name: first_name,
          last_name: last_name,
          age: age,
          tel: tel,
          mail: mail,
          type: type,
          address: address,
        },
      ]);
    });
  };

  const updateUserData = (id) => {
    Axios.put("http://localhost:3001/update", {
      first_name: newFirstName,
      last_name: newLastName,
      age: newAge,
      tel: newTel,
      mail: newMail,
      type: newType,
      address: newAddress,
      id: id,
    }).then((Response) => {
      setUserList(
        userList.map((val) => {
          return val.id == id
            ? {
                id: val.id,
                first_name: newFirstName,
                last_name: newLastName,
                age: newAge,
                tel: newTel,
                mail: newMail,
                type: newType,
                address: newAddress,
              }
            : val;
        })
      );
    });
  };

  const deleteUserData = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setUserList(
        userList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <br />
        <h1>กรอกประวัติส่วนตัว</h1>
        <hr />
        <div className="information">
          <form action="">
            <div className="mb-3">
              <label htmlFor="title_name" className="formlabel col-2">
                คำนำหน้าชื่อ
              </label>
              <div className="col-2">
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>นาย</option>
                  <option>นาง</option>
                  <option>นางสาว</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="first_name" className="formlabel">
                  ชื่อ
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ชื่อ"
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
              </div>
              <div className="col">
                <label htmlFor="last_name" className="formlabel">
                  สกุล
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="สกุล"
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="first_name" className="formlabel">
                  อายุ
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="อายุ"
                  onChange={(event) => {
                    setAge(event.target.value);
                  }}
                />
              </div>
              <div className="col">
                <label htmlFor="tel" className="formlabel">
                  เบอร์โทร
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="09XXXXXXXX"
                  onChange={(event) => {
                    setTel(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="mail" className="formlabel">
                Email address
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="sample@mail.com"
                onChange={(event) => {
                  setMail(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="type_job" className="formlabel">
                ประเภทงานที่ต้องการ
              </label>
              <input
                className="form-control"
                id=""
                onChange={(event) => {
                  setType(event.target.value);
                }}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="formlabel">
                ที่อยู่ที่สามารถติดต่อได้
              </label>
              <textarea
                type="text"
                className="form-control"
                rows="3"
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
            </div>
            <button className="btn btn-success" onClick={addUser}>
              บันทึกข้อมูล
            </button>
          </form>
        </div>
        <hr />
      </div>
      <Footer />
    </div>
  );
}

export default App;
