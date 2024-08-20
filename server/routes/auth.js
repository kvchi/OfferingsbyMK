import express from 'express'
import {prisma} from "../config/prisma.js"
import bcryptjs from "bcryptjs"  

const router = express.Router()

// signup routes
router.post('/signup', async(req,res) => {
    const { firstname, lastname, email, password, image, phone } = req.body; //object destructuring
    const findExistingEmail = await prisma.user.findFirst({
        where: { email: email.toLowerCase()}
    })
    if(findExistingEmail) {
        return res.status(403).json({error: true, message: `This email already exists`})
    }
    else {
        //Hash or encrypt the password
        const salt = await bcryptjs.genSalt(10), hashPassword = await bcryptjs.hash(password, salt)
        try {
            //save user details in the database
            await prisma.user.create({
                data: { firstname, lastname,email: email.toLowerCase(), password: hashPassword, image, phone }
            })
            return res.status(201).json({error: false, message: `Profile created successfully. Welcome to OfferingsbyMK!`})
        } catch (error) {
            console.log({error})
            return res.status(500).json({error: true, message: " Unable to create account. Something went wrong."})
        }
    }
});

// login routes
router.post('/login', async(req,res) => {
    const { email, password } = req.body; //object destructuring
    try {
        const user = await prisma.user.findFirst({
            where: { email: email.toLowerCase() }
            })
            if(!user) {
                return res.status(403).json({error: true, message: `This email does not`})
            }
            const isMatch = await bcryptjs.compare(password, user.password);
            if(!isMatch) {
                return res.status(403).json({error: true, message: `Invalid password`})
            }

            return res.status(200).json({ error: false, message: 'Login successful'});
            } catch (error) {
                console.log({error});
                return res.status(500).json({error: true, message: " Unable to login." });
                }
                });

export default router