const multer = require ('multer')
const{v4:uuid4} =require('uuid')
const fileType= {
    'image/png':'png',
    'image/jpg':'jpg',
    'image/jpeg':'jpeg'
}

const fileUpload= multer({
   limits: 500000,
    storage:multer.diskStorage(
    {
        destination:(req,file,cb)=>{
 cb(null,'uploads/images')
        }
        ,filename:(req,file,cb) =>{
            const ext = fileType[file.mimetype]
            cb(null,uuid4()+'.'+ext)
        }
    }
    ), 
    fileFilter:(req,file,cb)=>{
    const checkFileType= !!fileType[file.mimetype]
    let error = checkFileType?null:new Error('filetype is invalid ')
    cb(error,checkFileType)
    }
})

module.exports= fileUpload