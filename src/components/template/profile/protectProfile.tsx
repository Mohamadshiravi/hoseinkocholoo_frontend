import { ReactNode, useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks";
import SpinnerLoader from "../../module/loader";
import { useNavigate } from "react-router";
import { fetchUserData } from "../../../redux/slices/user";

export default function ProtectProfile({ children }: { children: ReactNode }) {
  const { error } = useTypedSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error === "unauth") {
      navigate("/login");
    } else {
      AuthenticateUser();
    }
  }, []);

  async function AuthenticateUser() {
    const res = await dispatch(fetchUserData());
    if (!res.payload) {
      navigate("/login");
    } else {
      setLoading(false);
    }
  }

  return !loading ? children : <SpinnerLoader />;
}
