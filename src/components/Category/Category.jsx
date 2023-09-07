import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import "./Category.scss";
import useFetch from "../../hooks/useFetch";

const Category = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`
    );

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {
                        data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title

                    }
                </div>
                {/* Render Products component or data here */}
                <Products innerPage={true} products={data}/>
            </div>
        </div>
    );
};

export default Category;
