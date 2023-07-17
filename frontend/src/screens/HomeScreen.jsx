import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productsAction";
// React - Bootstrap
import { Row, Col } from "react-bootstrap";
// Components
import ProductScreen from "./ProductScreen";
import Loader from "../components/shared/Loader";
import Errormsg from "../components/shared/Errormsg";
const HomeScreen = () => {
  // const [Products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productsList);
  const { loading, products, error } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Errormsg variant="danger" message={error}></Errormsg>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col md={3} key={product._id}>
                <ProductScreen product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
