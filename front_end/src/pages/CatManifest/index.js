
import NavBar from "../../components/navbar";
import Category from "../../components/category-menu";
import CatManifest from "../../components/category-list";
import EstateBanner2 from "../../estate-category";

const CatManifestPage = () => {

    return(
        <>
            <NavBar />
            <EstateBanner2 />
            <div className="row">
            <div className="col-sm-3">
            <Category />
            </div>
            <div className="col-sm-9">
            <CatManifest />
            </div>
            </div>
        </>
    )
}
export default CatManifestPage;