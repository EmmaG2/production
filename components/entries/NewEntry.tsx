import {
  AddOutlined,
  CloseOutlined,
  SaveAltOutlined,
} from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { addEntry } from "../../redux/reducers/entries";
import { selectUiState, toggleIsAdding } from "../../redux/reducers/ui";

export const NewEntry = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const { isAdding } = useSelector(selectUiState);
  const dispatch = useDispatch();

  const onSave = () => {
    if (inputValue.length === 0) return;

    dispatch(addEntry(inputValue));
  };

  const onHandleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
  };

  return (
    <Box display={"grid"} gap={2} padding={1}>
      {isAdding ? (
        <>
          <TextField
            placeholder="Nueva Entrada"
            autoFocus
            multiline
            label="Nueva Entrada"
            helperText={
              inputValue.length <= 0 && isTouched ? "Ingrese un valor" : null
            }
            error={inputValue.length <= 0 && isTouched}
            value={inputValue}
            onChange={onHandleChange}
            onBlur={() => setIsTouched(true)}
          />
          <Box display={"flex"} justifyContent="space-between">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<SaveAltOutlined />}
              onClick={() => {
                dispatch(toggleIsAdding());
                setInputValue("");
                setIsTouched(false);
                onSave();
              }}
            >
              Guardar
            </Button>
            <Button
              variant="contained"
              color="warning"
              startIcon={<CloseOutlined />}
              onClick={() => {
                dispatch(toggleIsAdding());
                setInputValue("");
                setIsTouched(false);
              }}
            >
              Cancelar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddOutlined />}
          onClick={() => dispatch(toggleIsAdding())}
          variant="contained"
        >
          Agregar Entrada
        </Button>
      )}
    </Box>
  );
};
