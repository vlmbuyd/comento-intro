# 자기소개 웹페이지

직무 부트캠프 '코멘토' 과제물의 일환으로 정적 HTML/CSS 기반으로 구성된 자기소개 페이지입니다.
GitHub 및 블로그 등 외부 채널을 연결하였고, 시맨틱 마크업을 준수하여 가독성 높은 UI를 구현하는 데 집중했습니다.

## 주요 기능

- **Semantic Markup**: 시맨틱 마크업 기반 구조 설계
- **Modular CSS**: `reset`, `global`, `component` 단위로 스타일 시트를 분리하여 관리
- **External Links**: GitHub, Blog 등 개인 채널로의 연결 외부 링크 제공


## 사용 기술 스택

| 영역 | 기술 |
|------|------|
| Markup | HTML5 |
| Style | CSS3 (CSS 변수 활용 및 모듈화 구조) |
| Font | [Pretendard Variable](https://github.com/orioncactus/pretendard) |
| 이미지 | png 형식의 프로필 이미지 사용 |

## 폴더 구조
```
├── assets/                  # 이미지, 미리보기 등 정적 파일
│   └── profile-img.png
├── styles/
│   ├── reset.css            # CSS 초기화
│   ├── global.css           # 폰트 및 컬러 변수 등 전역 스타일
│   └── style.css            # 각 컴포넌트별 스타일 정의
├── index.html               # 메인 HTML 페이지
└── README.md                # 프로젝트 설명 문서
```
