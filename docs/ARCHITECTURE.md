# 아키텍처 가이드

이 문서는 Agree 프로젝트의 아키텍처와 디렉토리 구조를 설명합니다.

## 아키텍처 패턴

이 프로젝트는 **Feature-Sliced Design (FSD)** 아키텍처를 기반으로 구성되어 있습니다. FSD는 확장 가능하고 유지보수가 쉬운 프론트엔드 애플리케이션을 구축하기 위한 방법론입니다.

## 디렉토리 구조

```
src/
├── app/                    # Next.js App Router
│   ├── (afterLogin)/      # 로그인 후 접근 가능한 라우트 그룹
│   │   ├── board/         # 게시글 상세 페이지
│   │   ├── my/            # 마이페이지
│   │   ├── posts/         # 게시글 목록 페이지
│   │   └── write/         # 글쓰기 페이지
│   ├── (beforeLogin)/     # 로그인 전 접근 가능한 라우트 그룹
│   │   ├── join/          # 회원가입 페이지
│   │   └── login/         # 로그인 페이지
│   └── layout.tsx         # 루트 레이아웃
│
├── entities/              # 비즈니스 엔티티 (재사용 가능한 비즈니스 로직)
│   └── post/              # 게시글 엔티티
│       ├── api/           # 게시글 관련 API 함수
│       ├── model/         # 게시글 데이터 모델
│       └── ui/            # 게시글 UI 컴포넌트
│
├── features/              # 사용자 기능 (특정 기능의 비즈니스 로직)
│   ├── auth/              # 인증 기능
│   │   ├── action/        # 서버 액션
│   │   ├── types/         # 타입 정의
│   │   └── ui/            # UI 컴포넌트
│   └── board/             # 게시판 기능
│       └── types/         # 타입 정의
│
├── page/                  # 페이지 컴포넌트 (라우트별 페이지)
│   ├── board/             # 게시글 상세 페이지 로직
│   ├── home/              # 홈 페이지 로직
│   ├── posts/             # 게시글 목록 페이지 로직
│   └── write/             # 글쓰기 페이지 로직
│
├── shared/                # 공유 리소스
│   ├── api/               # API 유틸리티 (HTTP 클라이언트 등)
│   ├── config/            # 설정 파일 (엔드포인트, 재검증 태그 등)
│   ├── lib/                # 유틸리티 함수
│   ├── model/              # 공유 데이터 모델
│   ├── providers/         # Context Provider (React Query 등)
│   └── ui/                 # 공유 UI 컴포넌트
│
└── widgets/               # 위젯 컴포넌트 (복합 UI 블록)
    └── layout/             # 레이아웃 위젯
        └── Footer/         # 푸터 컴포넌트
```

## 레이어 설명

### app/

Next.js App Router의 라우팅 구조를 정의합니다. 라우트 그룹을 사용하여 인증 상태에 따른 접근 제어를 구현합니다.

- `(afterLogin)`: 로그인 후 접근 가능한 페이지
- `(beforeLogin)`: 로그인 전 접근 가능한 페이지

### entities/

비즈니스 엔티티를 정의합니다. 엔티티는 독립적이고 재사용 가능한 비즈니스 로직을 포함합니다.

**예시: `entities/post/`**

- `api/`: 게시글 관련 API 호출 함수
- `model/`: 게시글 데이터 타입 정의
- `ui/`: 게시글 관련 UI 컴포넌트

### features/

사용자 기능을 구현합니다. 특정 기능의 비즈니스 로직과 UI를 포함합니다.

**예시: `features/auth/`**

- `action/`: 서버 액션 (로그인, 로그아웃 등)
- `types/`: 인증 관련 타입 정의
- `ui/`: 인증 관련 UI 컴포넌트 (모달 등)

### page/

페이지별 로직을 구현합니다. Next.js 라우트와 직접적으로 연결됩니다.

**예시: `page/board/`**

- `api/`: 게시글 상세 페이지에서 사용하는 API 함수
- `ui/`: 게시글 상세 페이지의 UI 컴포넌트
- `types/`: 게시글 상세 페이지 관련 타입

### shared/

프로젝트 전반에서 공유되는 리소스입니다.

- `api/`: HTTP 클라이언트, 기본 응답 타입 등
- `config/`: 엔드포인트 설정, 재검증 태그 등
- `lib/`: 유틸리티 함수 (cn, auth 등)
- `model/`: 공유 데이터 모델 (카테고리 등)
- `providers/`: React Query Provider 등
- `ui/`: 공유 UI 컴포넌트 (Button, Header, TextField 등)

### widgets/

복합 UI 블록을 정의합니다. 여러 컴포넌트를 조합하여 만든 독립적인 UI 블록입니다.

**예시: `widgets/layout/Footer/`**

- 푸터 위젯 컴포넌트

## 데이터 흐름

### Server Component → Client Component

1. Server Component에서 데이터를 페칭합니다
2. Client Component에 props로 데이터를 전달합니다
3. Client Component는 인터랙션을 처리합니다

### API 호출 패턴

**Server Component:**

```typescript
// entities/post/api/fetchPostList.ts
export async function fetchPostList(category: Category, page: number) {
  // 서버에서만 실행되는 함수
}
```

**Client Component:**

```typescript
// entities/post/api/fetchPostListClient.ts
export async function fetchPostListClient(category: Category, page: number) {
  // 클라이언트에서 실행되는 함수
}
```

## 상태 관리

### 서버 상태

React Query를 사용하여 서버 상태를 관리합니다:

```typescript
const { data, isLoading } = useInfiniteQuery({
  queryKey: ["posts", category],
  queryFn: ({ pageParam = 0 }) => fetchPostListClient(category, pageParam),
});
```

### 클라이언트 상태

React의 `useState`, `useReducer`를 사용합니다:

```typescript
const [isOpen, setIsOpen] = useState(false);
```

## 타입 안정성

TypeScript를 엄격 모드로 사용하여 타입 안정성을 보장합니다:

- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noImplicitReturns: true`

## 모범 사례

1. **컴포넌트 분리**: 단일 책임 원칙을 따릅니다
2. **타입 정의**: 모든 props와 반환값에 타입을 정의합니다
3. **재사용성**: 공통 컴포넌트는 `shared/ui/`에 배치합니다
4. **의미론적 HTML**: 적절한 HTML 시맨틱 태그를 사용합니다
5. **접근성**: ARIA 속성을 적절히 사용합니다
