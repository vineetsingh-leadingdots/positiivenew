import React from 'react'
import { PlusIcon3 } from '../../../commonComponents/commonSvg'
import { Col, Row } from 'antd';


const PointSales = () => {
    const buttonsData = [
        { title: 'apron', checkboxName: 'apron' },
        { title: 'ash trays', checkboxName: 'ash' },
        { title: 'backpacks', checkboxName: 'backpacks' },
        { title: 'baseball caps', checkboxName: 'baseball' },
        { title: 'bartender kit', checkboxName: 'bartender' },
        { title: 'beanie hats', checkboxName: 'beanie' },
        { title: 'beads', checkboxName: 'beads' },
        { title: 'bottle glorifier', checkboxName: 'bottle' },
        { title: 'bottle openers', checkboxName: 'openers' },
        { title: 'buckets', checkboxName: 'buckets' },
        { title: 'caps', checkboxName: 'caps' },
        { title: 'chalkboard', checkboxName: 'chalkboard' },
        { title: 'chiller', checkboxName: 'chiller' },
        { title: 'coasters', checkboxName: 'coasters' },
        { title: 'A frames', checkboxName: 'day' },

    ];
    return (
        <>
            <div className=" py-4">
                <div className="flex justify-end mb-3">
                    <button className="btnAdd">
                        <PlusIcon3 />
                        Add
                    </button>
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {buttonsData.map((button, index) => (
                        <div className="pointSaletag">
                            <input type="checkbox" name={button.name} /> <span>{button.title}</span>
                        </div>
                    ))}
                </div>
                <div className="w-full">                             
                      <Row className='pointSaleAre mt-28' gutter={36} >
                      <Col md={6}
                           >
                            <p>Champagne buckets </p>
                            <div className="pointaleItem mt-[10px]">
                                <div className="pointImg">
                                    <img src="/images/image53.webp" />
                                </div>
                            </div>
                        </Col>
                        <Col md={6}
                           >
                            <p>Champagne buckets </p>
                            <div className="pointaleItem mt-[10px]">
                                <div className="pointImg">
                                    <img src="/images/image54.webp" />
                                </div>
                            </div>
                        </Col>
                        <Col md={6}
                           >
                            <p>Champagne buckets </p>
                            <div className="pointaleItem mt-[10px]">
                                <div className="pointImg">
                                    <img src="/images/image55.webp" />
                                </div>
                            </div>
                        </Col>
                        <Col md={6}
                           >
                            <p>Champagne buckets </p>
                            <div className="pointaleItem mt-[10px]">
                                <div className="pointImg">
                                    <img src="/images/image56.webp" />
                                </div>
                            </div>
                        </Col>
                      </Row>
                
                </div>
            </div>
        </>
    )
}

export default PointSales