// import serviceData from '../Data/service-detail.json';
import serviceData from '../../../Data/service-detail.json';

import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
export default function Page({ params }) {
  const service = serviceData.find((item) => item.id === params.id);

  if (!service) return <div>Service Not Found</div>;

  return (
    <div className="service-details">
      {/* <BreadCumb Title={service.title} /> */}
      <ServiceDetail service={service} />
    </div>
  );
}
