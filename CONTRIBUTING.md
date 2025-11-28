# 기여 가이드

Agree 프로젝트에 기여해주셔서 감사합니다! 이 문서는 프로젝트에 기여하는 방법을 안내합니다.

## 개발 환경 설정

1. 저장소를 클론합니다:
```bash
git clone <repository-url>
cd Client
```

2. 의존성을 설치합니다:
```bash
npm install
```

3. 개발 서버를 실행합니다:
```bash
npm run dev
```

## 코드 스타일

### TypeScript

- 엄격한 타입 체크를 사용합니다 (`strict: true`)
- `any` 타입 사용을 지양합니다
- 인터페이스와 타입을 명확하게 정의합니다

### 코드 포맷팅

- Prettier를 사용하여 코드를 포맷팅합니다
- 커밋 전에 `npm run format`을 실행하세요

### 네이밍 컨벤션

- 컴포넌트: PascalCase (예: `PostItem.tsx`)
- 함수/변수: camelCase (예: `fetchPostList`)
- 타입/인터페이스: PascalCase (예: `Post`, `UserInfo`)
- 상수: UPPER_SNAKE_CASE (예: `PUBLIC_API_URL`)

## 커밋 컨벤션

커밋 메시지는 다음과 같은 형식을 따릅니다:

```
<type>: <subject>

<body>
```

### Type

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락 등
- `refactor`: 코드 리팩토링
- `test`: 테스트 추가 또는 수정
- `chore`: 빌드 업무 수정, 패키지 매니저 설정 등

### 예시

```
feat: 투표 기능 추가

- 찬성/반대 투표 기능 구현
- 투표 결과 실시간 업데이트
```

## Pull Request 프로세스

1. 새로운 브랜치를 생성합니다:
```bash
git checkout -b feature/your-feature-name
```

2. 변경사항을 커밋합니다:
```bash
git commit -m "feat: 새로운 기능 추가"
```

3. 브랜치를 푸시합니다:
```bash
git push origin feature/your-feature-name
```

4. GitHub에서 Pull Request를 생성합니다

### PR 체크리스트

- [ ] 코드가 린트를 통과합니다 (`npm run lint`)
- [ ] 타입 체크를 통과합니다 (`npm run type-check`)
- [ ] 코드가 포맷팅되어 있습니다 (`npm run format`)
- [ ] 관련 문서가 업데이트되었습니다
- [ ] 테스트가 추가되었습니다 (해당되는 경우)

## 아키텍처 가이드라인

### 디렉토리 구조

- `entities/`: 비즈니스 엔티티 (재사용 가능한 비즈니스 로직)
- `features/`: 사용자 기능 (특정 기능의 비즈니스 로직)
- `shared/`: 공유 리소스 (UI 컴포넌트, 유틸리티)
- `widgets/`: 복합 UI 블록
- `page/`: 페이지 컴포넌트

### 컴포넌트 작성 규칙

1. **Server Component 우선**: 기본적으로 Server Component로 작성하고, 필요한 경우에만 Client Component 사용
2. **타입 안정성**: 모든 props와 반환값에 타입 정의
3. **재사용성**: 공통 컴포넌트는 `shared/ui/`에 배치
4. **의미론적 HTML**: 적절한 HTML 시맨틱 태그 사용

### API 호출

- Server Component: `fetchPostList` 같은 서버 전용 함수 사용
- Client Component: `fetchPostListClient` 같은 클라이언트 전용 함수 사용
- React Query: 클라이언트 사이드 데이터 페칭에 사용

## 질문하기

질문이 있으시면 Issue를 생성해주세요.

