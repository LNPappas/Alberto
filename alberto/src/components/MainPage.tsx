import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Map from "./Map";
// import { IState } from "../reducers/index";
// import useAllUsaGas from "../hooks/useAllGas";
// import { useSelector } from "react-redux";

const MainPage = () => {
  //   useAllUsaGas();

  //   const allUsaGasPrices = useSelector((state: IState) => {
  //     return state.allUSAGasState.allUsaGas;
  //   });
  //   console.log(allUsaGasPrices);
  return (
    <Box>
      <Container
        maxWidth="xl"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 600,
          width: 800,
        }}
      >
        <Map />
      </Container>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              {/* <Map/> */}
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            ></Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper
              sx={{ p: 2, display: "flex", flexDirection: "column" }}
            ></Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainPage;
