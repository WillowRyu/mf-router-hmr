import { Hello } from "app_02/Hello";
import { useNavigate } from "react-router-dom";

export function WithRemote() {
  const navigate = useNavigate();

  return (
    <div>
      With Remote2
      <Hello name={"222"} />
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
