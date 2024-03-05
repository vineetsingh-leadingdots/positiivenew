import React from 'react'

const ContactView = () => {
  return (
  <>
   <div className="contactView">
                    <div className="contactList">
                        <h3><img src="/images/group.svg" />Contacts <button className="ml-1">
                            <img src="/images/create.svg" /></button></h3>
                        <div className="flex xl:gap-8 flex-wrap md:flex-nowrap">
                            <div className="contactListView">
                                <h4>Mogadi Singh- Brooklyn, NYC, Bronx Rep</h4>
                                <p>p: 212.432.5432</p>
                                <p>e: MogadiS@Pernodrcard.com</p>
                                <div className="bestTime">
                                    <h5>Best time to meet</h5>
                                    <p>Mon 4pm to 9pm </p>
                                    <p>Tue 2pm to6pm </p>
                                    <p>Wed 4pm to 9pm </p>
                                    <p>Thur 11am to 6pm </p>
                                </div>
                                <div className="notes">
                                    <h5>Notes</h5>
                                    <p>Willing to take all placements and wants to do a
                                        Promo event every week for the 3rd quarter</p>

                                </div>

                            </div>
                            <div className="contactListView">
                                <h4>Mogadi Singh- Brooklyn, NYC, Bronx Rep</h4>
                                <p>p: 212.432.5432</p>
                                <p>e: MogadiS@Pernodrcard.com</p>
                                <div className="bestTime">
                                    <h5>Best time to meet</h5>
                                    <p>Mon 4pm to 9pm </p>
                                    <p>Tue 2pm to6pm </p>
                                    <p>Wed 4pm to 9pm </p>
                                    <p>Thur 11am to 6pm </p>
                                </div>
                                <div className="notes">
                                    <h5>Notes</h5>
                                    <p>Loves Gin and Tonic drinks. Wants more gin cocktail
                                        ideas</p>
                                </div>
                            </div>
                            <div className="contactListView">
                                <h4>Mogadi Singh- Brooklyn, NYC, Bronx Rep</h4>
                                <p>p: 212.432.5432</p>
                                <p>e: MogadiS@Pernodrcard.com</p>
                                <div className="bestTime">
                                    <h5>Best time to meet</h5>
                                    <p>Mon 4pm to 9pm </p>
                                    <p>Tue 2pm to6pm </p>
                                    <p>Wed 4pm to 9pm </p>
                                    <p>Thur 11am to 6pm </p>
                                </div>
                                <div className="notes">
                                    <h5>Notes</h5>
                                    <p>Very particular about bills being paid on time. Needs
                                        weekly invoice statements sent to her</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
  </>
  )
}

export default ContactView