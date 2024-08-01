import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Home page
      <div
        style={{
          paddingTop: "20px",
        }}
      >
        <button
          onClick={() => {
            navigate("/with-remote");
          }}
        >
          Go With Remote
        </button>
      </div>
    </div>
  );
}
