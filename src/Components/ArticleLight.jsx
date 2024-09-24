
const ArticleLight = () => 
{
  return (
    <>
      <div className="articlelight">
        <div className="articlelight-item">
          <div className="articlelight-img">
            <img src="/images/image-retro-pcs.jpg" alt="retro-pc" />
          </div>
          <div className="articlelight-content">
            <h2 className="articlelight-heading">01</h2>
            <h3 className="articlelight-title">Reviving Retro PCs</h3>
            <p className="articlelight-desc">What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="articlelight-item">
          <div className="articlelight-img">
            <img src="/images/image-top-laptops.jpg" alt="laptop-keyboard" />
          </div>
          <div className="articlelight-content">
            <h2 className="articlelight-heading">02</h2>
            <h3 className="articlelight-title">Top 10 Laptops of 2022</h3>
            <p className="articlelight-desc">Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="articlelight-item">
          <div className="articlelight-img">
            <img src="/images/image-gaming-growth.jpg" alt="videogame-controller" />
          </div>
          <div className="articlelight-content">
            <h2 className="articlelight-heading">03</h2>
            <h3 className="articlelight-title">The Growth of Gaming</h3>
            <p className="articlelight-desc">How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleLight