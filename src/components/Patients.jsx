const Patients = () => {
  // app.get("/getDoctorPatients", async (req, res) => {
  //   try {
  //     const data = {
  //       methodName: "getDoctorPatients",
  //       objectName: "Patients",
  //       params: { doctor_id: req.session.personId },
  //     };
  //     const patients = await security.exeMethod(data);
  //     console.log("patients", patients);
  //     return res.status(200).json({ patients });
  //   } catch (error) {
  //     console.error("Error fetching patients:", error);
  //     res.status(500).json({ message: "Internal server error" });
  //   }
  // });

  return (
    <div>
      <h1>Patients component</h1>
    </div>
  );
};

export default Patients;
