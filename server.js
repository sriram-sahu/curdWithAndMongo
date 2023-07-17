const express = require("express");
const app = express();
const dotenv = require("dotenv");

const Port = process.env.PORT || 3000;

app.use(express.json());
const BrandName = require("./modal");
const Employee = require("./modal2");

const DbConnection = require("./config/DbConnection");

DbConnection();
const route = require("./Routes/contacts");
const userRoute = require("./Routes/User");
app.use("/api/contacts", route);
app.use("/api/user", userRoute);
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.post("/addEmployee", async (req, res) => {
  const { employeeName, email } = req.body;
  try {
    const NewData = new Employee({ employeeName, email });
    await NewData.save();
    return res.send(await Employee.find());
  } catch (err) {
    console.log(err.message);
  }
});
app.get("/getAllEmployees", async (req, res) => {
  try {
    const allData = await Employee.find();
    return res.json(allData);
  } catch (err) {
    console.log(err);
  }
});
app.get("/getEmployee/:id", async (req, res) => {
  try {
    const Data = await Employee.findById(req.params.id);
    return res.json(Data);
  } catch (err) {
    console.log(err.message);
  }
});
app.delete("/delete/:id", async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    return res.json(await Employee.find());
  } catch (err) {
    console.log(err.message);
    res.send(err);
  }
});
app.post("/addBrand", async (req, res) => {
  const { brandName } = req.body;
  try {
    const newData = new BrandName({ brandName });
    await newData.save();
    return res.send(await BrandName.find());
  } catch (err) {
    console.log(err);
  }
});
app.get("/getAllBrands", async (req, res) => {
  try {
    const allData = await BrandName.find();
    return res.json(allData);
  } catch (err) {
    console.log(err.message);
  }
});
app.get("/getBrand/:id", async (req, res) => {
  try {
    const Data = await BrandName.findById(req.params.id);
    return res.json(Data);
  } catch (err) {
    console.log(err.message);
  }
});
app.delete("/delete/:id", async (req, res) => {
  try {
    await BrandName.findByIdAndDelete(req.params.id);
    return res.json(await BrandName.find());
  } catch (err) {
    console.log(err.message);
  }
});
app.listen(Port, () => console.log(`server is running on port ${Port} `));
