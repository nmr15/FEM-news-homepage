import Intro from "./Intro"
import ArticleDark from "./ArticleDark"
import ArticleLight from "./ArticleLight"

const Home = () => 
{
  return (
    <>
      <div className="main-flex">
        <Intro />
        <ArticleDark />
      </div>
      <ArticleLight />
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/nmr15" className="a-blue">Nathaniel Ravelo</a>.
      </div>
    </>
  )
}

export default Home