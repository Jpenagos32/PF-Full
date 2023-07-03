import { styled } from "@mui/system";

export const Container = styled("div")({
    flexGrow: 1,
    maxWidth: "sm",
});

export const Content = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
    position: "absolute",
    zIndex: "2",
    left: "33vw",
});

export const Title = styled("h1")(({ theme }) => ({
    color: "white",
    textAlign: "center",
    marginBottom: theme.spacing(2),
    fontSize: "48px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "28px",
    },
    textShadow: "5px 5px 8px rgba(0, 0, 0, 1)",
}));
