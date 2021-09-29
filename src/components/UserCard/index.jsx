import { Button, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const txt = useSelector((state) => state.user);
  const handleClick = () => {
    dispatch(changeName(newName));
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "20px",
      backgroundColor: "PeachPuff",
      height: "100vh",
    },
    button: {
      backgroundColor: "blue",
      color: "white",
    },
    input: {
      textAlign: "center",
    },
  }));
  const classe = useStyles();
  return (
    <div className={classe.root}>
      <h1>{txt.name}</h1>
      <TextField
        className={classe.input}
        label="Digite aqui"
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        type="text"
      />
      <Button
        className={classe.button}
        variant="outlined"
        onClick={() => handleClick()}
      >
        Change
      </Button>
    </div>
  );
};

export default UserCard;
