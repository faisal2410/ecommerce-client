import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import DefaultLayout from "../components/nav/Header";
import NewsBanner from "../components/leadnews/NewsBanner";

const LeadNews = () => {
  const [loading, setLoading] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const getData = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API}/getallnewsitems`
      );
      setLoading(false);
      setNewsItems(result.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <DefaultLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <NewsBanner></NewsBanner>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {loading}
            <div className="d-grid  px-2  mt-5">
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                className="border h-100 w-100 form-control"
                placeholder="Search Lead news"
              />
            </div>
            {newsItems.length > 0 && (
              <>
                <div className=" my-5">
                  {newsItems
                    .filter((item) =>
                      item.title
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    )
                    .map((item) => {
                      return (
                        <div className="container-fluid">
                          <div className="row ">
                            <div
                              className=" col-md-12 mb-2 news-card"
                              onClick={() =>
                                history.push(`/newsdesc/${item._id}`)
                              }
                            >
                              <h1 className="text-success ">{item.title}</h1>
                              <p className="lead">{item.description}</p>
                              <div className=" ">
                                <span className="">
                                  {/* By : {item.postedBy.email} */}
                                </span>
                                <span className="">
                                  On : {item.createdAt.slice(0, 10)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default LeadNews;
