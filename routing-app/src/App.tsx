import './App.css'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const App: FC<Props> = ({ children }) => <div className="App">{children}</div>

export default App
