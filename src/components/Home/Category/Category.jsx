import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
    const navigate = useNavigate();

    if (!categories || !categories.data || !Array.isArray(categories.data)) {
        return null; // or return some fallback content
    } 

    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div 
                        key={item.id}
                        className="category"
                        onClick={() => navigate(`/category/${item.id}`)}
                    >
                        <img src={
                            process.env.REACT_APP_DEV_URL +
                            item.attributes.img.data.attributes.url
                        } alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
