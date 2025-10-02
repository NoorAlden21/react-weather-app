import "./App.css";

//Mui Components
import {
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

import Button from "@mui/material/Button";

//icons
import CloudIcon from "@mui/icons-material/Cloud";

const theme = createTheme({
  typography: {
    fontFamily: "IBM",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container maxWidth="sm">
          {/* Content container */}
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* card */}
            <div
              style={{
                width: "100%",
                background: "rgb(28 52 91/ 36%)",
                color: "white",
                padding: "10px",
                borderRadius: "15px",
                boxShadow: "0px 11px 1px rgba(0,0,0,0.05)",
              }}
            >
              {/* content */}
              <div>
                {/* city & time */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "end",
                  }}
                  dir="rtl"
                >
                  <Typography variant="h2" style={{ marginRight: "20px" }}>
                    الرياض
                  </Typography>
                  <Typography variant="h5" style={{ marginRight: "20px" }}>
                    الاثنين ٢٠٢٠-١٠-١٠{" "}
                  </Typography>
                </div>
                {/*=== city & time ===*/}
                <hr />
                {/* detailes & image */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                  dir="rtl"
                >
                  {/* detailes */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h1">38</Typography>
                    <Typography variant="h6">broken clouds</Typography>

                    {/* min & max */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h5>الصغرى: 28</h5>
                      <h5 style={{ margin: "0px 5px" }}>|</h5>
                      <h5>الكبرى: 40</h5>
                    </div>
                    {/*== min & max ==*/}
                  </div>
                  {/*== detailes ==*/}

                  {/* image */}
                  <div>
                    <CloudIcon style={{ fontSize: "200px" }}></CloudIcon>
                  </div>
                  {/*== image ==*/}
                </div>
                {/*== detailes & image==*/}
              </div>
              {/*== content ==*/}
            </div>
            {/*== card ==*/}

            {/* translation button */}
            <div
              dir="rtl"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                marginTop: "20px",
              }}
            >
              <Button variant="text" style={{ color: "white" }}>
                انجليزي
              </Button>
            </div>
            {/*== translation button ==*/}
          </div>
          {/* Content container */}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
