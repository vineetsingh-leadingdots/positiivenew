import React from 'react'
import ContactView from './contactView'
import Goals from './goals'
import Notes from './notes'
import UpcomingEvents from './upcomingEvents'

const AccountDetails = () => {
    return (
        <>
            <div className="px-2 py-4">
                <div className="accountItem">
                    <div className="flex justify-between mb-4">
                        <p>License # 1030089</p>
                        <p>License type OP</p>
                        <p>License issued 03/15/2023</p>
                        <p>License expires 03/15/2027</p>
                    </div>
                    <div className="accountItemContent">
                        <p>Deliver Times: Mon- Wed - 1pm - 4pm</p>
                        <p>Deliver instructions : Take order to green colored door in the
                            back of the store, code 2324 to open</p>
                    </div>
                </div>
             <ContactView/>
             <Goals/>
             <Notes/>
             <UpcomingEvents/>
            </div>
        </>
    )
}

export default AccountDetails