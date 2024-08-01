import { loadRemote } from "@module-federation/runtime";
import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";

const Hello = lazy(() =>
  loadRemote("app_02/Hello").then((module) => ({ default: module.Hello }))
);

export function WithRemote() {
  const navigate = useNavigate();

  return (
    <div>
      With Remote
      <Suspense>
        <Hello name={"222"} />
      </Suspense>
      <div style={{ padding: "20px" }}></div>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Go Home
      </button>
    </div>
  );
}
