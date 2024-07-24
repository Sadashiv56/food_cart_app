function SubHeader({pagetitle}){
    return (
        <>
         <div className="subheader dark-overlay dark-overlay-2" style={{backgroundImage: 'url("/slices/assets/img/subheader.jpg")'}}>
            <div className="container">
            <div className="subheader-inner">
                <h1>{pagetitle}</h1>
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">&gt;   {pagetitle}</li>
                </ol>
                </nav>
            </div>
            </div>
        </div>
        </>
    )
}
export default SubHeader