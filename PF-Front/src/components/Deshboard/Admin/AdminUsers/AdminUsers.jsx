import React, { useState } from "react";
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
} from "@mui/material";

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        identificationNumber: "123456789",
        email: "johndoe@example.com",
        phoneNumber: "123-456-7890",
        active: true,
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        identificationNumber: "987654321",
        email: "janesmith@example.com",
        phoneNumber: "987-654-3210",
        active: true,
    },
    {
        firstName: "Michael",
        lastName: "Johnson",
        identificationNumber: "456123789",
        email: "michaeljohnson@example.com",
        phoneNumber: "456-123-7890",
        active: false,
    },
    {
        firstName: "Emily",
        lastName: "Davis",
        identificationNumber: "789456123",
        email: "emilydavis@example.com",
        phoneNumber: "789-456-1230",
        active: true,
    },
    {
        firstName: "Daniel",
        lastName: "Brown",
        identificationNumber: "321654987",
        email: "danielbrown@example.com",
        phoneNumber: "321-654-9870",
        active: false,
    },
    {
        firstName: "Olivia",
        lastName: "Taylor",
        identificationNumber: "654321789",
        email: "oliviataylor@example.com",
        phoneNumber: "654-321-7890",
        active: true,
    },
    {
        firstName: "William",
        lastName: "Clark",
        identificationNumber: "987789456",
        email: "williamclark@example.com",
        phoneNumber: "987-789-4560",
        active: true,
    },
    {
        firstName: "Sophia",
        lastName: "Anderson",
        identificationNumber: "123123123",
        email: "sophiaanderson@example.com",
        phoneNumber: "123-123-1230",
        active: false,
    },
    {
        firstName: "James",
        lastName: "Lee",
        identificationNumber: "456456456",
        email: "jameslee@example.com",
        phoneNumber: "456-456-4560",
        active: true,
    },
    {
        firstName: "Isabella",
        lastName: "Wright",
        identificationNumber: "789789789",
        email: "isabellawright@example.com",
        phoneNumber: "789-789-7890",
        active: false,
    },
    {
        firstName: "Benjamin",
        lastName: "Smith",
        identificationNumber: "321321321",
        email: "benjaminsmith@example.com",
        phoneNumber: "321-321-3210",
        active: true,
    },
    {
        firstName: "Ava",
        lastName: "Lewis",
        identificationNumber: "654654654",
        email: "avalewis@example.com",
        phoneNumber: "654-654-6540",
        active: false,
    },
    {
        firstName: "Mason",
        lastName: "Hall",
        identificationNumber: "987987987",
        email: "masonhall@example.com",
        phoneNumber: "987-987-9870",
        active: true,
    },
    {
        firstName: "Charlotte",
        lastName: "Adams",
        identificationNumber: "111222333",
        email: "charlotteadams@example.com",
        phoneNumber: "111-222-3330",
        active: true,
    },
    {
        firstName: "Likam",
        lastName: "Martin",
        identificationNumber: "444555666",
        email: "liammartin@example.com",
        phoneNumber: "444-555-6660",
        active: false,
    },
    {
        firstName: "Amelia",
        lastName: "Harris",
        identificationNumber: "777888999",
        email: "ameliaharris@example.com",
        phoneNumber: "777-888-9990",
        active: true,
    },
];

const AdminUsers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;
    const [userList, setUserList] = useState(users);
    const [confirmationOpen, setConfirmationOpen] = useState(false);
    const [selectedUserIndex, setSelectedUserIndex] = useState(null);
    const [activeFilter, setActiveFilter] = useState(null);

    const handleToggle = (index) => {
        setSelectedUserIndex(index);
        setConfirmationOpen(true);
    };

    const handleConfirmationClose = () => {
        setConfirmationOpen(false);
    };

    const handleConfirmationConfirm = () => {
        setConfirmationOpen(false);
        setTimeout(() => {
            const updatedUserList = [...userList];
            updatedUserList[selectedUserIndex].active =
                !updatedUserList[selectedUserIndex].active;
            setUserList(updatedUserList);
        }, 2000);
    };

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;

    let currentUsers = userList.slice(indexOfFirstUser, indexOfLastUser);

    if (activeFilter !== null) {
        currentUsers = currentUsers.filter(
            (user) => user.active === activeFilter
        );
    }

    const renderUsers = () => {
        if (currentUsers.length === 0) {
            return (
                <TableRow>
                    <TableCell colSpan={5}>No users found.</TableCell>
                </TableRow>
            );
        }

        return currentUsers.map((user, index) => {
            const {
                active,
                firstName,
                lastName,
                identificationNumber,
                email,
                phoneNumber,
            } = user;

            const isEvenRow = index % 2 === 0;
            const rowBackground = isEvenRow ? "#EFEEFF" : "#F3F3F7";

            return (
                <TableRow
                    key={index}
                    style={{ backgroundColor: rowBackground }}>
                    {" "}
                    <TableCell>
                        <Switch
                            checked={active}
                            onChange={() => handleToggle(index)}
                            color={active ? "success" : "error"}
                        />
                    </TableCell>
                    <TableCell style={{ color: "#868688", fontSize: "12px" }}>
                        {firstName}
                    </TableCell>
                    <TableCell style={{ color: "#868688", fontSize: "12px" }}>
                        {lastName}
                    </TableCell>
                    <TableCell style={{ color: "#868688", fontSize: "12px" }}>
                        {identificationNumber}
                    </TableCell>
                    <TableCell style={{ color: "#868688", fontSize: "12px" }}>
                        {email}
                    </TableCell>
                    <TableCell style={{ color: "#868688", fontSize: "12px" }}>
                        {phoneNumber}
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
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell
                            style={{ color: "#0400CB", fontSize: "15px" }}>
                            Active User
                        </TableCell>
                        <TableCell
                            style={{ color: "#0400CB", fontSize: "15px" }}>
                            First Name
                        </TableCell>
                        <TableCell
                            style={{ color: "#0400CB", fontSize: "15px" }}>
                            Last Name
                        </TableCell>
                        <TableCell
                            style={{ color: "#0400CB", fontSize: "15px" }}>
                            Identification Number
                        </TableCell>
                        <TableCell
                            style={{ color: "#0400CB", fontSize: "15px" }}>
                            Email
                        </TableCell>
                        <TableCell
                            style={{ color: "#0400CB", fontSize: "15px" }}>
                            Phone Number
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

            <Dialog
                open={confirmationOpen}
                onClose={handleConfirmationClose}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    Are you sure you want to apply the change?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmationClose}>No</Button>
                    <Button
                        onClick={handleConfirmationConfirm}
                        autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AdminUsers;
