import multer from "multer"
import sharp from "sharp"
import fs from "fs/promises"

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: ( req, file, cb ) => {
        const numeroAleatorio = Math.floor(Math.random() * 1000000)
        return cb( null, numeroAleatorio + "_" +file.originalname.trim().replace( / /g, "_") ) 
    }
})

const upload = multer({ storage })

export async function resizeImage(req, res, next){
    if( !req.file ) return next()
    const numeroAleatorio = Math.floor(Math.random() * 1000000)
    const imagen = "uploads/" + numeroAleatorio + ".webp"

    try {
        await sharp(req.file.path)
            .resize(500)
            .webp()
            .toFile(imagen)

        // await fs.unlink(req.file.path)
        console.log(req.file.filename)
        console.log(imagen)
        next()
    } catch (error) {
        
    }

}

export default upload