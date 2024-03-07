import React, { useState } from 'react';
import { Dropdown, Drawer } from 'antd';
import { CalendarIcon3 } from '../../commonComponents/commonSvg';

const items = [


    {
        label: 'Notes',
        icon: '/images/icon1.svg',
        key: '1',
    },
    {
        label: 'Alarm',
        icon: '/images/icon2.svg',
        key: '2',
    },
    {
        label: 'Pickup',
        icon: '/images/icon3.svg',
        key: '3',
    },
    {
        label: 'Tasting',
        icon: '/images/icon4.svg',
        key: '4',
    },
    {
        label: ' Sample request',
        icon: '/images/icon5.svg',
        key: '5',
    },
    {
        label: 'Reship',
        icon: '/images/icon6.svg',
        key: '6',
    },
    {
        label: 'Allocations',
        icon: '/images/icon7.svg',
        key: '7',
    },
    {
        label: 'Invoice issue',
        icon: '/images/icon8.svg',
        key: '8',
    },
    {
        label: 'Meet',
        icon: '/images/icon9.svg',
        key: '9',
    },
    {
        label: 'Promo',
        icon: '/images/icon10.svg',
        key: '10',
    },
    {
        label: 'Order reminder',
        icon: '/images/icon11.svg',
        key: '11',
    },
    {
        label: ' POS request',
        icon: '/images/icon12.svg',
        key: '12',
    },
   
      
    
 
];

const CalendarDropdown = () => {
    const [visibleDrawer, setVisibleDrawer] = useState({});
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setVisibleDrawer(prevState => ({ ...prevState, [item.key]: true }));
    };

    const handleCloseDrawer = (key) => {
        setVisibleDrawer(prevState => ({ ...prevState, [key]: false }));
    };
    const onClose = () => {
        setVisibleDrawer(false);
    };
    return (
        <>
            <Dropdown
                menu={{
                    items: items.map(item => ({
                        label: (
                            <div onClick={() => handleItemClick(item)} className='listIconCal'>                               
                                <span><img src={item.icon} alt={item.label} /></span>
                                {item.label}
                            </div>
                        ),
                        key: item.key,
                    })),
                }}
                trigger={['click']}
                overlayStyle={{ zIndex: 9999 }}
                overlayClassName="filterProductDropdown addCalendarDrop "
                placement="bottomRight"
            >
                <a onClick={(e) => e.preventDefault()}>
                    <button className='btnUpload'>
                        <CalendarIcon3 /> Add to calendar
                    </button>
                </a>
            </Dropdown>
            {items.map(item => (
                <Drawer
                    key={item.key}                   
                    placement="left"
                    zIndex={999999}                
                    width={397}
                    onClose={() => handleCloseDrawer(item.key)}
                    visible={visibleDrawer[item.key] || false}
                >
                    {item.key === '1' && 
                    <>  
                      <div className="createNsewPopup">
                        <div className="createNew">
                          <div className="w-full">
                            <div className="close cursor-pointer absolute top-4 right-4"  onClick={onClose} >
                              <img src="/images/close-circle.svg" />
                            </div>
                            <h2>Add to Calendar</h2>
                            <div className="popupLink mt-4 mb-6">
                              <label className="label2 flex gap-1"><span><img src="/images/icon1.svg" /></span>Notes</label>
                            </div>
                            <form>
                              <div className="w-full mt-10 md:w-32 selectDate">
                                <label className="label">Select Date</label>
                                <div className=" w-32 ">
                                  <input type="date" className="form_control textBlue font-bold" />
                                </div>
                              </div>

                              <div className="flex my-10 w-full ">
                                <div className="w-32 mr-10">
                                  <label className="label">Start time</label>
                                  <div className="formGroup">
                                    <select className="form_control ">
                                      <option>12:00 PM</option>
                                      <option>01:00 PM</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="w-32">
                                  <label className="label">End time</label>
                                  <div className="formGroup">
                                    <select className="form_control ">
                                      <option>12:00 PM</option>
                                      <option>01:00 PM</option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              <div className="w-full mb-6">
                                <label className="label">Enter information</label>
                                <div className="formGroup">
                                  <textarea className="form_control h-32 " placeholder="Description for your meeting">
                                  </textarea>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="w-full border-t pt-6 pb-5 text-center mt-5">
                            <button className="btn-save  flex items-center justify-center btnSm mx-auto mb-6 " > Save </button>
                           
                          </div>
                        </div>
                      </div>             
                    </>
                    }
                    {item.key === '2' &&
                     <>
                     </>
                    }
                  
                </Drawer>
            ))}
        </>
    );
};

export default CalendarDropdown;
