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
const Hospital = () => {
    const { SearchBar, ClearSearchButton } = Search;
    const { ExportCSVButton } = CSVExport;

    const columns = [
         {
        dataField: 'no',
        text: 'S.NO'
    },
    {
        dataField: 'name',
        text: 'HOSPITAL NAME'
    }, {
        dataField: 'location',
        text: 'ADDRESS'
    }
    , {
        dataField: 'city',
        text: 'CITY'
    }
    , {
        dataField: 'phone',
        text: 'CONTACT'
    }
];

    const products = [
    {  no : 1	, name: '	Advanced Eye Clinic',	location:'	17-C/1, Block 6, PECHS' ,	phone : "	021-34540999"	,city:"	KARACHI "},
    {  no : 2	, name: '	Advanced Radiology Centre',	location:'	Behind Hamdard University  Hospital, M.A. Jinnah Road' ,	phone : "	021-32783535-6"	,city:"	KARACHI "},
    {  no : 3	, name: '	Aga Khan Hospital  for Women Karimabad',	location:'	Behind Hamdard University  Hospital, M.A. Jinnah Road' ,	phone : "	021-3682296-3 / 021-33100006"	,city:"	KARACHI "},
    {  no : 4	, name: '	Aga Khan Maternity  Home Garden',	location:'	Gold Street, Garden East' ,	phone : "	021-33100005  / 32256903"	,city:"	KARACHI "},
    {  no : 5	, name: '	Aga Khan Maternity  Home Kharadar',	location:'	Atmaram  Pritamdas  Road' ,	phone : "	021-32524618  / 32542187  /33100007"	,city:"	KARACHI "},
    {  no : 6	, name: '	Aga Khan University  Hospital',	location:'	Main Stadium Road' ,	phone : "	021 111-911-911"	,city:"	KARACHI "},
    {  no : 7	, name: '	Akhter Eye Hospital',	location:'	Rashid Minhas Rd, 4/C Block 5 Gulshan-e-Iqbal' ,	phone : "	021-34811979"	,city:"	KARACHI "},
    {  no : 8	, name: '	Al wasay Medical Centre',	location:'	Block 6 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh' ,	phone : "	021-34961355"	,city:"	KARACHI "},
    {  no : 9	, name: '	Al khidmat hospital',	location:'	C-1 Ext. Phase - III Gulshan-e-Hadeed,  Bin Qasim Town, Karachi' ,	phone : "	021-34718801"	,city:"	KARACHI "},
    {  no : 10	, name: '	Al khidmat hospital',	location:'	"Rose Beauty Parlour, Opposite Model Park, Next to، Block 2 Nazimabad, Karachi, Karachi City,Sindh 74600"' ,	phone : "	021-36620005"	, city:"KARACHI "},
    {  no : 11	, name: '	Al Hadeed Medical Centre',	location:'	Gulshan e Hadeed Phase 1 Phase 1 Bin Qasim Town' ,	phone : "	021-34713800"	,city:"	KARACHI "},
    {  no : 12	, name: '	Altamash Hospital',	location:'	ST 9A / Block 1, Clifton' ,	phone : "	021-35187000-16"	,city:"	KARACHI "},
    {  no : 13	, name: '	Ashfaq Memorial  Hospital',	location:'	University Rd, Block 13 C Gulshan-e-Iqbal' ,	phone : "	021-34822261"	,city:"	KARACHI "},
    {  no : 14	, name: '	Asif Eye Hospital Bahadarabad',	location:'	Westland  Apartment,  Ismail Chowrangi,  Bahadurabad' ,	phone : "	021-34944530"	,city:"	KARACHI "},
    {  no : 15	, name: '	Asif Eye Hospital Clifton',	location:'	65-C, 24th Commercial Street, Phase II Extension,  DHA' ,	phone : "	021-35385166"	,city:"	KARACHI "},
    {  no : 16	, name: '	Atia General Hospital',	location:'	48-A, Darakhshan Society,  Kala Board, Malir' ,	phone : "	021-34400726"	,city:"	KARACHI "},
    {  no : 17	, name: '	Ayesha General Hospital',	location:'	Gulshan-e- Hadeed C-50 Phase -3 Side Rd' ,	phone : "	2,134,716,608"	,city:"	KARACHI "},
    {  no : 18	, name: '	Bahria International  Hospital',	location:'	Precinct 19, Phase 1, Bahria Town' ,	phone : "	021-111-111-284"	,city:"	KARACHI "},
    {  no : 19	, name: '	Bay View Hospital',	location:'	205 A-ll, Saba Avenue,  Zone A Phase 8, DHA' ,	phone : "	021-35246225"	,city:"	KARACHI "},
    {  no : 20	, name: '	Begum Haji Yousuf Hospital',	location:'	Khaliq-uz-Zaman Rd, Block 8 Clifton,  Karachi, Karachi City, Sindh 75600' ,	phone : "	(021) 35377753"	,city:"	KARACHI "},
    {  no : 21	, name: '	Burhani Hospital',	location:'	Tayebjee Road, Gari Khata, Haqqani Chowk, Hassan Ali Effendi Rd' ,	phone : "	021-32214418  , 021-32632556"	,city:"	KARACHI "},
    {  no : 22	, name: '	Chiniot General Hospital',	location:'	ST-1/3, Sector 41-B, Korangi Industrial Road' ,	phone : "	021-35063443"	,city:"	KARACHI "},
    {  no : 23	, name: '	Chiniot Maternity Hospital',	location:'	M. Nasir St, Nazimabad No. 4 Block 4 Nazimabad' ,	phone : "	021-36622291"	,city:"	KARACHI "},
    {  no : 24	, name: '	Creek General Hospital',	location:'	Sector 48-H, Creek Road, Korangi Creek' ,	phone : "	0346-8280071  /  0346-8280555"	,city:"	KARACHI "},
    {  no : 25	, name: '	Darul Sehat Hospital',	location:'	St-19, Abul Asar Hafeez Jalandhari Rd, Block 15 Gulistan-e-Johar' ,	phone : "	021-38691071"	,city:"	KARACHI "},
    {  no : 26	, name: '	Darul Shifa Hospital',	location:'	Jaffar Tayar Society, Malir' ,	phone : "	021-4508390"	,city:"	KARACHI "},
    {  no : 27	, name: '	DOW UNIVERSITY  OF HEALTH SCIENCES',	location:'	Ojha Campus Suparco Road,Off.  Main University Road, Gulzari-e-Hijri, Scheme-33, Karachi' ,	phone : "	021-38771111"	,city:"	KARACHI "},
    {  no : 28	, name: '	Dr Aisha  Health Vision Hospital',	location:'	Plot # 159, Block-3 Sirajuddaulah  Road Bahadarabad  Karachi' ,	phone : "	021-34924424"	,city:"	KARACHI "},
    {  no : 29	, name: '	Dr. Fasih ENT & General Hospital',	location:'	A/28 Kalaboard,  Opp. Saudabad  Police Station, Malir' ,	phone : "	021-34503754"	,city:"	KARACHI "},
    {  no : 30	, name: '	Dr. Halim Hospital',	location:'	D13, Block L North Nazimabad' ,	phone : "	021-36647189  / 36646915."	,city:"	KARACHI "},
    {  no : 31	, name: '	Dr. Kashif Jamal & Associates',	location:'	Eastern Pride Block 15, Main Rd, Gulistan  E Jauhar' ,	phone : "	0333-3297401"	,city:"	KARACHI "},
    {  no : 32	, name: '	Dr. S. D. Anklesaria  Eye Clinic & Hospital',	location:'	Madina Rd, Parsi Colony, Saddar' ,	phone : "	021-32250387"	,city:"	KARACHI "},
    {  no : 33	, name: '	Dr. Ziauddin   Hospital (Clifton)',	location:'	4/B Shahrah-e-Ghalib Rd, Block 6 Clifton, Karachi,  Karachi City, Sindh 75600' ,	phone : "	021-36648237-9"	,city:"	KARACHI "},
    {  no : 34	, name: '	Dr. Ziauddin Hospital  Kemari',	location:'	Plot # 33, Behind KPT Hospital,  Kemari' ,	phone : "	021-32851880-3"	,city:"	KARACHI "},
    {  no : 35	, name: '	Dr. Ziauddin Hospital  N Nazimabad',	location:'	Block-B, North Nazimabad' ,	phone : "	0213-6648237-9"	,city:"	KARACHI "},
    {  no : 36	, name: '	Fatima Bai Tai memorial Hospital',	location:'	W396+FGQ, Federal B Area Karimabad Block 3 Gulberg Town, Karachi, Karachi City, Sindh' ,	phone : "	021-3681023"	,city:"	KARACHI "},
    {  no : 37	, name: '	Faiz Rehman  Hospital',	location:'	Metroville 1, SITE Area' ,	phone : "	021 - 36751650  / 36753407"	,city:"	KARACHI38 "}, 
    {  no : 38	, name: '	Goolbanoo  & Dr. Burjor Anklesaria  NursingHome',	location:"	Garden Road Near Makki Masjid Preedy Quarters" ,	phone : "	021-32720371/  32720374-5"	,city:"	KARACHI "},
    {  no : 39	, name: '	Habib Medical Centre',	location:'	BS/3, Block 4, FB Area, Karimabad' ,	phone : "	021-36349678"	,city:"	KARACHI "},
    {  no : 40	, name: '	Hamdard University  Hospital',	location:'	Taj Medical Complex,  MA Jinnah Rd, Saddar' ,	phone : "	021-32782770"	,city:"	KARACHI "},
    {  no : 41	, name: '	Hashmani  Hospital',	location:'	JM-75, Off M A Jinnah Road, Jacob lines' ,	phone : "	021-32781410  - 11, 021-32780335"	,city:"	KARACHI "},
    {  no : 42	, name: '	Hashmani  Hospital Clifton',	location:'	G-18, Block 8 , Ch. Khaliq Uz Zaman Rd, Clifton' ,	phone : "	021-35866042  - 43"	,city:"	KARACHI "},
    {  no : 43	, name: '	Hashmani  Hospital Gulistan  e Johar',	location:'	Farhan Heaven,  Opp. KESC Office, Gulistan E Johar' ,	phone : "	021-37791152"	,city:"	KARACHI "},
    {  no : 44	, name: '	Hill Park General Hospital',	location:'	Block #3, Main Shaheed-e-Millat Road' ,	phone : "	021-4538563  / 4538560 / 4538561"	,city:"	KARACHI "},
    {  no : 45	, name: '	Holy Family Hospital',	location:'	Afridi Shahid Rd, Soldier Bazaar' ,	phone : "	021-32258991"	,city:"	KARACHI "},
    {  no : 46	, name: '	Institute of Orthopedics  & Surgery Hospital',	location:'	"Shahrah-e-Qaideen, Pakistan  Employees Co-Operative Housing Society  Block 2 PECHS, Karachi, Karachi City, Sindh"' ,	phone : "	021-34315407"	,city:"	KARACHI "},
    {  no : 47	, name: '	Ibn-e-Seena Hospital',	location:'	St-22 B, University  Rd, Block 6, Gulshan-e-Iqbal' ,	phone : "	021-4992706  / 4991070"	,city:"	KARACHI "},
    {  no : 48	, name: '	Imam Clinic',	location:'	5 Star Roundabout,  ST-5, Block I, North Nazimabad' ,	phone : "	021-36625111"	,city:"	KARACHI "},
    {  no : 49	, name: '	Imam Zainul Abedin Hospital',	location:'	Bhurgri Rd, Gulbahar,  Rizvia Society, Nazimabad' ,	phone : 	"021-36608991  / 36688517  /36608993"	,city:"	KARACHI "},
    {  no : 50	, name: '	Jinnah Medical College Hospital',	location:'	Street 6, Sector 7-A, Korangi Industrial Area' ,	phone : "	021-35071854"	,city:"	KARACHI "},
    {  no : 51	, name: '	JP CT MRI/MRA & Diagnostic  Centres',	location:'	Hilal-e Ahmer Teen Talwar, Clifton' ,	phone : "	0213-5306061-4"	,city:"	KARACHI "},
    {  no : 52	, name: '	JP CT Scan & Diagnostic  Centres',	location:'	APWA Complex,  Agha Khan III Road, Garden East' ,	phone : "	021-32226156  , 021-32226195"	,city:"	KARACHI "},
    {  no : 53	, name: '	JP MR CT Scan Centre - 2',	location:'	Malir Kalaboard' ,	phone : "	021-34494353,  34510076"	,city:"	KARACHI "},
    {  no : 54	, name: '	JP MRI CT Scan Centre',	location:'	Sana Arcade , Chandni Chowk,L.N.H  road' ,	phone : "	021-34932441  , 021-39923077"	,city:"	KARACHI "},
    {  no : 55	, name: '	Karachi Adventist  Hospital',	location:'	91,Depot Lines, MA Jinnah Rd, Saddar' ,	phone : 	"021-32258024  / 32258021  /32258086"	,city:"	KARACHI "},
    {  no : 56	, name: '	Khalid Eye Clinic',	location:'	4-F, 10/5, Minhaj Ghori Rd, Block 4, Nazimabad' ,	phone : "	021-36602527"	,city:"	KARACHI "},
    {  no : 57	, name: '	Kharadar General Hospital',	location:'	Aga Khan Road, Kharadar' ,	phone : "	021-32510113–16"	,city:"	KARACHI "},
    {  no : 58	, name: '	Korangi Landhi Medical Centre',	location:'	Plot #13, Korangi #5' ,	phone : "	021-35068717"	,city:"	KARACHI "},
    {  no : 59	, name: '	Lady Dufferin Hospital',	location:'	Chand Bibi Rd, Adhumal  Oodharam  Quarter' ,	phone : "	021-32732606"	,city:"	KARACHI "},
    {  no : 60	, name: '	Laser Vision Centre',	location:'	A6 Kehkashan  Townhouse,  Block 5, Clifton' ,	phone : "	021-35864497  / 35864498"	,city:"	KARACHI "},
    {  no : 61	, name: '	Liaquat  National Hospital',	location:'	Main Stadium Road' ,	phone : "	021-111-456-456"	,city:"	KARACHI "},
    {  no : 62	, name: '	Lifeline hospital',	location:'	D-14, Block-B, Shahrah  e Sher Shah Suri, North Nazimabad' ,	phone : "021-36646588  / 36646733  /36721837"	,city:"	KARACHI "},
    {  no : 63	, name: '	Mamji Hospital',	location:'	C-19, Block-17, FB Area, Near Water Pump Chowrangi' ,	phone : "	021-36363365  | Ext : 161"	,city:"	KARACHI "},
    {  no : 64	, name: '	Medicare  Cardiac & General Hospital',	location:'	22-23, Shaheed-e-Millat Road' ,	phone : "	021-34931886-9"	,city:"	KARACHI "},
    {  no : 65	, name: '	Medition Pharmacy',	location:'	Shahwar Trade Center, Allama  Iqbal Rd, PECHS' ,	phone : "	0331-3105842"	,city:"	KARACHI "},
    {  no : 66	, name: '	Memon Medical Institute',	location:'	Hyder Buksh Gabol Rd, Safoora  Chowrangi' ,	phone : "	021-34691147-54"	,city:"	KARACHI "},
    {  no : 67	, name: '	Mominabad  General Hospital',	location:'	Azad Nagar Sector 3 Sindh Industrial Trading Estate' ,	phone : "	021-36656400"	,city:"	KARACHI "},
    {  no : 68	, name: '	Murshid Hospital & Health Care Centre',	location:'	Hub River Rd, Mujahidabad' ,	phone : "	021-32811301- 6"	,city:"	KARACHI "},
    {  no : 69	, name: '	Naimat Begum  Hamdard University',	location:'	Eid Gah Ground, Block 13, Nazimabad' ,	phone : "	021-36614191"	,city:"	KARACHI "},
    {  no : 70	, name: '	"National Institute of Cardiovascular Diseases (NICVD)"',	location:'	Rafiqui Shaheed Road, Opp. JPMC Hospital' ,	phone : "	021-399201271 -5"	,city:"	KARACHI "},
    {  no : 71	, name: '	National Medical Centre',	location:'	A-5/A, Phase 1, DHA, Near Kala Pul, Main Korangi Rd' ,	phone : "	021-111-222-NMC"	,city:"	KARACHI "},
    {  no : 72	, name: '	Neurospinal  & Medical Institute (NCCI)',	location:'	100/1, Depot Lines, Mansfield Street, Saddar' ,	phone : "	021-32259959,  32258848"	,city:"	KARACHI "},
    {  no : 73	, name: '	Okhai Memon Hospital',	location:'	Plot 803-4/3, Hussainabad,  F.B. Area, Karachi.' ,	phone : "	021-36320609"	,city:"	KARACHI "},
    {  no : 74	, name: '	OMI Hospital',	location:'	89/1, Depot Lines, Saddar' ,	phone : "	021-32258075-79"	,city:"	KARACHI "},
    {  no : 75	, name: '	Park Lane Hospital',	location:'	Shahrah-e-Iran, Block 5, Clifton' ,	phone : "	021-35374361  / 35374362"	,city:"	KARACHI "},
    {  no : 76	, name: '	Pasha Clinic',	location:'	191 E, Pakistan  Employees Co-Operative Housing  Society Block 2 PECHS' ,	phone : "	021-34521302"	,city:"	KARACHI "},
    {  no : 77	, name: '	Patel Hospital',	location:'	ST-18, Block 4, Gulshan-e-Iqbal' ,	phone : "	021-111-174-174"	,city:"	KARACHI "},
    {  no : 78	, name: '	Razia Medical Complex',	location:'	Commercial  Area, Bhains Colony, Bin Qasim Town' ,	phone : "	0336-2602354"	,city:"	KARACHI "},
    {  no : 79	, name: '	RIMS Trauma hospital',	location:'	258-1 & 1-4, Block -6 Pechs Near Nursery  , Flyover Karachi -75400' ,	phone : "	021-34311340-3"	,city:"	KARACHI "},
    {  no : 80	, name: '	Royal Institute of Medicine & Surgery',	location:'	10 Floor Al Khaleej Tower, Near Medicare Hosp, Shaheed E Millat Road' ,	phone : "	021-34145151-53"	,city:"	KARACHI "},
    {  no : 81	, name: '	Saifee Hospital',	location:'	ST-1, Saifee Rd, Near Block F North Nazimabad' ,	phone : "	021-36789400"	,city:"	KARACHI "},
    {  no : 82	, name: '	Sambros Hospital',	location:'	D-177, Sharah-e-Humayun,  Block 4, Gulberg Town' ,	phone : "	021-36806624"	,city:"	KARACHI "},
    {  no : 83	, name: '	Shahzad Eye Hospital',	location:'	B-2, Block 16, Gulshan e Iqbal' ,	phone : "	021-34988034  / 34823148"	,city:"	KARACHI "},
    {  no : 84	, name: '	Shamsi Hospital',	location:'	Shamsi Coopertive  Housing Society, Wireless  Gate' ,	phone : "	021-34601162"	,city:"	KARACHI "},
    {  no : 85	, name: '	Shaukat Khanum Memorial  Trust',	location:'	Plot DDCH1, 1st Street Phase 7 Ext DHA, Near Qayyumabad' ,	phone : "	021-35318495-99 / 35318513-16"	,city:"	KARACHI "},
    {  no : 86	, name: '	"Shaukat Omar Foundation  Hospital  (SOM Fauji)"',	location:'	Block 2 Shah Faisal Colony 2 Shah Faisal Colony' ,	phone : "	021-34685344"	,city:"	KARACHI "},
    {  no : 87	, name: '	South City Hospital',	location:'	St-1, Block 3, Shahrah-e-Firdousi, Clifton' ,	phone : "	021-35862301  - 03"	,city:"	KARACHI "},
    {  no : 88	, name: '	T.O. Clinic',	location:'	Street 1, Block 6, Gulshan-e-Iqbal' ,	phone : "	021-34989005"	,city:"	KARACHI "},
    {  no : 89	, name: '	Tabba Heart Institute',	location:'	ST-01, Block 2, FB Area' ,	phone : "	021-111-844-844"	,city:"	KARACHI "},
    {  no : 90	, name: '	Tabba Kidney Institute',	location:'	ST-26/7 FB Area' ,	phone : "	021-36333036  / 36333043"	,city:"	KARACHI "},
    {  no : 91	, name: '	Tahir Medical Centre',	location:'	419/A Amir Khusro Road, near Dhoraji' ,	phone : "	021-34380161"	,city:"	KARACHI "},
    {  no : 92	, name: '	The Kidney Centre',	location:'	97/9, Rafiqui Shaheed Rd' ,	phone : "	021-35661000-10"	,city:"	KARACHI "},
    {  no : 93	, name: '	United Hospital (PSG Hospital)',	location:'	Main Shaheed-e-millat road, near Hill park' ,	phone : "	021-34520333"	,city:"	KARACHI "},
    {  no : 94	, name: '	Zubaida Medical Centre',	location:'	Ghazi Salauddin Road, near Dhoraji Colony' ,	phone : "	021-38784012-18 / 34933391"	,city:"	KARACHI "},
    {  no : 96	, name: '	Aadil Hospital',	location:'	Main Boulevard Defence, Lahore Cantt' ,	phone : "	042-111223454"	,city:"	LAHORE "},
    {  no : 97	, name: '	Ammar Medical Complex',	location:'	8 Haroon Shah Scheme, Jail Road' ,	phone : "	042-35754916-19 ext"	,city:"	LAHORE "},
    {  no : 98	, name: '	Ahmed Medical Complex',	location:'	Near Madina  Town, Main Raiwind Road, Kusur' ,	phone : "	042-35710400 - 07"	,city:"	LAHORE "},
    {  no : 99	, name: '	Al Noor Diagnostic  Centre',	location:'	Shadman-1 (Opp. Fatima Memorial  Hospital)' ,	phone : "	42,111,939,939"	,city:"	LAHORE "},
    {  no : 100	, name: '	Al Noor Eye Centre',	location:'	16 B, PCSIR Housing Society  Phase 2, Nazariya  e Pakistan  Avenue' ,	phone : "	3,008,454,810"	,city:"	LAHORE "},
    {  no : 101	, name: '	Al Razi Hospital',	location:'	2 C-II M.M Alam Rd Gulberg-III' ,	phone : "	042-35785836"	,city:"	LAHORE "},
    {  no : 102	, name: '	Al-Khidmat Mansoorah  Hospital',	location:'	Multan Road, Near Multan Chungi' ,	phone : "	042-35419510  / 0333-4111620"	,city:"	LAHORE "},
    {  no : 103	, name: '	Amanat Eye Hospital',	location:'	Main Boulevard  near  first woman Bank 78-B -E-1  Gulberg -3 lahore' ,	phone : "	042-35754208"	,city:"	LAHORE "},
    {  no : 104	, name: '	Bahria International  Hospital',	location:'	Sector B,Takbeer  Block, Bahria Town' ,	phone : "	042-35340135,  0333-7656362"	,city:"	LAHORE "},
    {  no : 105	, name: '	Baloch Hospital',	location:'	172 Allama Iqbal Road Dharampura' ,	phone : "	042-68224301-2"	,city:"	LAHORE "},
    {  no : 106	, name: '	Cavalry Hospital',	location:'	44-45 Cavalry Ground Ext, Lahore Cantt' ,	phone : "	042-36652116 - 8"	,city:"	LAHORE "},
    {  no : 107	, name: '	Chughtai Lahore Labs',	location:'	Chughtai Lab - 7 Jail Road, Main Gulberg' ,	phone : "	042-111-456-789"	,city:"	LAHORE "},
    {  no : 108	, name: '	Doctors Hospital & Medical Centre',	location:'	152 - G/1, Canal Bank Johar Town' ,	phone : "	042-35302701-14"	,city:"	LAHORE "},
    {  no : 109	, name: '	Eye & Retina Hospital',	location:'	Faisal Town, Lahore' ,	phone : "	042-35165661"	,city:"	LAHORE "},
    {  no : 110	, name: '	Ever Care Hospital',	location:'	A1 E/2 Wapda town' ,	phone : "	042-35229839/46"	,city:"	LAHORE "},
    {  no : 111	, name: '	Faisal Hospital',	location:'	23 - A, Faisal Town' ,	phone : "	042-35168848,  042-35168240"	,city:"	LAHORE "},
    {  no : 112	, name: '	Family Dental Clinic',	location:'	1st Floor Green Complex  Beside Qainchi Flyover, Ferozpur Rd' ,	phone : "	042-35805500  / 0300-8487936"	,city:"	LAHORE "},
    {  no : 113	, name: '	Farooq Hospital Allama Iqbal',	location:'	2 - Asif Block, Main Boulevard,  Allama Iqbal Town' ,	phone : "	042-37832537  / 042-37845521"	,city:"	LAHORE "},
    {  no : 114	, name: '	Farooq Hospital West Wood',	location:'	West Wood Colony Main Canal Road Thokar Niaz Baig' ,	phone : "	042-37498557"	,city:"	LAHORE "},
    {  no : 115	, name: '	Fatima Memorial Hospital',	location:'	Main Shadman Road, Ichra' ,	phone : "	042-111-555-600"	,city:"	LAHORE "},
    {  no : 116	, name: '	Fauji Foundation  Hospital',	location:'	Bedian Road, Lahore Cantt' ,	phone : "	042-99220291  - 3 ext"	,city:"	LAHORE "},
    {  no : 117	, name: '	Hafeez Eye Centre',	location:'	Sunflower  Society, Block J-1, Johar Town' ,	phone : "	042-35315252  , 042-35315524-25"	,city:"	LAHORE "},
    {  no : 118	, name: '	Hameed  Latif Hospital',	location:'	Abu Bakar Block, New Garden Town' ,	phone : "	042-35837014  / 042-35837019"	,city:"	LAHORE "},
    {  no : 119	, name: '	Haq Orthopedic  Hospital',	location:'	18 Sanda Road' ,	phone : "	042-37312860"	,city:"	LAHORE "},
    {  no : 120	, name: '	Health Bridge Hosiptal',	location:'	E-194 Near Q-Block , D.H.A Market Ghazi Road' ,	phone : "	042-35740341-42"	,city:"	LAHORE "},
    {  no : 121	, name: '	Halcyon Medical Centre',	location:'	Main Boulevard Gulberg 2' ,	phone : "	0304-1111941"	,city:"	LAHORE "},
    {  no : 122	, name: '	Horizon Hospital',	location:'	Block D II M.A Johar Town' ,	phone : "	042-35401620-28"	,city:"	LAHORE "},
    {  no : 123	, name: '	Iqra Medical Complex',	location:'	5-A, Johar Town (Near Akbar Chowk)' ,	phone : 	"042-35173500 / 35173600 /35173800"	,city:"	LAHORE "},
    {  no : 124	, name: '	Ittefaq Hospital',	location:'	Model Town, Near H Block Bahar Colony' ,	phone : "	042 - 111 770 000"	,city:"	LAHORE "},
    {  no : 125	, name: '	Khairunisa  Hospital Foundation',	location:'	10-A, Block C, Faisal Town .' ,	phone : "	042-35160112,  042-35166017"	,city:"	LAHORE "},
    {  no : 126	, name: '	Lahore Diagnostic  Center',	location:'	299-Jehanzaib  Block , Allama Iqbal Town' ,	phone : "	0321-4348221,0302 -8277221"	,city:"	LAHORE "},
    {  no : 127	, name: '	Laser Vision Centre',	location:'	95 - K, Model Town .' ,	phone : "	042-35868844  / 042- 35869944"	,city:"	LAHORE "},
    {  no : 128	, name: '	Mid City Hospital',	location:'	3-A, Shadman,  Jail Road' ,	phone : "	042-37573382-3 ext"	,city:"	LAHORE "},
    {  no : 129	, name: '	Noor Hospital',	location:'	18-Km Main Lahore Kasur Road, Shadab Garden' ,	phone : "	042-35923617"	,city:"	LAHORE "},
    {  no : 130	, name: '	National Eye Centre',	location:'	11-A, Sandha Road, Near MAO College' ,	phone : "	042-37171681-4 ext"	,city:"	LAHORE "},
    {  no : 131	, name: '	National Hospital & Medical Centre',	location:'	132, Sector L, Dha Phase 1' ,	phone : "	042-111-171-819"	,city:"	LAHORE "},
    {  no : 132	, name: '	Pakistan  Kidney And Liver Institute',	location:'	PKLI Avenue opp DHA Phase 6' ,	phone : "	042-38107554"	,city:"	LAHORE "},
    {  no : 133	, name: '	Punjab Institute Of Cardiology',	location:'	Ghaus Ul Azam Road (Jail Road)' ,	phone : "	042-399203051 - 60 ext"	,city:"	LAHORE "},
    {  no : 134	, name: '	Surraya Azeem Hospital',	location:'	5-Bahawalpur Road, Chowk Choburji' ,	phone : "	042-37120003 - 5 ext"	,city:"	LAHORE "},
    {  no : 135	, name: '	Saira Memorial  Hospital',	location:'	Civic Centre,  Model Town Extension' ,	phone : "	042-35162546-9 ext / 042-35168033"	,city:"	LAHORE "},
    {  no : 136	, name: '	Shalamar Hospital',	location:'	Shalimar Link Road, Moghalpura' ,	phone : "	042-111-205-205"	,city:"	LAHORE "},
    {  no : 137	, name: '	Shamim  Hospital',	location:'	Near Sharif Park, Main Sheikhupura  Road' ,	phone : "	0332-8497925"	,city:"	LAHORE "},
    {  no : 138	, name: '	Shaukat Khanum Memorial  Hospital',	location:'	M A Johar Town, Phase-2' ,	phone : "	042-111-155-555"	,city:"	LAHORE "},
    {  no : 139	, name: '	Surgimed  Hospital',	location:'	1 - Zafar Ali Road .' ,	phone : "	042-35714411-18 ext"	,city:"	LAHORE "},
    {  no : 140	, name: '	Umer Hospital and Cardiac Center',	location:'	Jail Road.Lahore' ,	phone : "	042-37154544"	,city:"	LAHORE "},
    {  no : 141	, name: '	Excel Labs',	location:'	Multiple Locations' ,	phone : "	042-35219184 / 0300-0648139"	,city:"	LAHORE "},
    {  no : 142	, name: '	Islamabad Diagnostic Center Lahore',	location:'	Plot 9-B, Jail Road, Beside Shadman Police Station, Shadman 2, Lahore' ,	phone : "	0311-1000432"	,city:"	LAHORE "},
    {  no : 143	, name: '	Basheeran  Umar Eye Hospital',	location:'	Sector A DHA Phase II' ,	phone : "	051-5162250"	,city:"	ISLAMABAD "},
    {  no : 144	, name: '	Bio Care Labs',	location:'	Mezzanine Floor, Asif Plaza Fazal e Haq Rd, Blue Area' ,	phone : "	051-8350225"	,city:"	ISLAMABAD "},
    {  no : 145	, name: '	Dr. Akbar Niazi Teaching Hospital',	location:'	Murree Rd, Bhara Kahu' ,	phone : "	051-8153000"	,city:"	ISLAMABAD "},
    {  no : 146	, name: '	HBS General Hospital',	location:'	Nai Abadi, Ali Pur' ,	phone : "	051-2621043-44"	,city:"	ISLAMABAD "},
    {  no : 147	, name: '	Islamabad  Diagnostic  Centre',	location:'	G-8 Markaz Rd' ,	phone : "	051-2340276"	,city:"	ISLAMABAD "},
    {  no : 148	, name: '	Islamabad  International  Hospital',	location:'	E-11/2, Main Double Road, D-12' ,	phone : "	051-2304941  / 0332-7240584"	,city:"	ISLAMABAD "},
    {  no : 149	, name: '	Excel Labs',	location:'	Reshi Bldng , 110 A.K Fazul Haq , Blue area' ,	phone : "	051-831 1006"	,city:"	ISLAMABAD "},
    {  no : 150	, name: '	Kulsum International  Hospital',	location:'	Kulsoom Plaza, Blue Area' ,	phone : "	051-8446666"	,city:"	ISLAMABAD "},
    {  no : 151	, name: '	Life Care International  Hospital',	location:'	Main Double Swan Road, G-10 Markaz' ,	phone : "	051-2111994-5"	,city:"	ISLAMABAD "},
    {  no : 152	, name: '	Maroof International  Hospital',	location:'	10th Avenue, F-10 Markaz' ,	phone : "	051-2222920-49"	,city:"	ISLAMABAD "},
    {  no : 153	, name: '	Medcity International  Hospital',	location:'	PMC Plaza, Ayub Market, F8 Markaz' ,	phone : "	051-2817233"	,city:"	ISLAMABAD "},
    {  no : 154	, name: '	Naqaish Medicare',	location:'	I-8 Markaz' ,	phone : "	3,042,252,555"	,city:"	ISLAMABAD "},
    {  no : 155	, name: '	Nayab Labs Diagnostics  Centre',	location:'	Pak Pavilion Plaza, 65-E , Fazal e Haq Rd G7/2 Blue area' ,	phone : "	051-2806327  , 051-2806328"	,city:"	ISLAMABAD "},
    {  no : 156	, name: '	PAF Hospital',	location:'	Main Margalla Rd, E-9/1 E-9' ,	phone : "	051-9567000"	,city:"	ISLAMABAD "},
    {  no : 157	, name: '	Quaid-E-Azam International  Hospital',	location:'	Golra Morr, Peshawar Rd' ,	phone : "	051-8449100-59"	,city:"	ISLAMABAD "},
    {  no : 158	, name: '	Rawal Institute of Health Sciences',	location:'	Lehtrar Road Khanna  Dak' ,	phone : "	051-26173813- 3"	,city:"	ISLAMABAD "},
    {  no : 159	, name: '	Shaafi International  Hospital',	location:'	C-3, Main PWD Double Rd, Doctors  Town' ,	phone : "	051-5170395"	,city:"	ISLAMABAD "},
    {  no : 160	, name: '	Shifa International  Hospital',	location:'	Sector H-8/4, Pitras Bukhari  Rd' ,	phone : "	051-4603666  , 051-8463000"	,city:"	ISLAMABAD "},
    {  no : 161	, name: '	Ali Medical Centre',	location:'	Sector F-8' ,	phone : "	051-8090230"	,city:"	ISLAMABAD "},
    {  no : 162	, name: '	Advanced International  Hospital',	location:'	AIH Building,  G-8 Markaz' ,	phone : "	051-111786005"	,city:"	ISLAMABAD "},
    {  no : 163	, name: '	Ahmad Medical Complex',	location:'	70-C Satellite Town, Sadiqabad  Road' ,	phone : "	051-4582231-39"	,city:"	RAWALPINDI "},
    {  no : 164	, name: '	Amanat Eye Hospital',	location:'	Rashid Minhas Road (Civil Lines)' ,	phone : "	051-8439993  / 051- 5562150-51"	,city:"	RAWALPINDI "},
    {  no : 165	, name: '	Al-Khidmat Raazi Hospital',	location:'	Chandni Chowk Flyover, Asghar Mall Scheme, Satellite Town' ,	phone : "	051-4906401"	,city:"	RAWALPINDI "},
    {  no : 166	, name: '	Begum Akhtar Rukhsana  Memorial Trust',	location:'	Bahria International  Hospital, Phase 8' ,	phone : "	051- 5179745"	,city:"	RAWALPINDI "},
    {  no : 167	, name: '	Bilal Hospital',	location:'	38-A, Satellite Town' ,	phone : "	051-4456471-76"	,city:"	RAWALPINDI "},
    {  no : 168	, name: '	Hearts International  General Hospital',	location:'	192-A The Mall Rawalpindi' ,	phone : "	051-4252008-10"	,city:"	RAWALPINDI "},
    {  no : 169	, name: '	Maryam Memorial  Hospital',	location:'	2/311, Main Peshawar Rd' ,	phone : "	051-5464680-82"	,city:"	RAWALPINDI "},
    {  no : 170	, name: '	Maryam Memorial  Hospital (Bahria Town)',	location:'	Plot # 175, Civic Center, Block-D, Bahria Town, Phase 4' ,	phone : "	051-35210699/051 -35210676"	,city:"	RAWALPINDI "},
    {  no : 171	, name: '	Mega Medical Complex',	location:'	The Mall, Police Station Rd, Saddar' ,	phone : "	051-35701444"	,city:"	RAWALPINDI "},
    {  no : 172	, name: '	Nusrat Hospital',	location:'	Main Peshawar Road' ,	phone : "	051-5490880-1"	,city:"	RAWALPINDI "},
    {  no : 173	, name: '	Valley Clinic',	location:'	213, Peshawar Road' ,	phone : "	051-5470070-3/5460438"	,city:"	RAWALPINDI "},
    {  no : 174	, name: '	Al-Shifa Trust Eye Hospital',	location:'	Jehlum Road' ,	phone : "	051-5487821"	,city:"	RAWALPINDI "},
    {  no : 175	, name: '	Al-Ihsan Hospital',	location:'	142 Murree Road, Marir Chowk' ,	phone : "	051-5130183"	,city:"	RAWALPINDI "},
    {  no : 176	, name: '	Al Syed Hospital',	location:'	Mandian,  Opp. Billa Shopping  Mall' ,	phone : "	0992-380396, 0992-382710"	,city:"	ABBOTTABAD "},
    {  no : 177	, name: '	Chinar Hospital  & dailysis  Centre',	location:'	karakoram  highway,  Muree road, Nuwan Shehar' ,	phone : "	0321-9980838"	,city:"	ABBOTTABAD "},
    {  no : 178	, name: '	Hira General Hospital',	location:'	The Mall' ,	phone : "	099-2336063  / 099-2334403"	,city:"	ABBOTTABAD "},
    {  no : 179	, name: '	Jinnah International  Hospital',	location:'	Link Murree Road,Nawan  shehr near Women Medical College.' ,	phone : "	099-2390101"	,city:"	ABBOTTABAD "},
    {  no : 180	, name: '	Valley Medical Complex',	location:'	Main Mansehra  Road' ,	phone : "	099-2385419-20 , 099-2385419-92"	,city:"	ABBOTTABAD "},
    {  no : 181	, name: '	Sial Hospital',	location:'	Qadirabad  Road' ,	phone : "	055-6333788"	,city:"	ALI PUR CHATTA "},
    {  no : 182	, name: '	Shahab Welfare Medical Centre',	location:'	Hyderabad-Badin Rd' ,	phone : "	029-7870566"	,city:"	BADIN "},
    {  no : 183	, name: '	Al-Rehman Medical Complex',	location:'	Unit No 1 Yazman,  Unit No 2, Model Town C' ,	phone : "	0331-7800131  / 0301-868757"	,city:"	BAHAWALPUR "},
    {  no : 184	, name: '	Doctors Hospital',	location:'	2A, Block Y, Main Road, Model Town C' ,	phone : "	062-2200565"	,city:"	BAHAWALPUR "},
    {  no : 185	, name: '	Surgicare  Complex',	location:'	Welcome  Chowk Railway Rd , Near Capt Hasan Shaheed Rd' ,	phone : "	0333-7717717  / 0307-7717717"	,city:"	BAHAWALPUR "},
    {  no : 186	, name: '	Burewala  Hospital & Medical Centre',	location:'	Lahore Road, Near Fawara Chowk' ,	phone : "	067-3771601-03"	,city:"	BUREWALA "},
    {  no : 187	, name: '	Capital Health Hospital',	location:'	Near Islamia Chowk, Opp. City Marriage Hall, Bhoun Rd Mall' ,	phone : "	054-3551122"	,city:"	CHAKWAL "},
    {  no : 188	, name: '	Booni Medical Centre (BMC)',	location:'	Booni' ,	phone : "	0332-3335549"	,city:"	CHITRAL "},
    {  no : 189	, name: '	Rural Health Centre, Shagram  Thorkhow',	location:'	Shagram  Thorkhow' ,	phone : "	0332-3335549"	,city:"	CHITRAL "},
    {  no : 190	, name: '	Tehsil Head Quarter Hospital,',	location:'	Garamchashma' ,	phone : "	0332-3335549"	,city:"	CHITRAL "},
    {  no : 191	, name: '	Rural Health Centre, Mastuj',	location:'	Mastuj' ,	phone : "	0332-3335549"	,city:"	CHITRAL "},
    {  no : 192	, name: '	Allied Surgical Hospital',	location:'	Street No.4, Balakh Sarwar City' ,	phone : "	064-2466225"	,city:"	DG KHAN "},
    {  no : 193	, name: '	Sindh Medical Centre',	location:'	Near Taluka  hospital, Digri' ,	phone : "	023-3869339"	,city:"	DIGRI "},
    {  no : 194	, name: '	Rehmania  Hospital/Abida  Maternity Home',	location:'	Jail Road' ,	phone : "	096-6720340  , 096-6730398"	,city:"	DI KHAN "},
    {  no : 195	, name: '	Anmol Hospital',	location:'	Jhang Road' ,	phone : "	041-2656412"	,city:"	FAISALABAD "},
    {  no : 196	, name: '	Faisal Hospital',	location:'	673-A, lower canal Rd, Peoples Colony' ,	phone : "	041-8719677-78"	,city:"	FAISALABAD "},
    {  no : 197	, name: '	Hilal-E-Ahmar Hospital',	location:'	Opp Lady bagh , University Rd' ,	phone : "	041-9201475-76  / 0300-6622347"	,city:"	FAISALABAD "},
    {  no : 198	, name: '	Mian Mohammad  Trust Hospital',	location:'	Sargodha Road' ,	phone : "	041-2408912"	,city:"	FAISALABAD "},
    {  no : 199	, name: '	Mujahid  Hospital',	location:'	1 Green Belt Rd, Block Z, Madina Town' ,	phone : "	041-8541364  / 041- 8737959"	,city:"	FAISALABAD "},
    {  no : 200	, name: '	National Hospital',	location:'	Gulberg  Road, Jinnah Colony' ,	phone : "	041-2611496-8"	,city:"	FAISALABAD "},
    {  no : 201	, name: '	Sahil Hospital',	location:'	Sahil Building, Faisal Rd Noorpur 1, Shiekhupura  Rd' ,	phone : "	041-878204 / 041-18782040  - 4"	,city:"	FAISALABAD "},
    {  no : 202	, name: '	Shifa International  Hospital',	location:'	Jaranwala  Road' ,	phone : "	041-8740951-55 / 041-8403656-60"	,city:"	FAISALABAD "},
    {  no : 203	, name: '	Gilgit Medical Centre (GMC)',	location:'	Alpine Complex,  Shahrah E Quaid Azam, Jutial' ,	phone : "	0312-9749932"	,city:"	GILGIT "},
    {  no : 204	, name: '	"Aga Khan Extended  Family Health Centre,Aliabad"',	location:'	Aliabad' ,	phone : "	0312-9749932"	,city:"	GILGIT "},
    {  no : 205	, name: '	Aga Khan Medical Centre,  Singal (SMC)',	location:'	Singal' ,	phone : "	0312-9749932"	,city:"	GILGIT "},
    {  no : 206	, name: '	"Aga Khan Extended  Family Health Centre,Gupis"',	location:'	Gupis' ,	phone : "	0312-9749932"	,city:"	GILGIT "},
    {  no : 207	, name: '	Citi Hospital',	location:'	Jail Road Area' ,	phone : "	053-3608186"	,city:"	GUJRAT "},
    {  no : 208	, name: '	Chaudhry Hospital',	location:'	28-D, Satelite Town' ,	phone : "	055-3842363  / 055-3253901"	,city:"	GUJRANWALA "},
    {  no : 209	, name: '	Cheema Heart Complex  & General Hospital',	location:'	Mian Zia Ul Haq Rd, Lords Hotel District Courts' ,	phone : "	0302-8646444,  055-3255959"	,city:"	GUJRANWALA "},
    {  no : 210	, name: '	Gondal Medical Complex',	location:'	Hospital Road' ,	phone : "	055-3258403  / 055-3258403"	,city:"	GUJRANWALA "},
    {  no : 211	, name: '	Med Care International  Hospital',	location:'	Gill Road civil lines' ,	phone : "	055-3732032/3732003/3822008"	,city:"	GUJRANWALA "},
    {  no : 212	, name: '	"Siddique Sadiq Memorial Trust Cardiac  Institute"',	location:'	Sheikhupura  Rd, Ittefaq Colony' ,	phone : "	055-4270002"	,city:"	GUJRANWALA "},
    {  no : 213	, name: '	Fatima Bashir Hospital',	location:'	N-5 Ghakhar Mandi Wazirabad' ,	phone : "	055-3880667"	,city:"	GUJRANWALA "},
    {  no : 214	, name: '	Allama Iqbal Hosital',	location:'	Shakar Shah Road, Near Fawara  Masjid' ,	phone : "	099-5627555"	,city:"	HARIPUR "},
    {  no : 215	, name: '	Noor Surgical Hospital',	location:'	GT Road' ,	phone : "	099-5611748"	,city:"	HARIPUR "},
    {  no : 216	, name: '	Yahya Welfare Complex Hospital',	location:'	Habib Plaza, Haripur-Abbottabad  Rd' ,	phone : "	099-5627516-7"	,city:"	HARIPUR "},
    {  no : 217	, name: '	Aga Khan Maternal  & Childcare Centre',	location:'	Jamshoro Road' ,	phone : "	022-2614172  / 022-2660073"	,city:"	HYDERABAD "},
    {  no : 218	, name: '	Fatima Eye Hospital',	location:'	Al raheem shopping  centre, Saddar' ,	phone : "	022-2728485"	,city:"	HYDERABAD "},
    {  no : 219	, name: '	Isra University  Hospital',	location:'	Hala Road' ,	phone : "	022-2030161"	,city:"	HYDERABAD "},
    {  no : 220	, name: '	Maajee Hospital',	location:'	Latifabad Unit 7' ,	phone : "	022-3408001"	,city:"	HYDERABAD "},
    {  no : 221	, name: '	NICVD Hospital',	location:'	Civil Hospital' ,	phone : "	021-99201271-5"	,city:"	HYDERABAD "},
    {  no : 222	, name: '	Red Crescent General Hospital',	location:'	Latifabad # 6' ,	phone : "	022-3862727"	,city:"	HYDERABAD "},
    {  no : 223	, name: '	St. Elizabeth Hospital',	location:'	99F4+3GM,  Latifabad  Unit 7 Latifabad,  Hyderabad,  Sindh 71000' ,	phone : "	022-3861620"	,city:"	HYDERABAD "},
    {  no : 224	, name: '	Sahar Hospital',	location:'	Choti Rd' ,	phone : "	0333-6452786"	,city:"	JAMPUR "},
    {  no : 225	, name: '	Bakhtawar General Hospital',	location:'	Jamshoro City' ,	phone : "	022-2109766-67"	,city:"	JAMSHORO "},
    {  no : 226	, name: '	Shifa Medical Centre',	location:'	S.S.P House Road , Civil lines, Saddar' ,	phone : "	047-7623844-45"	,city:"	JHANG "},
    {  no : 227	, name: '	NICVD Hospital',	location:'	KMC Teaching Hospital  (DHQ Hospital) Civil Hospital Rd' ,	phone : "	021-99201271-5"	,city:"	KHAIRPUR "},
    {  no : 228	, name: '	Faran Medicare  and Eye Complex',	location:'	Jaswant Nagar Road, Near Multani Darbar' ,	phone : "	065-2554364"	,city:"	KHANEWAL "},
    {  no : 229	, name: '	Faisal Hospital',	location:'	Model Town Link Rd' ,	phone : "	068-85575181"	,city:"	KHANPUR "},
    {  no : 230	, name: '	Kharian Doctors Hospital',	location:'	Near KWIK CNG, GT Rd' ,	phone : "	051-2150607"	,city:"	KHARIAN "},
    {  no : 231	, name: '	Ahmed Medical Complex-Kusur',	location:'	Near Madina  Town.Main  Raiwind Road.Kusur' ,	phone : "	051-2166556"	,city:"	KUSUR "},
    {  no : 232	, name: '	Citi Hospital',	location:'	Larkana Wakeel Colony' ,	phone : "	074-4041238  / 4752338"	,city:"	LARKANA "},
    {  no : 233	, name: '	NICVD Hospital',	location:'	Civil Hospital, VIP Rd' ,	phone : "	021-99201271-5"	,city:"	LARKANA "},
    {  no : 234	, name: '	Mansehra  Medical Complex',	location:'	Abdul Sattar Edhi Road, Mansehra  Bypass Road, Mansehra, Khyber Pakhtunkhwa  21300' ,	phone : "	(0997) 391788"	,city:"	MANSHERA "},
    {  no : 235	, name: '	Sughra Rehman  Trust Hospital',	location:'	Kot Addu, Multan Road' ,	phone : "	060-6410472"	,city:"	LAYYAH "},
    {  no : 236	, name: '	Khyber Hospital',	location:'	Shamsi Road' ,	phone : "	093-7871991-92 / 0300-5763701"	,city:"	MARDAN "},
    {  no : 237	, name: '	Abid Hospital',	location:'	Talamba  Rd, Mushtaq Colony, Ilm-ud-Din Colony' ,	phone : "	0334-6232113"	,city:"	MIAN CHUNNU "},
    {  no : 238	, name: '	Obaid Noor Hospital',	location:'	Hospital Road' ,	phone : "	045-9235325  / 045-9236325"	,city:"	MIANWALI "},
    {  no : 239	, name: '	Noor Memorial  Hospital',	location:'	Mian Muhammad  Road, Mirpur' ,	phone : "	058-27444440,  058-27442611"	,city:"	MIRPUR AZAD KASHMIR "},
    {  no : 240	, name: '	Ali Medicare  Centre',	location:'	Umerkot Road, Adam Town' ,	phone : "	023-3874085  / 023-3874075"	,city:"	MIRPUR KHAS "},
    {  no : 241	, name: '	Aziz Orthopedic  & General Hospital',	location:'	Station Rd, PM Colony, Mirpur Khas' ,	phone : "	023-3872783"	,city:"	MIRPUR KHAS "},
    {  no : 242	, name: '	NICVD Hospital',	location:'	DHQ Hospital (Civil Hospital), Mithi-Islamkot Road' ,	phone : "	021-99201271-5"	,city:"	MITHI "},
    {  no : 243	, name: '	Al-Khaliq Patients Care',	location:'	Nishtar Road' ,	phone : "	061-4573703-5 / 4781838-9"	,city:"	MULTAN "},
    {  no : 244	, name: '	Buch International Hospital',	location:'	Buch Executive Villas, Bosan Rd, Buch Villas, Multan, Punjab' ,	phone : "	061-111 244 000"	,city:"	MULTAN "},
    {  no : 245	, name: '	Bakhtawar Amin Hospital',	location:'	Northern Bypass' ,	phone : "	061-6741205"	,city:"	MULTAN "},
    {  no : 246	, name: '	Chaudhry Pervaiz Elahi Institute of',	location:'	Abdali Rd, Tipu Sultan Colony' ,	phone : "	061-9201045"	,city:"	MULTAN "},
    {  no : 247	, name: '	Chenab General Hospital',	location:'	Chungi # 1 , Suraj Miani Road Multan' ,	phone : "	061-4518874"	,city:"	MULTAN "},
    {  no : 248	, name: '	City Hospital',	location:'	Peer Khursheed  Colony Road' ,	phone : "	061-6510367-70"	,city:"	MULTAN "},
    {  no : 249	, name: '	Fatima Medical Centre',	location:'	Chowk rashidabad,  Khanewal Road' ,	phone : "	061-6224433-34"	,city:"	MULTAN "},
    {  no : 250	, name: '	Haleema Hospital  Complex',	location:'	Al Rahim Colony, Nishtar Rd' ,	phone : "	061-4519037"	,city:"	MULTAN "},
    {  no : 251	, name: '	Medicare  Hospital',	location:'	62-A, Abdali Road' ,	phone : "	061-4581702  - 3"	,city:"	MULTAN "},
    {  no : 252	, name: '	Mukhtar A. Sheikh Memorial  Welfare',	location:'	Khanewal Road, Shah Rukn E Alam Town' ,	phone : "	061-111 627 628"	,city:"	MULTAN "},
    {  no : 253	, name: '	Razia Saeed Hospital',	location:'	17 E , Eid Gah Chowk, Officers Colony' ,	phone : "	061-8048444"	,city:"	MULTAN "},
    {  no : 254	, name: '	Rehman  Medical Complex',	location:'	Nishtar Road' ,	phone : "	061-4500488"	,city:"	MULTAN "},
    {  no : 255	, name: '	Seyal Hospital',	location:'	Opp Sharif Plaza, LMQ Road' ,	phone : "	061-4782499"	,city:"	MULTAN "},
    {  no : 256	, name: '	Sughra Shafi Medical Complex',	location:'	Narowal Muridke Road' ,	phone : "	054-2413406"	,city:"	NAROWAL "},
    {  no : 257	, name: '	NICVD Hospital',	location:'	Shaheed Benazirabad,  Civil Hospital Road' ,	phone : "	021-99201271-5"	,city:"	NAWABSHAH "},
    {  no : 258	, name: '	Taj Medical Centre',	location:'	GT Road Hakeemabad,  KPK' ,	phone : "	3,444,011,666"	,city:"	NOWSHERA "},
    {  no : 260	, name: '	Citi Hospital  - 1',	location:'	Renala Road' ,	phone : "	0321-3217799"	,city:"	OKARA "},
    {  no : 262	, name: '	Qari Hospital',	location:'	18-Nawab Colony,  Girls College Road, Aamir Colony' ,	phone : "	044-2523154"	,city:"	OKARA "},
    {  no : 263	, name: '	"Maqsood Medical Complex (MMC General) Hospital"',	location:'	Shinwari Town, Peshawar  Ring Rd, Pakha Ghulam' ,	phone : "	091-2244050"	,city:"	PESHAWAR "},
    {  no : 264	, name: '	"Northwest  General Hospital  & Research Centre"',	location:'	A-3, Phase - V, Hayatabad' ,	phone : "	091-5822612-21"	,city:"	PESHAWAR "},
    {  no : 265	, name: '	Pima Al-Khidmat Hospital',	location:'	1A-1 Nishtarabad' ,	phone : "	091-2215945"	,city:"	PESHAWAR "},
    {  no : 266	, name: '	Rehman  Medical Institute',	location:'	Phase-5, Hayatabad' ,	phone : "	091-5825501-6"	,city:"	PESHAWAR "},
    {  no : 267	, name: '	Shaukat Khanum Memorial  Hospital',	location:'	Phase-5, Hayatabad' ,	phone : "	091-5885000"	,city:"	PESHAWAR "},
    {  no : 268	, name: '	Town Women & Children Hosptal',	location:'	44-C Sir Sahebzada Abdul Qayum Rd , University  Town' ,	phone : "	091-5703393"	,city:"	PESHAWAR "},
    {  no : 269	, name: '	Peshawar Institute of Cardiology  - MTI',	location:'	5-A, Sector B-3, Phase V, Hayatabad' ,	phone : "	091-9219641"	,city:"	PESHAWAR "},
    {  no : 270	, name: '	Christian Hospital',	location:'	Mission Road' ,	phone : "	081-2831910"	,city:"	QUETTA "},
    {  no : 271	, name: '	Heart & General Hospital',	location:'	Model Town' ,	phone : "	081-2822409"	,city:"	QUETTA "},
    {  no : 272	, name: '	Al-Saeed Hospital',	location:'	Khanpur Road' ,	phone : "	068-5888555"	,city:"	RAHIM YAR KHAN "},
    {  no : 273	, name: '	Nouman Medical Center',	location:'	Khawaja Bungalows,  Near Darbar Baba Dilbar Shah Abassia Town' ,	phone : "	0331-7800131,  0302-7800131"	,city:"	RAHIM YAR KHAN "},
    {  no : 274	, name: '	Al-Rehman Hospital',	location:'	Thali Chowk, By Pass Road' ,	phone : "	068-5801180"	,city:"	RAHIM YAR KHAN "},
    {  no : 275	, name: '	Christian Hospital',	location:'	Mission Chowk' ,	phone : "	040-4224858,  042-4460133"	,city:"	SAHIWAL "},
    {  no : 276	, name: '	Imtiaz Hospital & Maternity Home',	location:'	Civil Hospital Road, Opp Mall Mandy' ,	phone : "	040-45555551  / 040-45555552"	,city:"	SAHIWAL "},
    {  no : 277	, name: '	Muneer Hospital',	location:'	700-A, Satellite Town' ,	phone : "	048-3210036,  048-3210035-37"	,city:"	SARGODHA "},
    {  no : 278	, name: '	Niazi Medical Complex',	location:'	Railway Rd' ,	phone : "	048-3727146"	,city:"	SARGODHA "},
    {  no : 279	, name: '	Sadiq Hospital',	location:'	24-A, Satellite Town' ,	phone : "	048-3212168"	,city:"	SARGODHA "},
    {  no : 280	, name: '	NICVD Hospital',	location:'	Syed Abdullah  Shah Institute of Medical Sciences,  Station Road' ,	phone : "	021-99201271-5"	,city:"	SEHWAN "},
    {  no : 281	, name: '	Akhtar Memorial  Hos. & Mat. Home',	location:'	Nasheman Park, Lahore Road' ,	phone : "	0300-9448016  / 056-3792853"	,city:"	SHIKHUPURA "},
    {  no : 282	, name: '	Darul Barkat Medicare',	location:'	Younus Shaheed Road, Near St. Merry School, Civil Line' ,	phone : "	056-3787445-6 / 056-3785777"	,city:"	SHIKHUPURA "},
    {  no : 283	, name: '	Khadija Polyclinic',	location:'	Near Govt. Tariq High School, College Road, Civil Line' ,	phone : "	056-3611911-12-13 / 0336-4221447"	,city:"	SHIKHUPURA "},
    {  no : 284	, name: '	Khan Hospital',	location:'	36- Civil Lines' ,	phone : 	"(056) 3546745  / 0300-4119301 / 0300-90606079",city:"	SHIKHUPURA "},
    {  no : 285	, name: '	Shakir Surgical Hospital',	location:'	Batti Chowk, Lahore sarghoda  road' ,	phone : "	056-3547500-1"	,city:"	SHIKHUPURA "},
    {  no : 286	, name: '	Siddique Hospital',	location:'	Lhr Sargodha  Rd, Near Thana City' ,	phone : "	056-3781008,  3780018"	,city:"	SHIKHUPURA "},
    {  no : 287	, name: '	Sultan Hospital',	location:'	Near faisalabad  by pass, Chowk Lahore-Rd' ,	phone : "	056-3500544"	,city:"	SHIKHUPURA "},
    {  no : 288	, name: '	Idrees Teaching Hospital',	location:'	Allama Iqbal Road, Saddar Bazar, Sialkot Cantt' ,	phone : "	052-4274884"	,city:"	SIALKOT "},
    {  no : 289	, name: '	Islam Central Hospital',	location:'	Commissioner  Road' ,	phone : "	052-4604948"	,city:"	SIALKOT "},
    {  no : 290	, name: '	Hira Medical Centre',	location:'	Barrage Colony' ,	phone : "	071-5614111"	,city:"	SUKKUR "},
    {  no : 291	, name: '	NICVD Hospital',	location:'	Airport Road, near City Bypass' ,	phone : "	021-99201271-5"	,city:"	SUKKUR "},
    {  no : 292	, name: '	Red Crescent General Hospital',	location:'	Takkar Muhalla,  Minara chowk' ,	phone : "	071-5623841  / 0313-3438479"	,city:"	SUKKUR "},
    {  no : 293	, name: '	Sukkur Blood Bank Hospital',	location:'	Eid Gah Road' ,	phone : "	071-5612024"	,city:"	SUKKUR "},
    {  no : 295	, name: '	Suleman Roshan Medical College Hospital',	location:'	Main Hyderabad Road' ,	phone : "	023-5572272"	,city:"	TANDO ADAM "},
    {  no : 296	, name: '	NICVD Hospital',	location:'	Hyderabad  Badin Road' ,	phone : "	021-99201271-5"	,city:"	TANDO M KHAN "},
    {  no : 297	, name: '	Al-Abbas Hospital',	location:'	Sarai Kola, G.T Road' ,	phone : "	051-4542343"	,city:"	TAXILA "},
    {  no : 298	, name: '	Al-Syed Hospital',	location:'	Taxila-Haripur Rd, Ahatta' ,	phone : "	051-4560148"	,city:"	TAXILA "},
    {  no : 299	, name: '	Al-Elaj Hospital',	location:'	60/A-1, Lane 2, Minar Road, Near Yum Bakers, Lala Rukh' ,	phone : "	051-4531904  / 051-4513418"	,city:"	WAH CANTT "},
    {  no : 301	, name: '	Shamshad Aslam hospital',	location:'	3 Quaid Avenue, Lalazar' ,	phone : "	051-4511765"	,city:"	WAH CANTT "},
    {  no : 302	, name: '	Umer Hospital',	location:'	Minaar Road, Wah' ,	phone : "	051-44511596"	,city:"	WAH CANTT "},
   
    {
        no : 303	, city:"KARACHI ",
        name: 'Bait-ul-Sukoon Cancer Hospital',
        location: "Plot No. S.N.P.A. 17-J, Block –3 K.C.H.S. Union، 144 Justice Inamullah Rd, Karachi Memon Co-operative Housing Society Karachi Memon Society PECHS, Karachi, Karachi City, Sindh"  ,
        phone : "021-34553834"
    },
    {
        no : 304	, city:"KARACHI ",
        name: 'Cancer Foundation Hospital',
        location: "W37V+355, Block 9 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh"  ,
        phone : "(021) 34991071"
    },
    {
        no : 305	, city:"KARACHI ",
        name: "Neurospinal and Cancer Care Institute (NCCI)",
        location: "Mansfield St, Saddar Karachi, Karachi City, Sindh"  ,
        phone : "(021) 111 000 212"
    },
    {
        no : 306	, city:"KARACHI ",
        name: 'Pak Onco Care (Cancer Treatment Center)',
        location: "B-253, Block 5 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh"  ,
        phone : "(021) 34980057"
    },
    {
        no : 307, city:"KARACHI ",
        name: 'Kiran Hospital',
        location: "Kiran Hospital Rd, Gulzar-e-Hijri Gulzar E Hijri Scheme 33, Karachi, Karachi City, Sindh"  ,
        phone : "(021) 99261601"
    },
    {
        no : 308	, city:"KARACHI ",
        name: 'Shaukat Khanum Memorial Cancer Hospital Karachi',
        location: "Plot DDCH1, 1st Street، Extension، Phase VII DHA, Karachi"  ,
        phone : "(021) 35306363"
    },
    {
        no : 309	, city:"KARACHI ",
        name: 'Lifeline Hospital',
        location: "D-14 Shahrah-e-Sher Shah Suri North, Nazimabad, Karachi"  ,
        phone : "(021) 36721837"
    },
    {
        no : 310	, city:"KARACHI ",
        name: 'Hill Park General Hospital',
        location: "S.N.C.C, 3, 4 Shaheed-e-Millat Rd, Karachi"  ,
        phone : "(021) 34538560"
    },
  

]

    return (
        <>
            <NavbarStyleTwo />

            <PageBanner
                pageTitle="Hospitals"
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
                                    <h3> Hospitals Details </h3>
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

export default Hospital;