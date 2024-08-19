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
const Emergency = () => {
    const { SearchBar, ClearSearchButton } = Search;
    const { ExportCSVButton } = CSVExport;

    const columns = [ {
        dataField: 'name',
        text: 'Service Name'
    }, {
        dataField: 'contact',
        text: 'Emergency Contact'
    }
    , {
        dataField: 'phone',
        text: 'Head Office Contact'
    }
];

    const products = [
        {
      
        name: 'Edhi Ambulance',
        contact: "115"  ,
        phone : "021-555555"
    },
        {
      
        name: '  Chipa Ambulance',
        contact: " 1020"  ,
        phone : " +92-21-111-111-136 "
    },
    {
      
        name: ' Pakistan Medical Assitance ',
        contact: " 1166"  ,
        phone : "+92 (21) 1166  "
    }, {
      
        name: 'Aman Ambulance   ',
        contact: "1021 "  ,
        phone : " +92 (21) 1021 "
    }, {
      
        name: ' Resscue ',
        contact: "1122 "  ,
        phone : " +92 (21) 1122 "
    }, {
      
        name: ' Shaukat Khanum Memorial Cancer Hospital and Research Centre (SKMCH&RC) ',
        contact: "+92 21 3587 2573 "  ,
        phone : " +92 21 3530 6363 "
    }, 
    {
      
        name: 'Bait-ul-Sukoon cancer Hospital  ',
        contact: " +92-21-34553834 "  ,
        phone : " +92-21-34553835 "
    },
    {
      
        name: ' Cancer Foundation Hospital   ',
        contact: " - "  ,
        phone : "(021) 34991071-3 "
    },
    {
      
        name: ' Cancer care Hospital   ',
        contact: " - "  ,
        phone : " 0092 42 111 224 224 "
    },
    {
      
        name: ' Shifa Cancer Center (Oncology)   ',
        contact: " - "  ,
        phone : " 051 846 4646 "
    },
    {
      
        name: ' Neurospinal & Cancer Care Institute (NCCI)    ',
        contact: " - "  ,
        phone : " 021-111-000-212"
    },
]

    return (
        <>
            <NavbarStyleTwo />

            <PageBanner
                pageTitle="Emergency Contacts"
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
                                    <h3>Emergency Contacts </h3>
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

export default Emergency;