import express from 'express'
const router = express.Router()
import StudentController from '../controllers/studentController.js'


router.post('/',StudentController.createDoc)         //  Create-post 
router.get('/',StudentController.getAllDoc)          //  Read-get
router.get('/:id',StudentController.getSingleDocById)                   //Read-get -----only by Id    //edit --get
router.put('/:id',StudentController.updateDocById)    // Update-put
router.delete('/:id',StudentController.deleteDOcById) // Delete-delete

export default router