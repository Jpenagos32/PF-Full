import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Switch,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../../Firebase/Firebase.config";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const AdminUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const [userList, setUserList] = useState([]);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [confirmationToresetOpen, setconfirmationToresetOpen] = useState(false);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/users");
        const users = response.data;
        const filteredUsers = users.filter(
          (user) => user.user_type[0] === "user"
        );
        setUserList(filteredUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleToggle = (index, email) => {
    setSelectedUserIndex(index);
    setCurrentUserEmail(email);
    setConfirmationOpen(true);
  };

  const handleToggleforResetPassword = (index, email) => {
    setSelectedUserIndex(index);
    setCurrentUserEmail(email);
    setconfirmationToresetOpen(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
  };

  const handleConfirmationCloseToReset = () => {
    setconfirmationToresetOpen(false);
  };

  const handleConfirmationConfirmToReset = async () => {
    setconfirmationToresetOpen(false);
    const emailToReset = currentUserEmail;
    try {
      await sendPasswordResetEmail(auth, emailToReset);
      showSnackbar("Email To Reset sent successfully!");
    } catch (error) {
      console.log(
        "Error al enviar el correo electrónico de restablecimiento:",
        error
      );
    }
  };

  const handleConfirmationConfirm = async () => {
    setConfirmationOpen(false);
    const emailToDelete = currentUserEmail;
    const userToDelete = userList.find(
      (user) => user.user_email === emailToDelete
    );

    try {
      // //! ==== aqui se elimina de firebase ===
      // const FbResponse = await deleteUser(auth, emailToDelete);

      // console.log(FbResponse);
      // // Eliminación en Firebase exitosa
      // showSnackbar("User deleted from Firebase");

      //? ==== aqui se elimina de la base de datos
      //?, esto funciona bien ===
      await axios.delete(`/users?email=${emailToDelete}`);
      // Eliminación en la base de datos exitosa
      showSnackbar("User deleted from database");

      setTimeout(() => {
        const updatedUserList = userList.filter(
          (user) => user.user_email !== emailToDelete
        );
        setUserList(updatedUserList);
      }, 500);
    } catch (error) {
      console.error("Error deleting user:", error);
      showSnackbar("Error deleting user");
    }
  };

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const filteredUsers = userList.filter((user) =>
    user.user_email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const renderUsers = () => {
    if (currentUsers.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={5}>No users found.</TableCell>
        </TableRow>
      );
    }

    return currentUsers.map((user, index) => {
      const { user_first_name, user_last_name, user_email, phone } = user;

      const isEvenRow = index % 2 === 0;
      const rowBackground = isEvenRow ? "#EFEEFF" : "#F3F3F7";

      return (
        <TableRow key={index} style={{ backgroundColor: rowBackground }}>
          <TableCell>
            <Switch
              checked={true}
              onChange={() => handleToggle(index, user.user_email)}
              color="primary"
            />
          </TableCell>
          <TableCell>
            <Switch
              checked={true}
              onChange={() =>
                handleToggleforResetPassword(index, user.user_email)
              }
              color="primary"
            />
          </TableCell>
          <TableCell style={{ color: "#868688", fontSize: "12px" }}>
            {user_first_name}
          </TableCell>
          <TableCell style={{ color: "#868688", fontSize: "12px" }}>
            {user_last_name}
          </TableCell>
          <TableCell style={{ color: "#868688", fontSize: "12px" }}>
            {user_email}
          </TableCell>
          <TableCell style={{ color: "#868688", fontSize: "12px" }}>
            {phone}
          </TableCell>
        </TableRow>
      );
    });
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(userList.length / usersPerPage);

  return (
    <div>
      <TextField
        id="standard-basic"
        variant="standard"
        label="Search by Email"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
        style={{ marginBottom: "1px", marginLeft: "80%" }}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#0400CB", fontSize: "15px" }}>
              Delete User
            </TableCell>
            <TableCell style={{ color: "#0400CB", fontSize: "15px" }}>
              Reset Password
            </TableCell>
            <TableCell style={{ color: "#0400CB", fontSize: "15px" }}>
              First Name
            </TableCell>
            <TableCell style={{ color: "#0400CB", fontSize: "15px" }}>
              Last Name
            </TableCell>
            <TableCell style={{ color: "#0400CB", fontSize: "15px" }}>
              Email
            </TableCell>
            <TableCell style={{ color: "#0400CB", fontSize: "15px" }}>
              Phone
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderUsers()}</TableBody>
      </Table>

      <div>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>

      <Dialog open={confirmationOpen} onClose={handleConfirmationClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to DELETE this user?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmationClose}>No</Button>
          <Button onClick={handleConfirmationConfirm} autoFocus>
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={confirmationToresetOpen}
        onClose={handleConfirmationCloseToReset}
      >
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to Reset Password for this user?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmationCloseToReset}>No</Button>
          <Button onClick={handleConfirmationConfirmToReset} autoFocus>
            Yes, Send The Email
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  );
};

export default AdminUsers;
