import React from 'react'

const Award = () => {
    return (
        <>
            <div className="tabsSec pt-7">
            <div className="w-full awardArea">
                    <div className="w-full flex justify-center awardBox">
                      <div className="awardImage">
                        <img src="/images/award3.webp" />
                      </div>
                      <div className="awardImage">
                        <img src="/images/award2.webp" />
                      </div>
                      <div className="awardImage">
                        <img src="/images/award.webp" />
                      </div>
                    </div>
                    <div className="w-full mt-11 awardContent">
                      <h2>Accolades from the experts- </h2>
                      <p>“ arguably the best hand made bourbon of all time”- Paul Pacult</p>
                      <p>“ There is not better bourbon, period ! ”- Anthony Dias Blue</p>
                    </div>
                  </div>
            </div>
        </>
    )
}

export default Award