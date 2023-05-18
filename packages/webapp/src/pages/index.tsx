import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { withBaseLayout } from '@/modules/Layouts/base-layout';
import Header from '@/modules/Header';

function Index() {
  const { t } = useTranslation();
  return (
    <main className="p-0 m-0">
      <Header />
      <div className="w-full mx-auto lg:container mb-10">
        <h1 className="text-center">{t('HOME.TITLE')}</h1>
      </div>
    </main>
  );
}
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale))
    }
  };
}

export default withBaseLayout(connect(null, null)(withRouter(Index)), {
  title: 'TITLE',
  description: 'DESCRIPTION'
});
