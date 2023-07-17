const Contact = require("../Models/Cotacts");
const GetContacts = async (req, res) => {
  const contacts = await Contact.find();
  return res.json(contacts);
};

const CreateContacts = async (req, res) => {
  const { name, email, phoneNumber } = req.body;
  const NewData = new Contact({ name, email, phoneNumber });
  await NewData.save();
  return res.send(await Contact.find());
  // res.status(201).json({message:"Create contact "})
};

const GetContact = async (req, res) => {
  const getContact = await Contact.findById(req.params.id);
  // if(!getContact){
  //     res.status(404)
  //     throw new Error ("User not found")

  return res.json(getContact);
  // res.status(200).json({message:`Get Contact for ${req.params.id}`})
};
const UpdateContacts = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  // res.status(200).json({message: `Updated Contact for ${req.params.id}`})
  res.json(updatedContact);
};
const DeleteContacts = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  return req.json(await Contact.find());
};
module.exports = {
  GetContacts,
  CreateContacts,
  GetContact,
  UpdateContacts,
  DeleteContacts,
};
