import { useState } from "react";

import * as yup from "yup";
import { Formik } from "formik";

//Data
import { departments, recipients, days } from "../../constants/FormConstants";

//Custom Components
import SelectInput from "../../components/Inputs/SelectInput";
import { Input, Option, Select, Textarea } from "@material-tailwind/react";

function AddLetterBody() {
    //States
    const [recipient, setRecipient] = useState("Principal");
    const [department, setDepartment] = useState("Dept. of Computer Science");
    const [toAddress, setToAddress] = useState("");
    const [date, setDate] = useState(new Date());
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);

    //To structure Date
    const getDate = (dateStr: any) => {
        const date = new Date(dateStr);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    //To get Day from Date
    const getDay = (dateStr: any) => {
        const date = new Date(dateStr);
        return days[date.getDay()];
    };

    //Ser error in empty fields
    const errorSetter = () => {
        if (!toAddress) setToAddress("");
        if (!subject) setSubject("");
        if (!body) setBody("");
    };

    const handlePrintButton = () => {
        if (!date || !subject || !body || (recipient === "Others" && !toAddress)) {
            errorSetter();
        } else {
            setLoading(true);
            // Structure Data
            let data = JSON.stringify({
                recipient,
                designation:
                    recipient === "Principal" ? "The Principal" : "Head of Department",
                department,
                toAddress,
                date: getDate(date),
                day: getDay(date),
                subject,
                body,
            });
        }
    };

    return (
        <div className="p-1 md:px-80">
            <h3>Letter Pad</h3>
            <div className="pt-4 flex flex-col gap-4">
                {/* <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <SelectInput
                            label="Recipient of letter"
                            menuItems={recipients}
                            dropdownValue={recipient}
                            setDropdownValue={setRecipient}
                        />
                    </Grid>
                    {recipient === "HOD" && (
                        <Grid item xs={12}>
                            <SelectInput
                                label="Department"
                                menuItems={departments}
                                dropdownValue={department}
                                setDropdownValue={setDepartment}
                            />
                        </Grid>
                    )}
                    {recipient === "Others" && (
                        <Grid item xs={12}>
                            <TextInput
                                multiline
                                rows="3"
                                label="To Address"
                                value={toAddress}
                                setValue={setToAddress}
                            />
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date"
                                value={date}
                                inputFormat="dd/MM/yyyy"
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                                disablePast
                                renderInput={(params) => <TextField fullWidth id='outlined-basic'
                                    variant='outlined'
                                    margin="none" {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput multiline label="Subject" value={subject} setValue={setSubject} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput multiline rows="12" label="Letter Body" value={body} setValue={setBody} />
                    </Grid>
                    <Grid item xs={12}>
                        <LoadingButton
                            fullWidth
                            onClick={handlePrintButton}
                            endIcon={<PrintIcon />}
                            loading={loading}
                            loadingPosition="end"
                            variant="contained"
                        >
                            Print
                        </LoadingButton>
                    </Grid>
                </Grid> */}
                <SelectInput
                    label="Recipient of letter"
                    value={recipient}
                    setValue={setRecipient}
                    menuItems={recipients}
                />
                {recipient === "HOD" && (
                    <SelectInput
                        label="Department"
                        value={department}
                        setValue={setDepartment}
                        menuItems={departments}
                    />
                )}
                {recipient === "Others" && (
                    <Textarea
                        required
                        label="To Address"
                        className="w-full"
                        value={toAddress}
                        onChange={(e) => setToAddress(e.target.value)}
                    />
                )}
                <Input
                    type="date"
                    label="Date"
                    value={date.toString()}
                    onChange={(e) => setDate(e.target.value)}
                    crossOrigin={"true"}
                />
                <Input
                    required
                    label="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    crossOrigin={"true"}
                />
                <Textarea
                    required
                    label="Letter Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
        </div>
    );
}

export default AddLetterBody;
