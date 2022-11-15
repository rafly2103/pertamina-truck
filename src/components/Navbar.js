import Typography from "@mui/material/Typography";import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Navbar({ link, name }) {
  return (
    <Box p={3} backgroundColor={"#3C4048"}>
      <Breadcrumbs aria-label="breadcrumb" separator="›" color={"white"}>
        <Link underline="hover" color="white" href="/">
          {link}
        </Link>

        <Typography color="white">{name}</Typography>
      </Breadcrumbs>
    </Box>
  );
}
