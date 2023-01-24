import StudentModel from "../models/student.js";

class StudentController {
    static createDoc = async (req,res) =>{            //Create - Post
        try {
            const {name,age,fees}= req.body
            const doc = new StudentModel({
                name:name,
                age:age,
                fees:fees
            })  
            const result = await doc.save()
            res.status(201).send(result)          
        } catch (error) {
            console.log(error)
            
        }
        // res.send("Data Created")
    }

    static getAllDoc = async (req,res) =>{            //Read - Get
        try {
           const result = await StudentModel.find()
           res.send(result)
        } catch (error) {
            console.log(error);
            
        }
        // res.send("All Doc")
    }

    static getSingleDocById = async (req,res) =>{                                        //Read - Get ----only by Id
        try {
            const result = await StudentModel.findById(req.params.id)
            res.send(result)
         } catch (error) {
             console.log(error);
             
         }
        // res.send("Get single Doc By ID")
    }

    static updateDocById =async (req,res) =>{        //Update - Put
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id,req.body)
            res.send(result)
        } catch (error) {
            console.log(error);
            
        }
        // res.send("Update DOc By Id")
    }

    static deleteDOcById = async (req,res) =>{        //Delete - Delete
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.status(204).send(result)
        } catch (error) {
            console.log(error);
            
        }
        // res.send("Delete Doc By Id")
    }
}
export default StudentController
