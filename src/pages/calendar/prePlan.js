
import { Row, Col } from "antd";
import FilterDropdown from "./customerStep/filterDropdown";
const PrePlan = () => {
  
  return (
   <>  <Row gutter={[8, 8]}>
   <Col sm={24}>
       <div className="filterProductItem mt-6">
           <div className="filterHead relative">
               <p>LaNova Bistro</p>
           </div>
           <div className="py-5 px-4">
               <div className="mb-4 filterProductList active ">
                   <p>Three Taverns - Night on Ponce</p>
                   <div className="flex items-center afterAddIcon">
                       <img src="/images/smile.svg" />
                       <img src="/images/smile.svg" />
                       <span className="editIcon"><img src="/images/fluent_clock.svg"/> </span>
                       <FilterDropdown />
                   </div>
               </div>
               <div className="presentAddList">
                   <div className="flex items-center">
                       <span> <img src="/images/smile.svg" className="mr-6" /></span>
                       <p> John Loved the new wine, said it was breathtaking</p>
                   </div>
                   <img src="/images/trash-gray2.svg" />
               </div>
               <div className="presentAddList">
                   <div className="flex items-center">
                       <span>  <img src="/images/smile.svg" className="mr-6" /></span>
                       <p> John Loved the new wine, said it was breathtaking</p>
                   </div>
                   <img src="/images/trash-gray2.svg" />
               </div>
               <div className="presentAddList">
                   <div className="flex items-center">
                       <span > <img src="/images/editbg.svg" className="mr-6" /></span>
                       <p> John Loved the new wine, said it was breathtaking</p>
                   </div>
                   <img src="/images/trash-gray2.svg" />
               </div>
               <div className=" filterProductList active">
                   <p>sxas</p>
            
               </div>

           </div>
       </div>
   </Col>
   <Col sm={24}>
       <div className="filterProductItem ">
           <div className="filterHead relative">
               <p>LaNova Bistro</p>
             
           </div>
      
       </div>
   </Col>
   </Row>

   </>
  )
}

export default PrePlan