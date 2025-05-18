# Inkvest: Web3 Crowdfunding & NFT Reward Platform

Inkvest는 블록체인 기반의 예술 창작 후원 플랫폼입니다.
사용자는 프로젝트에 ETH를 후원하고, 창작자는 목표 금액을 달성하면 자금을 인출할 수 있습니다.
목표를 달성한 프로젝트에 후원한 사용자는 고유한 NFT 보상을 받게 되며, 목표를 달성하지 못한 경우 환불을 요청할 수 있습니다.

---![Flowchart](https://github.com/user-attachments/assets/4f3adc04-9212-426c-ac99-212fa85c2cc6)


## ✨ 주요 기능

* 🎨 **캠페인 생성** (`createCampaign`)
* 💸 **후원하기** (`contribute`)
* 🔄 **환불 받기** (`refund`)
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
npx hardhat run scripts/demo-flow.js --network localhost
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


## 📅 메타마스크 설치 및 계정 등록 가이드

Inkvest 플랫폼을 사용하려면 Web3 지갑인 MetaMask가 필요합니다. 아래 단계에 따라 설치하고 계정을 생성해 주세요.

### 1. 메타마스크 설치

* Chrome, Edge, Firefox 브라우저에 메타마스크 확장 프로그램을 설치합니다.
* 공식 다운로드 링크: [https://metamask.io/download.html](https://metamask.io/download.html)

### 2. 지갑 생성 또는 복구

* 설치 후 확장 프로그램을 열고 **"시작하기(Get Started)"** 버튼 클릭
* **새 지갑 생성(Create a Wallet)** 또는 **기존 지갑 복구(Import using secret recovery phrase)** 중 선택

#### 새 지갑을 만드는 경우:

1. **비밀번호 설정**
2. **비밀 백업 구문(Secret Recovery Phrase)** 을 안전한 곳에 저장
3. 백업 구문을 확인하고 지갑 생성 완료

#### 기존 지갑 복구하는 경우:

1. **비밀 백업 구문**을 입력하여 기존 지갑 불러오기

### 3. 네트워크 설정 (Hardhat 로컬 테스트용)

* MetaMask 오른쪽 상단의 **네트워크 선택 메뉴**에서 `Add network` 클릭
* 다음과 같이 **로컬 개발용 네트워크**를 등록합니다:

```
네트워크 이름: Localhost 8545
새 RPC URL: http://127.0.0.1:8545
체인 ID: 31337
통화 기호: ETH
```

* 등록 후 해당 네트워크로 전환하면 로컬 Hardhat 블록체인과 연결됩니다

### 4. 테스트 잔액 확인 및 후원 테스트

* Hardhat의 기본 계정에는 이미 20 ETH가 주어집니다
* 로컬 네트워크에 연결된 상태에서 UI에서 후원, 환불, 민팅 등의 트랜잭션을 실행해보며 기능을 테스트할 수 있습니다.



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
