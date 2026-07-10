    //axios and fetch : both are used make http request to backend
    // react -> http request -> express api
    // Get , post, put, delete
    


    //fetch built into js no installation needed like axios
    const res= await fetch("http://localhost:5000/users");
    const data= await res.json();
    console.log(data);


    //axios: third part lib
    // npm install axios
    import axios from "axios";
    const res=await axios.get("http://localhost:5000/users");
    console.log(res.data);


    //axios automatically parses data into json while in fetch we have to it manually 
    // by explicitly call response.json()


    //get request:
    const res=await fetch("http://localhost:5000/users")
    const data =res.json()
    console.log(data);

    // -> axios
    const res= await axios.get("http://localhost:5000/users");
    console.log(res.data);


    //Post request:
    await fetch("api/user",{
        method:"POST",
        header:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name:"nova"
        })
    })
    // --axios:
    await axios.post("api/user",{
        name:"nova"
    })


    //error handling: 
    const res = await fetch(url);
    if(!res.ok){
        throw new.error("request failed");
    }

    // -->axios
    try{
        await axios.get(url);
    }catch(err){
        console.log(err)
    }

    //fetch will only reponse on 400 and 404 http status and axios will response for all type of status code
    