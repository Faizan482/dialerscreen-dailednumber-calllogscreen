import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { resetDialedNumber } from "../store/dialerSlice";
import { Box, Button, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const CallLogScreen: React.FC = () => {
  const dispatch = useDispatch();
  const dialedNumber = useSelector((state: any) => state.dialer.dialedNumber);
  const callHistory = useSelector((state: any) => state.dialer.callHistory);
  console.log(callHistory, "i am calling");
  console.log(dialedNumber, "i am dialed");

  const handleDeleteLog = () => {
    // Implement delete log functionality
  };
  return (
    <>
      {callHistory.map((val: string, idx: number) => {
        return (
          <Box
            key={idx}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: "2rem",
            }}
          >
            <Box>
              <Typography sx={{ color: "red", fontSize: "13px" }}>
                {val}
              </Typography>
              <Typography sx={{ color: "white", fontSize: "10px" }}>
                Phone Call Audio
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyItems: "flex-end",
              }}
            >
              <Box>
                <Typography sx={{ color: "white", fontSize: "12px" }}>
                  5:53pm
                </Typography>
              </Box>
              <Box>
                <Typography>
                  <Button
                    onClick={() => handleDeleteLog}
                    color="error"
                    size="large"
                  >
                    <DeleteOutlinedIcon />
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default CallLogScreen;
