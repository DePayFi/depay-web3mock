import getRandomTransactionHash from './getRandomTransactionHash'
import { ethers } from 'ethers'
import { findMockByTransactionHash } from '../findMock'
import { getCurrentBlock } from '../../../block'

export default (hash) => {
  let mock = findMockByTransactionHash(hash)

  let transaction = {
    from: '0xb7576e9d314df41ec5506494293afb1bd5d3f65d',
    gas: '0x29857',
    gasPrice: '0xba43b7400',
    hash: hash,
    input:
      '0x606060405261022e806100136000396000f300606060405260e060020a6000350463201745d5811461003c578063432ced04146100d257806379ce9fac14610141578063d5fa2b00146101a8575b005b61003a6004356024356000828152602081905260409020600101548290600160a060020a039081163391909116141561020857604060009081206001810180548254600160a060020a0319908116909355919091169055600160a060020a038316906803bd913e6c1df40000606082818181858883f1505060405184935060008051602061020e833981519152929150a2505050565b61003a600435600081815260208190526040812060010154600160a060020a031614801561010957506803bd913e6c1df400003410155b1561013e57604060009081206001018054600160a060020a03191633179055819060008051602061020e833981519152906060a25b50565b61003a6004356024356000828152602081905260409020600101548290600160a060020a039081163391909116141561020857604060009081206001018054600160a060020a03191684179055819060008051602061020e833981519152906060a2505050565b61003a6004356024356000828152602081905260409020600101548290600160a060020a039081163391909116141561020857604060009081208054600160a060020a03191684179055819060008051602061020e833981519152906060a25b5050505600a6697e974e6a320f454390be03f74955e8978f1a6971ea6730542e37b66179bc',
    nonce: '0x0',
    r: '0xcfb56087c168a48bc69bd2634172fd9defd77bd172387e2137643906ff3606f6',
    s: '0x3474eb47999927f2bed4d4ec27d7e8bb4ad17c61d76761e40fdbd859d84c3bd5',
    to: null,
    transactionIndex: '0x1',
    type: '0x0',
    v: '0x1c',
    value: '0x0',
  }

  if (mock) {
    Object.assign(transaction, {
      blockHash: getRandomTransactionHash(),
      blockNumber: ethers.BigNumber.from(mock.transaction._confirmedAtBlock || getCurrentBlock())
        ._hex,
    })
  }

  return Promise.resolve(transaction)
}
