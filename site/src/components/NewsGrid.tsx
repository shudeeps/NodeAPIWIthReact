import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NewsCard from "./NewsCard";
import { render } from "react-dom";




const NewsGrid: React.FC<{}> = () => {

  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch('http://127.0.0.1:3002/'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
       
        return response.json();
      })
      .then(function(myJson) {
        // console.log(myJson.articles);
        setData(myJson.articles)
   
  
      });
  },[])


  console.log(data);
  return (
    <>
       {
                data && data.length>0 && data.map((item)=>
      <Box>
   
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
            display="flex"
            justifyContent={"center"}
          >
                
                <NewsCard
                heading={item['title']}
                imageURL={item['image']}
                summary={item['description']}
                url={item['url']}
                date={item['publishedAt']}
              />
               
           
          </Grid>
        </Grid>
       
      </Box>
        )
      }
    </>
  );
};

export default NewsGrid;