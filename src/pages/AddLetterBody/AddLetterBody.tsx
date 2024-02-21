import { useState } from 'react'
import './AddLetterBody.css'

//Custom Components
import TextInput from '../../components/Inputs/TextInput'
import SelectInput from '../../components/Inputs/SelectInput'

//Data
import { Recipients, Departments } from '../../data'

//Material UI
import { Button } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { getDate, getDay } from '../../utils/formatDate'
import { PDFDownloadLink } from '@react-pdf/renderer'
import LetterHead from '../../components/LetterHead/LetterHead'



function AddLetterBody() {
    //States
    const [recipient, setRecipient] = useState<string>("Principal")
    const [department, setDepartment] = useState<string>("Dept. of Computer Science")
    const [toAddress, setToAddress] = useState<string>("")
    const [date, setDate] = useState<Date>(new Date())
    const [subject, setSubject] = useState<string>()
    const [body, setBody] = useState<string>()
    const [open, setOpen] = useState<boolean>(false)
    const [letterBody, setLetterBody] = useState({
        recipient: "Principal",
        designation: "",
        department: "Dept. of Computer Science",
        toAddress: "",
        date: "",
        day: "",
        subject: "",
        body: ""
    })

    //Ser error in empty fields
    const errorSetter = () => {
        if (!toAddress) setToAddress("")
        if (!subject) setSubject("")
        if (!body) setBody("")
    }

    const handlePrintButton = () => {
        if (!date || !subject || !body || (recipient === "Others" && !toAddress)) {
            errorSetter();
        } else {
            // Structure Data
            setLetterBody({
                recipient,
                designation: recipient === "Principal" ? "The Principal" : "Head of Department",
                department,
                toAddress,
                date: getDate(date),
                day: getDay(date),
                subject,
                body
            });
            setOpen(true);
        }
    }

    return (
        <div className='body-container'>
            <h3>Letter Head</h3>
            <div className='body-form'>
                <SelectInput
                    label="Recipient of letter"
                    menuItems={Recipients}
                    value={recipient}
                    setValue={setRecipient}
                />
                {recipient === "HOD" && (
                    <SelectInput
                        label="Department"
                        menuItems={Departments}
                        value={department}
                        setValue={setDepartment}
                    />
                )}
                {recipient === "Others" && (
                    <TextInput
                        multiline
                        rows="3"
                        label="To Address"
                        value={toAddress}
                        setValue={setToAddress}
                    />
                )}
                <DatePicker
                    label="Date"
                    value={date}
                    format="dd/MM/yyyy"
                    onChange={(newValue) => {
                        setDate(newValue as Date);
                    }}
                    disablePast
                />
                <TextInput multiline label="Subject" value={subject} setValue={setSubject} />
                <TextInput multiline rows="10" label="Letter Body" value={body} setValue={setBody} />
                <Button
                    fullWidth
                    onClick={handlePrintButton}
                    variant="contained"
                >
                    <span>Print</span>
                </Button>
            </div>
            {open &&
            <div className="pdf-download">
                <PDFDownloadLink document={<LetterHead data={letterBody} />} fileName="connect-letter.pdf">
                    {({ loading }) =>
                        loading ? (<Button fullWidth disabled>Loading...</Button>) : (<Button variant='contained' fullWidth className="mt-2 bg-green-500">Download</Button>)
                    }
                </PDFDownloadLink>
            </div>
            }
        </div>
    )
}

export default AddLetterBody