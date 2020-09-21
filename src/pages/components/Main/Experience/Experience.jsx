import React from 'react'

const Experience = ({ handleLocation, healthRecords }) => {
    return (
        <article
            className="content experience white-bg"
            id="chapterexperience"
            onClick={() => handleLocation("#chapterexperience")}>
            <div className="inner">
                <h2>স্বাস্থ্যবই</h2>
                <div className="title-divider"></div>
                <h3>আপনার স্বাস্থ্যবই </h3>
                <p>হেলথ-ডাটা গুলো সযত্নে গোছালো থাকবে, সেগুলোর নিয়মিত আপডেট হবে, ২৪/৭ একসেসিবল হবে| আরো পাবেন আপনার
              স্বাস্থ্য সম্পর্কিত প্রয়োজনীয় তথ্য</p>
                <div className="full-divider"></div>
                <div className="experience-con">
                    <div className="container-sub">
                        <div className="row">
                            <div className="experience-details">
                                <div className="col-4 margin-bottom50 margin-top50">
                                    <div className="col-3 icon-block"></div>
                                    <div className="flot-left">
                                        <h4>Allergy Info</h4>
                                        <h5>[ Food or Medicinal ]</h5>
                                    </div>
                                </div>
                                <div className="col-8 margin-bottom50 margin-top50 no-margin-top">
                                    <div className="about-con">
                                        <ul>
                                            <li><strong>DRUGS</strong> {healthRecords && healthRecords.allergy && healthRecords.allergy.medicinal}</li>
                                            <li><strong>FOOD</strong> {healthRecords && healthRecords.allergy && healthRecords.allergy.food}</li>
                                            <li><strong>SENSITIVITY</strong> {healthRecords && healthRecords.allergy && healthRecords.allergy.sensitivity}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="full-divider"></div>
                            <div className="experience-details">
                                <div className="col-4 margin-bottom50 margin-top50">
                                    <div className="flot-left">
                                        <h4>Treatments</h4>
                                        <h5>[ Acute / Current ]</h5>
                                    </div>
                                </div>
                                <div className="col-8 margin-bottom50 margin-top50 no-margin-top">
                                    <div className="about-con">
                                        <ul>
                                            <li><strong>Acute</strong> {healthRecords && healthRecords.active_discontinued_treatments ? healthRecords.active_discontinued_treatments.active : ''}</li>
                                            <li><strong>Current</strong> {healthRecords && healthRecords.active_discontinued_treatments ? healthRecords.active_discontinued_treatments.repeat_prescription : ''}</li>
                                            <li><strong>Past</strong> {healthRecords && healthRecords.active_discontinued_treatments ? healthRecords.active_discontinued_treatments.past : ''}</li>
                                            <li><strong>Change of Drug</strong> {healthRecords && healthRecords.active_discontinued_treatments ? healthRecords.active_discontinued_treatments.change_of_drug : ''}</li>
                                            <li><strong>Other</strong> {healthRecords && healthRecords.active_discontinued_treatments ? healthRecords.active_discontinued_treatments.other : ''}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="full-divider"></div>
                            <div className="experience-details">
                                <div className="col-4 margin-bottom50 margin-top50">
                                    <div className="flot-left">
                                        <h4>Diseases</h4>
                                        <h5>[ Active & Past ]</h5>
                                    </div>
                                </div>
                                <div className="col-8 margin-bottom50 margin-top50 no-margin-top">
                                    <div className="about-con">
                                        <ul>
                                            <li><strong>Active</strong> {healthRecords && healthRecords.active_past_diseases ? healthRecords.active_past_diseases.active : ''}</li>
                                            <li><strong>Past</strong> {healthRecords && healthRecords.active_past_diseases ? healthRecords.active_past_diseases.past : ''}</li>
                                            <li><strong>Events</strong> {healthRecords && healthRecords.active_past_diseases ? healthRecords.active_past_diseases.event : ''}</li>
                                            <li><strong>Deformity</strong> {healthRecords && healthRecords.active_past_diseases ? healthRecords.active_past_diseases.deformity : ''}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="full-divider"></div>
                            <div className="experience-details">
                                <div className="col-4 margin-bottom50 margin-top50">
                                    <div className="flot-left">
                                        <h4>Family History</h4>
                                        <h5>[ Disease Trend ]</h5>
                                    </div>
                                </div>
                                <div className="col-8 margin-bottom50 margin-top50 no-margin-top">
                                    <div className="about-con">
                                        {healthRecords && healthRecords.risk_factors ? healthRecords.risk_factors.family_history : ''}
                                    </div>
                                    <div className="about-con">{healthRecords && healthRecords.risk_factors ? healthRecords.risk_factors.lifestyle : ''}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Experience
