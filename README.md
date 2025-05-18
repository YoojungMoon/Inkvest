# Inkvest: Web3 Crowdfunding & NFT Reward Platform

Inkvest는 블록체인 기반의 예술 창작 후원 플랫폼입니다.
사용자는 프로젝트에 ETH를 후원하고, 창작자는 목표 금액을 달성하면 자금을 인출할 수 있습니다.
목표를 달성한 프로젝트에 후원한 사용자는 고유한 NFT 보상을 받게 되며, 목표를 달성하지 못한 경우 환불을 요청할 수 있습니다.

---

## ✨ 주요 기능

* 🎨 **카페인 생성** (`createCampaign`)
* 💸 **후원하기** (`contribute`)
* 🔄 **환복 받기** (`refund`)
* 🖼️ **NFT 민팅** (`mintArtworkNFT`)
* 🏦 **창작자 출금** (`withdraw`)

---

## 🛠️ 기술 스택

* **Frontend**: Next.js (TypeScript), Tailwind CSS
* **Smart Contracts**: Solidity (`CrowdFund`, `CrowdCoin`, `ImageNFT`)
* **Blockchain**: Hardhat (로컬 개발 네트워크)
* **Wallet Integration**: MetaMask + Ethers.js

---

## 🧪 로컴 테스트 환경 구성 방법

### 1. 저장소 클론 및 의존성 설치

```bash
git clone https://github.com/YoojungMoon/Inkvest.git
cd Inkvest/Inkvest_frontend/Inkvest_website
npm install
```

### 2. Hardhat 로컬 네트워크 실행

```bash
cd Inkvest/Inkvest_backend
npx hardhat node
```

### 3. 스마트 컨트랙트 배포

```bash
npx hardhat run scripts/deploy.ts --network localhost
```

### 4. `.env.local` 파일에 컨트랙트 주소 등록

`.env.local` 파일 생성 후 아래와 같이 입력:

```ini
NEXT_PUBLIC_CROWDFUND_ADDRESS=0x... (배포된 주소)
```

### 5. 프론트엔드 실행

```bash
npm run dev
```

---

## 📂 프로젝트 구조 (요약)

```
inkvest/
├── inkvest_backend/                # 백엔드: 스마트 컨트랙트 및 배포
│   ├── contracts/                  # Solidity 스마트 컨트랙트
│   │   ├── CrowdFund.sol
│   │   ├── CrowdCoin.sol
│   │   └── ImageNFT.sol
│   ├── scripts/                    # Hardhat 배포/테스트 스크립트
│   │   └── deploy.ts
│   ├── test/                       # 스마트 컨트랙트 테스트
│   ├── hardhat.config.ts           # Hardhat 설정
│   └── package.json
├── inkvest_frontend/               # 프론트엔드: Next.js 앱
│   ├── components/
│   ├── pages/
│   ├── public/
│   ├── styles/
│   ├── tsconfig.json
│   └── package.json
├── .env.local                      # 환경변수 파일
└── README.md
```
