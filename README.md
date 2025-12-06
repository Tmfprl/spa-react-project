---

# 📘 Welfare Service Search SPA (2025)

This project is a **Single Page Application (SPA) built with React** for searching welfare services.
Users can enter keywords to browse welfare service listings and view detailed information through intuitive card-based UI components.

This project uses the *Private Welfare Service API*,
and because the API does not provide any built-in filtering features,
**client-side filtering** is implemented directly within the application.

---

## 📌 Description
This is a **Welfare Service Search SPA** built using React + Vite.  
Users can browse and search welfare services by selecting a target field and entering keywords.  
Due to the limitations of the public API (no filtering feature),  
all filtering is implemented on the client side using JavaScript.

- **Framework**: React  
- **Language**: JavaScript  
- **Build Tool**: Vite  
- **API**: 민간복지서비스정보 API  
- **Year**: 2025  

---

## ✨ Features
- **Client-side Filtering** (기관명, 사업명, 생애주기 등)
- **Dynamic Search UI** with field selector
- **Responsive Card Layout**
- **Expandable Welfare Cards** (More/Less toggle)
- **Custom UI Design** using soft pastel color palette

---

## 🎨 UI Color Palette
| Color | Hex |
|-------|------|
| Soft Cream | `#FFF2C6` |
| Light Beige | `#FFF8DE` |
| Soft Blue | `#AAC4F5` |
| Pastel Indigo | `#8CA9FF` |

---

## 🛠️ Tech Stack
| Component | Technology |
|----------|------------|
| Framework | React (Vite) |
| Language | JavaScript |
| Styling | CSS |
| API | 민간복지서비스 Open API |
| State | useState / useEffect |

---

## 📂 Project Structure
```
spa-react-project
├─ src
│  ├─ api
│  │  └─ welfareApi.js
│  ├─ components
│  │  ├─ SearchForm.jsx
│  │  └─ WelfareCard.jsx
│  ├─ pages
│  │  └─ SearchPage.jsx
│  ├─ styles
│  │  ├─ SearchForm.css
│  │  ├─ WelfareCard.css
│  │  └─ SearchPage.css
│  ├─ App.jsx
│  └─ main.jsx
│
├─ public
└─ package.json
```

---

## ⚙️ Installation
```bash
git clone https://github.com/Tmfprl/spa-react-project.git
cd spa-react-project
npm install
npm run dev
```

---

## 🚀 Usage
1. Select a search field  
2. Enter a keyword  
3. View filtered results in card format  
4. Click **“더보기 ▼”** to expand card details  

---
# 📘 Welfare Service Search SPA (2025)

React 기반으로 개발된 **복지 서비스 검색 Single Page Application(SPA)** 입니다.  
사용자는 키워드를 입력하여 복지 서비스 목록을 검색하고,  
각 서비스의 상세 정보를 카드 UI로 직관적으로 조회할 수 있습니다.

이 프로젝트는 *민간복지서비스 API* 를 사용하며,  
API에 필터 기능이 없기 때문에 **클라이언트 측 필터링(Client-side Filtering)** 을 직접 구현했습니다.

---

🇰🇷 Korean Version

## 📌 프로젝트 개요
이 프로젝트는 React 기반의 **복지 서비스 검색 웹 애플리케이션(SPA)** 입니다.  
사용자가 입력한 키워드와 선택한 검색 필드에 따라  
복지 서비스 목록을 빠르게 필터링하고 확인할 수 있습니다.

민간복지서비스 API에는 필터링 기능이 없기 때문에  
모든 검색 기능은 **클라이언트 단에서 직접 구현**되었습니다.

---

## ✨ 주요 기능
- **클라이언트 사이드 검색 필터링**  
- **필드 기반 검색 (기관명, 사업명, 관심주제 등)**  
- **반응형 Welfare Card UI**  
- **카드 상세정보 토글 (더보기 / 접기)**  
- **파스텔톤 UI 디자인 적용**  

---

## 🎨 사용된 색상 테마
| 용도 | 색상 |
|------|-------|
| 메인 배경 | `#FFF8DE` |
| 카드 배경 | `#FFF2C6` |
| 버튼 포인트 | `#AAC4F5` |
| 텍스트 포인트 | `#8CA9FF` |

---

## 📂 프로젝트 구조
(English Section 참고)

---

## ⚙️ 설치 방법
```bash
git clone https://github.com/Tmfprl/spa-react-project.git
cd spa-react-project
npm install
npm run dev
```

---

## 🚀 사용 방법
- 검색 필드를 선택합니다  
- 검색어를 입력합니다  
- 필터링된 카드가 화면에 표시됩니다  
- “더보기 ▼” 버튼을 눌러 자세한 정보를 확인합니다  

---

## 📜 라이선스
This project is licensed under the MIT License.

---

## 👩‍💻 개발자
Developed by **GYEONGEUN PARK**, 2025.
