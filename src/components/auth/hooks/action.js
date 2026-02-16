"use server";
import { cookies } from "next/headers";

export const validateUser = async (credentials) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/db.json`);
  const db = await res.json();

  const user = db.users.find(
    (u) => u.email === credentials.email && u.password === credentials.password
  );

  if (!user) return { error: "Invalid email or password" };


  const cookieStore = await cookies();
  cookieStore.set("user", user.email, { 
    maxAge: 60 * 60, 
    path: "/",
    httpOnly: true
  });

  return { success: true };
};

export const logoutAction = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("user");
};