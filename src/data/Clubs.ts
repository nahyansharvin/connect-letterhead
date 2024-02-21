import ConnectLogo from '../assets/Images/connect.svg';
import ConnectHeader from '../assets/Images/Connect_header.png';
import ConnectWatermark from '../assets/Images/Connect_watermark.png';
import IEDCLogo from '../assets/Images/IEDC/IEDClogo_transparent.png';
import IEDCHeader from '../assets/Images/IEDC/IEDC_Header.png';
import IEDCWatermark from '../assets/Images/IEDC/IEDC_Watermark.png';

type ClubsType = {
    [key: string]: {
        name: string,
        website: string,
        logo: string,
        header: string,
        watermark: string,
        watermarkPosition: number,
        color: string,
    }
}

export const Clubs: ClubsType = {
    Connect: {
        name: "Connect",
        website: "connectemea.in",
        logo: ConnectLogo,
        header: ConnectHeader,
        watermark: ConnectWatermark,
        watermarkPosition: 230,
        color: "#2c2870",
    },
    IEDC: {
        name: "IEDC EMEA",
        website: "",
        logo: IEDCLogo,
        header: IEDCHeader,
        watermark: IEDCWatermark,
        watermarkPosition: 150,
        color: "#24956a",
    },
};