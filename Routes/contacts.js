const express =  require('express') 

const router = express.Router() 

const  {GetContacts,CreateContacts,GetContact,UpdateContacts,DeleteContacts} =  require('../Controllers/controlleres')
router.route("/").get(GetContacts).post(CreateContacts)
// router.route("/").post((req,res) =>{
//     res.status(200).json({message:"Created Contacts "})
// })

router.route("/:id").get(GetContact).put(UpdateContacts).delete(DeleteContacts)

// router.route("/:id").put((req,res) =>{
//     res.status(200).json({message:`updated Contact for ${req.params.id}`})
// })
// router.route("/:id").delete((req,res) =>{
//     res.status(200).json({message:`Deleted   Contact for ${req.params.id}`})
// })

module.exports = router