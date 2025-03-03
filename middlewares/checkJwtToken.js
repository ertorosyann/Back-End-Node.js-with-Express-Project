import jwt from "jsonwebtoken";

const checkJwt = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decodedObj = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedObj.user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default checkJwt;
