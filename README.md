# Agree - 정말 동의해?

> 뉴스 속 논란을 쉽게 해결하는 토론 플랫폼

## 📋 프로젝트 소개

**Agree**는 뉴스 기반 토론 플랫폼으로, 사용자들이 사회적 이슈에 대해 찬성/반대 의견을 제시하고 토론할 수 있는 서비스입니다. 복잡한 사회 문제를 간단한 투표와 토론을 통해 다양한 관점을 공유하고 이해할 수 있도록 돕습니다.

### 해결하는 문제

- **사회적 논란의 양극화**: 다양한 관점을 공유하고 이해할 수 있는 공간 제공
- **뉴스 기반 토론의 접근성**: 뉴스 링크를 기반으로 한 명확한 주제 설정
- **간편한 의견 표현**: 복잡한 글 작성 없이 간단한 투표와 짧은 댓글로 의견 표현
- **카테고리별 분류**: 사회, 정책, 경제, 연애·결혼 등 주제별로 분류된 토론

## ✨ 주요 기능

- 🔐 **사용자 인증**: 로그인/회원가입 기능
- 📰 **뉴스 기반 토론**: 뉴스 링크를 기반으로 한 토론 주제 생성
- 🗳️ **투표 시스템**: 찬성/반대 투표 및 실시간 결과 확인
- 💬 **댓글 시스템**: 토론에 참여하는 댓글 작성
- 📂 **카테고리 분류**: 사회, 정책, 경제, 연애·결혼 카테고리별 게시글 조회
- 📊 **무한 스크롤**: React Query를 활용한 효율적인 데이터 페칭
- 🎨 **반응형 UI**: 모던하고 직관적인 사용자 인터페이스

## 🛠️ 기술 스택

- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **State Management**: React Query (@tanstack/react-query)
- **Form Management**: React Hook Form + Zod
- **UI Components**: Lucide React Icons
- **Animation**: Motion

## 📦 설치 및 실행

### 필수 요구사항

- Node.js 20 이상
- npm, yarn, pnpm 또는 bun

### 설치

```bash
# 의존성 설치
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm run start
```

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── (afterLogin)/      # 로그인 후 라우트
│   ├── (beforeLogin)/     # 로그인 전 라우트
│   └── layout.tsx         # 루트 레이아웃
├── entities/              # 비즈니스 엔티티
│   └── post/              # 게시글 엔티티
├── features/              # 기능별 모듈
│   ├── auth/              # 인증 기능
│   └── board/             # 게시판 기능
├── page/                  # 페이지 컴포넌트
│   ├── board/             # 게시글 상세 페이지
│   ├── home/              # 홈 페이지
│   ├── posts/             # 게시글 목록 페이지
│   └── write/             # 글쓰기 페이지
├── shared/                # 공유 리소스
│   ├── api/               # API 유틸리티
│   ├── config/            # 설정 파일
│   ├── lib/                # 유틸리티 함수
│   ├── model/              # 공유 모델
│   ├── providers/         # Context Provider
│   └── ui/                 # 공유 UI 컴포넌트
└── widgets/               # 위젯 컴포넌트
    └── layout/             # 레이아웃 위젯
```

### 아키텍처 패턴

이 프로젝트는 **Feature-Sliced Design (FSD)** 아키텍처를 기반으로 구성되어 있습니다:

- **entities**: 비즈니스 엔티티 (게시글, 사용자 등)
- **features**: 사용자 기능 (인증, 투표 등)
- **shared**: 공유 리소스 (UI 컴포넌트, 유틸리티 등)
- **widgets**: 복합 UI 블록
- **page**: 페이지 컴포넌트

## 🧪 개발 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린트 검사
npm run lint

# 타입 체크
npm run type-check

# 코드 포맷팅
npm run format

# 코드 포맷팅 검사
npm run format:check
```

## 🧩 주요 컴포넌트

### 투표 시스템

- `VoteButtons`: 투표 결과를 표시하는 컴포넌트
- `ParticipateButton`: 투표 참여 버튼 컴포넌트
- `VoteModal`: 투표 모달 컴포넌트

### 게시글 시스템

- `PostItem`: 게시글 아이템 컴포넌트
- `PostListScrollView`: 무한 스크롤 게시글 목록
- `Discussion`: 댓글 목록 컴포넌트

## 🔧 설정 파일

- `tsconfig.json`: TypeScript 설정
- `next.config.ts`: Next.js 설정
- `eslint.config.mjs`: ESLint 설정
- `.prettierrc`: Prettier 설정

## 📚 문서

- [컨트리뷰션 가이드](./CONTRIBUTING.md) - 프로젝트에 기여하는 방법
- [아키텍처 가이드](./docs/ARCHITECTURE.md) - 프로젝트 구조 및 아키텍처 설명
- [API 문서](./docs/API.md) - API 엔드포인트 및 데이터 구조
- [컴포넌트 가이드](./docs/COMPONENTS.md) - 주요 컴포넌트 사용법

