import React, { useRef, useEffect } from 'react';
import styles from './Page.module.scss';

import Helmet from "react-helmet";
import { withPrefix } from "gatsby";


type Props = {
  title?: string,
  children: React.Node
};

const Page = ({ title, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <>
    <Helmet>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </Helmet>

    <div ref={pageRef} className={styles['page']}>
      <div className={styles['page__inner']}>
        { title && <h1 className={styles['page__title']}>{title}</h1>}
        <div className={styles['page__body']}>
          {children}
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;