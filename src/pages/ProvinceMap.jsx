import React, { useEffect, useState } from "react";
import api from "../config/api";
import { Container, Typography } from "@mui/material";
import Header from "../components/Header";

function ProvinceMap() {
  const [userdetails, setUserdetails] = useState({});

  const [province, setProvince] = useState([]);

  useEffect(() => {
    async function getProvince() {
      try {
        const data = await api.get("province/");
        // console.log(data.data);
        setProvince(data.data);
        // console.log(province[0].name);
      } catch (err) {
        console.log(err);
      }
    }
    getProvince();
  }, [setProvince]);

  const handleMouseOver = (e) => {
    // e.target.style.fill = redColor
    // provinceMapData.map((item)=>console.log(item.name))
    // if (onMapHover) {
    //     onMapHover({ name: e.name, zip: e.zip })
    //}

    setUserdetails(e);
    // console.log(e);
  };
  return (
    <>
    <Header/>
      <Typography align={"center"} variant="h3" sx={{ py: 3 }}>
        Province Map
      </Typography>
      <Container>
        Province details: <br />
        Province Name:{userdetails.name} <br />
        zip:{userdetails.zip}
        <svg viewBox="0 0 1029.19 522.34">
          {province.map((item) => {
            return (
              <path
                key={item.name}
                d={item.shape}
                onMouseOver={() => handleMouseOver(item)}
                // onMouseOut={(event) => {
                //   event.target.style.fill = greenColor;
                // }}
              ></path>
            );
          })}
        </svg>
      </Container>
    </>
  );
}

export default ProvinceMap;
