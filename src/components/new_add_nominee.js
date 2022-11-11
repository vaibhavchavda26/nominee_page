import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function FormValidation() {
  var today = new Date().toISOString().split("T")[0];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container ">
      <div className="col-12">
        <h1>Add Nominee</h1>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} className="nominiform">
        <div className="row">
          <Form.Field className="col-lg-6 col-md-12">
            <div className="control">
              <label className="d-flex justify-content-start">
                Relationship <span>*</span>
              </label>
              <select className="form-select">
                <option value="1">Father</option>
                <option value="2">Mother</option>
                <option value="3">Brother</option>
                <option value="3">Sister</option>
              </select>
            </div>
          </Form.Field>
          <br />

          <Form.Field className="col-lg-6 col-md-12">
            <div>
              <label className="d-flex justify-content-start">
                Nominee Name <span>*</span>
              </label>
              <input
                placeholder="Nominee Name"
                type="text"
                className="control"
                {...register("nomineeName", { required: true, maxLength: 10 })}
              />
            </div>
            {errors.nomineeName && (
              <p className="validate">Please check the Nominee Name</p>
            )}
          </Form.Field>
        </div>
        <br />

        <Form.Field className="col-lg-6 col-md-12 ">
          <div className="control">
            <label className="d-flex justify-content-start">
              Date Of Birth <span>*</span>
            </label>
            <input
              type="date"
              className="control"
              max={today}
              {...register("dob", { required: true })}
            />
          </div>
          {errors.dob && (
            <p className="validate">Please check the Date of Birth</p>
          )}
        </Form.Field>
        <br />

        <Form.Field className="col-12">
          <div className="control">
            <label className="d-flex justify-content-start">
              Address <span>*</span>
            </label>
            <textarea
              type="text"
              placeholder="Write Somthing"
              className="control"
              {...register("address", { required: true })}
            />
          </div>
          {errors.address && (
            <p className="validate">Please check the Address</p>
          )}
        </Form.Field>
        <br />

        <div className="row">
          <Form.Field className="col-lg-6 col-md-12">
            <div className="control">
              <label className="d-flex justify-content-start">
                Pincode<span>*</span>
              </label>
              <input
                type="number"
                className="control"
                {...register("pincode", { required: true })}
              />
            </div>
            {errors.pincode && (
              <p className="validate">Please check the Pincode</p>
            )}
          </Form.Field>

          <Form.Field className="col-lg-6 col-md-12">
            <div className="control">
              <label className="d-flex justify-content-start">
                City<span>*</span>
              </label>
              <input
                type="text"
                className="control"
                {...register("city", { required: true })}
              />
            </div>
            {errors.city && <p className="validate">Please check the City</p>}
          </Form.Field>
        </div>
        <br />

        <div className="row">
          <Form.Field className="col-lg-6 col-md-12">
            <div className="control">
              <label className="d-flex justify-content-start">
                State<span>*</span>
              </label>
              <input
                type="text"
                className="control"
                {...register("state", { required: true })}
              />
            </div>
            {errors.state && <p className="validate">Please check the State</p>}
          </Form.Field>

          <Form.Field className="col-lg-6 col-md-12">
            <div className="control">
              <label className="d-flex justify-content-start">
                Country<span>*</span>
              </label>
              <input
                type="text"
                className="control"
                {...register("country", { required: true })}
              />
            </div>
            {errors.country && (
              <p className="validate">Please check the Country</p>
            )}
          </Form.Field>
        </div>
        <br />

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
