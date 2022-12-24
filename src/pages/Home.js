import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadSpaceData } from "../redux/actions";
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();
  const { space_history } = useSelector((state) => state.spaceData);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(loadSpaceData());
  }, [dispatch]);

  return (
    <>
      <img
        className="heroImage"
        src="https://content.fortune.com/wp-content/uploads/2020/08/GettyImages-1219672105_web.jpg"
        alt="hero"
      />
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        All SpaceX Launches
      </h1>
      <div className="container">
        <div className="row">
          {space_history.slice(page * 10 - 10, page * 10).map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px"
        }}
      >
        {page > 1 && (
          <button
            className="paginatio_button"
            onClick={() => setPage(page - 1)}
          >
            {"<<"}
          </button>
        )}
        {[...Array(space_history.length / 10)].map((_, i) => (
          <span onClick={() => setPage(i + 1)}>{i + 1}</span>
        ))}
        {page < 2 && (
          <button
            className="paginatio_button"
            onClick={() => setPage(page + 1)}
          >
            {">>"}
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
