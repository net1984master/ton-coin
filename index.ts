
// write your NFT miner here
import {Address, TonClient} from 'ton';

async function main() {
    const wallet = Address.parse('EQD6iRs4CNQ6bWHUQUNDlxj2YjtKBkKGKPaZhN2pL3PzLDzN');
    const collection = Address.parse('EQDk8N7xM5D669LC2YACrseBJtDyFqwtSPCNhRWXU7kjEptX');

    const client = new TonClient({
        endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
        apiKey: '97e4406f30779537d5521a856453ddf1f3cf6efe830aa49a09f91b426827657e'
    })
     const miningData = await client.callGetMethod(collection, 'get_mining_data')

     console.log(miningData)
}

main();
