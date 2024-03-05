import { Col, Row } from "antd";
import ExperienceCard from "../../commonComponents/experienceCard";

const experience = [
    {
        expeTittle: "A great Tequila experience",
        expeDate: "Mar 10, 2023",
        expeContent: "4 Types of tequila from Jalico Mexico all priced below $50 front line price.",
        expeCount: "4",
        starImg:"/images/Star.svg"
    },
    {
        expeTittle: "A great Tequila experience",
        expeDate: "Mar 10, 2023",
        expeContent: "4 Types of tequila from Jalico Mexico all priced below $50 front line price.",
        expeCount: "4",
        starImg:"/images/Star.svg"
    },
    {
        expeTittle: "A great Tequila experience",
        expeDate: "Mar 10, 2023",
        expeContent: "4 Types of tequila from Jalico Mexico all priced below $50 front line price.",
        expeCount: "4",
        starImg:"/images/Star.svg"
        
    },
    {
        expeTittle: "A great Tequila experience",
        expeDate: "Mar 10, 2023",
        expeContent: "4 Types of tequila from Jalico Mexico all priced below $50 front line price.",
        expeCount: "4",
        starImg:"/images/Star.svg"
    },{
        expeTittle: "A great Tequila experience",
        expeDate: "Mar 10, 2023",
        expeContent: "4 Types of tequila from Jalico Mexico all priced below $50 front line price.",
        expeCount: "4",
        starImg:"/images/Star.svg"
    },

];


const experienceFav = [
    {
        expeTittle: "A great Tequila experience",
        expeDate: "Mar 10, 2023",
        expeContent: "4 Types of tequila from Jalico Mexico all priced below $50 front line price.",
        expeCount: "4",
        starImg:"/images/star-fill.svg"
    },
    {
        expeTittle: "A great Tequila experience",
        expeDate: "Mar 10, 2023",
        expeContent: "4 Types of tequila from Jalico Mexico all priced below $50 front line price.",
        expeCount: "4",
        starImg:"/images/star-fill.svg"
    },
    {
        expeTittle: "A great Tequila experience",
        expeDate: "Mar 10, 2023",
        expeContent: "4 Types of tequila from Jalico Mexico all priced below $50 front line price.",
        expeCount: "4",
        starImg:"/images/star-fill.svg"
        
    },
    {
        expeTittle: "A great Tequila experience",
        expeDate: "Mar 10, 2023",
        expeContent: "4 Types of tequila from Jalico Mexico all priced below $50 front line price.",
        expeCount: "4",
        starImg:"/images/star-fill.svg"
    },{
        expeTittle: "A great Tequila experience",
        expeDate: "Mar 10, 2023",
        expeContent: "4 Types of tequila from Jalico Mexico all priced below $50 front line price.",
        expeCount: "4",
        starImg:"/images/star-fill.svg"
    },

];
const ExperiencesItems = [
    {
        key: '1',
        label: 'All',
        children:
            <>
                <div className="mt-6">
                    <Row gutter={[16, 16]}  >
                        {experience.map((product, index) => (
                            <Col key={index} className="gutter-row" xs={24} md={8}>
                                <ExperienceCard
                                    expeTittle={product.expeTittle}
                                    expeCount={product.expeCount}
                                    expeDate={product.expeDate}
                                    expeContent={product.expeContent}
                                    starImg={product.starImg}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            </>,
    },
    {
        key: '2',
        label: 'Favorites',
        children:
            <>
                <div className="mt-6">
                    <Row gutter={[16, 16]}  >
                        {experienceFav.map((product, index) => (
                            <Col key={index} className="gutter-row" xs={24} md={8}>
                                <ExperienceCard
                                    expeTittle={product.expeTittle}
                                    expeCount={product.expeCount}
                                    expeDate={product.expeDate}
                                    expeContent={product.expeContent}
                                    starImg={product.starImg}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            </>,
    },

];

export default ExperiencesItems 