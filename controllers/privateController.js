exports.getPrivateData = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "this is the private data",
  });
};
