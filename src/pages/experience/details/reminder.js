import React from 'react'
import { Col, Row } from 'antd';
import ReminderList from './reminderList';
import AddReminder from './addReminder';
const imageUrls = [
    '/images/aperopic.svg',
    '/images/american.svg',
    '/images/ob.svg',
    '/images/joshcab.svg',
    '/images/simi.svg',
    '/images/aperopic.svg',
    '/images/american.svg',
    '/images/ob.svg',
    '/images/joshcab.svg',
    '/images/simi.svg'
];

const Reminder = () => {
    return (
        <>
            <div className="px-2 py-4">
                <div className="flex justify-between items-center md:pr-10">


                    <AddReminder />


                </div>
                <div className="mt-3">
                    <div className="reminderItemBox">
                        <button className="buttonTrash"><img src="/images/trash-gray.svg" />
                        </button>
                        <ReminderList />
                    </div>
                </div>
                <div className="reminderImagBox">
                    <Row gutter={[16, 16]}   >
                        {imageUrls.map((imageUrl, index) => (
                            <Col key={index} className="gutter-row" xs={24} sm={2} md={6} lg={4}  >
                                <div className="reminderImageItem">
                                    <img src={imageUrl} alt={`Image ${index}`} />
                                </div>
                            </Col>
                        ))}
                    </Row>

                </div>
            </div>
        </>
    )
}

export default Reminder