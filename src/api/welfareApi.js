import API_BASE_URL from "./apiConfig";

const SERVICE_KEY = "Ildjk4a%2FdVgeSGBCVfs2ND5xKnxV55fqzoMAwG5C4UPBrn8cUf1vj3FvLxdz0tLUTiZgv50zf2U%2F%2FHqrkzDZ%2Bg%3D%3D";

/**
 * 공공데이터 검색 API 호출
 * @param {string} field 검색할 필드명 (기관명, 사업명 등)
 * @param {string} keyword 검색어
 * @param {number} page 페이지 번호
 * @param {number} perPage 페이지 크기
 */
export async function searchWelfare(field, keyword, page = 1, perPage = 500) {
  try {
    const url = `${API_BASE_URL}/uddi:44e91fb3-7ca8-4f83-a978-d42109ed8443` +
      `?page=${page}&perPage=${perPage}&${field}_like=${encodeURIComponent(keyword)}` +
      `&serviceKey=${SERVICE_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("API 요청 실패: " + response.status);
    }

    const json = await response.json();
    console.log(url)

    // 실제 데이터는 json.data 배열 안에 있음
    return json.data ?? [];
  } catch (err) {
    console.error("복지 검색 API 오류:", err);
    return [];
  }
}