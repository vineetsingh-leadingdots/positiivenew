import { Link } from "react-router-dom";
import DeletePopup from "../components/deletePopup";
import AssignDivisonPopup from "../pages/salesPersons/assignDivison";

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
      <Link to="/brand/add" className="actionButton"><i className="fa fa-pencil"/></Link>
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


  
  export const SupplierAdminData = [
    {
      key: '1',
      SupplierName: 'Mike',
      Email: 'supplier1@yopmail.com',
      Actions: <>
      <div className="flex gap-1">
      <Link to="/supplier/add" className="actionButton"><i className="fa fa-pencil"/></Link>
      <Link to="/supplier/view" className="actionButton"><i className="fa fa-eye"/></Link>
      <DeletePopup/>
      </div>
      </>,   
    },    
    {
      key: '2',
      SupplierName: 'Mike',
      Email: 'supplier1@yopmail.com',
      Actions: <>
      <div className="flex gap-1">
      <Link to="/supplier/add" className="actionButton"><i className="fa fa-pencil"/></Link>
      <Link to="/supplier/view" className="actionButton"><i className="fa fa-eye"/></Link>
      <DeletePopup/>
      </div>
      </>,   
    },  
   
  ];
  
  export const SupplierAdminColumns = [
    {
      title: 'Supplier Name',
      dataIndex: 'SupplierName',
      key: 'SupplierName',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    },
    {
      title: 'Actions',
      dataIndex: 'Actions',
      key: 'Actions',
    },
    
  ];



  
  export const SalesPersonData = [
    {
      key: '1',
      Name: 'Mike',
      Email: 'supplier1@yopmail.com',
      Actions: <>
      <div className="flex gap-1">
      <Link to="/sales-person/add" className="actionButton"><i className="fa fa-pencil"/></Link>
      <AssignDivisonPopup/>
      <DeletePopup/>
      </div>
      </>,   
    },    
    {
      key: '1',
     Name: 'Mike',
      Email: 'supplier1@yopmail.com',
      Actions: <>
      <div className="flex gap-1">
      <Link to="/sales-person/add" className="actionButton"><i className="fa fa-pencil"/></Link>
      <AssignDivisonPopup/>
      <DeletePopup/>
      </div>
      </>,   
    },    
   
  ];
  
  export const SalesPersonColumns = [
    {
      title: ' Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    },
    {
      title: 'Actions',
      dataIndex: 'Actions',
      key: 'Actions',
    },
    
  ];

  
  export const ProductListData = [
    {
      key: '1',
      Name: 'Mike',
      CreatedDate: '12/03/20204',
      Actions: <>
      <div className="flex gap-1">
      <Link to="/product/add" className="actionButton"><i className="fa fa-pencil"/></Link>
      <DeletePopup/>
      </div>
      </>,   
    },    
    {
      key: '1',
     Name: 'Mike',
     CreatedDate: '12/03/20204',
      Actions: <>
      <div className="flex gap-1">
      <Link to="/product/add" className="actionButton"><i className="fa fa-pencil"/></Link>     
      <DeletePopup/>
      </div>
      </>,   
    },    
   
  ];
  
  export const ProductColumn = [
    {
      title: ' Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Created sDate',
      dataIndex: 'CreatedDate',
      key: 'CreatedDate',
    },
    {
      title: 'Actions',
      dataIndex: 'Actions',
      key: 'Actions',
    },
    
  ];


  
  export const NewsData = [
    {
      key: '1',
      NewsUrl: 'www.333333.com',
      Actions: <>
      <div className="flex gap-1">
      <Link to="/news/add" className="actionButton"><i className="fa fa-pencil"/></Link>
      <DeletePopup/>
      </div>
      </>,   
    },    
     
   
  ];
  
  export const NewsColumn = [
    {
      title: ' News Url',
      dataIndex: 'NewsUrl',
      key: 'NewsUrl',
    },
   
    {
      title: 'Actions',
      dataIndex: 'Actions',
      key: 'Actions',
    },
    
  ];

  
  export const QuizData = [
    {
      key: '1',
      QuizName: 'bjjn nskxk',
      Actions: <>
      <div className="flex gap-1">
      <Link to="/quiz/add" className="actionButton"><i className="fa fa-pencil"/></Link>
      <DeletePopup/>
      </div>
      </>,   
    },    
     
   
  ];
  
  export const QuizColumn = [
    {
      title: ' Quiz Name',
      dataIndex: 'QuizName',
      key: 'QuizName',
    },
   
    {
      title: 'Actions',
      dataIndex: 'Actions',
      key: 'Actions',
    },
    
  ];


  export const FeedbackData = [
    {
      key: '1',
      FeedbackQuestion: 'Feedback Question',
      QuestionType:"yes",
      Actions: <>
      <div className="flex gap-1">
      <Link to="/feedback/add" className="actionButton"><i className="fa fa-pencil"/></Link>
      <DeletePopup/>
      </div>
      </>,   
    },    
     
   
  ];
  
  export const FeedbackColumn = [
    {
      title: 'Feedback Question',
      dataIndex: 'FeedbackQuestion',
      key: 'FeedbackQuestion',
    },
    {
      title: 'Question Type',
      dataIndex: 'QuestionType',
      key: 'QuestionType',
    },
    {
      title: 'Actions',
      dataIndex: 'Actions',
      key: 'Actions',
    },
    
  ];



  export const ExperenceData = [
    {
      key: '1',
      ExperienceName: 'ExperienceName',
      AddedBy:"customer1",
      Actions: <>
      <div className="flex gap-1">
      <Link to="/experience/add" className="actionButton"><i className="fa fa-pencil"/></Link>
      <DeletePopup/>
      </div>
      </>,   
    },    
     
   
  ];
  
  export const ExperenceColumn = [
    {
      title: 'Experience Name',
      dataIndex: 'ExperienceName',
      key: 'ExperienceName',
    },
    {
      title: 'Added By (Customer)',
      dataIndex: 'AddedBy',
      key: 'AddedBy',
    },
    {
      title: 'Actions',
      dataIndex: 'Actions',
      key: 'Actions',
    },
    
  ];
  
  export const DivisionData = [
    {
      key: '1',
      DivisionName: 'DivisionName',     
      Actions: <>
      <div className="flex gap-1">
      <Link to="/division/add" className="actionButton"><i className="fa fa-pencil"/></Link>
      <DeletePopup/>
      </div>
      </>,   
    },  
  ];
  
  export const DivisionColumn = [
    {
      title: 'Division Name',
      dataIndex: 'DivisionName',
      key: 'DivisionName',
    },
   
    {
      title: 'Actions',
      dataIndex: 'Actions',
      key: 'Actions',
    },
    
  ];


  
  export const TransactionData = [
    {
      key: '1',
      User: 'DivisionName',     
      Company:'leadingdots',
      IP:'100.250255.2636',
      Event:'-',
      Action:'-',
      CreatedAt:'12/03/2024',
      
    },  
  ];
  
  export const TransactionColumn = [
    {
      title: 'User',
      dataIndex: 'User',
      key: 'User',
    },   
    {
      title: 'Company',
      dataIndex: 'Company',
      key: 'Company',
    },
    
    {
      title: 'IP',
      dataIndex: 'IP',
      key: 'IP',
    },   
    {
      title: 'Event',
      dataIndex: 'Event',
      key: 'Event',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
    },
    {
      title: 'Created At',
      dataIndex: 'CreatedAt',
      key: 'CreatedAt',
    },
  ];