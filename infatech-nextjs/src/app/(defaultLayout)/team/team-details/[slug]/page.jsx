// src/app/(defaultLayout)/team/team-details/[slug]/page.jsx


import TeamDetail from '../../../../components/TeamDetail/TeamDetail';
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
