import {  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Home from "./Home";

export default function ServiceForm() {
  return (
    <Box>
      <Home>
        <Navbar link={`Service`} name={`Form`} />
        <Box backgroundColor={"rgb(244, 244, 244)"} minHeight={`100vh`}>
          <Box p={3}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item md={12}>
                    <Typography variant={"h6"}>Test</Typography>
                  </Grid>
                  <Grid item md={6}>
                    wefwe
                  </Grid>
                  <Grid item md={6}>
                    wefwef
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Home>
    </Box>
  );
}
