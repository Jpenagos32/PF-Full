import React, { useState } from "react";
import axios from "axios";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Select from "react-select";
import CountryList from "react-select-country-list";
import { auth } from "../../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { validation } from "./RegisterValidation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/authSlice";

const countryOptions = CountryList().getData();

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPasswordRequirements, setShowPasswordRequirements] =
    useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handlePasswordFocus = () => {
    setShowPasswordRequirements(true);
  };

  const handlePasswordBlur = () => {
    setShowPasswordRequirements(false);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    phone: "",
    billingAddress: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCountryChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      country: selectedOption.label,
    }));
  };

  const encryptData = (text, secretKey) => {
    const encodedText = btoa(text);
    return encodedText;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validación del formulario
    const validationErrors = validation(formData);
    setErrors(validationErrors);

    // Comprobar si hay errores
    if (Object.keys(validationErrors).length === 0) {
      try {
        const {
          firstName,
          lastName,
          billingAddress,
          emailAddress,
          password,
          phone,
          city,
          zipCode,
          country,
        } = formData;

        // Realizar solicitud POST a la API
        const apiResponse = await axios.post("/users", {
          user_first_name: firstName,
          user_last_name: lastName,
          user_email: emailAddress,
          user_type: ["user"],
          //user_type: ["admin"],
          phone: phone,
          billing: {
            billing_adress: billingAddress,
            city: city,
            zip_code: zipCode,
            country: country,
          },
        });

        console.log("Registro exitoso en la API:", apiResponse.data);

        // Crear el usuario en Firebase Authentication
        if (apiResponse.data.status === "User created") {
          const response = await createUserWithEmailAndPassword(
            auth,
            emailAddress,
            password
          );
          const user = response.user;

          // Guardar los datos en Firestore
          // const usersRef = doc(firestore, "users", user.uid);
          // await setDoc(usersRef, {
          //   emailAddress,
          //   firstName,
          //   lastName,
          //   billingAddress,
          //   city,
          //   phone,
          //   country,
          //   zipCode,
          // });

          console.log("Registro exitoso");
          setOpenAlert(true);
          await sendEmailVerification(user);

          const encryptedEmail = encryptData(emailAddress, "secretKey");
          localStorage.setItem("user", encryptedEmail);

          dispatch(setUser(encryptedEmail));

          // Restablecer el formulario
          setFormData({
            firstName: "",
            lastName: "",
            emailAddress: "",
            password: "",
            phone: "",
            billingAddress: "",
            city: "",
            country: "",
            zipCode: "",
          });
          setTimeout(() => {
            navigate("/myaccount");
          }, 4000);
        } else {
          console.log("Registro fallido en la API");
        }
      } catch (error) {
        console.error("Error de registro:", error);
      }
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <Box
      sx={{
        maxWidth: {
          xs: "90%",
          sm: 500,
        },
        margin: "0 auto",
        marginTop: "30px",
        marginBottom: "10px",
        padding: "40px",
        paddingLeft: "40px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography
          variant="h6"
          sx={{
            marginTop: "-20px",
            marginLeft: "2px",
            marginBottom: "2px",
            color: "#9A98FE",
          }}
        >
          Create An Account
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={11.8} sm={6}>
            <TextField
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </Grid>
          <Grid item xs={11.8} sm={5.8}>
            <TextField
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={11.8}>
            <TextField
              name="emailAddress"
              label="Email Address"
              value={formData.emailAddress}
              onChange={handleChange}
              required
              fullWidth
              error={!!errors.emailAddress}
              helperText={errors.emailAddress}
            />
          </Grid>
          <Grid item xs={11.8}>
            <TextField
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              required
              fullWidth
              type="password"
              error={!!errors.password}
              helperText={errors.password}
            />
            {showPasswordRequirements && (
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginTop: "8px" }}
              >
                Requisitos de la contraseña:
                {/* Aquí puedes listar los requisitos de la contraseña */}
                <ul>
                  <li>Password Must Be 6 to 15 Characters</li>
                  <li>Have at least one Special Character</li>
                  <li>Have at least one capital letter</li>
                  <li>Have at least one lowercase letter</li>
                  <li>Have at least one number</li>
                </ul>
              </Typography>
            )}
          </Grid>
          <Grid item xs={11.8}>
            <TextField
              name="phone"
              label="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>
          <Grid item xs={11.8}>
            <TextField
              name="billingAddress"
              label="Billing Address"
              value={formData.billingAddress}
              onChange={handleChange}
              required
              fullWidth
              error={!!errors.billingAddress}
              helperText={errors.billingAddress}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="city"
              label="City"
              value={formData.city}
              onChange={handleChange}
              required
              fullWidth
              error={!!errors.city}
              helperText={errors.city}
            />
          </Grid>
          <Grid item xs={5.8}>
            <TextField
              name="zipCode"
              label="Zip Code"
              value={formData.zipCode}
              onChange={handleChange}
              required
              fullWidth
              error={!!errors.zipCode}
              helperText={errors.zipCode}
            />
          </Grid>
          <Grid item xs={10} sm={11.8}>
            <FormControl fullWidth>
              <Select
                name="country"
                value={
                  formData.country
                    ? {
                        value: formData.country,
                        label: formData.country,
                      }
                    : null
                } // Establecer el valor con un objeto en el formato { value: "código", label: "nombre" }
                onChange={handleCountryChange}
                options={countryOptions}
                placeholder="Country"
                required
                isClearable
                isSearchable
                error={!!errors.country}
              />
            </FormControl>
            {errors.country && (
              <Typography variant="caption" color="error">
                {errors.country}
              </Typography>
            )}
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", marginTop: "10px" }}>
          <Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                marginRight: "18px",
                marginBottom: "-30px",
                borderRadius: "20px",
              }}
              sx={{
                backgroundColor: "#9A98FE",
                "&:hover": {
                  backgroundColor: "#c2c1fe",
                },
              }}
            >
              SIGN UP
            </Button>
          </Grid>
        </Box>
      </form>
      <Snackbar
        open={openAlert}
        autoHideDuration={9000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "80%", backgroundColor: "#A5D6A7" }}
        >
          Check your inbox for Confirm Your Account. Email sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Register;
