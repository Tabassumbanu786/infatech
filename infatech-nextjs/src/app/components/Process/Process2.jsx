import SectionTitle from "../Common/SectionTitle";
import ProcessCard2 from "./ProcessCard2";

const Process2 = () => {
    return (
            <div className="working-proces-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <SectionTitle
                                    SubTitle="How It Works"
                                    Title="Get your platform live in just 3 simple steps."
                                ></SectionTitle>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="working-process-box before-transprent after-transprent">
                                <ProcessCard2
                                    mainImage="/assets/images/home-3/process-1.png"
                                    Number="01"
                                    Title="Discover What Really Matters"
                                    Content="We don’t jump into code. First, we dig deep—into your business model, bottlenecks, and user needs—to identify the real problem worth solving."
                                ></ProcessCard2>
                            </div>
                        </div>	
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="working-process-box after-transprent">
                                <ProcessCard2
                                    mainImage="/assets/images/home-3/process-2.png"
                                    Number="02"
                                    Title="Craft the Right Solution"
                                    Content="Together, we co-create the ideal flow—clear interfaces, clean logic, and smart functionality. Every screen, every click, with purpose."
                                ></ProcessCard2>
                            </div>
                        </div>	
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="working-process-box before-transprent">
                                <ProcessCard2
                                    mainImage="/assets/images/home-3/process-3.png"
                                    Number="03"
                                    Title="Build It Right. Launch It Fast."
                                    Content="We develop with precision, test with obsession, and launch with your team fully prepped. Then we stay to support and scale."
                                ></ProcessCard2>
                            </div>
                        </div>			
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="working-process-bottom">
                                <p>We are Delivering The Best Customer Experience <span> since 2016</span></p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
    );
};

export default Process2;