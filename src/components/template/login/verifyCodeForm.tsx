import { Button } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router";

export default function VerifyCodeForm({ phone }: { phone: string }) {
  const [seconds, setSeconds] = useState(120);
  const [code, setCode] = useState<string[]>([]);

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

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;

    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  };

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds]);
  return (
    <form
      //   onSubmit={SendCode}
      className="bg-white border border-zinc-200 rounded-lg sm:p-8 p-4 flex flex-col items-center sm:w-[500px] w-[95%]"
    >
      <Link to={"/"}>
        <img src="/img/logo/logo-2.png" className="h-[100px]" />
      </Link>
      <h1 className="moraba-bold text-2xl">کد تایید</h1>
      <h2 className=" vazir-medium mt-2">
        حساب کاربری با شماره {phone} وجود ندارد. برای ساخت حساب جدید، کد تایید
        برای این شماره ارسال گردید.
      </h2>
      <div className="flex flex-row-reverse items-center gap-2 font-sans font-bold mt-6">
        {[...Array(4)].map((_, i) => (
          <input
            id={`codeInp${i}`}
            key={i}
            maxLength={1}
            type="tel"
            className="InpShadow outline-none focus:border-primary text-center bg-white border border-zinc-200 py-3 text-2xl rounded-md w-[60px] h-[60px] p-1"
            onChange={(e) => handleInputChange(e, i)}
          />
        ))}
      </div>
      <div className="w-full mt-3 flex flex-col gap-2">
        <div className="w-full">
          {seconds === 0 ? (
            <Button type="submit" fullWidth variant="text" size="large">
              ارسال مجدد
            </Button>
          ) : (
            <span className="text-myGreen-600 text-sm block text-center">
              تا ارسال مجدد کد : {formatTime(seconds)}
            </span>
          )}
        </div>
        <Button type="submit" fullWidth variant="outlined" size="large">
          اصلاح شماره
        </Button>
        <Button type="submit" fullWidth variant="contained" size="large">
          ادامه
        </Button>
      </div>
    </form>
  );
}
