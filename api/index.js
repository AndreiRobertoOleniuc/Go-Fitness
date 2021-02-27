const axios= require("axios");

const cal = async ()=>{
    const body = [11.0,2.0,6.0,2.0,1.0,2.0];
    axios.post(`http://localhost:8080/api/public/getCalorie?gender=true&weight=61.5&height=170.0&age=18.0`,body)
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}
const main = ()=>{
    console.log(process.platform);
}

main();