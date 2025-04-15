import { Button, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link } from "react-router";
import {
  SendErrorToast,
  SendSucToast,
} from "../../../utils/helper/toastFunctions";
import VerifyCodeForm from "./verifyCodeForm";
import axiosInstance from "../../../utils/axios/axios";

export default function LoginForm() {
  const [phone, setPhone] = useState("");
  const [isCodeSend, setIsCodeSend] = useState(false);

  const regex = /^09\d{9}$/;
  async function SendCode(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (regex.test(phone)) {
      try {
        const res = await axiosInstance.post("/auth/send-otp/", {
          phone_number: phone,
        });
        SendSucToast("کد به شماره شما ارسال شد");
        console.log(res, phone);
      } catch (error) {
        console.log(error);

        SendErrorToast("مشکلی پیش امده");
      }

      // setIsCodeSend(true);
    } else {
      SendErrorToast("لطفا شماره موبایل خود را درست وارد کنید");
    }
  }

  return (
    <section className="w-full min-h-[100dvh] bg-zinc-50 flex items-center justify-center">
      {isCodeSend ? (
        <VerifyCodeForm phone={phone} />
      ) : (
        <form
          onSubmit={SendCode}
          className="bg-white border border-zinc-200 rounded-lg sm:p-8 p-4 flex flex-col items-center sm:w-[500px] w-[95%]"
        >
          <Link to={"/"}>
            <img src="/img/logo/logo-2.png" className="h-[100px]" />
          </Link>
          <h1 className="moraba-bold text-2xl">ورود یا ثبتنام</h1>
          <h2 className="vazir-medium mt-2">
            لطفا شماره موبایل خود را وارد کنید
          </h2>
          <div className="mt-6 w-full">
            <TextField
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
              label="شماره موبایل"
            />
          </div>
          <div className="w-full mt-3">
            <Button type="submit" fullWidth variant="contained" size="large">
              ورود
            </Button>
          </div>
          <h3 className="mt-3 text-sm w-full text-center">
            شرایط استفاده از خدمات ﻭ حریم خصوصی را می پذیرم.
          </h3>
        </form>
      )}
    </section>
  );
}
