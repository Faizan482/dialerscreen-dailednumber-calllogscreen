import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dialerReducer from "./store/dialerSlice";
import DialerScreen from "./screens/DialerScreen";
import DialedNumberScreen from "./screens/DialedNumberScreen";
import CallLogScreen from "./screens/CallLogScreen";
import { Box } from "@mui/material";

const store = configureStore({
  reducer: {
    dialer: dialerReducer,
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Box className="main">
        <Router>
          <Routes>
            <Route path="/" element={<DialerScreen />} />
            <Route path="/dialed" element={<DialedNumberScreen />} />
            <Route path="/call-log" element={<CallLogScreen />} />
          </Routes>
        </Router>
      </Box>
    </Provider>
  );
};
export default App;
