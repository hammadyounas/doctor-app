import React, { useState } from 'react'
import { Modal } from 'antd';

// { handleLocation, healthData,getNextData }
const Education = ({ handleLocation, healthData,getNextData,historyArray }) => {
    const initialState = {
        visible: false
    };
    const [data, setData] = useState(initialState)

    const handleModal = () => {
        setData({
            ...data,
            visible: !data.visible,
        });
    };

    const callNextPage = () =>{
        // event.preventDefault();
        getNextData(`${healthData.page}`)
    }

    return (
        <article
            className="content education gray-bg jspScrollable"
            id="chaptereducation"
            onClick={() => handleLocation("#chaptereducation")}>
            <div className="inner">
                <h2>Health Records</h2>
                <div className="title-divider"></div>
                {/* <!-- <h3>Just My Education</h3> */}

                <div className="education-con">
                    <div className="container-sub">
                        <div className="full-divider"></div>
                        <div className="row">
                            {historyArray && historyArray.length ? historyArray.map((el, inx) => {
                                return (
                                    <div key={inx}>
                                        <Modal
                                            title="Report"
                                            visible={data.visible}
                                            onCancel={() => handleModal()}
                                        >
                                            <div>
                                                <p>
                                                    {el.report ? el.report : ''}
                                                </p>
                                            </div>
                                        </Modal>
                                        <div className="education-details">
                                            <div className="col-6 margin-bottom50 margin-top50">
                                                <div className="col-3 icon-block"><i className={`fa ${el.icon ? el.icon : ''}`}></i></div>
                                                <div className="flot-left">
                                                    <h5>{el.type ? el.type : ''}</h5>
                                                    <h4>{el.diagnosis ? el.diagnosis : ''}</h4>
                                                    <span>{el.date ? el.data : ''}</span>
                                                </div>
                                            </div>
                                            <div className="col-6 margin-bottom50 margin-top50 no-margin-top">
                                                <div style={{ marginBottom: '20px' }}>
                                                    {el.report ? el.report.length > 237 ? `${el.report.slice(0, 237)}...` : el.report : ''}
                                                    {el.report.length > 30 ? <span className="moreBtn" onClick={handleModal} >more</span> : null}
                                                </div>
                                                <a href={el.filepath ? el.filepath : '#'} className="button" target="_blank">View record</a>
                                            </div>
                                        </div>
                                        <div className="full-divider"></div>
                                    </div>
                                )
                            })
                            :
                            <div style={{textAlign:'center',padding:'15px 0',fontWeight:'bold'}}>
                                <p>Unable to load Health Records, please try again!</p>
                            </div>
                        }
                        </div>
                        {
                            healthData && healthData.next_page == true ? 
                            <div style={{textAlign:'center',cursor:'pointer'}}>
                                <button onClick={callNextPage} className="button">Load More</button>
                            </div>
                            :
                            <div></div>
                        }
                    </div>
                </div>
            </div>
        </article>

    )
}

export default Education
