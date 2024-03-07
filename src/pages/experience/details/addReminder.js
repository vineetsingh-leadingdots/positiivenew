import React from 'react';
import { Dropdown } from 'antd';



const items = [

    {
        label: (
            <>
                <input type="checkbox" />
                <label>
                    <span>  <img src="/images/icon1.svg" /></span>
                    Notes
                </label>

            </>
        ),
        key: '6',
    },
    {
        label: (
            <>
                <input type="checkbox" />
                <label>
                    <span> <img src="/images/icon2.svg" /></span>
                    Alarm
                </label>
            </>
        ),
        key: '7',
    },
    {
        label: (
            <>
                <input type="checkbox" />
                <label>
                    <span> <img src="/images/icon3.svg" /></span>
                    Pickup
                </label>
            </>
        ),
        key: '8',
    },
    {
        label: (
            <>
                <input type="checkbox" />
                <label>
                    <span> <img src="/images/icon4.svg" /></span>
                    Tasting
                </label>
            </>
        ),
        key: '9',
    },
    {
        label: (
            <>
                <input type="checkbox" />
                <label>
                    <span> <img src="/images/icon5.svg" /></span>
                    Sample request
                </label>
            </>
        ),
        key: '10',
    },
    {
        label: (
            <>
                <input type="checkbox" />
                <label>
                    <span> <img src="/images/icon6.svg" /></span>
                    Reship
                </label>
            </>
        ),
        key: '11',
    },
    {
        label: (
            <>
                <input type="checkbox" />
                <label>
                    <span> <img src="/images/icon7.svg" /></span>
                    Allocations
                </label>
            </>
        ),
        key: '12',
    },
    {
        label: (
            <>
                <input type="checkbox" />
                <label>
                    <span> <img src="/images/icon8.svg" /></span>
                    Invoice issue
                </label>
            </>
        ),
        key: '13',
    },
    {
        label: (
            <>
                <input type="checkbox" />
                <label>
                    <span> <img src="/images/icon9.svg" /></span>
                    Meet
                </label>
            </>
        ),
        key: '14',
    },
    {
        label: (
            <>
                <input type="checkbox" />
                <label>
                    <span> <img src="/images/icon10.svg" /></span>
                    Promo
                </label>
            </>
        ),
        key: '15',
    },
    {
        label: (
            <>
                <input type="checkbox" />
                <label>
                    <span> <img src="/images/icon11.svg" /></span>
                    Order reminder
                </label>
            </>
        ),
        key: '16',
    },
    {
        label: (
            <>
                <input type="checkbox" />
                <label>
                    <span> <img src="/images/icon12.svg" /></span>
                    POS request
                </label>
            </>
        ),
        key: '17',
    },
];

const AddReminder = () => (
    <Dropdown
        menu={{ items }}
        trigger={['click']}
        overlayStyle={{ zIndex: 9999 }}
        overlayClassName="filterProductDropdown createNewDropDown  addReminder "

    >
        <a onClick={(e) => e.preventDefault()}>
        <div className="flex gap-1 relative items-center ">
            <img src="/images/add.svg" />
            <h5 className="textBlue font-medium">Add</h5>
        </div>
        </a>
    </Dropdown>
);

export default AddReminder;