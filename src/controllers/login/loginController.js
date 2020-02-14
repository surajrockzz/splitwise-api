import jwt from 'jsonwebtoken';

const login = async (req, res) => {
    const {username, password} = req.body;
    let token = jwt.sign({data: username}, process.env.SECRET_KEY, {expiresIn: '7h'});
    res.status(200).json({ token });
};

export default login;
