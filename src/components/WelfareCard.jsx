import { useState } from "react";
import "../styles/WelfareCard.css";

function WelfareCard({ item }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded((prev) => !prev);

  return (
    <div className="welfare-card">
      <h3 className="card-title">{item.사업명 || "제목 없음"}</h3>
      <p className="card-org">{item.기관명 || "기관 정보 없음"}</p>

      <div className={`card-content ${expanded ? "expanded" : ""}`}>
        <p><strong>지원대상:</strong> {item.지원대상 || "정보 없음"}</p>
        <p><strong>지원내용:</strong> {item.지원내용 || "정보 없음"}</p>
        <p><strong>생애주기:</strong> {item.생애주기 || "정보 없음"}</p>
        <p><strong>가구상황:</strong> {item.가구상황 || "정보 없음"}</p>
        <p><strong>신청방법:</strong> {item.신청방법 || "정보 없음"}</p>

      </div>

      <button className="expand-btn" onClick={handleToggle}>
        {expanded ? "접기 ▲" : "더보기 ▼"}
      </button>
    </div>
  );
}

export default WelfareCard;
