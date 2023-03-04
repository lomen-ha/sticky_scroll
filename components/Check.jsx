import React, { useEffect, useRef, useState } from 'react';
import { styles } from '@/styles/styles';
import project1 from '../public/assets/branding.png';
import project2 from '../public/assets/digital.png';
import project3 from '../public/assets/graphic.png';
import project4 from '../public/assets/marketing.png';
import project5 from '../public/assets/goods.png';
import project6 from '../public/assets/web.png';
import Image from 'next/image';

const Check = () => {
  const stickyRef = useRef();
  const stickyParentRef = useRef();
  const stickyWrapperRef = useRef();
  const handleScroll = () => {
    let stickyEl = stickyRef.current;
    let stickyParentEl = stickyParentRef.current;
    let stickyWrapperEl = stickyWrapperRef.current;
    let scrollWidth = stickyEl.scrollWidth;
    let verticalScrollHeight =
      stickyParentEl.getBoundingClientRect().height -
      stickyEl.getBoundingClientRect().height;
    let stickyPos = stickyEl.getBoundingClientRect().top;
    let stickyWrapperPos = stickyWrapperEl.getBoundingClientRect().top;
    if (stickyWrapperPos > 1) {
      return;
    } else {
      let scrolled = stickyParentEl.getBoundingClientRect().top;
      stickyEl.scrollLeft =
        (scrollWidth / verticalScrollHeight) * -scrolled * 0.85;
      console.log((scrollWidth / verticalScrollHeight) * -scrolled * 0.85);
    }
  };

  const contentsList = [
    'branding',
    'digital',
    'graphic',
    'marketing',
    'goods',
    'web',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener('scroll', handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div css={styles.container}>
      <div css={styles.section1}>Section 1</div>
      <div css={styles.section2}>Section 2</div>
      <div css={styles.section3}>Section 3</div>
      <div css={styles.stickyParent} ref={stickyParentRef}>
        <div css={styles.wrapper} ref={stickyWrapperRef}>
          <div css={styles.title}>
            <h4>What we do?</h4>
            <h3>PROJECT</h3>
          </div>
          <div css={styles.sticky} ref={stickyRef}>
            <div css={styles.horizontal}>
              <div css={styles.project}>
                {contentsList.map((el, idx) => (
                  <div
                    style={{
                      backgroundImage: `url(/assets/${el}.png)`,
                      objectFit: 'fill',
                      width: '420px',
                      height: '100%',
                    }}
                    key={idx}
                    css={styles.contents}
                  >
                    <div css={styles.contents_desc}>
                      <h4>{el}</h4>
                      <h5>
                        브랜드가 가지는 고유 색감과
                        <br />
                        온도를 잘 표현할 수 있는
                        <br />
                        CI/BI를 개발합니다.
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
              {/* <Image src={project1} alt="test" css={styles.dim} />
              <Image src={project2} alt="test" css={styles.dim} />
              <Image src={project3} alt="test" css={styles.dim} />
              <Image src={project4} alt="test" css={styles.dim} />
              <Image src={project5} alt="test" css={styles.dim} />
              <Image src={project6} alt="test" css={styles.dim} /> */}
            </div>
          </div>
        </div>
      </div>
      <div css={styles.section5}>Section 5</div>
      <div css={styles.section6}>Section 6</div>
      <div css={styles.section7}>Section 7</div>
    </div>
  );
};

export default Check;
