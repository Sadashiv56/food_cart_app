import { Link } from "react-router-dom"

function Banner() {
    return (
        <>
            <div className="banner banner-2">
                <div className="banner-slider-2">
                    <div className="banner-item">
                        <div className="banner-bg bg-cover" style={{ backgroundImage: 'url("/slices/assets/img/banner/1.jpg")' }} />
                        <div className="banner-inner">
                            <div className="banner-text">
                                <h1 className="title">Italian Pizza Never Got Any Better</h1>
                                <h4>It is the cheese that lures us into eating</h4>
                                <p className="subtitle">
                                Pizza is versatile and can be customized to fit dietary preferences and restrictions, such as vegetarian, vegan, and gluten-free options.
                                </p>
                                <p>Pizza is a beloved dish enjoyed by many worldwide, featuring a variety of ingredients that can be tailored to individual preferences. Here is an overview of typical pizza components:

</p>
                            </div>
                            <Link to="/menu" className="btn-custom primary">View Menu</Link>
                        </div>
                        <img src="/slices/assets/img/veg/12.png" alt="bg" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner