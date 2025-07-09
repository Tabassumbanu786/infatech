// src/app/(defaultLayout)/team/team-details/[slug]/page.jsx

import BreadCumb from '../../components/Common/BreadCumbimport TeamDetail from '@/app/components/TeamDetail/TeamDetail';
import React from 'react';

const Page = ({ params }) => {
  const { slug } = params;

  return (
    <div className='team-detail'>
      {/* <BreadCumb Title="Team Details" /> */}
      <TeamDetail slug={slug} />
    </div>
  );
};

export default Page;
