# Inkvest dApp

Crowdfunding + DAO + NFT 민팅을 한 번에 다루는 풀스택 블록체인 프로젝트입니다.  
Hardhat(Back-end)·React/Vite(Front-end)·IPFS(Pinata)·OpenZeppelin(4.9.5) 스택으로 작성되었습니다.

---

## 📂 구조

Inkvest/
│ hardhat.config.js – 컴파일러·네트워크 설정
│ package.json – 루트 npm 스크립트
│ .env.example – RPC URL·PRIVATE_KEY 템플릿
├─ contracts/ – Solidity
│ CrowdCoin.sol – 펀딩 ERC-20
│ GovernanceToken.sol– 거버넌스 토큰
│ FundGovernor.sol – 투표 컨트롤러
│ FundTimelock.sol – 타임록
│ Vesting.sol – 베스팅
├─ scripts/deploy.js – 순차 배포
├─ test/governor-flow.js
└─ frontend/ – React dApp
├─ index.html
├─ vite.config.js
├─ src/ – main.jsx · App.jsx
│ ├─ components/ (ConnectWallet·Contribute·CreateProposal·Vote)
│ └─ utils/ (contracts.js)


## 🚀 빠른 실행

# 1. 의존성
npm install
cd frontend && npm install && cd ..

# 2. 로컬 체인
npx hardhat node     # localhost:8545

# 3. 새 터미널 – 배포
npm run deploy       # 컨트랙트 주소 출력

# 4. 주소 입력
echo "VITE_CROWDCOIN_ADDRESS=<CrowdCoin>"  > frontend/.env.local
echo "VITE_GOVERNOR_ADDRESS=<Governor>"   >> frontend/.env.local

# 5. dApp
cd frontend && npm run dev
# http://localhost:5173

Sepolia 테스트넷: .env에 RPC URL·PRIVATE_KEY 설정 후
npx hardhat run scripts/deploy.js --network sepolia

