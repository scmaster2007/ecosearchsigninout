import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export const authenticate = async () => {
  try {
    const session = await getServerSession(options);

    if (!session) {
      const error:any = new Error("Authentication failed, 401");
      error.statusCode = 401; // Unauthorized status code
      throw error;
    }

    return session;
  } catch (error) {
    // Handle specific error cases or logging here if necessary
    throw error;
  }
};

export const authenticateClient = async () => {
  try {
    const session = await getServerSession(options);

    if (!session) {
      await redirect('/signin');
    }

    return session;
  } catch (error) {
    // Handle specific error cases or logging here if necessary
    throw error;
  }
};

export const authenticateSignedIn = async () => {
  try {
    const session = await getServerSession(options);

    if (session) {
      await redirect('/signout');
    }

    return session;
  } catch (error) {
    // Handle specific error cases or logging here if necessary
    throw error;
  }
}