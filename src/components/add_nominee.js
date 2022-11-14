import React, { useState, useEffect } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { Form, Button } from "semantic-ui-react";
import { omit } from "lodash";

const AddNominee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="card p-4 mt-5">
          <div className="col-12">
            <h1>Add Nominee</h1>
          </div>
          <div className="row g-2">
            <div className="col-lg-6 col-md-12">
              <div className="form-floating">
                <select className="form-select">
                  <option value="1">Father</option>
                  <option value="2">Mother</option>
                  <option value="3">Brother</option>
                  <option value="3">Sister</option>
                </select>
                <label>Relationship</label>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nominee Name"
                  {...register("name", { required: true, maxLength: 10 })}
                />
                <label>Nominee Name</label>
              </div>
            </div>
            {errors.name && <h3>{errors.name}</h3>}

            <div className="col-lg-6 col-md-12">
              <div className="form-floating">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date of Birth"
                />
                <label>Date Of Birth</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-floating"></div>
            </div>

            <div className="col-lg-6  col-md-12">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  value="option1"
                />
                <label className="form-check-label" for="Roundtrip">
                  Field to enter complete address
                </label>
              </div>
            </div>
            <div className="col-lg-6  col-md-12">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  value="option2"
                />
                <label className="form-check-label" for="Oneway">
                  Same as my address
                </label>
              </div>
            </div>

            <div className="form-floating col-12">
              <textarea
                type="text"
                className="form-control"
                placeholder="Nominee Name"
              />
              <label>Address</label>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Pincode"
                />
                <label>Pincode</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
                <label>City</label>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pincode"
                />
                <label>State</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
                <label>Country</label>
              </div>
            </div>

            <div className="col-12 mt-4">
              <button className="btn btn-primary text-uppercase" type="button">
                Save Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNominee;
