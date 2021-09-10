import React, { useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "react-datepicker/dist/react-datepicker.css";

const FormSend = () => {
    const [date, setDate] = useState(new Date());
    const [weight, setWeight] = useState(99.9);
    const [note, setNote] = useState("");
    const [poopoo, setPoopoo] = useState(false);

    const sAlert = () => {
        Swal.fire({
            title: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            width: "680px",
        });
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        let url = "";
        const objt = { date, weight, note, poopoo };
        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objt),
        })
            .then((r) => r.json())
            .then((data) => {
                // setDate("");
                // setWeight("");
                setNote("");
                setPoopoo(false);
                sAlert();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="formSend">
            <h6>(๑•́ ₃ •̀๑) chart (˘•ω•˘)</h6>
            <form>
                <DatePicker
                    selected={date}
                    onChange={(e) => {
                        console.log(e);
                        setDate(e);
                    }}
                    renderInput={(props) => <TextField {...props} />}
                />
                <div style={{ display: "inline-flex", marginTop: "0.5rem" }}>
                    <div>
                        <TextField
                            required
                            id="standard-number"
                            variant="outlined"
                            size="small"
                            type="number"
                            inputProps={{
                                maxLength: 1000,
                                step: "0.1",
                            }}
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <div style={{ marginLeft: "1rem" }}>
                        <TextField
                            placeholder="Note"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            step="0.1"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </div>
                    <div style={{ alignSelf: "center", marginLeft: "1rem" }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    id="myCheckbox1"
                                    type="checkbox"
                                    checked={poopoo}
                                    onChange={() => {
                                        setPoopoo(!poopoo);
                                    }}
                                    color="primary"
                                    inputProps={{
                                        "aria-label": "secondary checkbox",
                                    }}
                                />
                            }
                            label={
                                <img
                                    style={{ width: "26px" }}
                                    src="https://image.flaticon.com/icons/png/512/720/720914.png"
                                    alt="poopoo"
                                ></img>
                            }
                        />
                    </div>
                </div>

                <br />
                <Button
                    style={{ marginTop: "0.5rem" }}
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                        handleSubmit();
                    }}
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default FormSend;
