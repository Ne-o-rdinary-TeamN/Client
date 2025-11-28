# 컴포넌트 가이드

이 문서는 Agree 프로젝트의 주요 컴포넌트 사용법과 구조를 설명합니다.

## 컴포넌트 구조

### 공유 컴포넌트 (`shared/ui/`)

#### Button

재사용 가능한 버튼 컴포넌트입니다.

```tsx
import { Button } from "@/shared/ui";

<Button
  text="클릭하세요"
  size="sm" | "md" | "lg"
  variant="primary" | "secondary" | "gray" | "active"
  href="/path" // optional
  onClick={() => {}} // optional
  disabled={false} // optional
/>
```

#### Header

페이지 헤더 컴포넌트입니다.

```tsx
import { Header } from "@/shared/ui";

<Header
  title="페이지 제목"
  icon={<Icon />} // optional
  className="custom-class" // optional
/>
```

#### TextField

입력 필드 컴포넌트입니다.

```tsx
import { TextField } from "@/shared/ui";

<TextField
  placeholder="입력하세요"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  approval={true} // optional, 찬성/반대 스타일
/>
```

### 페이지 컴포넌트 (`page/`)

#### Vote

게시글 상세 페이지의 투표 섹션입니다.

```tsx
import Vote from "@/page/board/ui/Vote";

<Vote postPk={number} />
```

**Props:**
- `postPk` (number): 게시글 ID

#### Discussion

댓글 목록을 표시하는 컴포넌트입니다.

```tsx
import Discussion from "@/page/board/ui/Discussion";

<Discussion postPk={number} />
```

**Props:**
- `postPk` (number): 게시글 ID

#### PostListScrollView

무한 스크롤 게시글 목록 컴포넌트입니다.

```tsx
import PostListScrollView from "@/entities/post/ui/PostListScrollView";

<PostListScrollView category="사회" />
```

**Props:**
- `category` (Category): 카테고리 타입

### 엔티티 컴포넌트 (`entities/`)

#### PostItem

개별 게시글 아이템 컴포넌트입니다.

```tsx
import PostItem from "@/entities/post/ui/PostItem";

<PostItem {...post} />
```

**Props:**
- `postPk` (number)
- `title` (string)
- `agree` (boolean)
- `disagree` (boolean)
- `agreeRate` (number)
- `disagreeRate` (number)
- `agreeCount` (number)
- `disagreeCount` (number)
- `participated` (boolean)
- `hashtags` (string[])
- `category` (string)

## 컴포넌트 작성 가이드라인

### Server Component vs Client Component

1. **Server Component (기본)**
   - 데이터 페칭
   - 백엔드 리소스 직접 접근
   - 큰 의존성 포함
   - 민감한 정보 (API 키 등) 사용

2. **Client Component (`'use client'` 필요)**
   - 인터랙션 (onClick, onChange 등)
   - 상태 관리 (useState, useEffect 등)
   - 브라우저 API 사용
   - 이벤트 리스너

### 타입 정의

모든 컴포넌트는 명확한 타입 정의를 가져야 합니다:

```tsx
interface ComponentProps {
  title: string;
  count?: number;
  onClick: () => void;
}

export default function Component({
  title,
  count = 0,
  onClick,
}: ComponentProps) {
  // ...
}
```

### Props 네이밍

- Boolean props는 `is`, `has`, `should` 접두사 사용
- 이벤트 핸들러는 `on` 접두사 사용
- 옵셔널 props는 `?` 표시

### 스타일링

- Tailwind CSS 클래스를 사용합니다
- 공통 스타일은 `globals.css`에 정의
- 반응형 디자인을 고려합니다

## 컴포넌트 예제

### Server Component 예제

```tsx
import { fetchPostList } from "@/entities/post/api/fetchPostList";

export default async function PostsPage({
  category,
}: {
  category: string;
}) {
  const posts = await fetchPostList(category, 0);

  return (
    <div>
      {posts.content.map((post) => (
        <PostItem key={post.postPk} {...post} />
      ))}
    </div>
  );
}
```

### Client Component 예제

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

## 재사용 가능한 컴포넌트

프로젝트에서 자주 사용되는 컴포넌트는 `shared/ui/`에 배치하여 재사용성을 높입니다.

### 컴포넌트 추가 시 체크리스트

- [ ] 타입이 명확하게 정의되어 있는가?
- [ ] 적절한 위치에 배치되어 있는가? (shared/ui vs page/ui)
- [ ] 접근성을 고려했는가? (aria-label, semantic HTML)
- [ ] 반응형 디자인을 고려했는가?
- [ ] 문서화가 되어 있는가?

