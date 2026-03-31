import BreadCumb from '../../../components/Common/BreadCumb';
import ProjectDetail from '../../../components/ProjectDetail/ProjectDetail';

const page = ({ params }) => {
  const { slug } = params;

  return (
    <div className='project-detail'>
      {/* <BreadCumb Title="Project Details" /> */}
      <ProjectDetail slug={slug} />
    </div>
  );
};

export default page;