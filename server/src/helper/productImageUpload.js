import multer from 'multer'

const productImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'productImages')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
  
const productImageUpload = multer({ storage: productImageStorage })

export default {
  productImageUpload
}