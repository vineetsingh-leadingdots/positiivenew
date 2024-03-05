import {useState} from "react";
import {Link} from "react-router-dom";
const ExperienceCard = ({expeTittle, expeDate, expeContent, expeCount, starImg }) => {
    const [deleteShow, setDeleteShow] = useState(false);
    const handleClick = () => setDeleteShow(!deleteShow);
    return (
        <>
            <Link to="/experience/detail" className="experienceCard">
                <div className="flex justify-between items-baseline">
                    <div className="heading">
                        <h6>{expeTittle}</h6>
                        <p>{expeDate}</p>
                    </div>
                    <button onClick={handleClick}><img
                        src="/images/dots-v.svg" />
                        <div
                            className={deleteShow ? "deletePopup show" : "deletePopup"}>
                            Delete
                        </div>
                    </button>
                </div>
                <p>{expeContent}</p>
                <div className="flex justify-between experiencesDiv">
                    <p>Experiences <span>{expeCount}</span></p>
                    <button><img src={starImg} /></button>
                  
                </div>
            </Link>
        </>
    )
}

export default ExperienceCard