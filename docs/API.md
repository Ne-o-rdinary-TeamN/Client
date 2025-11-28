# API 문서

이 문서는 Agree 프로젝트에서 사용하는 API 엔드포인트와 데이터 구조를 설명합니다.

## 기본 설정

### Base URL

API의 기본 URL은 환경 변수 `NEXT_PUBLIC_API_URL`로 설정됩니다.

### 인증

대부분의 API 엔드포인트는 Bearer 토큰 인증을 사용합니다. 토큰은 `Authorization` 헤더에 포함됩니다:

```
Authorization: Bearer <access_token>
```

## 엔드포인트

### 게시글 (Posts)

#### 게시글 목록 조회

```
GET /api/posts?category={category}&page={page}&size={size}
```

**Query Parameters:**

- `category` (string, optional): 카테고리 필터 (사회, 정책, 경제, 연애·결혼)
- `page` (number, optional): 페이지 번호 (기본값: 0)
- `size` (number, optional): 페이지 크기 (기본값: 10)

**Response:**

```typescript
{
  content: Post[];
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}
```

#### 게시글 상세 조회

```
GET /api/posts/{postPk}
```

**Path Parameters:**

- `postPk` (number): 게시글 ID

**Response:**

```typescript
{
  postPk: number;
  title: string;
  agree: boolean;
  disagree: boolean;
  agreeRate: number;
  disagreeRate: number;
  agreeCount: number;
  disagreeCount: number;
  participated: boolean;
  totalCount: number;
  hashtags: string[];
}
```

#### 게시글 작성

```
POST /api/posts
```

**Request Body:**

```typescript
{
  category: string;
  title: string;
  agree: string;
  disagree: string;
  newsLink: string;
  hashtags: string[];
}
```

### 투표 (Vote)

#### 투표하기

```
POST /api/posts/vote?postPk={postPk}&opinion={opinion}
```

**Query Parameters:**

- `postPk` (number): 게시글 ID
- `opinion` (string): 투표 의견 ("AGREE" | "DISAGREE")

**Response:**

```typescript
{
  isSuccess: boolean;
}
```

### 댓글 (Comment)

#### 댓글 목록 조회

```
GET /api/comment?postPk={postPk}&option={option}
```

**Query Parameters:**

- `postPk` (number): 게시글 ID
- `option` (string): 의견 필터 ("AGREE" | "DISAGREE")

**Response:**

```typescript
{
  result: {
    list: CommentItem[];
  }
}
```

#### 댓글 작성

```
POST /api/posts/{postPk}/comment
```

**Path Parameters:**

- `postPk` (number): 게시글 ID

**Request Body:**

```typescript
{
  content: string;
}
```

**Response:**

```typescript
{
  isSuccess: boolean;
}
```

### 인증 (Auth)

#### 로그인

```
POST /api/auth/login
```

**Request Body:**

```typescript
{
  userId: string;
  password: string;
}
```

**Response:**

```typescript
{
  accessToken: string;
  refreshToken: string;
}
```

#### 회원가입

```
POST /api/auth/join
```

**Request Body:**

```typescript
{
  userId: string;
  password: string;
  nickname: string;
}
```

## 데이터 타입

### Post

```typescript
interface Post {
  postPk: number;
  title: string;
  agree: boolean;
  disagree: boolean;
  agreeRate: number;
  disagreeRate: number;
  agreeCount: number;
  disagreeCount: number;
  participated: boolean;
  totalCount: number;
  hashtags: string[];
  category: string;
  createdAt: string;
}
```

### CommentItem

```typescript
interface CommentItem {
  commentPk: number;
  userId: string;
  content: string;
  likes: number;
}
```

## 에러 처리

API는 표준 HTTP 상태 코드를 사용합니다:

- `200 OK`: 요청 성공
- `400 Bad Request`: 잘못된 요청
- `401 Unauthorized`: 인증 필요
- `404 Not Found`: 리소스를 찾을 수 없음
- `500 Internal Server Error`: 서버 오류

에러 응답 형식:

```typescript
{
  message: string;
  error?: any;
}
```
