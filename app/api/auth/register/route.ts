import User from '@/models/User';
import ConnectDB from '@/lib/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server'
import { NextApiHandler } from 'next';


export const POST: NextApiHandler = async (request) => {

    try {
        await ConnectDB() // mongodb connect
        const { name, email, password } = await request.body

        //---------- Name contorller
        const UserName = await User.findOne({ name })
        if (UserName) {
            return new NextResponse(
                JSON.stringify({ message: `The name ${name} is already registered` }),
                { status: 409 }
            )
        }

        //---------- Email contorller
        const UserEmail = await User.findOne({ email })
        if (UserEmail) {
            return new NextResponse(
                JSON.stringify({ message: `${email} email account is already registered in the system` }),
                { status: 409 }
            )
        }

        //---------- hash Password
        const hashedPassword = await bcrypt.hash(password, 5)

        //---------- Create New User
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })
        try {
            await newUser.save()
            return new NextResponse("user has been created", { status: 200 })
        } catch (err) {
            return new NextResponse(
                JSON.stringify({ message: err }),
                { status: 500 }
            )
        }
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ message: 'Failed to create user' }),
            { status: 500 }
        )
    }

}

export const GET: NextApiHandler = async (request) => {
    try {
        return new NextResponse(
            JSON.stringify({ message: 'HELLOO' }),
            { status: 200 }
        )
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ message: 'Failed to create user' }),
            { status: 500 }
        )
    }

}





