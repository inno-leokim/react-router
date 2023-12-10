import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {

  const [searchParam] = useSearchParams();
  const detail = searchParam.get('detail') === 'true';


  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
      {detail && <h1>...어쩌고 저쩌고</h1>}
    </div>
  );
};

export default About;