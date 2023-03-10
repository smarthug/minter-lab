import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

import { Account } from '../components/Account'

export default function App() {
  const { isConnected } = useAccount()
  return (
    <>
      <h1>wagmi + RainbowKit + Vite</h1>

      <ConnectButton />
      {isConnected && <Account />}
    </>
  )
}
