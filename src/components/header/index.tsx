"use client";
import React from "react";
import { PopoverWrapper } from "../popover-wrapper";
import { Avatar, Flex } from "@radix-ui/themes";
import toast from "react-hot-toast";
import axios from "axios";
import { Endpoints } from "@/services/api/enum";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      toast.loading("Signing out...");
      await axios.post(Endpoints.Logout);

      toast.dismiss();
      toast.success("Signed out successfully");
      router.push("/login");
    } catch (error) {
      toast.dismiss();
      toast.error("An error occurred while signing out");
      console.error(error);
    }
  };

  return (
    <header className="h-16 font-bold px-6 bg-gray-100 rounded-lg m-4">
      <ul className="flex flex-row items-center justify-between h-full">
        <li className="font-bold text-xl" />
        <PopoverWrapper
          trigger={
            <li className="font-normal flex flex-row gap-2 items-center cursor-pointer">
              <span>
                <Flex gap="2">
                  <Avatar fallback="J" size="2" />
                </Flex>
              </span>
              <span>Jorge Torres</span>
            </li>
          }
          side="bottom"
          className="w-[260px]"
        >
          <div>
            <p className="text-gray-400 mb-2">Settings</p>
            <hr />
            <ul className="my-2">
              <li
                className="hover:bg-black hover:text-white px-4 py-3 rounded-md cursor-pointer"
                onClick={handleSignOut}
              >
                Sign out
              </li>
            </ul>
          </div>
        </PopoverWrapper>
      </ul>
    </header>
  );
};