import { Link } from "react-router-dom";
import DeletePopup from "../components/deletePopup";

export const dataSource = [
    {
      key: '1',
      date: "09/24/23",
      Order: 876364,
      Distributor: 'Southern',
      MainSales: 'James Harrison',
      Email: 'james.harrison@gmail.com',
      Cell: '212-120-2910 ',
    },

    {
      key: '2',
      date: "09/24/23",
      Order: 876364,
      Distributor: 'Southern',
      MainSales: 'James Harrison',
      Email: 'james.harrison@gmail.com',
      Cell: '212-120-2910 ',
    },
    {
      key: '3',
      Date: "09/24/23",
      Order: 876364,
      Distributor: 'Southern',
      MainSales: 'James Harrison',
      Email: 'james.harrison@gmail.com',
      Cell: '212-120-2910 ',
    },
    

  ];

  export const columns = [
    {
      title: 'Order Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Order #',
      dataIndex: 'Order',
      key: 'Order',
    },
    {
      title: 'Distributor',
      dataIndex: 'Distributor',
      key: 'Distributor',
    },

    {
      title: 'Main sales rep',
      dataIndex: 'MainSales',
      key: 'MainSales',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    },
    {
      title: 'Cell#',
      dataIndex: 'Cell',
      key: 'Cell',
    },
  ];




  export const dataSourceCart = [
    {
      key: '1',
      Size: "1.0L",
      Qty: "12 cases",
      Price: '$318.37',
      Image:'/images/trash1.webp'
    },

    {
      key: '1',
      Size: "1.0L",
      Qty: "12 cases",
      Price: '$318.37',
      Image:'/images/trash1.webp'
    },
    

  ];

  export const columnsCart = [
    {
      title: 'Size',
      dataIndex: 'Size',
      key: 'Size',
    },

    {
      title: 'Qty',
      dataIndex: 'Qty',
      key: 'Qty',
    },

    {
      title: 'Price',
      dataIndex: 'Price',
      key: 'Price',
    },
    {
      
      dataIndex: 'Image',
      key: 'Image',
      render: (text, record) => (
        <img src={text} alt={record.name}  />      
      ),
    },
  ];




  
  export const OrderHistoryData = [
    {
      key: '1',
      Invoice : "1002341",
      Bottles: "4",
      Cases: '1',
      Date:'May 19, 2023',
      InvoiceTotal:"$4,816.25	",
      OrderPlaced:"Jeffery Wilson	",
      Distributors:"Southern Glazers "      
    },
    {
      key: '1',
      Invoice : "1002341",
      Bottles: "4",
      Cases: '1',
      Date:'May 19, 2023',
      InvoiceTotal:"$4,816.25	",
      OrderPlaced:"Jeffery Wilson	",
      Distributors:"Southern Glazers "      
    },{
      key: '1',
      Invoice : "1002341",
      Bottles: "4",
      Cases: '1',
      Date:'May 19, 2023',
      InvoiceTotal:"$4,816.25	",
      OrderPlaced:"Jeffery Wilson	",
      Distributors:"Southern Glazers "      
    },{
      key: '1',
      Invoice : "1002341",
      Bottles: "4",
      Cases: '1',
      Date:'May 19, 2023',
      InvoiceTotal:"$4,816.25	",
      OrderPlaced:"Jeffery Wilson	",
      Distributors:"Southern Glazers "      
    },{
      key: '1',
      Invoice : "1002341",
      Bottles: "4",
      Cases: '1',
      Date:'May 19, 2023',
      InvoiceTotal:"$4,816.25	",
      OrderPlaced:"Jeffery Wilson	",
      Distributors:"Southern Glazers "      
    },
   
    

  ];

  export const columnOrder = [
    {
      title: 'Invoice #	',
      dataIndex: 'Invoice',
      key: 'Invoice',
    },

    {
      title: 'Bottles',
      dataIndex: 'Bottles',
      key: 'Bottles',
    },

    {
      title: 'Cases',
      dataIndex: 'Cases',
      key: 'Cases',
    },

    {
      title: 'Date	',
      dataIndex: 'Date',
      key: 'Date',
    },

    {
      title: 'Invoice Total',
      dataIndex: 'InvoiceTotal',
      key: 'InvoiceTotal',
    },

    {
      title: 'Order Placed by',
      dataIndex: 'OrderPlaced',
      key: 'OrderPlaced',
    },
    {
      title: 'Distributors',
      dataIndex: 'Distributors',
      key: 'Distributors',
    },
  ];




  
  export const PendingOrderData = [
    {
      key: '1',
      Invoice : "1002341",
      Distributor: "Southern Glazers of New York	",
      Bottles: '1',
      Cases:'5',
      Date:"May 19, 2023",
      Price:"$4,816.25		",
      Comment:"Deliver after 12noon "      
    },
    {
      key: '1',
      Invoice : "1002341",
      Distributor: "Southern Glazers of New York	",
      Bottles: '1',
      Cases:'5',
      Date:"May 19, 2023",
      Price:"$4,816.25		",
      Comment:"Deliver after 12noon "      
    },    {
      key: '1',
      Invoice : "1002341",
      Distributor: "Southern Glazers of New York	",
      Bottles: '1',
      Cases:'5',
      Date:"May 19, 2023",
      Price:"$4,816.25		",
      Comment:"Deliver after 12noon "      
    },    {
      key: '1',
      Invoice : "1002341",
      Distributor: "Southern Glazers of New York	",
      Bottles: '1',
      Cases:'5',
      Date:"May 19, 2023",
      Price:"$4,816.25		",
      Comment:"Deliver after 12noon "      
    },    {
      key: '1',
      Invoice : "1002341",
      Distributor: "Southern Glazers of New York	",
      Bottles: '1',
      Cases:'5',
      Date:"May 19, 2023",
      Price:"$4,816.25		",
      Comment:"Deliver after 12noon "      
    },
    

  ];

  export const columnPendingOrder = [
    {
      title: 'Invoice #	',
      dataIndex: 'Invoice',
      key: 'Invoice',
    },

    {
      title: 'Distributor',
      dataIndex: 'Distributor',
      key: 'Distributor',
    },

    {
      title: 'Bottles',
      dataIndex: 'Bottles',
      key: 'Bottles',
    },

    {
      title: 'Cases	',
      dataIndex: 'Cases',
      key: 'Cases',
    },

    {
      title: 'Date',
      dataIndex: 'Date',
      key: 'Date',
    },

    {
      title: 'Price',
      dataIndex: 'Price',
      key: 'Price',
    },
    {
      title: 'Comment',
      dataIndex: 'Comment',
      key: 'Comment',
    },
  ];








  
  export const SupplierData = [
    {
      key: '1',
      checkBox:<>
       <div className="styled-input-container styled-input--square "><div className="styled-input-single">
        <input type="checkbox" name="fieldset-2" id="blanco"/>
          <label for="blanco">
            </label>
            </div>
            </div>
      </>,
      Name : "Allied Beverage Corporation	",
      Address: "2930 Avenue of Americas, New York, NY 10036	",
      PhoneNumber: '212.345.9201	',
      Division:'Pearl',     
    },
   
    {
      key: '1',
      checkBox:<>
       <div className="styled-input-container styled-input--square "><div className="styled-input-single">
        <input type="checkbox" name="fieldset-2" id="blanco"/>
          <label for="blanco">
            </label>
            </div>
            </div>
      </>,
      Name : "Allied Beverage Corporation	",
      Address: "2930 Avenue of Americas, New York, NY 10036	",
      PhoneNumber: '212.345.9201	',
      Division:'Pearl',     
    },

  ];

  export const ColumnSupplier = [
    {
      title: '',
      dataIndex: 'checkBox',
      key: 'checkBox',
      render: (checkBox) => checkBox,
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },

    {
      title: 'Address',
      dataIndex: 'Address',
      key: 'Address',
    },

    {
      title: 'Phone Number	',
      dataIndex: 'PhoneNumber',
      key: 'PhoneNumber',
    },

    {
      title: 'Division	',
      dataIndex: 'Division',
      key: 'Division',
    },

   
  ];



  
  export const OrderHistoryData2 = [
    {
      key: '1',
      SKU : "1002341",
      Size: "750 ML",
      Name: 'Absolut Vodka	',
      Bottles:'8',
      Cases:"11	",
      Price:"$1,023.29",
      Comment:"Deal of the month - October "      
    },
    {
      key: '1',
      SKU : "1002341",
      Size: "750 ML",
      Name: 'Absolut Vodka	',
      Bottles:'8',
      Cases:"11	",
      Price:"$1,023.29",
      Comment:"Deal of the month - October "      
    },
    {
      key: '1',
      SKU : "1002341",
      Size: "750 ML",
      Name: 'Absolut Vodka	',
      Bottles:'8',
      Cases:"11	",
      Price:"$1,023.29",
      Comment:"Deal of the month - October "      
    },
    {
      key: '1',
      SKU : "1002341",
      Size: "750 ML",
      Name: 'Absolut Vodka	',
      Bottles:'8',
      Cases:"11	",
      Price:"$1,023.29",
      Comment:"Deal of the month - October "      
    },
    {
      key: '1',
      SKU : "1002341",
      Size: "750 ML",
      Name: 'Absolut Vodka	',
      Bottles:'8',
      Cases:"11	",
      Price:"$1,023.29",
      Comment:"Deal of the month - October "      
    },
    {
      key: '1',
      SKU : "1002341",
      Size: "750 ML",
      Name: 'Absolut Vodka	',
      Bottles:'8',
      Cases:"11	",
      Price:"$1,023.29",
      Comment:"Deal of the month - October "      
    },
   
    

  ];

  export const columnOrder2 = [
    {
      title: 'SKU',
      dataIndex: 'SKU',
      key: 'SKU',
    },

    {
      title: 'Size',
      dataIndex: 'Size',
      key: 'Size',
    },

    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },

    {
      title: 'Bottles	',
      dataIndex: 'Bottles',
      key: 'Bottles',
    },

    {
      title: 'Cases',
      dataIndex: 'Cases',
      key: 'Cases',
    },

    {
      title: 'Price',
      dataIndex: 'Price',
      key: 'Price',
    },
    {
      title: 'Comment',
      dataIndex: 'Comment',
      key: 'Comment',
    },
  ];



  
  export const OrderHistoryAllData = [
    {
      key: '1',
      Customer : "1002341",
      BusinessName: "750 ML",
      Bottles: '10',
      Cases:'8',
      DateOrdered:"May 19, 2023	",
      InvoiceAmount:"$1,023.29",
      OrderedBy:"Jeffery Wilson "      
    },
    {
      key: '1',
      Customer : "1002341",
      BusinessName: "750 ML",
      Bottles: '10',
      Cases:'8',
      DateOrdered:"May 19, 2023	",
      InvoiceAmount:"$1,023.29",
      OrderedBy:"Jeffery Wilson "      
    },
    {
      key: '1',
      Customer : "1002341",
      BusinessName: "750 ML",
      Bottles: '10',
      Cases:'8',
      DateOrdered:"May 19, 2023	",
      InvoiceAmount:"$1,023.29",
      OrderedBy:"Jeffery Wilson "      
    },
    {
      key: '1',
      Customer : "1002341",
      BusinessName: "750 ML",
      Bottles: '10',
      Cases:'8',
      DateOrdered:"May 19, 2023	",
      InvoiceAmount:"$1,023.29",
      OrderedBy:"Jeffery Wilson "      
    },
   
    

  ];

  export const columnOrderAll = [
    {
      title: 'Customer #	',
      dataIndex: 'Customer',
      key: 'Customer',
    },

    {
      title: 'Business name	',
      dataIndex: 'BusinessName',
      key: 'BusinessName',
    },

    {
      title: 'Bottles',
      dataIndex: 'Bottles',
      key: 'Bottles',
    },

    {
      title: 'Cases	',
      dataIndex: 'Cases',
      key: 'Cases',
    },

    {
      title: 'Date ordered	',
      dataIndex: 'DateOrdered',
      key: 'DateOrdered',
    },

    {
      title: 'Invoice amount	',
      dataIndex: 'InvoiceAmount',
      key: 'InvoiceAmount	',
    },
    {
      title: 'Ordered by',
      dataIndex: 'OrderedBy',
      key: 'OrderedBy',
    },
  ];




  export const BrandData = [
    {
      key: '1',
      BrandName: 'Mike',
      Actions: <>
      <div className="flex gap-1">
      <Link to="/brand/add" className="actionButton"><img src="/images/edit.png"/></Link>
      <DeletePopup/>
      </div>
      </>,   
    },
    
   
  ];
  
  export const BrandColumns = [
    {
      title: 'Brand Name',
      dataIndex: 'BrandName',
      key: 'BrandName',
    },
    {
      title: 'Actions',
      dataIndex: 'Actions',
      key: 'Actions',
    },
    
  ];