import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { updatePassword, deleteUser } from "firebase/auth";
import { auth } from "../../../Firebase/Firebase.config";
import { validation } from "./ChangePasswordValidatiosn";
import axios from "axios";
import { setUser } from "../../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyProfile = ({ userData }) => {
  const [showFields, setShowFields] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [RessetPasswordSucessOpen, setRessetPasswordSucessOpen] =
    useState(false);
  const [errors, setErrors] = useState({});
  const user = auth.currentUser;
  const useremail = auth.currentUser?.email || "";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userlocal = useSelector((state) => state.loginStatus.user);

  useEffect(() => {}, [userlocal]);

  const handleClick = () => {
    setShowFields(true);
    setButtonClicked(true);
  };

  const handleCloseAlert = () => {
    setRessetPasswordSucessOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validation(newPassword, confirmPassword);
    setErrors(validationErrors);
    console.log(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await updatePassword(user, newPassword);
        setRessetPasswordSucessOpen(true);
        setNewPassword("");
        setConfirmPassword("");
      } catch (error) {
        alert(
          "There was an error updating the password, please try again",
          error
        );
      }
    }
  };

  const handleDisableAccount = async () => {
    try {
      const confirmed = window.confirm(
        "¿Are you sure you want to delete your account?"
      );

      if (confirmed)
        if (user) {
          const responseFirebase = await axios.delete(
            `/users?email=${useremail}`
          );

          alert("Account Successfully Disabled");
          await deleteUser(user);
          setTimeout(() => {
            navigate("/home");
          }, 2000);

          localStorage.removeItem("user");
          dispatch(setUser(null));
        } else {
          alert("No authenticated user");
        }
    } catch (error) {
      alert("Failed to disable account:", error);
    }
  };

  return (
    <div>
      <Box
        sx={{
          maxWidth: {
            xs: "70%",
            sm: "70%",
          },
          marginTop: "10px",
          marginLeft: {
            xs: "16px",
            sm: "16px",
          },
        }}
      >
        <Paper
          sx={{ padding: 1, backgroundColor: "#F3F3F7", marginLeft: "-15.7px" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#9A98FE",
                  textAlign: "start",
                  marginLeft: "10.7px",
                }}
              >
                Personal Information
              </Typography>
              {userData.user_first_name ? (
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 1, marginLeft: "10.7px" }}
                >
                  First Name: {userData.user_first_name}
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 1, marginLeft: "10.7px" }}
                >
                  First Name: Edit Your Info in Settings
                </Typography>
              )}
              {userData.user_last_name ? (
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 1, marginLeft: "10.7px" }}
                >
                  Last Name: {userData.user_last_name}
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 1, marginLeft: "10.7px" }}
                >
                  Last Name: Edit Your Info in Settings
                </Typography>
              )}
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, marginLeft: "10.7px" }}
              >
                Email: {userData.user_email}
              </Typography>
              {userData.phone ? (
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 1, marginLeft: "10.7px" }}
                >
                  Phone Number: {userData.phone}
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 1, marginLeft: "10.7px" }}
                >
                  Phone Number: Edit Your Info in Settings
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#9A98FE",
                  textAlign: "start",
                }}
              >
                Billing Information
              </Typography>
              {userData.billing && userData.billing.billing_adress ? (
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 1, marginLeft: "10.7px" }}
                >
                  Billing Address: {userData.billing.billing_adress}
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 1, marginLeft: "10.7px" }}
                >
                  Billing Address: Edit Your Info in Settings
                </Typography>
              )}
              {userData.billing && userData.billing.city ? (
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 1, marginLeft: "10.7px" }}
                >
                  City: {userData.billing.city}
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 1, marginLeft: "10.7px" }}
                >
                  City: Edit Your Info in Settings
                </Typography>
              )}
              {userData.billing && userData.billing.zip_code ? (
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 1, marginLeft: "10.7px" }}
                >
                  Zip Code: {userData.billing.zip_code}
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 1, marginLeft: "10.7px" }}
                >
                  Zip Code: Edit Your Info in Settings
                </Typography>
              )}
              {userData.billing && userData.billing.country ? (
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 1, marginLeft: "10.7px" }}
                >
                  Country: {userData.billing.country}
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 1, marginLeft: "10.7px" }}
                >
                  Country: Edit Your Info in Settings
                </Typography>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <div>
        {!buttonClicked && (
          <Button
            onClick={handleClick}
            variant="contained"
            sx={{
              width: "170px",
              borderRadius: "30px",
              height: "45px",
              color: "#868688",
              marginTop: "15px",
              backgroundColor: "#9A98FE",
              "&:hover": {
                backgroundColor: "#c2c1fe",
              },
            }}
          >
            Reset Password
          </Button>
        )}

        {showFields && (
          <form onSubmit={handleSubmit}>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginTop: "8px" }}
            >
              Password Requirements:
              <ul>
                <li>Password Must Be 6 to 15 Characters</li>
                <li>Have at least one Special Character</li>
                <li>Have at least one capital letter</li>
                <li>Have at least one lowercase letter</li>
                <li>Have at least one number</li>
              </ul>
            </Typography>
            <TextField
              label="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              fullWidth
              margin="normal"
              required
              error={!!errors.newPassword}
              helperText={errors.newPassword}
              sx={{
                width: "250px",
              }}
            />
            <TextField
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
              margin="normal"
              required
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              sx={{
                width: "250px",
                marginLeft: {
                  xs: "1px",
                  sm: "16px",
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "170px",
                borderRadius: "30px",
                height: "45px",
                color: "#868688",
                marginTop: "15px",
                marginLeft: "10px",
                backgroundColor: "#9A98FE",
                "&:hover": {
                  backgroundColor: "#c2c1fe",
                },
              }}
            >
              Submit
            </Button>
          </form>
        )}
      </div>
      <Snackbar
        open={RessetPasswordSucessOpen}
        autoHideDuration={5000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        style={{ marginTop: "60px" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "80%", backgroundColor: "#A5D6A7" }}
        >
          Password Changed Successfully!
        </Alert>
      </Snackbar>
      <Button
        variant="contained"
        onClick={handleDisableAccount}
        sx={{
          width: "170px",
          borderRadius: "30px",
          height: "45px",
          color: "#868688",
          marginTop: "15px",
          marginLeft: "-1px",
          backgroundColor: "#9A98FE",
          "&:hover": {
            backgroundColor: "#c2c1fe",
          },
        }}
      >
        Delete Account
      </Button>
    </div>
  );
};

export default MyProfile;
