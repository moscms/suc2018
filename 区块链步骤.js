// 测试环境搭建步骤
truffle
ganache
火狐metamask


//


测试token  0x621a77a6ebae28831f84e20d9d2007fc4354c5db


var suCoinTest
suCoin.deployed().then(function(instance){suCoinTest = instance})


// 查账户余额
suCoinTest.balanceOf(web3.eth.accounts[0])

// 查看合约地址
suCoinTest.address

// 转币
suCoinTest.transfer('0xc222dd302F17C334f0e01a86D2aACed37756e808',100);