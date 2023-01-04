import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createClient } from 'wagmi'
import { goerli, mainnet,polygon, polygonMumbai } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

// const { chains, provider, webSocketProvider } = configureChains(
//   [mainnet, ...(import.meta.env.MODE === 'development' ? [goerli] : [])],
//   [
//     publicProvider(),
//   ],
// )
const MODE = 'development'

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet,polygon, ...(MODE === 'development' ? [goerli,polygonMumbai] : [])],
  [
    publicProvider(),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'My wagmi + RainbowKit App',
  chains,
})

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export { chains }
