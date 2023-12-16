import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDialedNumber } from "../store/dialerSlice";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { addToCallHistory } from "../store/dialerSlice";
const DialerScreen: React.FC = () => {
  const dispatch = useDispatch();
  const dialedNumber = useSelector((state: any) => state.dialer.dialedNumber);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];
  const handleNumberClick = (number: string) => {
    dispatch(setDialedNumber(dialedNumber + number));
  };

  return (
    <Box>
      <Typography
        fontSize="20px"
        color="white"
        display="flex"
        justifyContent="center"
        height="30px"
      >
        {dialedNumber}
      </Typography>
      {/* <br/> */}
      <Typography
        fontSize="15px"
        color="primary"
        display="flex"
        justifyContent="center"
        mt="12px"
      >
        Add Number
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 3, sm: 8, md: 12 }}
        style={{ paddingTop: "2rem" }}
      >
        {array.map((val, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Button
              style={{
                margin: "5px 0px 0px 5px",
                borderRadius: "50%",
                fontSize: "25px",
                color: "white",
                background: "#222b30",
                height: "65px",
              }}
              key={index}
              onClick={() => handleNumberClick(val.toString())}
            >
              {val}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "grid",
          mt: "16px",
          gridTemplateColumns: "repeat(3,33%)",
        }}
      >
        <Box></Box>
        <Box sx={{ textAlign: "center" }}>
          <Link
            onClick={() => dispatch(addToCallHistory(dialedNumber))}
            to="/dialed"
            style={{
              display: "inline-flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              height: "50px",
              width: "50px",
              backgroundColor: "#3fc92c",
              color: "white",
              borderRadius: "50%",
              padding: "4px",
            }}
          >
            <PhoneRoundedIcon />
          </Link>
        </Box>
        <Button>
          <CloseRoundedIcon
            sx={{
              background: "#222b30",
              color: "white",
              ml: "30px",
              fontSize: "1.2rem",
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default DialerScreen;
