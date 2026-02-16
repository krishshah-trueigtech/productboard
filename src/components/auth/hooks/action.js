"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setCookie = async (data) => {
  const cookie = await cookies();
  cookie.set("user", data?.email, { maxAge: 60 * 60 });
};

export const getCookie = async () => {
  const cookie = await cookies();
  return cookie.get("user")?.value || null;
};


export const route = async (url) => {
  redirect(`/${url}`);
};
