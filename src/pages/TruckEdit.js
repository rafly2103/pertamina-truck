import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Home from "./Home";
import CardTruckEditDriver from "../components/CardTruckEditDriver";
import CardTruckEditPerusahaan from "../components/CardTruckEditPerusahaan";
import ImageGallery from "react-image-gallery";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./assets/image-gallery.css";
import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const DUMMY_LIST_PERUSAHAAN = [
  {
    id: 1,
    name: "PT SINAR MENTARI",
    contract: "Contract/abcd/234cf",
    phone: "082523952352",
    email: "mentari@sinar.com",
    image:
      "data:image/jpeg;base64,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",
    status: true,
  },
];

const DUMMY_LIST_DRIVER = [
  {
    id: 1,
    name: "Syams Syair R",
    jenisKelamin: "Laki-laki",
    email: "thesyams.rebel8@gmail.com",
    phone: "082523952352",
    image: "https://i.pravatar.cc/150?img=57",
    status: true,
  },
];
const images = [
  {
    original:
      "https://www.hino.com.au/uploads/editor/images/model/300-series/300-landing-300.jpg",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
  {
    original:
      "https://editorial.pxcrush.net/trucksales/general/editorial/hino-5-300-std-hybrid_front-final.jpg?width=1024&height=683&pxc_method=crop",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuK-zrVFOJAsgSoqJ-BWpyQHD4V-KCykr5Tg&usqp=CAU",
  },
  {
    original:
      "https://images.squarespace-cdn.com/content/v1/5ee6c970561fcb33d73f0154/1594794074600-WIJP12TKE1F4B2DOVCVI/300+616-+R_Wide+Cab.jpg",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iIEepHIb3NWZ3HOKtK58Y4BjlwlKktrvlg&usqp=CAU",
  },
];
function createDataHari(HariTanggal, Hasil, Pengecekan, Keterangan) {
  return { HariTanggal, Hasil, Pengecekan, Keterangan };
}

const rows1 = [
  createDataHari("24-Aug-2022", "LAYAK", "-", "-"),
  createDataHari(
    "25-Aug-2022",
    "TIDAK LAYAK",
    "Body Truck",
    "Terdapat Kerusakan pada Lampu Sen Kiri"
  ),
  createDataHari(
    "26-Aug-2022",
    "PERBAIKAN",
    "Body Truck",
    "Perbaikan pada Lampu Sen Truck"
  ),
];
function createDataMinggu(Tanggal, Minggu, Hasil, Pengecekan, Keterangan) {
  return { Tanggal, Minggu, Hasil, Pengecekan, Keterangan };
}

const rows2 = [
  createDataMinggu("10-Aug-2022", "Minggu 1", "LAYAK", "-", "-"),
  createDataMinggu(
    "17-Aug-2022",
    "Minggu 2",
    "TIDAK LAYAK",
    "Body Truck",
    "Terdapat Kerusakan pada Lampu Sen Kiri"
  ),
  createDataMinggu(
    "24-Aug-2022",
    "Minggu 3",
    "PERBAIKAN",
    "Body Truck",
    "Perbaikan pada Lampu Sen Truck"
  ),
];

function createDataBulan(Tanggal, Bulan, Hasil, Pengecekan, Keterangan) {
  return { Tanggal, Bulan, Hasil, Pengecekan, Keterangan };
}

const rows3 = [
  createDataBulan("10-Aug-2022", "Bulan 1", "LAYAK", "-", "-"),
  createDataBulan(
    "10-Sep-2022",
    "Bulan 2",
    "TIDAK LAYAK",
    "Body Truck",
    "Terdapat Kerusakan pada Lampu Sen Kiri"
  ),
  createDataBulan(
    "10-Oct-2022",
    "Bulan 3",
    "PERBAIKAN",
    "Body Truck",
    "Perbaikan pada Lampu Sen Truck"
  ),
];
function createDataInspection(Harian, Bulanan, tigabulan) {
  return { Harian, Bulanan, tigabulan };
}

const rows4 = [
  createDataInspection("11-Jun-2022", "10-Aug-2022", "10-Nov-2022"),
  createDataInspection("12-Jun-2022", "10-Sep-2022", "10-Feb-2023"),
  createDataInspection("13-Jun-2022", "10-Oct-2022", "10-May-2023"),
];
export default function TruckEdit() {
  const [value, setValue] = React.useState("hari");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid sx={{display: "flex", justifyContent: "flex-end" }}>
    <Box>
    <Home>
      <Navbar link={`Truck`} name={`Edit`} />
      <Box backgroundColor={"rgb(244, 244, 244)"} minHeight={`100vh`}>
        <Box p={3}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid width={380} height={500} alignItems="center">
                  <Box mt={2} alignItems="center">
                    <Grid>
                      <Typography variant={"h5"} mt={2} ml={3} mb={2}>
                        D 5141 HNO
                      </Typography>
                    </Grid>
                    <Grid item md={9} ml={1} mb={2}>
                      <ImageGallery
                        showFullscreenButton={false}
                        showPlayButton={false}
                        items={images}
                      />
                    </Grid>
                    <form>
                      <Grid
                        container
                        alignItems="center"
                        display="flex"
                        marginBottom={2}
                      >
                        <Grid ml={2}>
                          <label for="truck">Nama Truck :</label>
                        </Grid>
                        <Grid ml={2}>
                          <label for="hp">HINO 300 Series</label>
                        </Grid>
                      </Grid>
                      <Grid container marginBottom={2}>
                        <Grid ml={2}>
                          <label for="nokontrak">No Kontrak :</label>
                        </Grid>
                        <Grid ml={2}>
                          <label for="nokontrak">0227797286/SVG</label>
                        </Grid>
                      </Grid>
                      <Grid container alignItems="center" display="flex">
                        <Grid xs="2" md="2" lg="2">
                          {/* */}
                        </Grid>
                        <Grid
                          xs="10"
                          md="10"
                          lg="4"
                          display={"Flex"}
                          justifyContent={"center"}
                          ml={1}
                          mt={1}
                        ></Grid>
                      </Grid>
                    </form>
                  </Box>
                </Grid>
                <Grid container xs={3} direction="row" mt={2}>
                  <Box height={175}>
                    {DUMMY_LIST_PERUSAHAAN.map((list, index) => {
                      return (
                        <>
                          <CardTruckEditPerusahaan
                            key={index}
                            id={list.id}
                            name={list.name}
                            contract={list.contract}
                            phone={list.phone}
                            email={list.email}
                            image={list.image}
                            status={list.status}
                          />
                        </>
                      );
                    })}
                  </Box>
                  <Box
                    sx={5}
                    width={600}
                    mt={3}
                    ml={2}
                    border="1px solid rgb(231 235 235)"
                  >
                    <TableContainer component={Paper}>
                      <Toolbar>
                        <Typography
                          variant="h6"
                          id="tableTitle"
                          component="div"
                          fontWeight={"bolder"}
                        >
                          Next Inspection
                        </Typography>
                      </Toolbar>
                      <Divider />
                      <Table sx={{ minWidth: 600 }}>
                        <TableHead>
                          <TableRow align="center">
                            <TableCell align="center">
                              <Typography fontWeight={"bolder"}>
                                Harian
                              </Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Typography fontWeight={"bolder"}>
                                Bulanan
                              </Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Typography fontWeight={"bolder"}>
                                3 Bulanan
                              </Typography>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows4.map((row) => (
                            <TableRow
                              key={row.Harian}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell align="center">{row.Harian}</TableCell>
                              <TableCell align="center">
                                {row.Bulanan}
                              </TableCell>
                              <TableCell align="center">
                                {row.tigabulan}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Grid>
                <Box height={175} mt={2} ml={8}>
                  {DUMMY_LIST_DRIVER.map((list, index) => {
                    return (
                      <>
                        <CardTruckEditDriver
                          key={index}
                          id={list.id}
                          name={list.name}
                          jenisKelamin={list.jenisKelamin}
                          email={list.email}
                          phone={list.phone}
                          image={list.image}
                          status={list.status}
                        />
                      </>
                    );
                  })}
                </Box>
                <Typography
                  variant={"h6"}
                  mt={4}
                  ml={2}
                  mb={2}
                  fontWeight={"bolder"}
                >
                  Maintenance Truck
                </Typography>
                <Box sx={{ width: "100%" }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList onChange={handleChange}>
                        <Tab label="Harian" value="hari" />
                        <Tab label="Mingguan" value="minggu" />
                        <Tab label="Bulanan" value="bulan" />
                      </TabList>
                    </Box>
                    <TabPanel value="hari">
                      <Grid
                        item
                        md={10}
                        mt={1}
                        border="1px solid rgb(231 235 235)"
                      >
                        <TableContainer component={Paper}>
                          <Toolbar>
                            <Typography
                              variant="h6"
                              id="tableTitle"
                              component="div"
                              fontWeight={"bolder"}
                            >
                              Hari
                            </Typography>
                          </Toolbar>
                          <Divider />
                          <Table sx={{ minWidth: 400 }}>
                            <TableHead>
                              <TableRow align="center">
                                <TableCell align="center">
                                  <Typography fontWeight={"bolder"}>
                                    Hari/Tanggal
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  <Typography fontWeight={"bolder"}>
                                    Hasil Pemeriksaan
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  <Typography fontWeight={"bolder"}>
                                    Pengecekan
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  <Typography fontWeight={"bolder"}>
                                    Keterangan
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows1.map((row) => (
                                <TableRow
                                  key={row.HariTanggal}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell align="center">
                                    {row.HariTanggal}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.Hasil}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.Pengecekan}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.Keterangan}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Grid>
                    </TabPanel>
                    <TabPanel value="minggu">
                      <Grid
                        item
                        md={10}
                        mt={1}
                        border="1px solid rgb(231 235 235)"
                      >
                        <TableContainer component={Paper}>
                          <Toolbar>
                            <Typography
                              variant="h6"
                              id="tableTitle"
                              component="div"
                              fontWeight={"bolder"}
                            >
                              Minggu
                            </Typography>
                          </Toolbar>
                          <Divider />
                          <Table sx={{ minWidth: 400 }}>
                            <TableHead>
                              <TableRow align="center">
                                <TableCell align="center">
                                  <Typography fontWeight={"bolder"}>
                                    Tanggal
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  <Typography fontWeight={"bolder"}>
                                    Minggu
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  <Typography fontWeight={"bolder"}>
                                    Hasil Pemeriksaan
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  <Typography fontWeight={"bolder"}>
                                    Pengecekan
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  <Typography fontWeight={"bolder"}>
                                    Keterangan
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows2.map((row) => (
                                <TableRow
                                  key={row.Tanggal}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell align="center">
                                    {row.Tanggal}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.Minggu}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.Hasil}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.Pengecekan}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.Keterangan}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Grid>
                    </TabPanel>
                    <TabPanel value="bulan">
                      <Grid
                        item
                        md={10}
                        mt={1}
                        border="1px solid rgb(231 235 235)"
                      >
                        <TableContainer component={Paper}>
                          <Toolbar>
                            <Typography
                              variant="h6"
                              id="tableTitle"
                              component="div"
                              fontWeight={"bolder"}
                            >
                              Bulan
                            </Typography>
                          </Toolbar>
                          <Divider />
                          <Table sx={{ minWidth: 400 }}>
                            <TableHead>
                              <TableRow align="center">
                                <TableCell align="center">
                                  <Typography fontWeight={"bolder"}>
                                    Tanggal
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  <Typography fontWeight={"bolder"}>
                                    Bulan
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  <Typography fontWeight={"bolder"}>
                                    Hasil Pemeriksaan
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  <Typography fontWeight={"bolder"}>
                                    Pengecekan
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  <Typography fontWeight={"bolder"}>
                                    Keterangan
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows3.map((row) => (
                                <TableRow
                                  key={row.Tanggal}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell align="center">
                                    {row.Tanggal}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.Bulan}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.Hasil}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.Pengecekan}
                                  </TableCell>
                                  <TableCell align="center">
                                    {row.Keterangan}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Grid>
                    </TabPanel>
                  </TabContext>
                </Box>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Home>
    </Box>
    </Grid>
  );
}
