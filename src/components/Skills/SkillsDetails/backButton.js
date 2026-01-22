import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="back-button-navigation"
      onClick={() => navigate(-1)}
      style={{
        padding: "8px 16px",
        cursor: "pointer",
        marginBottom: "16px",
        borderRadius: "10px",
        borderWidth: "0px",
        backgroundColor: "skyblue",
      }}
    >
      ⬅ Back
    </button>
  );
};

export default BackButton;
