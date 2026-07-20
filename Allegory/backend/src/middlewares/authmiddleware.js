import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try{
    const authHeader = req.get("authorization")
  if (!authHeader) {
    return res.status(401).json({
      status: false,
      message: "Access denied",
    });
  }

  const token = authHeader.split(" ")[1];
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decode;
  next();
  }catch(err){
    return res.status(401).json({
        status:false,
        message: "failed token verification"
    })
  }
};
