import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import ButtonComponent from "../Button/Button";
import UserBlock from "../UserBlock/User";
import { middlewareGetUsersParams } from "../../services/middleware/MiddlewateUser";
import { UserT } from "../../types/types";
import { useSelector } from "react-redux";
import { AppState } from "../../reducers";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import classes from "./UsersBlock.module.scss";

const COUNT_USER = 9;
const UsersBlock: React.FC<any> = (props: any) => {
  const [users, setUsers] = useState<UserT[] | []>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const refreshUsers = useSelector(
    (state: AppState) => state.user.refreshUsers
  );

  useEffect(() => {
    getDataUsers();
    // eslint-disable-next-line
  }, [refreshUsers]);

  const getDataUsers = async () => {
    setIsLoading(true);
    const data = await middlewareGetUsersParams(pagination.page, COUNT_USER);
    setPagination({ ...pagination, totalPages: data.total_pages });
    setUsers(data.users);
    setIsLoading(false);
  };

  const showMore = async () => {
    setIsLoading(true);
    if (pagination.page < pagination.totalPages) {
      const data = await middlewareGetUsersParams(
        pagination.page + 1,
        COUNT_USER
      );
      setPagination({
        page: pagination.page + 1,
        totalPages: data.total_pages,
      });
      setUsers([...users, ...data.users]);
    }
    setIsLoading(false);
  };

  const { maxWidth } = props;
  const isDisabledBtn = pagination.page >= pagination.totalPages;
  return (
    <Container maxWidth={maxWidth} className={classes.main}>
      <div className={classes.title}>Our cheerful users</div>
      <div className={classes.descriptionsTitle}>
        The best specialists are shown below
      </div>
      <div className={classes.usersBlock}>
        {users.map((item, index) => {
          return <UserBlock {...item} key={index} />;
        })}
      </div>
      <div className={classes.showMore}>
        <ButtonComponent
          disabled={isDisabledBtn}
          text="Show more"
          onClick={showMore}
        />
      </div>
      <LoadingPage isLoading={isLoading} />
    </Container>
  );
};

export default UsersBlock;
