📌 Description

This is a Welfare Service Search SPA built using React + Vite.
Users can browse and search welfare services by selecting a target field and entering keywords.
Due to the limitations of the public API (no filtering feature),
all filtering is implemented on the client side using JavaScript.

Framework: React

Language: JavaScript

Build Tool: Vite

API: 민간복지서비스정보 API

Year: 2025

✨ Features

Client-side Filtering based on field (e.g., 기관명, 사업명, 생애주기 등)

Dynamic Search UI with field selector

Responsive Card Layout

Custom UI Design using soft pastel color palette

Expandable Welfare Cards (More/Less toggle)

🎨 UI Color Palette

사용된 파스텔톤 메인 팔레트:

Color	Hex
Soft Cream	#FFF2C6
Light Beige	#FFF8DE
Soft Blue	#AAC4F5
Pastel Indigo	#8CA9FF
🛠️ Tech Stack
Component	Technology
Framework	React (Vite)
Language	JavaScript
Styling	CSS
API	민간복지서비스 Open API
State	useState / useEffect
📂 Project Structure
spa-react-project
├─ src
│  ├─ api
│  │  └─ welfareApi.js       # API 요청 및 데이터 fetch
│  ├─ components
│  │  ├─ SearchForm.jsx      # 검색 영역(필드 + 입력창)
│  │  └─ WelfareCard.jsx     # 카드 UI
│  ├─ pages
│  │  └─ SearchPage.jsx      # 전체 데이터 로딩 + 필터링
│  ├─ styles
│  │  ├─ SearchForm.css
│  │  ├─ WelfareCard.css
│  │  └─ SearchPage.css
│  ├─ App.jsx
│  └─ main.jsx
│
├─ public
└─ package.json

⚙️ Installation

Clone the repository:

git clone https://github.com/Tmfprl/spa-react-project.git
cd spa-react-project


Install dependencies:

npm install


Run development server:

npm run dev

🚀 Usage

Select a search field (e.g., 사업명, 기관명, 생애주기 등)

Enter a keyword

View filtered results in card format

Click “더보기 ▼” to expand card details

🇰🇷 Korean Version
📌 프로젝트 개요

이 프로젝트는 React 기반의 복지 서비스 검색 웹 애플리케이션(SPA) 입니다.
사용자가 입력한 키워드와 선택한 검색 필드에 따라
복지 서비스 목록을 빠르게 필터링하고 확인할 수 있습니다.

민간복지서비스 API에는 필터링 기능이 없기 때문에
모든 검색 기능은 클라이언트 단에서 직접 구현되었습니다.

✨ 주요 기능

클라이언트 사이드 검색 필터링

필드 기반 검색 (기관명 / 사업명 / 지원대상 / 관심주제 등)

반응형 Welfare Card UI

카드 상세정보 토글 (더보기 / 접기)

파스텔톤 UI 디자인 적용

🎨 사용 색상 테마
용도	색상
메인 배경	#FFF8DE
카드 배경	#FFF2C6
버튼 포커스 & 포인트	#AAC4F5
텍스트 포인트	#8CA9FF

전체 페이지와 카드 컴포넌트는 부드럽고 통일감 있는 파스텔톤으로 디자인됨.

📂 프로젝트 구조

(위 영문과 동일)

⚙️ 설치 방법
git clone https://github.com/Tmfprl/spa-react-project.git
cd spa-react-project
npm install
npm run dev

🚀 사용 방법

검색 필드를 선택합니다

검색어를 입력합니다

필터링된 카드가 화면에 표시됩니다

“더보기 ▼” 버튼을 눌러 자세한 정보를 확인할 수 있습니다

📜 라이선스

This project is licensed under the MIT License.

👩‍💻 개발자

Developed by GYEONGEUN PARK, 2025.
