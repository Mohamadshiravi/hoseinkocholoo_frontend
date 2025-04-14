import { Button, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router";
import { SendErrorToast } from "../../../utils/helper/toastFunctions";

export default function LoginForm() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState<string[]>([]);
  const [isCodeSend, setIsCodeSend] = useState(false);

  const regex = /^09\d{9}$/;
  async function SendCode(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (regex.test(phone)) {
      setIsCodeSend(true);
    } else {
      SendErrorToast("لطفا شماره موبایل خود را درست وارد کنید");
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>, index: number) {
    const codeClone: string[] = code;
    if (+e.target.value.length === 1) {
      codeClone[index] = e.target.value;
      const NextInp = document.getElementById(`codeInp${index + 1}`);
      NextInp?.focus();
    } else {
      codeClone[index] = "";
      const PrewInp = document.getElementById(`codeInp${index - 1}`);
      PrewInp?.focus();
    }
    setCode(codeClone);
  }
  return (
    <section className="w-full min-h-[100dvh] flex items-center justify-center">
      {isCodeSend ? (
        <form
          onSubmit={SendCode}
          className="bg-zinc-50 border border-zinc-200 rounded-lg sm:p-8 p-4 flex flex-col items-center sm:w-[500px] w-[95%]"
        >
          <Link to={"/"}>
            <img src="/img/logo/logo-2.png" className="h-[100px]" />
          </Link>
          <h1 className="moraba-bold text-2xl">کد تایید</h1>
          <h2 className=" vazir-medium mt-2">
            حساب کاربری با شماره {phone} وجود ندارد. برای ساخت حساب جدید، کد
            تایید برای این شماره ارسال گردید.
          </h2>
          <div className="flex flex-row-reverse items-center gap-2 font-sans font-bold mt-6">
            {[...Array(4)].map((_, i) => (
              <input
                id={`codeInp${i}`}
                key={i}
                maxLength={1}
                type="tel"
                className="InpShadow outline-none text-center bg-white border border-zinc-200 py-3 text-2xl rounded-md w-[60px] h-[60px] p-1"
                onChange={(e) => handleInputChange(e, i)}
              />
            ))}
          </div>
          <div className="w-full mt-3 flex flex-col gap-2">
            <Button type="submit" fullWidth variant="text" size="large">
              ارسال مجدد
            </Button>
            <Button type="submit" fullWidth variant="outlined" size="large">
              اصلاح شماره
            </Button>
            <Button type="submit" fullWidth variant="contained" size="large">
              ادامه
            </Button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={SendCode}
          className="bg-zinc-50 border border-zinc-200 rounded-lg sm:p-8 p-4 flex flex-col items-center sm:w-[500px] w-[95%]"
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
