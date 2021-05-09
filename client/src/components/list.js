import Axios from "axios";
import { useState } from "react";
import React, { Component } from "react";
import "../App.css";
import Header from "./header";
import Footer from "./footer";

function List() {
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
    <div className="App" onLoad={getUser}>
      <Header />
      <div className="container">
        <br />
        <h1>รายชื่อ</h1>
        <br />
        {userList.map((val, key) => {
          return (
            <div className="user card">
              <div className="card-body text-left">
                <h2 className="card-text">Update-Delelte</h2>
                <br />
                <div className="row">
                  <div className="col">
                    <p className="card-text">ชื่อ: {val.first_name}</p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="แก้ไขชื่อ"
                      onChange={(event) => {
                        setNewFirstName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="col">
                    <p className="card-text">นามสกุล: {val.last_name}</p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="แก้ไขนามสกุล"
                      onChange={(event) => {
                        setNewLastName(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col">
                    <p className="card-text">อายุ: {val.age}</p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="แก้ไขอายุ"
                      onChange={(event) => {
                        setNewAge(event.target.value);
                      }}
                    />
                  </div>
                  <div className="col">
                    <p className="card-text">เบอร์: {val.tel}</p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="แก้ไขเบอร์"
                      onChange={(event) => {
                        setNewTel(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col">
                    <p className="card-text">Email: {val.mail}</p>
                    <input
                      type="mail"
                      className="form-control"
                      placeholder="แก้ไข Email"
                      onChange={(event) => {
                        setNewMail(event.target.value);
                      }}
                    />
                  </div>
                  <div className="col">
                    <p className="card-text">ประเภทงานที่ต้องการ: {val.type}</p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="แก้ไขประเภทงาน"
                      onChange={(event) => {
                        setNewType(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <p className="card-text">ที่อยู่: {val.address}</p>
                  <textarea
                    type="text"
                    placeholder="แก้ไขที่อยู่"
                    className="from-control"
                    row="3"
                    onChange={(event) => {
                      setNewAddress(event.target.value);
                    }}
                  />
                </div>
                <br />
                <div className="text-center">
                  <button
                    className="btn btn-warning mx-3 "
                    onClick={() => {
                      updateUserData(val.id);
                      alert("Information has update!");
                    }}
                  >
                    Update
                  </button>

                  <button
                    className="btn btn-danger mx-3"
                    onClick={() => {
                      deleteUserData(val.id);
                      alert("Are you sure to delete data!");
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default List;
