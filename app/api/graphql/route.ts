import { ConnectDB } from '../../../lib/db'
import { ApolloServer } from "@apollo/server";
import { NextRequest, NextResponse } from "next/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import bcrypt from 'bcryptjs'
import User from '@/models/User'
import { QuerySignArgs } from '@/types/index'
import { NodeMailer } from '../lib/nodemailer/'
import { NodemailerProps } from '../../../types/index'

const typeDefs = `#graphql
    type User {
        id: ID
        Name: String
        EmailOrPhone: String
        Password: String
    }

    type Confirmation {
        message: String
        success: Boolean
      }

    type Query {
        getUsers: [User]
        getUser(Name: String!): User!
        getMessage: String
    }

    type Mutation {
        UserPhoneOrEmailConfirmation(Name: String!, EmailOrPhone: String!, Password: String!): Confirmation!
    }
`

const resolvers = {
    Query: {
        getMessage: () => "Word!",
    },
    Mutation: {
        UserPhoneOrEmailConfirmation: async (_: any, args: QuerySignArgs) => {
            try {
                const existingUser = await User.findOne({ email: args.EmailOrPhone });
                if (existingUser) {
                    throw new Error('Email is already in use');
                }

                const hashedPassword = await bcrypt.hash(args.Password, 10);

                if (args.EmailOrPhone) {
                    if (args.EmailOrPhone.includes('@')) {
                        return NodeMailer({ Email: args.EmailOrPhone, Name: args.Name, HashedPassword: hashedPassword })
                    } else {
                        //phone
                    }
                }

            } catch (error) {
                throw error;
            }
        }
    }

};

ConnectDB()


const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer);
export async function GET(request: NextRequest) {
    return handler(request);
}
export async function POST(request: NextRequest) {
    return handler(request);
}