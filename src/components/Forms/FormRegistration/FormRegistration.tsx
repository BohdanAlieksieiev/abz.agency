import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import {
  middlewareGetPositions,
  middlewarePostUsers,
} from "../../../services/middleware/MiddlewateUser";
import LoadingPage from "../../LoadingPage/LoadingPage";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import ButtonComponent from "../../Button/Button";
import InputFile from "../../InputFile/InputFile";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { PositionsT } from "../../../types/types";
import * as Yup from "yup";
import ModalComp from "../../Modal/Modal";
import { useDispatch } from "react-redux";
import { setRefreshUsers } from "../../../reducers/userReducer";
import classes from "./FormRegistration.module.scss";

const FormRegistration: React.FC<any> = (props: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [positions, setPositionsT] = useState<PositionsT[]>([]);
  const dispatch = useDispatch();
  const [modalBlock, setModalBlock] = useState({
    title: "",
    text: "",
    isOpen: false,
  });

  const {
    errors,
    handleSubmit,
    handleChange,
    setFieldValue,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      photo: "",
    },
    // validate,
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(30, "Maximum 30 characters")
        .required("This is a required field."),
      email: Yup.string()
        .email("Invalid email format")
        .required("This is a required field."),
      phone: Yup.string()
        .required("A phone number is required")
        .matches(
          /\+[0-9]{12}/,
          "Phone number must start with +380 and contain 13 characters"
        )
        .max(13, "Maximum 13 characters"),
      position: Yup.number().required("This is a required field."),
      photo: Yup.mixed().required(),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("position_id", values.position);
      formData.append("photo", values.photo);

      const responce = await middlewarePostUsers(formData);
      setIsLoading(false);
      handlerResponceForModal(responce);
    },
  });

  useEffect(() => {
    getDataPosition();
  }, []);

  const handlerResponceForModal = (responce: any) => {
    if (responce.isError) {
      if (responce.status === 409) {
        setModalBlock({
          title: responce.status,
          text: "A user with this mail or phone number already exists",
          isOpen: true,
        });
      } else {
        setModalBlock({
          title: responce.status,
          text: responce.message,
          isOpen: true,
        });
      }
    } else {
      setModalBlock({
        title: "User id: " + responce.user_id,
        text: responce.message,
        isOpen: true,
      });
      dispatch(setRefreshUsers());
    }
  };

  const getDataPosition = async () => {
    const data = await middlewareGetPositions();
    setPositionsT(data.positions);
  };

  const hanlderImage = (e: any) => {
    setFieldValue("photo", e);
  };

  const { maxWidth } = props;
  return (
    <Container maxWidth={maxWidth} className={classes.main}>
      <div className={classes.title}>Register to get a work</div>
      <div className={classes.descriptionsTitle}>
        Your personal data is stored according to the Privacy Policy
      </div>
      <section className={classes.formSection}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.formRow}>
            <TextField
              id="name"
              label="Your name"
              variant="outlined"
              onBlur={handleBlur}
              onChange={handleChange}
              className={classes.textField}
              error={errors.name && !!touched.name ? true : false}
              helperText={errors.name && !!touched.name ? errors.name : ""}
            />
          </div>
          <div className={classes.formRow}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              onBlur={handleBlur}
              onChange={handleChange}
              className={classes.textField}
              error={errors.email && !!touched.email ? true : false}
              helperText={errors.email && !!touched.email ? errors.email : ""}
            />
          </div>
          <div className={classes.formRow}>
            <TextField
              id="phone"
              label="Phone"
              variant="outlined"
              onBlur={handleBlur}
              onChange={handleChange}
              className={classes.textField}
              error={errors.phone && !!touched.phone ? true : false}
              helperText={errors.phone && !!touched.phone ? errors.phone : ""}
            />
          </div>
          <div className={classes.formRow}>
            <FormControl color="primary">
              <FormLabel id="demo-radio-buttons-group-label">
                <div
                  className={
                    errors.position && !!touched.position
                      ? classes.colorError
                      : ""
                  }
                >
                  Select your position
                </div>
              </FormLabel>
              <RadioGroup
                color="primary"
                aria-labelledby="demo-radio-buttons-group-label"
                name="position"
                onChange={(value) =>
                  setFieldValue("position", value.target.value)
                }
              >
                {positions.map((item: PositionsT) => (
                  <FormControlLabel
                    key={item.id}
                    value={item.id}
                    control={<Radio color="primary" name="position" />}
                    label={item.name}
                    name="position"
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <div className={classes.formRow}>
            <InputFile
              isError={errors.photo && !!touched.photo ? true : false}
              onChange={hanlderImage}
              // setFieldValue("photo", e)
            />
          </div>
          <div className={classes.formRow}>
            <div className={classes.btnBlock}>
              <ButtonComponent text="Sign up" onClick={handleSubmit} />
            </div>
          </div>
        </form>
      </section>
      <ModalComp
        {...modalBlock}
        handleClose={() => setModalBlock({ ...modalBlock, isOpen: false })}
      />
      <LoadingPage isLoading={isLoading} />
    </Container>
  );
};

export default FormRegistration;
