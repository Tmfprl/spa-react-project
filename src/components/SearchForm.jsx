import { useState } from "react";
import "../styles/SearchForm.css";

const fields = [
  { value: "기관명", label: "기관명" },
  { value: "사업명", label: "사업명" },
  { value: "지원대상", label: "지원대상" },
  { value: "관심주제", label: "관심주제" },
  { value: "가구상황", label: "가구상황" },
  { value: "생애주기", label: "생애주기" },
];

// 검색 창 구현 
function SearchForm({ onSearch }) {
  const [field, setField] = useState("사업명");
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(field, keyword);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <select
        className="search-select"
        value={field}
        onChange={(e) => setField(e.target.value)}
      >
        {fields.map((f) => (
          <option key={f.value} value={f.value}>
            {f.label}
          </option>
        ))}
      </select>

      <input
        className="search-input"
        type="text"
        placeholder="검색어를 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button className="search-button" type="submit">
        검색
      </button>
    </form>
  );
}

export default SearchForm;
