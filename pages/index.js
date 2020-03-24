import { HomePage } from '../src/HomePage'

const Home = props => <HomePage {...props} />

Home.getInitialProps = ({ query }) => {
  return { query }
}
export default Home
