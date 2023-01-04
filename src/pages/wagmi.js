import { erc721ABI, useProvider } from 'wagmi'
import { getProvider } from '@wagmi/core'
import { useEffect } from 'react';

console.log(erc721ABI);

// const provider = getProvider()
// console.log(provider);

export default function Test() {
    // const provider = useProvider()
    // console.log(provider);

    useEffect(() => {
        console.log('useEffect');
        const provider = getProvider()
        console.log(provider);

    }, [])


    return (
        <div>
            <h1>Wagmi</h1>
        </div>
    )
}