import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../assets/styles/global'
import defaultTheme from '../assets/styles/themes/default'
import * as S from './styles'
import Header from '../components/Header'
// import ContactsList from '../components/ContactsList'

import Routes from '../routes'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <S.Container>
    <Header />
    <Routes />
    </S.Container>
    </ThemeProvider>
  )
}

export default App
