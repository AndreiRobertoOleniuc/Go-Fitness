const axios= require("axios");

const cal = async ()=>{
    const body = [11.0,2.0,6.0,2.0,1.0,2.0];
    const age = new Date('2002-10-18');
    axios.post(`http://localhost:8080/api/public/fillData?id=1&goal=zunehmen&gender=true&weight=60&height=160`,{
        birthday:age,
        stunden:body
    })
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

cal();