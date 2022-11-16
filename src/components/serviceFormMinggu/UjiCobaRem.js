import { Box, TextField, Grid, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export default function SisiKananDepan() {
  return (
    <Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
        <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Fungsi Rem Kanan:
          </FormLabel>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            1. Head Truck Sumbu I
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            2. Head Truck Sumbu II
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            3. Head Truck Sumbu III
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            4. Tangki Trailer I
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            5. Tangki Trailer II
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            6. Tangki Trailer III
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
        <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Fungsi Rem Kiri :
          </FormLabel>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            1. Head Truck Sumbu I
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            2. Head Truck Sumbu II
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            3. Head Truck Sumbu III
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            4. Tangki Trailer I
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            5. Tangki Trailer II
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            6. Tangki Trailer III
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
    </Box>
  );
}
