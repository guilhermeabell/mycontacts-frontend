import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../assets/styles/global'
import defaultTheme from '../assets/styles/themes/default'
import * as S from './styles'
import Header from '../components/Header'
import ContactsList from '../components/ContactsList'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <S.Container>
    <Header />
    <ContactsList />
    </S.Container>
    </ThemeProvider>
  )
}

export default App
