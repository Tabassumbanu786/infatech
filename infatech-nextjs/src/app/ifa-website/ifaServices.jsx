import Image from 'next/image';
import data from '../Data/ifaservice.json';
import SectionTitle from '../components/Common/SectionTitle';

const ifaServices = () => {
    return (
        <div className="service-area style-two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                    SubTitle="SOLUTEK SERVICES"
                                    Title="A complete solution that handles all the technical details so you can focus on your clients"
                                ></SectionTitle>
                        </div>
                    </div>
                </div>
                <div className="row">
                {data.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                        <div className="single-service-box">
                            <div className="service-box-inner">
                                <div className="service-content">
                                    <h4 className="service-title">{item.title}</h4>
                                    <p className="service-des">{item.desc}
                                    </p>
                                </div>
                                <div className="service-icon">
                                    <Image src={item.img} alt="img" width={34} height={34}   />
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ifaServices;