import { NextAuthOptions } from "next-auth";
import GOOGLEPROVIDER from "next-auth/providers/google";

export const authOptions:NextAuthOptions = {
    providers: [
        GOOGLEPROVIDER({
        //   clientId: process.env.GOOGLE_ID as string,
        //   clientSecret: process.env.GOOGlE_SECRET as string,
          clientId: process.env.GOOGLE_ID !,
          clientSecret: process.env.GOOGlE_SECRET !,
        }),
      ]
}