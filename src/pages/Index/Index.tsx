import React, { useEffect } from "react";
import TitleInfo from "../../components/TitleInfo/TitleInfo";
import MainInfo from "../../components/MainInfo/MainInfo";
import UsersBlock from "../../components/UsersBlock/UsersBlock";
import FormRegistration from "../../components/Forms/FormRegistration/FormRegistration";
import Traces from "../../components/Traces/Traces";
import { middlewareGetToken } from "../../services/middleware/MiddlewateUser";
import { useDispatch } from "react-redux";
import { setToken } from "../../reducers/userReducer";
import classes from "./Index.module.scss";

const Index: React.FC<any> = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getDataToken();
    // eslint-disable-next-line
  }, []);

  const getDataToken = async () => {
    const responce = await middlewareGetToken();
    dispatch(setToken(responce.token));
  };

  return (
    <section className={classes.main}>
      <TitleInfo {...props} />
      <MainInfo {...props} />
      <UsersBlock {...props} />
      <FormRegistration {...props} />
      <Traces />
    </section>
  );
};

export default Index;
