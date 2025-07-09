import serviceData from '@/app/Data/service-detail.json';
import ServiceDetail from '@/app/components/ServiceDetail/ServiceDetail';
import BreadCumb from '../../components/Common/BreadCumb
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
