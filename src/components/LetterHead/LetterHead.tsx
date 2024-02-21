/* eslint-disable react/prop-types */

import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import Header from "../../assets/Images/letter_header.png"
import Watermark from "../../assets/Images/letter_watermark.png"
import fontRegular from "../../assets/Fonts/Montserrat-Regular.ttf"
import fontBold from "../../assets/Fonts/Montserrat-Medium.ttf"

Font.register({ family: 'Montserrat', src: fontRegular });
Font.register({ family: 'Montserrat-Bold', src: fontBold });

type LetterHeadProps = {
    data: {
        recipient: string,
        designation: string,
        department: string,
        toAddress: string,
        date: string,
        day: string,
        subject: string,
        body: string
    }
}

const LetterHead = ({ data }: LetterHeadProps) => {

    const { recipient, designation, department, toAddress, date, day, subject, body } = data;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <Image
                    fixed
                    style={styles.header}
                    src={Header}
                />
                {/* Watermark */}
                <Image fixed src={Watermark} style={styles.watermark} />

                <View style={styles.body}>
                    <View style={styles.to}>
                        <Text>To,</Text>
                        {recipient === "Others" ?
                            <Text>{toAddress}</Text>
                            : designation === "Head of Department" ?
                                <>
                                    <Text>{designation}</Text>
                                    <Text>{department}</Text>
                                </> : <Text>{designation}</Text>}
                        {recipient !== "Others" && <Text>EMEA College of Arts and Science</Text>}
                    </View>
                    <View style={styles.date}>
                        <Text>{date}</Text>
                        <Text>{day}</Text>
                    </View>
                    <Text style={styles.subject}>Subject: {subject}</Text>
                    <Text style={{ marginBottom: 10 }}>Sir,</Text>
                    <Text style={styles.content}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{body}</Text>
                    <Text style={{ marginTop: 20 }}>Yours sincerely,</Text>
                    <Text style={styles.bold}>CONNECT</Text>
                </View>

                {/* Footer */}
                <View fixed style={styles.footer}>
                    <View style={styles.lineAboveFooter} />
                    <Text>connectemea.in</Text>
                </View>
            </Page>
        </Document>
    )
};

const styles = StyleSheet.create({
    header: {
        objectFit: 'cover',
    },
    page: {
        position: 'relative',
        fontFamily: 'Montserrat',
        fontSize: 16,
        lineHeight: 1.3,
        paddingBottom: 60,
    },
    body: {
        position: 'absolute',
        top: 120,
        paddingHorizontal: 42,
    },
    to: {
        paddingBottom: 20
    },
    date: {
        paddingBottom: 20
    },
    subject: {
        paddingBottom: 24,
        paddingRight: 46,
    },
    content: {
        textAlign: 'left',
    },
    bold: {
        fontFamily: 'Montserrat-Bold',
    },
    lineAboveFooter: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        borderBottomWidth: 1,
        marginHorizontal: 30,
        borderBottomColor: '#d6d8dc',
    },
    footer: {
        backgroundColor: '#2c2870',
        color: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 35,
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    watermark: {
        top: 230,
        zIndex: -1,
    },
});

export default LetterHead;