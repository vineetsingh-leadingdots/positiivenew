import React from "react";
  
  export const CustomerData = [
    {
      key: '1',
      checkBox:<>
       <div className="styled-input-container styled-input--square "><div className="styled-input-single">
        <input type="checkbox" name="fieldset-2" id="blanco"/>
          {/* <label for="blanco">
            </label> */}
            </div>
            </div>
      </>,
      Account : "2342552",
      BusinessName: "LaNova Bistro",
      Address: '2930 Avenue of Americas, New York, NY 10036',
      Neighborhood:'Flushing',     
    },
   
    {
      key: '1',
      checkBox:<>
       <div className="styled-input-container styled-input--square "><div className="styled-input-single">
        <input type="checkbox" name="fieldset-2" id="blanco"/>
          {/* <label for="blanco">
            </label> */}
            </div>
            </div>
      </>,
      Account : "2342552",
      BusinessName: "LaNova Bistro",
      Address: '2930 Avenue of Americas, New York, NY 10036',
      Neighborhood:'Flushing',     
    },
    {
      key: '1',
      checkBox:<>
       <div className="styled-input-container styled-input--square "><div className="styled-input-single">
        <input type="checkbox" name="fieldset-2" id="blanco"/>
          {/* <label for="blanco">
            </label> */}
            </div>
            </div>
      </>,
      Account : "2342552",
      BusinessName: "LaNova Bistro",
      Address: '2930 Avenue of Americas, New York, NY 10036',
      Neighborhood:'Flushing',     
    },
    {
      key: '1',
      checkBox:<>
       <div className="styled-input-container styled-input--square "><div className="styled-input-single">
        <input type="checkbox" name="fieldset-2" id="blanco"/>
          {/* <label for="blanco">
            </label> */}
            </div>
            </div>
      </>,
      Account : "2342552",
      BusinessName: "LaNova Bistro",
      Address: '2930 Avenue of Americas, New York, NY 10036',
      Neighborhood:'Flushing',     
    },
    {
      key: '1',
      checkBox:<>
       <div className="styled-input-container styled-input--square "><div className="styled-input-single">
        <input type="checkbox" name="fieldset-2" id="blanco"/>
          {/* <label for="blanco">
            </label> */}
            </div>
            </div>
      </>,
      Account : "2342552",
      BusinessName: "LaNova Bistro",
      Address: '2930 Avenue of Americas, New York, NY 10036',
      Neighborhood:'Flushing',     
    },
    {
      key: '1',
      checkBox:<>
       <div className="styled-input-container styled-input--square "><div className="styled-input-single">
        <input type="checkbox" name="fieldset-2" id="blanco"/>
          {/* <label for="blanco">
            </label> */}
            </div>
            </div>
      </>,
      Account : "2342552",
      BusinessName: "LaNova Bistro",
      Address: '2930 Avenue of Americas, New York, NY 10036',
      Neighborhood:'Flushing',     
    },

  ];

  export const ColumnCustomerData = [
    {
      title: '',
      dataIndex: 'checkBox',
      key: 'checkBox',
      render: (checkBox) => checkBox,
    },
    {
      title: 'Account #',
      dataIndex: 'Account',
      key: 'Account',
      sorter: (a, b) => a.Neighborhood.localeCompare(b.Neighborhood),
    },

    {
      title: 'Business Name',
      dataIndex: 'BusinessName',
      key: 'BusinessName',
      sorter: (a, b) => a.Neighborhood.localeCompare(b.Neighborhood),
    },

    {
      title: 'Address	',
      dataIndex: 'Address',
      key: 'Address',
      sorter: (a, b) => a.Neighborhood.localeCompare(b.Neighborhood),
    },

    {
      title: 'Neighborhood	',
      dataIndex: 'Neighborhood',
      key: 'Neighborhood',
      sorter: (a, b) => a.Neighborhood.localeCompare(b.Neighborhood),
    },

   
  ];
