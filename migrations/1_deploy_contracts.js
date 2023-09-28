const MultiOutput = artifacts.require("MultiOutput");
const { getAddress } = require("@zetachain/protocol-contracts");

module.exports = function(deployer,network) {
  const systemContract = getAddress("systemContract", network);
  deployer.deploy(MultiOutput,systemContract);
};
