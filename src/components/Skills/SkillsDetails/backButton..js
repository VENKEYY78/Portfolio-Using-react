import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        padding: "8px 16px",
        cursor: "pointer",
        marginBottom: "16px",
      }}
    >
      ⬅ Back
    </button>
  );
};

export default BackButton;
