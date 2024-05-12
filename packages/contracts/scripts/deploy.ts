import { ethers } from "hardhat";
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  const EstateToken = await ethers.getContractFactory("EstateToken");
  const estateContract = await EstateToken.deploy();
  await estateContract.deployed();
  console.log(`EstateToken deployed. Address: ${estateContract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
