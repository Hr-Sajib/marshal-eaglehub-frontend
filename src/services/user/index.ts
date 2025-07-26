/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";

export const getAllUsers = async ({
  page,
  limit,
  searchTerm,
  userStatus,
  sortBy,
  sortOrder,
}: {
  page?: number;
  limit?: number;
  searchTerm?: string;
  userStatus?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}) => {
  try {
    const queryParams = new URLSearchParams();

    if (searchTerm) queryParams.append("searchTerm", searchTerm);
    if (userStatus) queryParams.append("userStatus", userStatus);
    if (page) queryParams.append("page", String(page));
    if (limit) queryParams.append("limit", String(limit));
    if (sortBy) queryParams.append("sortBy", sortBy);
    if (sortOrder) queryParams.append("sortOrder", sortOrder);

    const url = `${
      process.env.NEXT_PUBLIC_BASE_API
    }/user?${queryParams.toString()}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    console.error("Get users error:", error);
    return Error(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${id}`, {
      method: "GET",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    console.error("Get user by ID error:", error);
    return Error(error);
  }
};

export const updateUserByAdmin = async (id: string, userData: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/user/update-user-by-admin/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },

        body: JSON.stringify(userData),
      }
    );
    const result = await res.json();
    return result;
  } catch (error: any) {
    console.error("Update user error:", error);
    return Error(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    console.error("Delete user error:", error);
    return Error(error);
  }
};

export const restoreUser = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/user/restore/${id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    const result = await res.json();
    return result;
  } catch (error: any) {
    console.error("Restore user error:", error);
    return Error(error);
  }
};
