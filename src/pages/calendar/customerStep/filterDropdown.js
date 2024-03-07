import React from 'react';
import { Dropdown, Collapse } from 'antd';
import { MoreIcon } from '../../../commonComponents/commonSvg';

const { Panel } = Collapse;


const items = [
    { 
        label: (
            <>
                <span> 
                    <img alt="clock" src="/images/reaction.svg" />
                    Customer reaction
                </span>
            </>
        ),
        key: '0',
        children: <>
          <div className='w-full'>
            <img src='/images/smilie.svg'/>
          </div>
        </>,
    },
    { 
        label: (
            <>
                <span> 
                    <img alt="clock" src="/images/clock.svg" />
                    Set visit time 
                </span>
            </>
        ),
        key: '1',
        children: <p>Content of panel 1</p>,
    },
    {
        label: (
            <>
                <span>
                     <img alt={'notes'} src="/images/notes2.svg" />
                    Add notes
                </span>
            </>
        ),
        key: '2',
        children: <p>Content of panel 1</p>,
    },
    {
        label: (
            <>
                <span>
                    <img alt={'people'} src="/images/people-circle.svg" width="16" />
                    View profile
                </span>
            </>
        ),
        key: '3',
        children: <p>Content of panel 1</p>,
    },
    {
        label: (
            <>
                <span>
                    <img alt={'trash'} src="/images/bi_trash.svg" />
                    Remove customer
                </span>
            </>
        ),
        key: '4',
        children: <p>Content of panel 1</p>,
    },
    {
        label: (
            <>
                <span>
                    <img alt={'replace'} src="/images/replace.svg" />
                    Replace customer
                </span>
            </>
        ),
        key: '5',
        children: <p>Content of panel 1</p>,
    },
];

const FilterDropdown = () => (

    
  <Dropdown
    overlay={(
      <Collapse accordion  style={{ border: 'none' } }>
        {items.map(item => (
          <Panel header={item.label} key={item.key}>
            {item.children}
          </Panel>
        ))}
      </Collapse>
    )}
    trigger={['click']}
    overlayStyle={{ zIndex: 9999 }}
    overlayClassName="filterProductDropdown"
    placement="bottomRight"
  >
    <a href="/" onClick={e => e.preventDefault()}>
      <button>
        <MoreIcon />
      </button>
    </a>
  </Dropdown>
);

export default FilterDropdown;
