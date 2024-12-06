const Doctors = () => {
  // app.get("/getDoctors", async (req, res) => {
  //   try {
  //     const data = {
  //       methodName: "getDoctors",
  //       objectName: "Doctors",
  //       params: { doctor_id: req.session.personId },
  //     };
  //     const doctors = await security.exeMethod(data);
  //     console.log("doctors", doctors);
  //     return res.status(200).json({ doctors });
  //   } catch (error) {
  //     console.error("Error fetching doctors:", error);
  //     res.status(500).json({ message: "Internal server error" });
  //   }
  // });

  return (
    <div>
      <h1>Doctors component</h1>
    </div>
  );
};

export default Doctors;
