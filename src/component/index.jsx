import { useEffect, useState } from "react";
import * as axios from "axios";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button, 
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
export const Main = () => {
  const [data, setData] = useState();
  const [front, setFront] = useState([]);
  const [uilet, setUlet] = useState("");
  const [mode, setMode] = useState("ui");
  const [project, setProject] = useState("");
  useEffect(() => {
    axios.get("http://127.0.0.1/getProject").then((res) => {
      setFront(Object.keys(res.data));
      setData(res.data);
    });
  }, []);

  const handleChange = (event) => {
    setProject(event.target.value);
  };

  return (
    <Box p={2}>
      <Box display="flex"  gap={2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">请选择</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mode}
            label="Age"
            defaultValue=""
            onChange={(event) => {
              setMode(event.target.value);
            }}
          >
            {["ui", "meta"].map((front) => {
              return (
                <MenuItem key={front} value={front}>
                  {front}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">请选择</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={project}
            label="Age"
            defaultValue=""
            onChange={handleChange}
          >
            {front.map((front) => {
              return (
                <MenuItem key={front} value={front}>
                  {front}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">请选择</InputLabel>
          <Select
            value={uilet}
            label="Age"
            defaultValue="1"
            onChange={(event) => {
              setUlet(event.target.value);
            }}
          >
            {data?.[project]?.map((front) => {
              return (
                <MenuItem key={front} value={front}>
                  {front}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button
          onClick={() => {
            axios
              .post(`http://127.0.0.1/build`, { mode, project, uilet })
              .then((res) => {
                console.log("res=>", res);
              });
          }}
        >
          编译
        </Button>
      </Box>
      <Box>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={uilet}
            onChange={(event) => {
              setUlet(event.target.value);
            }}
          >
            {data?.[project]?.map((front) => {
              return (
                <FormControlLabel
                  value={front}
                  control={<Radio />}
                  label={front}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
