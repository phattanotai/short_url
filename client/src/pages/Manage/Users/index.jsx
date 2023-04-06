import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewNav from "../../../components/NewNav";
import { useSelector } from "react-redux";
import { flattenObject } from "../../../utils";
import { ReactComponent as Filter } from "../../../assets/icons/filter.svg";
import { getAllUser } from "../../../services/users.service";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  background-color: #f3f8fe;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .header-content {
    margin-bottom: 10px;
    margin-top: 20px;

    & .search-bar {
      padding: 13px;
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 200px;
    }

    & .main-btn svg {
      width: 24px;
      margin-bottom: -6px;
    }

    .shadowed {
      background: #ffffff;
      box-shadow: 0px 2.88px 18.72px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      border: none;
    }

    & .search-bar input {
      flex-grow: 1;
      border: none;

      padding: 0px;
      font-size: 16px;
      line-height: 18px;
      color: #878787;
      outline: none;
      margin-left: 10px;
    }
    & .search-bar svg {
      height: 18px;
    }
  }

  .table {
    table {
      width: 80vw;
    }
    table,
    th,
    td {
      border: 1px solid;
      border-collapse: collapse;
    }

    th,
    td {
      height: 50px;
    }
  }
`;

const Users = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const [userList, setUserList] = useState([]);
  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
    getAllUser().then((res) => {
      setUserList(res);
    });
  }, [userInfo]);

  return (
    <MainWrapper>
      <NewNav />

      <ContentWrapper>
        <div className="main-content">
          <div className="header-content">
            <div className="search-bar shadowed">
              <Filter />
              <input
                onChange={(e) => setFilterInput(e.target.value)}
                value={filterInput}
                type="text"
                placeholder="Filter..."
              />
            </div>
          </div>
          <div className="body-content">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {userList &&
                    userList.length > 0 &&
                    userList
                      ?.filter(
                        (item) =>
                          item &&
                          Object.values(flattenObject(item))?.some((value) => {
                            return (
                              value &&
                              typeof value === "string" &&
                              value
                                ?.toLowerCase()
                                ?.includes(filterInput?.toLowerCase())
                            );
                          })
                      )
                      ?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Users;
