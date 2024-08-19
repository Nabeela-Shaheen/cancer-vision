import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SEOAnalysisForm from '../components/Common/SEOAnalysisForm';
import Pricing from '../components/Common/Pricing';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';
import { UploadDropzone } from "@bytescale/upload-widget-react";
import ImageUploader from '../components/ImageUploader';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
const Doctors = () => {
    const { SearchBar, ClearSearchButton } = Search;
    const { ExportCSVButton } = CSVExport;

    const columns = [ {
        dataField: 'name',
    text: 'CLINIC NAME'
    }, {
        dataField: 'location',
        text: 'ADDRESS'
    }
    , {
        dataField: 'phone',
        text: 'PHONE'
    }
];

    const products = [
        {
      
        name: 'Dr. Zafar Ahmad M.B.B.S, Dip. In Dermatology (London)',
        location: " Plot No. 16B, Al Riaz Society, Shaheed-millat Road"  ,
        phone : "0301-2562987"
    },
        {
      
        name: 'Dr. Ibnat Islam M.B.B.S. FCPS (Dermatology)',
        location: "karachi"  ,
        phone : "03152506596"
    },
        {
      
        name: "Dr. Khurram Mushir Dermatologist, Cosmetic Surgeon, Laser Specialist, Cosmetologist MBBS, D.Dsc (UK), M.Sc",
        location: "karachi "  ,
        phone : "042-38900939"
    },
        {
      
        name: 'Dr Nosheen Clinics Dermatologist, Aesthetic Physician, Cosmetologist M.B.B.S, D.Derm, Aesthetic Physician (AAAM) USA',
        location: "W424+WRR, Zaid Khan Rd, Central Government Cooperative Housing Society Central Government Employees CHS, Karachi, Karachi City, Sindh"  ,
        phone : "0331 8731584"
    },
        {
      
        name: 'Dr. Warda Amin Shaikh General Practitioner MBBS, MCPS ( Dermatology) ',
        location: "karachi"  ,
        phone : "021-3256452"
    },
        {
      
        name: 'Dr. Syed Hatim Ali Shah | Head of Department, Assistant Professor',
        location: " Derma OPD - Liaquat National Hospital Block-J  (Liaquat National Hospital National Stadium Road, Karachi 74800, Pakistan.)"  ,
        phone : "02134413020"
    },
        {
      
        name: 'Dr. Syed Jafar Imam',
        location: " Derma OPD - Liaquat National Hospital Block-J  (Liaquat National Hospital National Stadium Road, Karachi 74800, Pakistan.)"  ,
        phone : "02134412517"
    },
        {
      
        name: 'Dr. Ayesha Hina',
        location: " Derma OPD - Liaquat National Hospital Block-J  (Liaquat National Hospital National Stadium Road, Karachi 74800, Pakistan.)"  ,
        phone : "02134412517"
    },
        {
      
        name: 'Dr. Omer Bin Khalid Jamil',
        location: "	Room No 01 , Gulshan-e-Iqbal"  ,
        phone : "02134838605"
    },
        {
      
        name: 'Dr. Faisal Siddiqi ',
        location: "Clinic No 2 , Liaquat National Hospital"  ,
        phone : "02134413010"
    },
        {
      
        name: 'Prof. Dr. Muhammad Nadeem Khurshaidi ',
        location: "Clinic No 2 , Liaquat National Hospital"  ,
        phone : "02134413010"
    },
        {
      
        name: 'Prof. Dr. Sheeraz Ur Rehman  ',
        location: "Clinic No 2 , Liaquat National Hospital"  ,
        phone : "02134581022"
    },
        {
      
        name: 'Dr. Mirza Arshad Beg ',
        location: "Room No 01 - Shah Faisal Colony Outreach Services Center Shah Faisal"  ,
        phone : "02134581021"
    },
        {
      
        name: 'NAJAM-US-SAHER MBBS, MCPS (Medicine), FCPS (Dermatology), American Board Certified in Aesthetic Medicine',
        location: "AGA KHAN"  ,
        phone : "+92 21 111 911 911"
    },
        {
      
        name: 'ABDUL BAQI Assistant Professor MBBS, FCPS (Cardiology), Fellowship Interventional Cardiology, Diplomate American Board of Nuclear Cardiology',
        location: "AGA KHAN  ​Clifton Medical Services:"  ,
        phone : "+92 21 111 911 911"
    },
        {
      
        name: 'ABIDA KHALIL SATTAR MBBS, FACS',
        location: "Aga Khan Hospital for Women Garden"  ,
        phone : "+92 21 3486 9585"
    },
]

    return (
        <>
            <NavbarStyleTwo />

            <PageBanner
                pageTitle="Clinic & Doctors"
            />

            <div className="overview-area ptb-100">
                <div className="container">
                    <ToolkitProvider
                        keyField="id"
                        data={products}
                        columns={columns}
                        search
                    >
                        {
                            props => (
                                <div>
                                    <h3>Clinic & Doctors </h3>
                                    <SearchBar {...props.searchProps} />
                                    <ClearSearchButton className="default-btn m-2"  {...props.searchProps} />
                                    <hr />
                                    <BootstrapTable
                                    classes="custom-table"
                                        {...props.baseProps}
                                    />
                                    <ExportCSVButton className="default-btn m-2"  {...props.csvProps}>Export CSV!!</ExportCSVButton>
                                </div>
                            )
                        }
                    </ToolkitProvider>
                </div>
            </div>



         

            <StartProjectWithUs />

            <Footer />
        </>
    )
}

export default Doctors;