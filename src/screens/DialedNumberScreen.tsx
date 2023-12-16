import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetDialedNumber } from "../store/dialerSlice";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import MicOffIcon from "@mui/icons-material/MicOff";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import CallEndIcon from "@mui/icons-material/CallEnd";
import DialpadIcon from "@mui/icons-material/Dialpad";

const buttons = [
  {
    label: "Sapeaker",
    disable: false,
    element: <VolumeUpIcon />,
  },
  {
    label: "FaceTime",
    disable: true,
    element: <VideoChatIcon />,
  },
  {
    label: "Mute",
    disable: false,
    element: <MicOffIcon />,
  },
  {
    label: "Add",
    disable: true,
    element: <AddIcCallIcon />,
  },
  {
    label: "End",
    disable: false,
    element: <CallEndIcon />,
  },
  {
    label: "Keypad",
    disable: false,
    element: <DialpadIcon />,
  },
];

const DialedNumberScreen: React.FC = () => {
  const dispatch = useDispatch();
  const dialedNumber = useSelector((state: any) => state.dialer.dialedNumber);
  const history = useNavigate();

  useEffect(() => {
    const callTimeout = setTimeout(() => {
      // Automatically end the call after 10 seconds
      dispatch(resetDialedNumber());
      history("/call-log");
    }, 10000);
    const element = document.getElementsByClassName("main")[0] as HTMLElement;
    element.style.backgroundColor = "gray";

    return () => clearTimeout(callTimeout);
  }, [dispatch, history]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
        color: "white",
      }}
    >
      <Box sx={{ color: "white", textAlign: "center" }}>
        <Box>Calling mobile...</Box>
        <Typography
          variant="h2"
          sx={{ fontSize: "30px", fontWeight: "bold", pt: "10px" }}
        >
          {dialedNumber}
        </Typography>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3,33.333%)" }}>
        {buttons.map((button, index) => (
          <Box
            sx={{
              textAlign: "center",
              opacity: button.disable ? ".5" : "1",
              marginBottom: "15px",
            }}
            key={index}
          >
            <Button
              disabled={button.disable}
              style={{
                margin: "5px 0px 0px 5px",
                borderRadius: "50%",
                fontSize: "25px",
                color: "white",
                background: button.label === "End" ? "red" : "#222b30",
                height: "65px",
              }}
            >
              {button.element}
            </Button>

            <Typography style={{ fontSize: "11px", marginTop: "6px" }}>
              {button.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DialedNumberScreen;
