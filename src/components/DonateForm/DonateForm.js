import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  FaCamera,
  FaClock,
  FaMapMarkerAlt,
  FaUtensils,
  FaWeight,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DonateForm.css";
import Maps from "../Maps.js";
import donateformpic from "../images/donateformpic.jpg";
import donateformpic2 from "../images/donateformpic2.jpg";
const DonateForm = ({ request, requestId, setShowForm }) => {
  const [foodItems, setFoodItems] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shelfLife, setShelfLife] = useState("");
  const [location, setLocation] = useState("");
  const [picture, setPicture] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  // Dummy user data (for illustration, replace with actual user data from authentication context)
  const user = {
    donorId: "123456", // Example donorId
    donorName: "John Doe", // Example donorName
    loc: "Some Location", // Example loc
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      foodItems,
      quantity,
      shelfLife,
      location,
      picture,
      donorId: user.donorId,
      donorName: user.donorName,
      location: user.location,
      requestId,
    };

    try {
      const response = await axios.post(
        " https://annadhsevab.onrender.com/api/donation",
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (!response.ok) {
        console.log("error posting donation");
      }
      toast.success("Donation submitted successfully!");
      setShowModal(false);
      setShowForm(false); // Ensure the form is closed after submission
      resetForm();
    } catch (error) {
      toast.error("Failed to submit donation.");
    }
  };

  const resetForm = () => {
    setFoodItems("");
    setQuantity("");
    setShelfLife("");
    setLocation("");
    setPicture(null);
  };

  return (
    <div className="container custom-modal">
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
          setShowForm(false); // Close the form when modal is hidden
          navigate(`/donate`);
        }}
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Donate Food Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={styles.form}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    <FaUtensils className="me-2" />
                    Food Items:
                  </label>
                  <input
                    type="text"
                    value={foodItems}
                    onChange={(e) => setFoodItems(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <FaWeight className="me-2" />
                    Quantity:
                  </label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <FaClock className="me-2" />
                    Shelf Life (in hours):
                  </label>
                  <input
                    type="number"
                    value={shelfLife}
                    onChange={(e) => setShelfLife(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <FaMapMarkerAlt className="me-2" />
                    Location:
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <FaCamera className="me-2" />
                    Picture:
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setPicture(e.target.files[0])}
                    className="form-control"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-success mt-3"
                >
                  Submit Donation
                </Button>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    ...styles.mapBox,
                    ...styles.mapPlaceholderText,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Donate FOOD
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

const styles = {
  greenButton: {
    backgroundColor: "#28a745",
    borderColor: "#28a745",
  },
  form: {
    minWidth: "400px",
  },
  mapBox: {
    height: "400px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
  },
  mapPlaceholderText: {
    textAlign: "center",
    fontSize: "18px",
    color: "#999",
  },
};

export default DonateForm;
