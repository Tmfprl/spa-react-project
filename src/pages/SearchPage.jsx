import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import WelfareCard from "../components/WelfareCard";
import { searchWelfare } from "../api/welfareApi";
import "../styles/SearchPage.css";

function SearchPage() {
  const [data, setData] = useState([]);         // API 전체 데이터 저장
  const [results, setResults] = useState([]);   // 필터링된 결과
  const [loading, setLoading] = useState(false);

  // 🔥 1) 페이지 최초 로드시 전체 데이터 불러오기
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        // 민간복지서비스 API는 필터 없음 → 최대한 많은 데이터 로드
        const allData = await searchWelfare("", "", 1, 500); 
        setData(allData);
        setResults(allData); // 초기에는 전체 목록 보여줌
      } catch (err) {
        console.error("전체 데이터 로드 오류:", err);
        alert("데이터 로드 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // 🔥 2) 검색 시 클라이언트에서 필터링
  const handleSearch = (field, keyword) => {
    if (!keyword.trim()) {
      alert("검색어를 입력하세요!");
      return;
    }

    const filtered = data.filter((item) => {
      const value = item[field];

      // null/undefined 예외 방지
      if (!value) return false;

      return value.toString().toLowerCase().includes(keyword.toLowerCase());
    });

    setResults(filtered);
  };

  return (
    <div className="search-page">
      <SearchForm onSearch={handleSearch} />

      {loading && <p className="loading-text">검색 중...</p>}

      <div className="results-container">
        {!loading && results.length === 0 ? (
          <p className="no-results">검색 결과가 없습니다.</p>
        ) : (
          results.map((item, idx) => (
            <WelfareCard key={idx} item={item} />
          ))
        )}
      </div>
    </div>
  );
}

export default SearchPage;
