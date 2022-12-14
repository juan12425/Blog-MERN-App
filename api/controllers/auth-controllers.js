const User = require('../models/user')
const { StatusCodes } = require('http-status-codes')
const {NotFoundError, UnauthorizedError, BadRequestError} = require('../errors')

const register = async (req, res) => {

    if(req.body.role)
    {
        throw new UnauthorizedError('Not authorized to assaign roles')
    }

    const user = await User.create({...req.body})
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({name: user.name, email:user.email, role: user.role, username: user.username, token, role: user.role, id: user._id})
    
}

const login = async (req, res) => {
    
    const {email, password} = req.body
    
    if(!password || !email)
    {
        throw new BadRequestError('Please provide a password and an email')
    }
    
    const user = await User.findOne({email})

    if(!user)
    {
        throw new NotFoundError('User could not be found')
    }
    
    const isPasswordCorrect = await user.comparePassword(password)

    if(!isPasswordCorrect)
    {
        throw new UnauthorizedError('Not authorized')
    }

    const token = user.createJWT()

    res.status(StatusCodes.OK).json({token, email:user.email, username:user.username, role: user.role, id: user._id})
}

module.exports = {
    register,
    login
}