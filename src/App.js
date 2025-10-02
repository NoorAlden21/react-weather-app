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

//React
import { useEffect, useState } from "react";

//external libraries
import axios from "axios";

const theme = createTheme({
  typography: {
    fontFamily: "IBM",
  },
});

function App() {
  const [data, setData] = useState({
    temp: null,
    description: "",
    min: null,
    max: null,
    icon: null,
  });
  const apiKey = "dd07956977dbbccc849cf9dd6bc050c9";
  let cancelAxios = null;
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=damascus&appid=${apiKey}`,
        {
          cancelToken: new axios.CancelToken((c) => {
            cancelAxios = c;
          }),
        }
      )
      .then(function (res) {
        console.log(res.data);
        setData({
          temp: Math.round(res.data.main.temp),
          description: res.data.weather[0].description,
          min: Math.round(res.data.main.temp_min),
          max: Math.round(res.data.main.temp_max),
          icon: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`,
        });
      })
      .catch(function (err) {
        console.log(err);
      });

    return () => {
      console.log("canceling");
      cancelAxios();
    };
  }, []);

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
                    {/* Temp */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h1" style={{ textAlign: "right" }}>
                        {data.temp}
                      </Typography>
                      <img src={data.icon} alt="" />
                    </div>
                    {/*== Temp ==*/}

                    <Typography variant="h6">{data.description}</Typography>

                    {/* min & max */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h5>الصغرى: {data.min}</h5>
                      <h5 style={{ margin: "0px 5px" }}>|</h5>
                      <h5>الكبرى: {data.max}</h5>
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
