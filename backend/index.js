import express from "express"
import cors from "cors"
import ImageKit from "imagekit"

const port = process.env.PORT || 3000;
const app = express();

app.use(
    cors(
        {
            origin:process.env.CLIENT_URL,
        }
    )
)


const imagekit = new ImageKit({
    urlEndpoint: process.env.VITE_IMAGE_KIT_ENDPOINT,
    publicKey: process.env.VITE_IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.VITE_IMAGE_KIT_PRIVATE_KEY
  });


app.listen(port,()=>{
    console.log("Server running on 3000")
})


app.get('/api/upload', function (req, res) {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
  });