import React from "react";

export default function ErrorMessage(props) {
  const { error, setErrEmail, setErrPass } = props;

  if (error) {
    // console.log("err", error.ref.id)
    // switch (error.ref.id) {
    //   case 'email':
    //     setErrEmail(true);
    //     break;
    //   case 'password':
    //     setErrPass(true);
    //     break;
    //   default:
    //     return null;
    // }

    switch (error.type) {
      case "required":
        return <p id='error_login'>This is required!</p>;
      case "minLength":
        return <p id='error_login'>Your password need minmium 6 charcaters</p>;
      case "pattern":
        return <p id='error_login'>Enter a valid email address</p>;
      case "min":
        return <p>Minmium age is 18</p>;
      case "validate":
        return <p>Username is already used</p>;
      default:
        return null;
    }
  }

  return null;
}
