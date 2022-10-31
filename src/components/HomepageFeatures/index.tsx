import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Docs',
    Svg: require('@site/static/img/undraw_books_re_8gea.svg').default,
    description: (
      <>
        AI/システム開発で得られた知見を公開しています。
        理論よりも実装方法に注目し、できるだけシンプルな記事を目指しています。
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/undraw_blog_post_re_fy5x.svg').default,
    description: (
      <>
        開発ブログを執筆しようと考えています(予定)。
      </>
    ),
  },
  {
    title: 'Comming soon...',
    Svg: require('@site/static/img/undraw_building_blocks_re_5ahy.svg').default,
    description: (
      <>
        TODO
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* <h2 className='text--center'>このページでは以下の情報を提供しています。</h2> */}
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
