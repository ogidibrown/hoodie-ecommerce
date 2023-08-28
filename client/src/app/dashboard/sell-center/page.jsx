'use client'
import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';


const SellCenterPage = () => {

  const { Dragger } = Upload;
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
   
  const sellCenterSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title of product is required'),
    description: Yup.string()
      .required('Description of product is required'),
    photos: Yup.array()
      .required("Please upload at least one image"),
      price: Yup.number()
      .positive("Price must be positive")
      .required("Price is required"),
    name: Yup.string()
      .required("Name of seller is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^\+[1-9]\d{1,14}$/, "Invalid phone number"),
  });

  return(
    <>
    <Navbar />
    <section className="w-full lg:px-60 md:px-20 px-5 lg:py-30 md:py-20 py-10 bg-gray-100">
        <div className="shadow-[0px_8px_16px_#D0D2D5] bg-white py-8 px-10 rounded-xl">
        <h2 className="text-black text-center mb-8 md:text-2xl text-xl font-medium title-font">
            Welcome to 
          <span className="text-[#0F8649] ml-2 mr-2">
           Ogidi Brown
          </span>
          Sell Center
        </h2>
          <Formik
            initialValues={{
              title: "",
              description: "",
              photos: [],
              price: "",
              name: "",
              phoneNumber: "",
            }}
            validationSchema={sellCenterSchema}
            onSubmit={values => {
              console.log(values)
            }}
          >
            {({ errors, touched, handleBlur, handleChange, values, setFieldValue }) => (
              <Form>
                <div className="relative mb-4">
                  <label
                    htmlFor="title"
                    className="leading-10 text-lg text-black"
                  >
                    Title
                  </label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    values={values.title}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Title of Product"
                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#0F8649] rounded border border-gray-600 focus:border-[#0F8649] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.title && touched.title ? (
                    <div className="text-xs text-[red] mt-2">
                      {errors.title}
                    </div>
                  ) : null}
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="description"
                    className="leading-10 text-lg text-black"
                  >
                   Description 
                  </label>
                  <Field
                    as="textarea"
                    row="4"
                    id="description"
                    name="description"
                    values={values.description}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Description of Product"
                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#0F8649] rounded border border-gray-600 focus:border-[#0F8649] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.description && touched.description ? (
                    <div className="text-xs text-[red] mt-2">
                      {errors.description}
                    </div>
                  ) : null}
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="photos"
                    className="leading-10 text-lg text-black"
                  >
                   Upload Photos of Product
                  </label>
                  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
                  {/* <Field
                    type="file"
                    id="photos"
                    name="photos"
                    values={values.photos}
                    multiple
                    
                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#0F8649] rounded border border-gray-600 focus:border-[#0F8649] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <h6>Supported formats are .jpg, .gif and .png, 5MB max</h6>
                  {errors.photos && touched.photos ? (
                    <div className="text-xs text-[red] mt-2">
                      {errors.photos}
                    </div>
                  ) : null} */}
                  </div>
                  <div className="relative mb-3">
                   <label 
                   htmlFor="price"
                   className="leading-10 text-lg text-black"
                   >
                    Price
                   </label>
                   <Field
                    type="text"
                    id="price"
                    name="price"
                    placeholder="GH₵Price"
                    value={values.price}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#0F8649] rounded border border-gray-600 focus:border-[#0F8649] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                   />
                   {errors.price && touched.price ? (
                    <div className="text-xs text-[red] mt-2">
                      {errors.price}
                    </div>
                  ) : null}
                  </div>
                  <div className="relative mb-3">
                   <label>
                   <Field 
                   type="checkbox" 
                   name="checked" 
                   value="negotiable" 
                   className="mr-2"
                   />
                  Negotiable
                 </label>
                   </div>
                  <div className="relative mb-3">
                   <label 
                   htmlFor="name"
                   className="leading-10 text-lg text-black"
                   >
                    Name of Seller
                   </label>
                   <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name of Seller"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#0F8649] rounded border border-gray-600 focus:border-[#0F8649] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                   />
                   {errors.name && touched.name ? (
                    <div className="text-xs text-[red] mt-2">
                      {errors.name}
                    </div>
                  ) : null}
                  </div>
                  <div className="relative mb-5">
                   <label 
                   htmlFor="phoneNumber"
                   className="leading-10 text-lg text-black"
                   >Phone Number of Seller
                   </label>
                   <Field
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number of Seller"
                    value={values.phoneNumber}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#0F8649] rounded border border-gray-600 focus:border-[#0F8649] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                   />
                   {errors.phoneNumber && touched.phoneNumber ? (
                    <div className="text-xs text-[red] mt-2">
                      {errors.phoneNumber}
                    </div>
                  ) : null}
                  </div>
                <div className="flex justify-center items-center gap-10">
                <button
                  type="button"
                  className="w-full mb-3 text-white bg-[#5c6275] border-0 py-2 px-2 focus:outline-none hover:bg-[#444A59] rounded text-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full mb-3 text-white bg-[#0F8649] border-0 py-2 px-2 focus:outline-none hover:bg-[#085c30] rounded text-lg"
                >
                  Post Ad
                </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  )
};

export default SellCenterPage;
